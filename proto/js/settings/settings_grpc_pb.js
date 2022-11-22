// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright © 2021-2022 Nikita Ivanovski info@slnt-opp.xyz
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
'use strict';
var grpc = require('@grpc/grpc-js');
var settings_settings_pb = require('../settings/settings_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_google_protobuf_Struct(arg) {
  if (!(arg instanceof google_protobuf_struct_pb.Struct)) {
    throw new Error('Expected argument of type google.protobuf.Struct');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Struct(buffer_arg) {
  return google_protobuf_struct_pb.Struct.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_DeleteRequest(arg) {
  if (!(arg instanceof settings_settings_pb.DeleteRequest)) {
    throw new Error('Expected argument of type nocloud.settings.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_DeleteRequest(buffer_arg) {
  return settings_settings_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_DeleteResponse(arg) {
  if (!(arg instanceof settings_settings_pb.DeleteResponse)) {
    throw new Error('Expected argument of type nocloud.settings.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_DeleteResponse(buffer_arg) {
  return settings_settings_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_GetRequest(arg) {
  if (!(arg instanceof settings_settings_pb.GetRequest)) {
    throw new Error('Expected argument of type nocloud.settings.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_GetRequest(buffer_arg) {
  return settings_settings_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_KeysRequest(arg) {
  if (!(arg instanceof settings_settings_pb.KeysRequest)) {
    throw new Error('Expected argument of type nocloud.settings.KeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_KeysRequest(buffer_arg) {
  return settings_settings_pb.KeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_KeysResponse(arg) {
  if (!(arg instanceof settings_settings_pb.KeysResponse)) {
    throw new Error('Expected argument of type nocloud.settings.KeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_KeysResponse(buffer_arg) {
  return settings_settings_pb.KeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_PutRequest(arg) {
  if (!(arg instanceof settings_settings_pb.PutRequest)) {
    throw new Error('Expected argument of type nocloud.settings.PutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_PutRequest(buffer_arg) {
  return settings_settings_pb.PutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_settings_PutResponse(arg) {
  if (!(arg instanceof settings_settings_pb.PutResponse)) {
    throw new Error('Expected argument of type nocloud.settings.PutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_settings_PutResponse(buffer_arg) {
  return settings_settings_pb.PutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SettingsServiceService = exports.SettingsServiceService = {
  get: {
    path: '/nocloud.settings.SettingsService/Get',
    requestStream: false,
    responseStream: false,
    requestType: settings_settings_pb.GetRequest,
    responseType: google_protobuf_struct_pb.Struct,
    requestSerialize: serialize_nocloud_settings_GetRequest,
    requestDeserialize: deserialize_nocloud_settings_GetRequest,
    responseSerialize: serialize_google_protobuf_Struct,
    responseDeserialize: deserialize_google_protobuf_Struct,
  },
  put: {
    path: '/nocloud.settings.SettingsService/Put',
    requestStream: false,
    responseStream: false,
    requestType: settings_settings_pb.PutRequest,
    responseType: settings_settings_pb.PutResponse,
    requestSerialize: serialize_nocloud_settings_PutRequest,
    requestDeserialize: deserialize_nocloud_settings_PutRequest,
    responseSerialize: serialize_nocloud_settings_PutResponse,
    responseDeserialize: deserialize_nocloud_settings_PutResponse,
  },
  // rpc Sub(nocloud.settings.SubRequest) returns (stream nocloud.settings.SubRequest);
keys: {
    path: '/nocloud.settings.SettingsService/Keys',
    requestStream: false,
    responseStream: false,
    requestType: settings_settings_pb.KeysRequest,
    responseType: settings_settings_pb.KeysResponse,
    requestSerialize: serialize_nocloud_settings_KeysRequest,
    requestDeserialize: deserialize_nocloud_settings_KeysRequest,
    responseSerialize: serialize_nocloud_settings_KeysResponse,
    responseDeserialize: deserialize_nocloud_settings_KeysResponse,
  },
  delete: {
    path: '/nocloud.settings.SettingsService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: settings_settings_pb.DeleteRequest,
    responseType: settings_settings_pb.DeleteResponse,
    requestSerialize: serialize_nocloud_settings_DeleteRequest,
    requestDeserialize: deserialize_nocloud_settings_DeleteRequest,
    responseSerialize: serialize_nocloud_settings_DeleteResponse,
    responseDeserialize: deserialize_nocloud_settings_DeleteResponse,
  },
};

exports.SettingsServiceClient = grpc.makeGenericClientConstructor(SettingsServiceService);
