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
var instances_instances_pb = require('../instances/instances_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var hasher_hasherpb_hasher_pb = require('../hasher/hasherpb/hasher_pb.js');
var states_states_pb = require('../states/states_pb.js');
var billing_billing_pb = require('../billing/billing_pb.js');
var services_providers_services_providers_pb = require('../services_providers/services_providers_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var access_access_pb = require('../access/access_pb.js');

function serialize_nocloud_instances_InvokeRequest(arg) {
  if (!(arg instanceof instances_instances_pb.InvokeRequest)) {
    throw new Error('Expected argument of type nocloud.instances.InvokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instances_InvokeRequest(buffer_arg) {
  return instances_instances_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instances_InvokeResponse(arg) {
  if (!(arg instanceof instances_instances_pb.InvokeResponse)) {
    throw new Error('Expected argument of type nocloud.instances.InvokeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instances_InvokeResponse(buffer_arg) {
  return instances_instances_pb.InvokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InstancesServiceService = exports.InstancesServiceService = {
  invoke: {
    path: '/nocloud.instances.InstancesService/Invoke',
    requestStream: false,
    responseStream: false,
    requestType: instances_instances_pb.InvokeRequest,
    responseType: instances_instances_pb.InvokeResponse,
    requestSerialize: serialize_nocloud_instances_InvokeRequest,
    requestDeserialize: deserialize_nocloud_instances_InvokeRequest,
    responseSerialize: serialize_nocloud_instances_InvokeResponse,
    responseDeserialize: deserialize_nocloud_instances_InvokeResponse,
  },
};

exports.InstancesServiceClient = grpc.makeGenericClientConstructor(InstancesServiceService);
