// source: hasher/hasherpb/hasher.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.nocloud.hasher.hash', null, global);
goog.exportSymbol('proto.nocloud.hasher.hashed', null, global);
goog.exportSymbol('proto.nocloud.hasher.skipped', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `hash`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.nocloud.hasher.hash = new jspb.ExtensionFieldInfo(
    50000,
    {hash: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50000] = new jspb.ExtensionFieldBinaryInfo(
    proto.nocloud.hasher.hash,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50000] = proto.nocloud.hasher.hash;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `hashed`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.nocloud.hasher.hashed = new jspb.ExtensionFieldInfo(
    50010,
    {hashed: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50010] = new jspb.ExtensionFieldBinaryInfo(
    proto.nocloud.hasher.hashed,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50010] = proto.nocloud.hasher.hashed;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `skipped`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.nocloud.hasher.skipped = new jspb.ExtensionFieldInfo(
    50020,
    {skipped: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50020] = new jspb.ExtensionFieldBinaryInfo(
    proto.nocloud.hasher.skipped,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50020] = proto.nocloud.hasher.skipped;

goog.object.extend(exports, proto.nocloud.hasher);
