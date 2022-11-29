// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright © 2022 Nikita Ivanovski info@slnt-opp.xyz
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var ansible_ansible_pb = require('../ansible/ansible_pb.js');

function serialize_nocloud_ansible_DeleteRunRequest(arg) {
  if (!(arg instanceof ansible_ansible_pb.DeleteRunRequest)) {
    throw new Error('Expected argument of type nocloud.ansible.DeleteRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_ansible_DeleteRunRequest(buffer_arg) {
  return ansible_ansible_pb.DeleteRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_ansible_DeleteRunResponse(arg) {
  if (!(arg instanceof ansible_ansible_pb.DeleteRunResponse)) {
    throw new Error('Expected argument of type nocloud.ansible.DeleteRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_ansible_DeleteRunResponse(buffer_arg) {
  return ansible_ansible_pb.DeleteRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_ansible_ExecRunRequest(arg) {
  if (!(arg instanceof ansible_ansible_pb.ExecRunRequest)) {
    throw new Error('Expected argument of type nocloud.ansible.ExecRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_ansible_ExecRunRequest(buffer_arg) {
  return ansible_ansible_pb.ExecRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_ansible_GetRunRequest(arg) {
  if (!(arg instanceof ansible_ansible_pb.GetRunRequest)) {
    throw new Error('Expected argument of type nocloud.ansible.GetRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_ansible_GetRunRequest(buffer_arg) {
  return ansible_ansible_pb.GetRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_ansible_Run(arg) {
  if (!(arg instanceof ansible_ansible_pb.Run)) {
    throw new Error('Expected argument of type nocloud.ansible.Run');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_ansible_Run(buffer_arg) {
  return ansible_ansible_pb.Run.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_ansible_WatchRunRequest(arg) {
  if (!(arg instanceof ansible_ansible_pb.WatchRunRequest)) {
    throw new Error('Expected argument of type nocloud.ansible.WatchRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_ansible_WatchRunRequest(buffer_arg) {
  return ansible_ansible_pb.WatchRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnsibleServiceService = exports.AnsibleServiceService = {
  get: {
    path: '/nocloud.ansible.AnsibleService/Get',
    requestStream: false,
    responseStream: false,
    requestType: ansible_ansible_pb.GetRunRequest,
    responseType: ansible_ansible_pb.Run,
    requestSerialize: serialize_nocloud_ansible_GetRunRequest,
    requestDeserialize: deserialize_nocloud_ansible_GetRunRequest,
    responseSerialize: serialize_nocloud_ansible_Run,
    responseDeserialize: deserialize_nocloud_ansible_Run,
  },
  delete: {
    path: '/nocloud.ansible.AnsibleService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: ansible_ansible_pb.DeleteRunRequest,
    responseType: ansible_ansible_pb.DeleteRunResponse,
    requestSerialize: serialize_nocloud_ansible_DeleteRunRequest,
    requestDeserialize: deserialize_nocloud_ansible_DeleteRunRequest,
    responseSerialize: serialize_nocloud_ansible_DeleteRunResponse,
    responseDeserialize: deserialize_nocloud_ansible_DeleteRunResponse,
  },
  create: {
    path: '/nocloud.ansible.AnsibleService/Create',
    requestStream: false,
    responseStream: false,
    requestType: ansible_ansible_pb.Run,
    responseType: ansible_ansible_pb.Run,
    requestSerialize: serialize_nocloud_ansible_Run,
    requestDeserialize: deserialize_nocloud_ansible_Run,
    responseSerialize: serialize_nocloud_ansible_Run,
    responseDeserialize: deserialize_nocloud_ansible_Run,
  },
  exec: {
    path: '/nocloud.ansible.AnsibleService/Exec',
    requestStream: false,
    responseStream: true,
    requestType: ansible_ansible_pb.ExecRunRequest,
    responseType: ansible_ansible_pb.Run,
    requestSerialize: serialize_nocloud_ansible_ExecRunRequest,
    requestDeserialize: deserialize_nocloud_ansible_ExecRunRequest,
    responseSerialize: serialize_nocloud_ansible_Run,
    responseDeserialize: deserialize_nocloud_ansible_Run,
  },
  watch: {
    path: '/nocloud.ansible.AnsibleService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: ansible_ansible_pb.WatchRunRequest,
    responseType: ansible_ansible_pb.Run,
    requestSerialize: serialize_nocloud_ansible_WatchRunRequest,
    requestDeserialize: deserialize_nocloud_ansible_WatchRunRequest,
    responseSerialize: serialize_nocloud_ansible_Run,
    responseDeserialize: deserialize_nocloud_ansible_Run,
  },
};

exports.AnsibleServiceClient = grpc.makeGenericClientConstructor(AnsibleServiceService);
