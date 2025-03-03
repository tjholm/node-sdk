import { StoreRef } from '../api/keyvalue/v1/store';
import { kv } from '../resources/keyvalue';
import type { JSONSchema7 } from 'json-schema';
import { OpenAI, ClientOptions } from 'openai';
import type { FunctionDefinition } from 'openai/src/resources/shared';
import { randomUUID } from 'crypto';

interface ChatHistory {
  messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
}

type ToolCallback = (...args: any) => any | ((...args: any) => Promise<any>);
interface ToolConfig {
  description: string;
  callback: ToolCallback;
  parameterConfig: {
    properties: Record<string, unknown>;
    required: string[];
  };
}

const toolConfigToFunctionDefinition = (
  name: string,
  config: ToolConfig
): FunctionDefinition => {
  return {
    name: name,
    description: config.description,
    parameters: {
      type: 'object',
      ...config.parameterConfig,
    },
    strict: true,
  };
};

interface ChatConfig {
  // OpenAI compatible API configuration to use for this chat
  // including API key and configurable endpoint
  api: ClientOptions;

  // model config
  model: string;

  // prompt config
  prompt: string;

  // configuration for callable tools
  tools: Record<string, ToolConfig>;
}

class Thread {
  readonly id: string;
  private model: string;
  private history: ChatHistory;
  private readonly memory: StoreRef<ChatHistory>;
  private readonly openai: OpenAI;
  private readonly tools: Record<string, ToolConfig>;

  constructor(
    id: string,
    model: string,
    history: ChatHistory,
    memory: StoreRef<ChatHistory>,
    openai: OpenAI,
    tools: Record<string, ToolConfig>
  ) {
    this.id = id;
    this.model = model;
    this.history = history;
    this.memory = memory;
    this.openai = openai;
    this.tools = tools;
  }

  // send a new chat message and receive a response
  private async send(message: string): Promise<string> {
    console.log('adding to history', message);
    this.history = {
      messages: [
        ...this.history.messages,
        {
          role: 'user',
          content: message,
        },
      ],
    };

    console.log('sending message', message);
    // Get the response
    const completion = await this.openai.chat.completions.create({
      model: this.model,
      messages: this.history.messages,
      tools: Object.keys(this.tools).map((toolName) => ({
        type: 'function',
        function: toolConfigToFunctionDefinition(
          toolName,
          this.tools[toolName]
        ),
      })),
    });

    console.log('got response', completion);

    let response = completion?.choices[0]?.message;

    console.log('adding response to history', response);

    if (response) {
      // Add the response to the history
      this.history = {
        messages: [
          ...this.history.messages,
          response,
        ],
      };
    }

    console.log('checking for tool calls');
    // If we have tool calls incorporate them into the final response
    if (response.tool_calls) {
      console.log('found tool calls', response.tool_calls);

      this.history = {
        messages: [
          ...this.history.messages,
          ...(await Promise.all(
            response.tool_calls.map(
              async (
                call
              ): Promise<OpenAI.Chat.Completions.ChatCompletionMessageParam> => {
                const args = JSON.parse(call.function.arguments);
                const name = call.function.name;

                // TODO: handle hallucinated tool names
                // XXX: Verify if this is possible.

                // perform the tool call,
                // TODO: Add the params we want they MUST be sorted into the correct order
                // These are currently not sorted and provide no guarantees of correct param order
                // XXX: Should tools be able to return a promise? (or always be async) Yes
                const vals = Object.values(args);
                console.log("calling tool", name, vals);
                const result = await this.tools[name].callback(...vals);
                // convert the result to 'content'
                const jsonResult = JSON.stringify(result);

                return {
                  role: 'tool',
                  tool_call_id: call.id,
                  content: jsonResult,
                };
              }
            )
          )),
        ],
      };

      // re-call the assistant
      const completion = await this.openai.chat.completions.create({
        model: this.model,
        messages: this.history.messages,
        tools: Object.keys(this.tools).map((toolName) => ({
          type: 'function',
          function: toolConfigToFunctionDefinition(
            toolName,
            this.tools[toolName]
          ),
        })),
      });

      // Add the new completion to the history
      response = completion.choices[0].message;
      // Add the response to the history
      this.history = {
        messages: [
          ...this.history.messages,
          {
            role: 'assistant',
            content: response.content,
          },
        ],
      };
    }

    await this.save();
    return response.content;
  }

  // Save the current thread
  private async save() {
    this.memory.set(this.id, this.history);
  }
}

class Chat {
  readonly name: string;
  private readonly model: string;
  private readonly prompt: string;
  private readonly memory: StoreRef<ChatHistory>;
  private readonly tools: Record<string, ToolConfig>;
  private readonly openai: OpenAI;

  constructor(name: string, memory: StoreRef<ChatHistory>, config: ChatConfig) {
    this.name = name;
    this.memory = memory;
    this.tools = config.tools;
    this.prompt = config.prompt;
    this.model = config.model;
    this.openai = new OpenAI(config.api);
  }

  // TODO: Should we have two methods - one that sets up the thread with a websocket?
  // A: Threads are runtime exclusive if additional infrastructure is required we'd need to establish it as part of the chat (can probably have a stream method as part of the thread class that streams responses)
  // Could also return two different kind of threads depending on the chat config, e.g. Thread and StreamableThread...
  // Create a new thread in the chat

  async startThread(): Promise<Thread> {
    // Generate a new ID and create the new thread
    const threadId = randomUUID();
    return new Thread(
      threadId,
      this.model,
      {
        // Set the system prompt as the first message in the history
        messages: [
          {
            role: 'system',
            content: this.prompt,
          },
        ],
      },
      this.memory,
      this.openai,
      this.tools
    );
  }

  // Get and continue an existing thread
  async getThread(id: string): Promise<Thread> {
    const history = await this.memory.get(id);
    return new Thread(
      id,
      this.model,
      history,
      this.memory,
      this.openai,
      this.tools
    );
  }
}

// Create a new nitric Chat (LLM) resource
// TODO: We could implement a withStore method as well that can substitute the memory store for other store types or even just a storage callback
// so additional stores can be used for memory e.g. sql, redis, webhook etc.
export const chat = (name: string, config: ChatConfig) => {
  // create a kv store for this chats memory/threads
  const memory = kv<ChatHistory>(`${name}-memory`).allow(
    'set',
    'get',
    'delete'
  );

  // return a chat object
  return new Chat(name, memory, config);
};
