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
var services_providers_services_providers_pb = require('../services_providers/services_providers_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var states_states_pb = require('../states/states_pb.js');
var access_access_pb = require('../access/access_pb.js');

function serialize_nocloud_services_providers_BindPlanRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.BindPlanRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.BindPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_BindPlanRequest(buffer_arg) {
  return services_providers_services_providers_pb.BindPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_BindPlanResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.BindPlanResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.BindPlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_BindPlanResponse(buffer_arg) {
  return services_providers_services_providers_pb.BindPlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_DeleteRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.DeleteRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_DeleteRequest(buffer_arg) {
  return services_providers_services_providers_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_DeleteResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.DeleteResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_DeleteResponse(buffer_arg) {
  return services_providers_services_providers_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_GenericResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.GenericResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.GenericResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_GenericResponse(buffer_arg) {
  return services_providers_services_providers_pb.GenericResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_GetRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.GetRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_GetRequest(buffer_arg) {
  return services_providers_services_providers_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_GetTypeRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.GetTypeRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.GetTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_GetTypeRequest(buffer_arg) {
  return services_providers_services_providers_pb.GetTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_GetTypeResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.GetTypeResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.GetTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_GetTypeResponse(buffer_arg) {
  return services_providers_services_providers_pb.GetTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_InvokeRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.InvokeRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.InvokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_InvokeRequest(buffer_arg) {
  return services_providers_services_providers_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_InvokeResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.InvokeResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.InvokeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_InvokeResponse(buffer_arg) {
  return services_providers_services_providers_pb.InvokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_ListExtentionsResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.ListExtentionsResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.ListExtentionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_ListExtentionsResponse(buffer_arg) {
  return services_providers_services_providers_pb.ListExtentionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_ListRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.ListRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_ListRequest(buffer_arg) {
  return services_providers_services_providers_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_ListResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.ListResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_ListResponse(buffer_arg) {
  return services_providers_services_providers_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_ServicesProvider(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.ServicesProvider)) {
    throw new Error('Expected argument of type nocloud.services_providers.ServicesProvider');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_ServicesProvider(buffer_arg) {
  return services_providers_services_providers_pb.ServicesProvider.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_ServicesProvidersExtentionData(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.ServicesProvidersExtentionData)) {
    throw new Error('Expected argument of type nocloud.services_providers.ServicesProvidersExtentionData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_ServicesProvidersExtentionData(buffer_arg) {
  return services_providers_services_providers_pb.ServicesProvidersExtentionData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_TestResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.TestResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_TestResponse(buffer_arg) {
  return services_providers_services_providers_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_UnbindPlanRequest(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.UnbindPlanRequest)) {
    throw new Error('Expected argument of type nocloud.services_providers.UnbindPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_UnbindPlanRequest(buffer_arg) {
  return services_providers_services_providers_pb.UnbindPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_services_providers_UnbindPlanResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.UnbindPlanResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.UnbindPlanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_UnbindPlanResponse(buffer_arg) {
  return services_providers_services_providers_pb.UnbindPlanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServicesProvidersServiceService = exports.ServicesProvidersServiceService = {
  test: {
    path: '/nocloud.services_providers.ServicesProvidersService/Test',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvider,
    responseType: services_providers_services_providers_pb.TestResponse,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvider,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvider,
    responseSerialize: serialize_nocloud_services_providers_TestResponse,
    responseDeserialize: deserialize_nocloud_services_providers_TestResponse,
  },
  create: {
    path: '/nocloud.services_providers.ServicesProvidersService/Create',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvider,
    responseType: services_providers_services_providers_pb.ServicesProvider,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvider,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvider,
    responseSerialize: serialize_nocloud_services_providers_ServicesProvider,
    responseDeserialize: deserialize_nocloud_services_providers_ServicesProvider,
  },
  delete: {
    path: '/nocloud.services_providers.ServicesProvidersService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.DeleteRequest,
    responseType: services_providers_services_providers_pb.DeleteResponse,
    requestSerialize: serialize_nocloud_services_providers_DeleteRequest,
    requestDeserialize: deserialize_nocloud_services_providers_DeleteRequest,
    responseSerialize: serialize_nocloud_services_providers_DeleteResponse,
    responseDeserialize: deserialize_nocloud_services_providers_DeleteResponse,
  },
  update: {
    path: '/nocloud.services_providers.ServicesProvidersService/Update',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvider,
    responseType: services_providers_services_providers_pb.ServicesProvider,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvider,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvider,
    responseSerialize: serialize_nocloud_services_providers_ServicesProvider,
    responseDeserialize: deserialize_nocloud_services_providers_ServicesProvider,
  },
  get: {
    path: '/nocloud.services_providers.ServicesProvidersService/Get',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.GetRequest,
    responseType: services_providers_services_providers_pb.ServicesProvider,
    requestSerialize: serialize_nocloud_services_providers_GetRequest,
    requestDeserialize: deserialize_nocloud_services_providers_GetRequest,
    responseSerialize: serialize_nocloud_services_providers_ServicesProvider,
    responseDeserialize: deserialize_nocloud_services_providers_ServicesProvider,
  },
  list: {
    path: '/nocloud.services_providers.ServicesProvidersService/List',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ListRequest,
    responseType: services_providers_services_providers_pb.ListResponse,
    requestSerialize: serialize_nocloud_services_providers_ListRequest,
    requestDeserialize: deserialize_nocloud_services_providers_ListRequest,
    responseSerialize: serialize_nocloud_services_providers_ListResponse,
    responseDeserialize: deserialize_nocloud_services_providers_ListResponse,
  },
  invoke: {
    path: '/nocloud.services_providers.ServicesProvidersService/Invoke',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.InvokeRequest,
    responseType: services_providers_services_providers_pb.InvokeResponse,
    requestSerialize: serialize_nocloud_services_providers_InvokeRequest,
    requestDeserialize: deserialize_nocloud_services_providers_InvokeRequest,
    responseSerialize: serialize_nocloud_services_providers_InvokeResponse,
    responseDeserialize: deserialize_nocloud_services_providers_InvokeResponse,
  },
  listExtentions: {
    path: '/nocloud.services_providers.ServicesProvidersService/ListExtentions',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ListRequest,
    responseType: services_providers_services_providers_pb.ListExtentionsResponse,
    requestSerialize: serialize_nocloud_services_providers_ListRequest,
    requestDeserialize: deserialize_nocloud_services_providers_ListRequest,
    responseSerialize: serialize_nocloud_services_providers_ListExtentionsResponse,
    responseDeserialize: deserialize_nocloud_services_providers_ListExtentionsResponse,
  },
  bindPlan: {
    path: '/nocloud.services_providers.ServicesProvidersService/BindPlan',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.BindPlanRequest,
    responseType: services_providers_services_providers_pb.BindPlanResponse,
    requestSerialize: serialize_nocloud_services_providers_BindPlanRequest,
    requestDeserialize: deserialize_nocloud_services_providers_BindPlanRequest,
    responseSerialize: serialize_nocloud_services_providers_BindPlanResponse,
    responseDeserialize: deserialize_nocloud_services_providers_BindPlanResponse,
  },
  unbindPlan: {
    path: '/nocloud.services_providers.ServicesProvidersService/UnbindPlan',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.UnbindPlanRequest,
    responseType: services_providers_services_providers_pb.UnbindPlanResponse,
    requestSerialize: serialize_nocloud_services_providers_UnbindPlanRequest,
    requestDeserialize: deserialize_nocloud_services_providers_UnbindPlanRequest,
    responseSerialize: serialize_nocloud_services_providers_UnbindPlanResponse,
    responseDeserialize: deserialize_nocloud_services_providers_UnbindPlanResponse,
  },
};

exports.ServicesProvidersServiceClient = grpc.makeGenericClientConstructor(ServicesProvidersServiceService);
var ServicesProvidersExtentionsServiceService = exports.ServicesProvidersExtentionsServiceService = {
  getType: {
    path: '/nocloud.services_providers.ServicesProvidersExtentionsService/GetType',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.GetTypeRequest,
    responseType: services_providers_services_providers_pb.GetTypeResponse,
    requestSerialize: serialize_nocloud_services_providers_GetTypeRequest,
    requestDeserialize: deserialize_nocloud_services_providers_GetTypeRequest,
    responseSerialize: serialize_nocloud_services_providers_GetTypeResponse,
    responseDeserialize: deserialize_nocloud_services_providers_GetTypeResponse,
  },
  test: {
    path: '/nocloud.services_providers.ServicesProvidersExtentionsService/Test',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvidersExtentionData,
    responseType: services_providers_services_providers_pb.GenericResponse,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvidersExtentionData,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvidersExtentionData,
    responseSerialize: serialize_nocloud_services_providers_GenericResponse,
    responseDeserialize: deserialize_nocloud_services_providers_GenericResponse,
  },
  register: {
    path: '/nocloud.services_providers.ServicesProvidersExtentionsService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvidersExtentionData,
    responseType: services_providers_services_providers_pb.GenericResponse,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvidersExtentionData,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvidersExtentionData,
    responseSerialize: serialize_nocloud_services_providers_GenericResponse,
    responseDeserialize: deserialize_nocloud_services_providers_GenericResponse,
  },
  update: {
    path: '/nocloud.services_providers.ServicesProvidersExtentionsService/Update',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvidersExtentionData,
    responseType: services_providers_services_providers_pb.GenericResponse,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvidersExtentionData,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvidersExtentionData,
    responseSerialize: serialize_nocloud_services_providers_GenericResponse,
    responseDeserialize: deserialize_nocloud_services_providers_GenericResponse,
  },
  unregister: {
    path: '/nocloud.services_providers.ServicesProvidersExtentionsService/Unregister',
    requestStream: false,
    responseStream: false,
    requestType: services_providers_services_providers_pb.ServicesProvidersExtentionData,
    responseType: services_providers_services_providers_pb.GenericResponse,
    requestSerialize: serialize_nocloud_services_providers_ServicesProvidersExtentionData,
    requestDeserialize: deserialize_nocloud_services_providers_ServicesProvidersExtentionData,
    responseSerialize: serialize_nocloud_services_providers_GenericResponse,
    responseDeserialize: deserialize_nocloud_services_providers_GenericResponse,
  },
};

exports.ServicesProvidersExtentionsServiceClient = grpc.makeGenericClientConstructor(ServicesProvidersExtentionsServiceService);
