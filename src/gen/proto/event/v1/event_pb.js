// source: proto/event/v1/event.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.nitric.event.v1.EventPublishRequest', null, global);
goog.exportSymbol('proto.nitric.event.v1.EventPublishResponse', null, global);
goog.exportSymbol('proto.nitric.event.v1.NitricEvent', null, global);
goog.exportSymbol('proto.nitric.event.v1.NitricTopic', null, global);
goog.exportSymbol('proto.nitric.event.v1.TopicListRequest', null, global);
goog.exportSymbol('proto.nitric.event.v1.TopicListResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.event.v1.EventPublishRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.event.v1.EventPublishRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.event.v1.EventPublishRequest.displayName = 'proto.nitric.event.v1.EventPublishRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.event.v1.EventPublishResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.event.v1.EventPublishResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.event.v1.EventPublishResponse.displayName = 'proto.nitric.event.v1.EventPublishResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.event.v1.TopicListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.event.v1.TopicListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.event.v1.TopicListRequest.displayName = 'proto.nitric.event.v1.TopicListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.event.v1.TopicListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nitric.event.v1.TopicListResponse.repeatedFields_, null);
};
goog.inherits(proto.nitric.event.v1.TopicListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.event.v1.TopicListResponse.displayName = 'proto.nitric.event.v1.TopicListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.event.v1.NitricTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.event.v1.NitricTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.event.v1.NitricTopic.displayName = 'proto.nitric.event.v1.NitricTopic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nitric.event.v1.NitricEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nitric.event.v1.NitricEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nitric.event.v1.NitricEvent.displayName = 'proto.nitric.event.v1.NitricEvent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.event.v1.EventPublishRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.event.v1.EventPublishRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.event.v1.EventPublishRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.EventPublishRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    event: (f = msg.getEvent()) && proto.nitric.event.v1.NitricEvent.toObject(includeInstance, f),
    delay: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.event.v1.EventPublishRequest}
 */
proto.nitric.event.v1.EventPublishRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.event.v1.EventPublishRequest;
  return proto.nitric.event.v1.EventPublishRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.event.v1.EventPublishRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.event.v1.EventPublishRequest}
 */
proto.nitric.event.v1.EventPublishRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = new proto.nitric.event.v1.NitricEvent;
      reader.readMessage(value,proto.nitric.event.v1.NitricEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDelay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.event.v1.EventPublishRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.event.v1.EventPublishRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.event.v1.EventPublishRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.EventPublishRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nitric.event.v1.NitricEvent.serializeBinaryToWriter
    );
  }
  f = message.getDelay();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.nitric.event.v1.EventPublishRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.event.v1.EventPublishRequest} returns this
 */
proto.nitric.event.v1.EventPublishRequest.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NitricEvent event = 2;
 * @return {?proto.nitric.event.v1.NitricEvent}
 */
proto.nitric.event.v1.EventPublishRequest.prototype.getEvent = function() {
  return /** @type{?proto.nitric.event.v1.NitricEvent} */ (
    jspb.Message.getWrapperField(this, proto.nitric.event.v1.NitricEvent, 2));
};


/**
 * @param {?proto.nitric.event.v1.NitricEvent|undefined} value
 * @return {!proto.nitric.event.v1.EventPublishRequest} returns this
*/
proto.nitric.event.v1.EventPublishRequest.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.event.v1.EventPublishRequest} returns this
 */
proto.nitric.event.v1.EventPublishRequest.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.event.v1.EventPublishRequest.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 delay = 3;
 * @return {number}
 */
proto.nitric.event.v1.EventPublishRequest.prototype.getDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.nitric.event.v1.EventPublishRequest} returns this
 */
proto.nitric.event.v1.EventPublishRequest.prototype.setDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.event.v1.EventPublishResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.event.v1.EventPublishResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.event.v1.EventPublishResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.EventPublishResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.event.v1.EventPublishResponse}
 */
proto.nitric.event.v1.EventPublishResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.event.v1.EventPublishResponse;
  return proto.nitric.event.v1.EventPublishResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.event.v1.EventPublishResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.event.v1.EventPublishResponse}
 */
proto.nitric.event.v1.EventPublishResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.event.v1.EventPublishResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.event.v1.EventPublishResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.event.v1.EventPublishResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.EventPublishResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.nitric.event.v1.EventPublishResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.event.v1.EventPublishResponse} returns this
 */
proto.nitric.event.v1.EventPublishResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.event.v1.TopicListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.event.v1.TopicListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.event.v1.TopicListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.TopicListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.event.v1.TopicListRequest}
 */
proto.nitric.event.v1.TopicListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.event.v1.TopicListRequest;
  return proto.nitric.event.v1.TopicListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.event.v1.TopicListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.event.v1.TopicListRequest}
 */
proto.nitric.event.v1.TopicListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.event.v1.TopicListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.event.v1.TopicListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.event.v1.TopicListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.TopicListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nitric.event.v1.TopicListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.event.v1.TopicListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.event.v1.TopicListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.event.v1.TopicListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.TopicListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicsList: jspb.Message.toObjectList(msg.getTopicsList(),
    proto.nitric.event.v1.NitricTopic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.event.v1.TopicListResponse}
 */
proto.nitric.event.v1.TopicListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.event.v1.TopicListResponse;
  return proto.nitric.event.v1.TopicListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.event.v1.TopicListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.event.v1.TopicListResponse}
 */
proto.nitric.event.v1.TopicListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nitric.event.v1.NitricTopic;
      reader.readMessage(value,proto.nitric.event.v1.NitricTopic.deserializeBinaryFromReader);
      msg.addTopics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.event.v1.TopicListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.event.v1.TopicListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.event.v1.TopicListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.TopicListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nitric.event.v1.NitricTopic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NitricTopic topics = 1;
 * @return {!Array<!proto.nitric.event.v1.NitricTopic>}
 */
proto.nitric.event.v1.TopicListResponse.prototype.getTopicsList = function() {
  return /** @type{!Array<!proto.nitric.event.v1.NitricTopic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nitric.event.v1.NitricTopic, 1));
};


/**
 * @param {!Array<!proto.nitric.event.v1.NitricTopic>} value
 * @return {!proto.nitric.event.v1.TopicListResponse} returns this
*/
proto.nitric.event.v1.TopicListResponse.prototype.setTopicsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nitric.event.v1.NitricTopic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nitric.event.v1.NitricTopic}
 */
proto.nitric.event.v1.TopicListResponse.prototype.addTopics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nitric.event.v1.NitricTopic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nitric.event.v1.TopicListResponse} returns this
 */
proto.nitric.event.v1.TopicListResponse.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.event.v1.NitricTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.event.v1.NitricTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.event.v1.NitricTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.NitricTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.event.v1.NitricTopic}
 */
proto.nitric.event.v1.NitricTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.event.v1.NitricTopic;
  return proto.nitric.event.v1.NitricTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.event.v1.NitricTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.event.v1.NitricTopic}
 */
proto.nitric.event.v1.NitricTopic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.event.v1.NitricTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.event.v1.NitricTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.event.v1.NitricTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.NitricTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.nitric.event.v1.NitricTopic.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.event.v1.NitricTopic} returns this
 */
proto.nitric.event.v1.NitricTopic.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nitric.event.v1.NitricEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nitric.event.v1.NitricEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nitric.event.v1.NitricEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.NitricEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payloadType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nitric.event.v1.NitricEvent}
 */
proto.nitric.event.v1.NitricEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nitric.event.v1.NitricEvent;
  return proto.nitric.event.v1.NitricEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nitric.event.v1.NitricEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nitric.event.v1.NitricEvent}
 */
proto.nitric.event.v1.NitricEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadType(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nitric.event.v1.NitricEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nitric.event.v1.NitricEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nitric.event.v1.NitricEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nitric.event.v1.NitricEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayloadType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.nitric.event.v1.NitricEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.event.v1.NitricEvent} returns this
 */
proto.nitric.event.v1.NitricEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payload_type = 2;
 * @return {string}
 */
proto.nitric.event.v1.NitricEvent.prototype.getPayloadType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.nitric.event.v1.NitricEvent} returns this
 */
proto.nitric.event.v1.NitricEvent.prototype.setPayloadType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct payload = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.nitric.event.v1.NitricEvent.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.nitric.event.v1.NitricEvent} returns this
*/
proto.nitric.event.v1.NitricEvent.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nitric.event.v1.NitricEvent} returns this
 */
proto.nitric.event.v1.NitricEvent.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nitric.event.v1.NitricEvent.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.nitric.event.v1);
