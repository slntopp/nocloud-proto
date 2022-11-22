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
var edge_edge_pb = require('../edge/edge_pb.js');
var states_states_pb = require('../states/states_pb.js');

function serialize_nocloud_edge_Empty(arg) {
  if (!(arg instanceof edge_edge_pb.Empty)) {
    throw new Error('Expected argument of type nocloud.edge.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_edge_Empty(buffer_arg) {
  return edge_edge_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_edge_TestRequest(arg) {
  if (!(arg instanceof edge_edge_pb.TestRequest)) {
    throw new Error('Expected argument of type nocloud.edge.TestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_edge_TestRequest(buffer_arg) {
  return edge_edge_pb.TestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_edge_TestResponse(arg) {
  if (!(arg instanceof edge_edge_pb.TestResponse)) {
    throw new Error('Expected argument of type nocloud.edge.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_edge_TestResponse(buffer_arg) {
  return edge_edge_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var EdgeServiceService = exports.EdgeServiceService = {
  test: {
    path: '/nocloud.edge.EdgeService/Test',
    requestStream: false,
    responseStream: false,
    requestType: edge_edge_pb.TestRequest,
    responseType: edge_edge_pb.TestResponse,
    requestSerialize: serialize_nocloud_edge_TestRequest,
    requestDeserialize: deserialize_nocloud_edge_TestRequest,
    responseSerialize: serialize_nocloud_edge_TestResponse,
    responseDeserialize: deserialize_nocloud_edge_TestResponse,
  },
  postState: {
    path: '/nocloud.edge.EdgeService/PostState',
    requestStream: false,
    responseStream: false,
    requestType: states_states_pb.ObjectState,
    responseType: edge_edge_pb.Empty,
    requestSerialize: serialize_nocloud_states_ObjectState,
    requestDeserialize: deserialize_nocloud_states_ObjectState,
    responseSerialize: serialize_nocloud_edge_Empty,
    responseDeserialize: deserialize_nocloud_edge_Empty,
  },
};

exports.EdgeServiceClient = grpc.makeGenericClientConstructor(EdgeServiceService);
