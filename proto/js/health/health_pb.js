// source: health/health.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.nocloud.health.ProbeRequest', null, global);
goog.exportSymbol('proto.nocloud.health.ProbeResponse', null, global);
goog.exportSymbol('proto.nocloud.health.RoutineStatus', null, global);
goog.exportSymbol('proto.nocloud.health.RoutinesStatus', null, global);
goog.exportSymbol('proto.nocloud.health.ServingStatus', null, global);
goog.exportSymbol('proto.nocloud.health.Status', null, global);
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
proto.nocloud.health.ProbeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nocloud.health.ProbeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nocloud.health.ProbeRequest.displayName = 'proto.nocloud.health.ProbeRequest';
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
proto.nocloud.health.ProbeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nocloud.health.ProbeResponse.repeatedFields_, null);
};
goog.inherits(proto.nocloud.health.ProbeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nocloud.health.ProbeResponse.displayName = 'proto.nocloud.health.ProbeResponse';
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
proto.nocloud.health.ServingStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nocloud.health.ServingStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nocloud.health.ServingStatus.displayName = 'proto.nocloud.health.ServingStatus';
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
proto.nocloud.health.RoutineStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nocloud.health.RoutineStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nocloud.health.RoutineStatus.displayName = 'proto.nocloud.health.RoutineStatus';
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
proto.nocloud.health.RoutinesStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nocloud.health.RoutinesStatus.repeatedFields_, null);
};
goog.inherits(proto.nocloud.health.RoutinesStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nocloud.health.RoutinesStatus.displayName = 'proto.nocloud.health.RoutinesStatus';
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
proto.nocloud.health.ProbeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nocloud.health.ProbeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nocloud.health.ProbeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.ProbeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    probeType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.nocloud.health.ProbeRequest}
 */
proto.nocloud.health.ProbeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nocloud.health.ProbeRequest;
  return proto.nocloud.health.ProbeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nocloud.health.ProbeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nocloud.health.ProbeRequest}
 */
proto.nocloud.health.ProbeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProbeType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.nocloud.health.ProbeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nocloud.health.ProbeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nocloud.health.ProbeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.ProbeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProbeType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string probe_type = 1;
 * @return {string}
 */
proto.nocloud.health.ProbeRequest.prototype.getProbeType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.ProbeRequest} returns this
 */
proto.nocloud.health.ProbeRequest.prototype.setProbeType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payload = 2;
 * @return {string}
 */
proto.nocloud.health.ProbeRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.ProbeRequest} returns this
 */
proto.nocloud.health.ProbeRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nocloud.health.ProbeResponse.repeatedFields_ = [3,4];



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
proto.nocloud.health.ProbeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nocloud.health.ProbeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nocloud.health.ProbeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.ProbeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    servingList: jspb.Message.toObjectList(msg.getServingList(),
    proto.nocloud.health.ServingStatus.toObject, includeInstance),
    routinesList: jspb.Message.toObjectList(msg.getRoutinesList(),
    proto.nocloud.health.RoutineStatus.toObject, includeInstance)
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
 * @return {!proto.nocloud.health.ProbeResponse}
 */
proto.nocloud.health.ProbeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nocloud.health.ProbeResponse;
  return proto.nocloud.health.ProbeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nocloud.health.ProbeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nocloud.health.ProbeResponse}
 */
proto.nocloud.health.ProbeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponse(value);
      break;
    case 2:
      var value = /** @type {!proto.nocloud.health.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.nocloud.health.ServingStatus;
      reader.readMessage(value,proto.nocloud.health.ServingStatus.deserializeBinaryFromReader);
      msg.addServing(value);
      break;
    case 4:
      var value = new proto.nocloud.health.RoutineStatus;
      reader.readMessage(value,proto.nocloud.health.RoutineStatus.deserializeBinaryFromReader);
      msg.addRoutines(value);
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
proto.nocloud.health.ProbeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nocloud.health.ProbeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nocloud.health.ProbeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.ProbeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getServingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.nocloud.health.ServingStatus.serializeBinaryToWriter
    );
  }
  f = message.getRoutinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.nocloud.health.RoutineStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional string response = 1;
 * @return {string}
 */
proto.nocloud.health.ProbeResponse.prototype.getResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.ProbeResponse} returns this
 */
proto.nocloud.health.ProbeResponse.prototype.setResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.nocloud.health.Status}
 */
proto.nocloud.health.ProbeResponse.prototype.getStatus = function() {
  return /** @type {!proto.nocloud.health.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nocloud.health.Status} value
 * @return {!proto.nocloud.health.ProbeResponse} returns this
 */
proto.nocloud.health.ProbeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated ServingStatus serving = 3;
 * @return {!Array<!proto.nocloud.health.ServingStatus>}
 */
proto.nocloud.health.ProbeResponse.prototype.getServingList = function() {
  return /** @type{!Array<!proto.nocloud.health.ServingStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nocloud.health.ServingStatus, 3));
};


/**
 * @param {!Array<!proto.nocloud.health.ServingStatus>} value
 * @return {!proto.nocloud.health.ProbeResponse} returns this
*/
proto.nocloud.health.ProbeResponse.prototype.setServingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.nocloud.health.ServingStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nocloud.health.ServingStatus}
 */
proto.nocloud.health.ProbeResponse.prototype.addServing = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nocloud.health.ServingStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nocloud.health.ProbeResponse} returns this
 */
proto.nocloud.health.ProbeResponse.prototype.clearServingList = function() {
  return this.setServingList([]);
};


/**
 * repeated RoutineStatus routines = 4;
 * @return {!Array<!proto.nocloud.health.RoutineStatus>}
 */
proto.nocloud.health.ProbeResponse.prototype.getRoutinesList = function() {
  return /** @type{!Array<!proto.nocloud.health.RoutineStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nocloud.health.RoutineStatus, 4));
};


/**
 * @param {!Array<!proto.nocloud.health.RoutineStatus>} value
 * @return {!proto.nocloud.health.ProbeResponse} returns this
*/
proto.nocloud.health.ProbeResponse.prototype.setRoutinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.nocloud.health.RoutineStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nocloud.health.RoutineStatus}
 */
proto.nocloud.health.ProbeResponse.prototype.addRoutines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.nocloud.health.RoutineStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nocloud.health.ProbeResponse} returns this
 */
proto.nocloud.health.ProbeResponse.prototype.clearRoutinesList = function() {
  return this.setRoutinesList([]);
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
proto.nocloud.health.ServingStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.nocloud.health.ServingStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nocloud.health.ServingStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.ServingStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.nocloud.health.ServingStatus}
 */
proto.nocloud.health.ServingStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nocloud.health.ServingStatus;
  return proto.nocloud.health.ServingStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nocloud.health.ServingStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nocloud.health.ServingStatus}
 */
proto.nocloud.health.ServingStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 2:
      var value = /** @type {!proto.nocloud.health.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.nocloud.health.ServingStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nocloud.health.ServingStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nocloud.health.ServingStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.ServingStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.nocloud.health.ServingStatus.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.ServingStatus} returns this
 */
proto.nocloud.health.ServingStatus.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.nocloud.health.Status}
 */
proto.nocloud.health.ServingStatus.prototype.getStatus = function() {
  return /** @type {!proto.nocloud.health.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nocloud.health.Status} value
 * @return {!proto.nocloud.health.ServingStatus} returns this
 */
proto.nocloud.health.ServingStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.nocloud.health.ServingStatus.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.ServingStatus} returns this
 */
proto.nocloud.health.ServingStatus.prototype.setError = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.nocloud.health.ServingStatus} returns this
 */
proto.nocloud.health.ServingStatus.prototype.clearError = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nocloud.health.ServingStatus.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.nocloud.health.RoutineStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.nocloud.health.RoutineStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nocloud.health.RoutineStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.RoutineStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    routine: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && proto.nocloud.health.ServingStatus.toObject(includeInstance, f),
    lastExecution: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.nocloud.health.RoutineStatus}
 */
proto.nocloud.health.RoutineStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nocloud.health.RoutineStatus;
  return proto.nocloud.health.RoutineStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nocloud.health.RoutineStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nocloud.health.RoutineStatus}
 */
proto.nocloud.health.RoutineStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutine(value);
      break;
    case 2:
      var value = new proto.nocloud.health.ServingStatus;
      reader.readMessage(value,proto.nocloud.health.ServingStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastExecution(value);
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
proto.nocloud.health.RoutineStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nocloud.health.RoutineStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nocloud.health.RoutineStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.RoutineStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutine();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nocloud.health.ServingStatus.serializeBinaryToWriter
    );
  }
  f = message.getLastExecution();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string routine = 1;
 * @return {string}
 */
proto.nocloud.health.RoutineStatus.prototype.getRoutine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.RoutineStatus} returns this
 */
proto.nocloud.health.RoutineStatus.prototype.setRoutine = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ServingStatus status = 2;
 * @return {?proto.nocloud.health.ServingStatus}
 */
proto.nocloud.health.RoutineStatus.prototype.getStatus = function() {
  return /** @type{?proto.nocloud.health.ServingStatus} */ (
    jspb.Message.getWrapperField(this, proto.nocloud.health.ServingStatus, 2));
};


/**
 * @param {?proto.nocloud.health.ServingStatus|undefined} value
 * @return {!proto.nocloud.health.RoutineStatus} returns this
*/
proto.nocloud.health.RoutineStatus.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nocloud.health.RoutineStatus} returns this
 */
proto.nocloud.health.RoutineStatus.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nocloud.health.RoutineStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string last_execution = 3;
 * @return {string}
 */
proto.nocloud.health.RoutineStatus.prototype.getLastExecution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.nocloud.health.RoutineStatus} returns this
 */
proto.nocloud.health.RoutineStatus.prototype.setLastExecution = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nocloud.health.RoutinesStatus.repeatedFields_ = [1];



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
proto.nocloud.health.RoutinesStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.nocloud.health.RoutinesStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nocloud.health.RoutinesStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.RoutinesStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    routinesList: jspb.Message.toObjectList(msg.getRoutinesList(),
    proto.nocloud.health.RoutineStatus.toObject, includeInstance)
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
 * @return {!proto.nocloud.health.RoutinesStatus}
 */
proto.nocloud.health.RoutinesStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nocloud.health.RoutinesStatus;
  return proto.nocloud.health.RoutinesStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nocloud.health.RoutinesStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nocloud.health.RoutinesStatus}
 */
proto.nocloud.health.RoutinesStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nocloud.health.RoutineStatus;
      reader.readMessage(value,proto.nocloud.health.RoutineStatus.deserializeBinaryFromReader);
      msg.addRoutines(value);
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
proto.nocloud.health.RoutinesStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nocloud.health.RoutinesStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nocloud.health.RoutinesStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nocloud.health.RoutinesStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nocloud.health.RoutineStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RoutineStatus routines = 1;
 * @return {!Array<!proto.nocloud.health.RoutineStatus>}
 */
proto.nocloud.health.RoutinesStatus.prototype.getRoutinesList = function() {
  return /** @type{!Array<!proto.nocloud.health.RoutineStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nocloud.health.RoutineStatus, 1));
};


/**
 * @param {!Array<!proto.nocloud.health.RoutineStatus>} value
 * @return {!proto.nocloud.health.RoutinesStatus} returns this
*/
proto.nocloud.health.RoutinesStatus.prototype.setRoutinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nocloud.health.RoutineStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nocloud.health.RoutineStatus}
 */
proto.nocloud.health.RoutinesStatus.prototype.addRoutines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nocloud.health.RoutineStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nocloud.health.RoutinesStatus} returns this
 */
proto.nocloud.health.RoutinesStatus.prototype.clearRoutinesList = function() {
  return this.setRoutinesList([]);
};


/**
 * @enum {number}
 */
proto.nocloud.health.Status = {
  UNKNOWN: 0,
  SERVING: 1,
  OFFLINE: 2,
  RUNNING: 3,
  STOPPED: 4,
  INTERNAL: 5,
  HASERRS: 6,
  NOEXIST: 7
};

goog.object.extend(exports, proto.nocloud.health);
