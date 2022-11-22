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
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var registry_accounts_accounts_pb = require('../registry/accounts/accounts_pb.js');
var registry_namespaces_namespaces_pb = require('../registry/namespaces/namespaces_pb.js');

function serialize_nocloud_registry_accounts_Account(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.Account)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_Account(buffer_arg) {
  return registry_accounts_accounts_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_CreateRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.CreateRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_CreateRequest(buffer_arg) {
  return registry_accounts_accounts_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_CreateResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.CreateResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_CreateResponse(buffer_arg) {
  return registry_accounts_accounts_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_DeleteRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.DeleteRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_DeleteRequest(buffer_arg) {
  return registry_accounts_accounts_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_DeleteResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.DeleteResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_DeleteResponse(buffer_arg) {
  return registry_accounts_accounts_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_GetRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.GetRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_GetRequest(buffer_arg) {
  return registry_accounts_accounts_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_ListRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.ListRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_ListRequest(buffer_arg) {
  return registry_accounts_accounts_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_ListResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.ListResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_ListResponse(buffer_arg) {
  return registry_accounts_accounts_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_SetCredentialsRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.SetCredentialsRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.SetCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_SetCredentialsRequest(buffer_arg) {
  return registry_accounts_accounts_pb.SetCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_SetCredentialsResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.SetCredentialsResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.SetCredentialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_SetCredentialsResponse(buffer_arg) {
  return registry_accounts_accounts_pb.SetCredentialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_SuspendRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.SuspendRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.SuspendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_SuspendRequest(buffer_arg) {
  return registry_accounts_accounts_pb.SuspendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_SuspendResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.SuspendResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.SuspendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_SuspendResponse(buffer_arg) {
  return registry_accounts_accounts_pb.SuspendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_TokenRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.TokenRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_TokenRequest(buffer_arg) {
  return registry_accounts_accounts_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_TokenResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.TokenResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_TokenResponse(buffer_arg) {
  return registry_accounts_accounts_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_UnsuspendRequest(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.UnsuspendRequest)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.UnsuspendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_UnsuspendRequest(buffer_arg) {
  return registry_accounts_accounts_pb.UnsuspendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_UnsuspendResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.UnsuspendResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.UnsuspendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_UnsuspendResponse(buffer_arg) {
  return registry_accounts_accounts_pb.UnsuspendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_accounts_UpdateResponse(arg) {
  if (!(arg instanceof registry_accounts_accounts_pb.UpdateResponse)) {
    throw new Error('Expected argument of type nocloud.registry.accounts.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_accounts_UpdateResponse(buffer_arg) {
  return registry_accounts_accounts_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_CreateRequest(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.CreateRequest)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_CreateRequest(buffer_arg) {
  return registry_namespaces_namespaces_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_CreateResponse(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.CreateResponse)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_CreateResponse(buffer_arg) {
  return registry_namespaces_namespaces_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_DeleteRequest(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.DeleteRequest)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_DeleteRequest(buffer_arg) {
  return registry_namespaces_namespaces_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_DeleteResponse(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.DeleteResponse)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_DeleteResponse(buffer_arg) {
  return registry_namespaces_namespaces_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_JoinRequest(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.JoinRequest)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.JoinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_JoinRequest(buffer_arg) {
  return registry_namespaces_namespaces_pb.JoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_JoinResponse(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.JoinResponse)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.JoinResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_JoinResponse(buffer_arg) {
  return registry_namespaces_namespaces_pb.JoinResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_LinkRequest(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.LinkRequest)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.LinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_LinkRequest(buffer_arg) {
  return registry_namespaces_namespaces_pb.LinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_LinkResponse(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.LinkResponse)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.LinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_LinkResponse(buffer_arg) {
  return registry_namespaces_namespaces_pb.LinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_ListRequest(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.ListRequest)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_ListRequest(buffer_arg) {
  return registry_namespaces_namespaces_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_registry_namespaces_ListResponse(arg) {
  if (!(arg instanceof registry_namespaces_namespaces_pb.ListResponse)) {
    throw new Error('Expected argument of type nocloud.registry.namespaces.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_registry_namespaces_ListResponse(buffer_arg) {
  return registry_namespaces_namespaces_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountsServiceService = exports.AccountsServiceService = {
  token: {
    path: '/nocloud.registry.AccountsService/Token',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.TokenRequest,
    responseType: registry_accounts_accounts_pb.TokenResponse,
    requestSerialize: serialize_nocloud_registry_accounts_TokenRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_TokenRequest,
    responseSerialize: serialize_nocloud_registry_accounts_TokenResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_TokenResponse,
  },
  setCredentials: {
    path: '/nocloud.registry.AccountsService/SetCredentials',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.SetCredentialsRequest,
    responseType: registry_accounts_accounts_pb.SetCredentialsResponse,
    requestSerialize: serialize_nocloud_registry_accounts_SetCredentialsRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_SetCredentialsRequest,
    responseSerialize: serialize_nocloud_registry_accounts_SetCredentialsResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_SetCredentialsResponse,
  },
  create: {
    path: '/nocloud.registry.AccountsService/Create',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.CreateRequest,
    responseType: registry_accounts_accounts_pb.CreateResponse,
    requestSerialize: serialize_nocloud_registry_accounts_CreateRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_CreateRequest,
    responseSerialize: serialize_nocloud_registry_accounts_CreateResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_CreateResponse,
  },
  update: {
    path: '/nocloud.registry.AccountsService/Update',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.Account,
    responseType: registry_accounts_accounts_pb.UpdateResponse,
    requestSerialize: serialize_nocloud_registry_accounts_Account,
    requestDeserialize: deserialize_nocloud_registry_accounts_Account,
    responseSerialize: serialize_nocloud_registry_accounts_UpdateResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_UpdateResponse,
  },
  get: {
    path: '/nocloud.registry.AccountsService/Get',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.GetRequest,
    responseType: registry_accounts_accounts_pb.Account,
    requestSerialize: serialize_nocloud_registry_accounts_GetRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_GetRequest,
    responseSerialize: serialize_nocloud_registry_accounts_Account,
    responseDeserialize: deserialize_nocloud_registry_accounts_Account,
  },
  list: {
    path: '/nocloud.registry.AccountsService/List',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.ListRequest,
    responseType: registry_accounts_accounts_pb.ListResponse,
    requestSerialize: serialize_nocloud_registry_accounts_ListRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_ListRequest,
    responseSerialize: serialize_nocloud_registry_accounts_ListResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_ListResponse,
  },
  delete: {
    path: '/nocloud.registry.AccountsService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.DeleteRequest,
    responseType: registry_accounts_accounts_pb.DeleteResponse,
    requestSerialize: serialize_nocloud_registry_accounts_DeleteRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_DeleteRequest,
    responseSerialize: serialize_nocloud_registry_accounts_DeleteResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_DeleteResponse,
  },
  suspend: {
    path: '/nocloud.registry.AccountsService/Suspend',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.SuspendRequest,
    responseType: registry_accounts_accounts_pb.SuspendResponse,
    requestSerialize: serialize_nocloud_registry_accounts_SuspendRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_SuspendRequest,
    responseSerialize: serialize_nocloud_registry_accounts_SuspendResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_SuspendResponse,
  },
  unsuspend: {
    path: '/nocloud.registry.AccountsService/Unsuspend',
    requestStream: false,
    responseStream: false,
    requestType: registry_accounts_accounts_pb.UnsuspendRequest,
    responseType: registry_accounts_accounts_pb.UnsuspendResponse,
    requestSerialize: serialize_nocloud_registry_accounts_UnsuspendRequest,
    requestDeserialize: deserialize_nocloud_registry_accounts_UnsuspendRequest,
    responseSerialize: serialize_nocloud_registry_accounts_UnsuspendResponse,
    responseDeserialize: deserialize_nocloud_registry_accounts_UnsuspendResponse,
  },
};

exports.AccountsServiceClient = grpc.makeGenericClientConstructor(AccountsServiceService);
var NamespacesServiceService = exports.NamespacesServiceService = {
  create: {
    path: '/nocloud.registry.NamespacesService/Create',
    requestStream: false,
    responseStream: false,
    requestType: registry_namespaces_namespaces_pb.CreateRequest,
    responseType: registry_namespaces_namespaces_pb.CreateResponse,
    requestSerialize: serialize_nocloud_registry_namespaces_CreateRequest,
    requestDeserialize: deserialize_nocloud_registry_namespaces_CreateRequest,
    responseSerialize: serialize_nocloud_registry_namespaces_CreateResponse,
    responseDeserialize: deserialize_nocloud_registry_namespaces_CreateResponse,
  },
  list: {
    path: '/nocloud.registry.NamespacesService/List',
    requestStream: false,
    responseStream: false,
    requestType: registry_namespaces_namespaces_pb.ListRequest,
    responseType: registry_namespaces_namespaces_pb.ListResponse,
    requestSerialize: serialize_nocloud_registry_namespaces_ListRequest,
    requestDeserialize: deserialize_nocloud_registry_namespaces_ListRequest,
    responseSerialize: serialize_nocloud_registry_namespaces_ListResponse,
    responseDeserialize: deserialize_nocloud_registry_namespaces_ListResponse,
  },
  join: {
    path: '/nocloud.registry.NamespacesService/Join',
    requestStream: false,
    responseStream: false,
    requestType: registry_namespaces_namespaces_pb.JoinRequest,
    responseType: registry_namespaces_namespaces_pb.JoinResponse,
    requestSerialize: serialize_nocloud_registry_namespaces_JoinRequest,
    requestDeserialize: deserialize_nocloud_registry_namespaces_JoinRequest,
    responseSerialize: serialize_nocloud_registry_namespaces_JoinResponse,
    responseDeserialize: deserialize_nocloud_registry_namespaces_JoinResponse,
  },
  link: {
    path: '/nocloud.registry.NamespacesService/Link',
    requestStream: false,
    responseStream: false,
    requestType: registry_namespaces_namespaces_pb.LinkRequest,
    responseType: registry_namespaces_namespaces_pb.LinkResponse,
    requestSerialize: serialize_nocloud_registry_namespaces_LinkRequest,
    requestDeserialize: deserialize_nocloud_registry_namespaces_LinkRequest,
    responseSerialize: serialize_nocloud_registry_namespaces_LinkResponse,
    responseDeserialize: deserialize_nocloud_registry_namespaces_LinkResponse,
  },
  delete: {
    path: '/nocloud.registry.NamespacesService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: registry_namespaces_namespaces_pb.DeleteRequest,
    responseType: registry_namespaces_namespaces_pb.DeleteResponse,
    requestSerialize: serialize_nocloud_registry_namespaces_DeleteRequest,
    requestDeserialize: deserialize_nocloud_registry_namespaces_DeleteRequest,
    responseSerialize: serialize_nocloud_registry_namespaces_DeleteResponse,
    responseDeserialize: deserialize_nocloud_registry_namespaces_DeleteResponse,
  },
};

exports.NamespacesServiceClient = grpc.makeGenericClientConstructor(NamespacesServiceService);
