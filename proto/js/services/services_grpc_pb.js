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
var services_services_pb = require('../services/services_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var instances_instances_pb = require('../instances/instances_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var hasher_hasherpb_hasher_pb = require('../hasher/hasherpb/hasher_pb.js');
var states_states_pb = require('../states/states_pb.js');
var access_access_pb = require('../access/access_pb.js');

function serialize_nocloud_services_CreateRequest(arg) {
  if (!(arg instanceof services_services_pb.CreateRequest)) {
    throw new Error('Expected argument of type nocloud.services.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_CreateRequest(buffer_arg) {
  return services_services_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_DeleteRequest(arg) {
  if (!(arg instanceof services_services_pb.DeleteRequest)) {
    throw new Error('Expected argument of type nocloud.services.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_DeleteRequest(buffer_arg) {
  return services_services_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_DeleteResponse(arg) {
  if (!(arg instanceof services_services_pb.DeleteResponse)) {
    throw new Error('Expected argument of type nocloud.services.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_DeleteResponse(buffer_arg) {
  return services_services_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_DownRequest(arg) {
  if (!(arg instanceof services_services_pb.DownRequest)) {
    throw new Error('Expected argument of type nocloud.services.DownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_DownRequest(buffer_arg) {
  return services_services_pb.DownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_DownResponse(arg) {
  if (!(arg instanceof services_services_pb.DownResponse)) {
    throw new Error('Expected argument of type nocloud.services.DownResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_DownResponse(buffer_arg) {
  return services_services_pb.DownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_GetRequest(arg) {
  if (!(arg instanceof services_services_pb.GetRequest)) {
    throw new Error('Expected argument of type nocloud.services.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_GetRequest(buffer_arg) {
  return services_services_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_ListRequest(arg) {
  if (!(arg instanceof services_services_pb.ListRequest)) {
    throw new Error('Expected argument of type nocloud.services.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_ListRequest(buffer_arg) {
  return services_services_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_Service(arg) {
  if (!(arg instanceof services_services_pb.Service)) {
    throw new Error('Expected argument of type nocloud.services.Service');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_Service(buffer_arg) {
  return services_services_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_Services(arg) {
  if (!(arg instanceof services_services_pb.Services)) {
    throw new Error('Expected argument of type nocloud.services.Services');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_Services(buffer_arg) {
  return services_services_pb.Services.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_StreamRequest(arg) {
  if (!(arg instanceof services_services_pb.StreamRequest)) {
    throw new Error('Expected argument of type nocloud.services.StreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_StreamRequest(buffer_arg) {
  return services_services_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_SuspendRequest(arg) {
  if (!(arg instanceof services_services_pb.SuspendRequest)) {
    throw new Error('Expected argument of type nocloud.services.SuspendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_SuspendRequest(buffer_arg) {
  return services_services_pb.SuspendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_SuspendResponse(arg) {
  if (!(arg instanceof services_services_pb.SuspendResponse)) {
    throw new Error('Expected argument of type nocloud.services.SuspendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_SuspendResponse(buffer_arg) {
  return services_services_pb.SuspendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_TestConfigResponse(arg) {
  if (!(arg instanceof services_services_pb.TestConfigResponse)) {
    throw new Error('Expected argument of type nocloud.services.TestConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_TestConfigResponse(buffer_arg) {
  return services_services_pb.TestConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_UnsuspendRequest(arg) {
  if (!(arg instanceof services_services_pb.UnsuspendRequest)) {
    throw new Error('Expected argument of type nocloud.services.UnsuspendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_UnsuspendRequest(buffer_arg) {
  return services_services_pb.UnsuspendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_UnsuspendResponse(arg) {
  if (!(arg instanceof services_services_pb.UnsuspendResponse)) {
    throw new Error('Expected argument of type nocloud.services.UnsuspendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_UnsuspendResponse(buffer_arg) {
  return services_services_pb.UnsuspendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_UpRequest(arg) {
  if (!(arg instanceof services_services_pb.UpRequest)) {
    throw new Error('Expected argument of type nocloud.services.UpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_UpRequest(buffer_arg) {
  return services_services_pb.UpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_UpResponse(arg) {
  if (!(arg instanceof services_services_pb.UpResponse)) {
    throw new Error('Expected argument of type nocloud.services.UpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_UpResponse(buffer_arg) {
  return services_services_pb.UpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_states_ObjectState(arg) {
  if (!(arg instanceof states_states_pb.ObjectState)) {
    throw new Error('Expected argument of type nocloud.states.ObjectState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_states_ObjectState(buffer_arg) {
  return states_states_pb.ObjectState.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServicesServiceService = exports.ServicesServiceService = {
  testConfig: {
    path: '/nocloud.services.ServicesService/TestConfig',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.CreateRequest,
    responseType: services_services_pb.TestConfigResponse,
    requestSerialize: serialize_nocloud_services_CreateRequest,
    requestDeserialize: deserialize_nocloud_services_CreateRequest,
    responseSerialize: serialize_nocloud_services_TestConfigResponse,
    responseDeserialize: deserialize_nocloud_services_TestConfigResponse,
  },
  create: {
    path: '/nocloud.services.ServicesService/Create',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.CreateRequest,
    responseType: services_services_pb.Service,
    requestSerialize: serialize_nocloud_services_CreateRequest,
    requestDeserialize: deserialize_nocloud_services_CreateRequest,
    responseSerialize: serialize_nocloud_services_Service,
    responseDeserialize: deserialize_nocloud_services_Service,
  },
  update: {
    path: '/nocloud.services.ServicesService/Update',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.Service,
    responseType: services_services_pb.Service,
    requestSerialize: serialize_nocloud_services_Service,
    requestDeserialize: deserialize_nocloud_services_Service,
    responseSerialize: serialize_nocloud_services_Service,
    responseDeserialize: deserialize_nocloud_services_Service,
  },
  delete: {
    path: '/nocloud.services.ServicesService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.DeleteRequest,
    responseType: services_services_pb.DeleteResponse,
    requestSerialize: serialize_nocloud_services_DeleteRequest,
    requestDeserialize: deserialize_nocloud_services_DeleteRequest,
    responseSerialize: serialize_nocloud_services_DeleteResponse,
    responseDeserialize: deserialize_nocloud_services_DeleteResponse,
  },
  get: {
    path: '/nocloud.services.ServicesService/Get',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GetRequest,
    responseType: services_services_pb.Service,
    requestSerialize: serialize_nocloud_services_GetRequest,
    requestDeserialize: deserialize_nocloud_services_GetRequest,
    responseSerialize: serialize_nocloud_services_Service,
    responseDeserialize: deserialize_nocloud_services_Service,
  },
  list: {
    path: '/nocloud.services.ServicesService/List',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListRequest,
    responseType: services_services_pb.Services,
    requestSerialize: serialize_nocloud_services_ListRequest,
    requestDeserialize: deserialize_nocloud_services_ListRequest,
    responseSerialize: serialize_nocloud_services_Services,
    responseDeserialize: deserialize_nocloud_services_Services,
  },
  up: {
    path: '/nocloud.services.ServicesService/Up',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.UpRequest,
    responseType: services_services_pb.UpResponse,
    requestSerialize: serialize_nocloud_services_UpRequest,
    requestDeserialize: deserialize_nocloud_services_UpRequest,
    responseSerialize: serialize_nocloud_services_UpResponse,
    responseDeserialize: deserialize_nocloud_services_UpResponse,
  },
  down: {
    path: '/nocloud.services.ServicesService/Down',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.DownRequest,
    responseType: services_services_pb.DownResponse,
    requestSerialize: serialize_nocloud_services_DownRequest,
    requestDeserialize: deserialize_nocloud_services_DownRequest,
    responseSerialize: serialize_nocloud_services_DownResponse,
    responseDeserialize: deserialize_nocloud_services_DownResponse,
  },
  suspend: {
    path: '/nocloud.services.ServicesService/Suspend',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SuspendRequest,
    responseType: services_services_pb.SuspendResponse,
    requestSerialize: serialize_nocloud_services_SuspendRequest,
    requestDeserialize: deserialize_nocloud_services_SuspendRequest,
    responseSerialize: serialize_nocloud_services_SuspendResponse,
    responseDeserialize: deserialize_nocloud_services_SuspendResponse,
  },
  unsuspend: {
    path: '/nocloud.services.ServicesService/Unsuspend',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.UnsuspendRequest,
    responseType: services_services_pb.UnsuspendResponse,
    requestSerialize: serialize_nocloud_services_UnsuspendRequest,
    requestDeserialize: deserialize_nocloud_services_UnsuspendRequest,
    responseSerialize: serialize_nocloud_services_UnsuspendResponse,
    responseDeserialize: deserialize_nocloud_services_UnsuspendResponse,
  },
  stream: {
    path: '/nocloud.services.ServicesService/Stream',
    requestStream: false,
    responseStream: true,
    requestType: services_services_pb.StreamRequest,
    responseType: states_states_pb.ObjectState,
    requestSerialize: serialize_nocloud_services_StreamRequest,
    requestDeserialize: deserialize_nocloud_services_StreamRequest,
    responseSerialize: serialize_nocloud_states_ObjectState,
    responseDeserialize: deserialize_nocloud_states_ObjectState,
  },
};

exports.ServicesServiceClient = grpc.makeGenericClientConstructor(ServicesServiceService);
