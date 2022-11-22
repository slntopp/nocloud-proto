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
var health_health_pb = require('../health/health_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_nocloud_health_ProbeRequest(arg) {
  if (!(arg instanceof health_health_pb.ProbeRequest)) {
    throw new Error('Expected argument of type nocloud.health.ProbeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_health_ProbeRequest(buffer_arg) {
  return health_health_pb.ProbeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_health_ProbeResponse(arg) {
  if (!(arg instanceof health_health_pb.ProbeResponse)) {
    throw new Error('Expected argument of type nocloud.health.ProbeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_health_ProbeResponse(buffer_arg) {
  return health_health_pb.ProbeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_health_RoutinesStatus(arg) {
  if (!(arg instanceof health_health_pb.RoutinesStatus)) {
    throw new Error('Expected argument of type nocloud.health.RoutinesStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_health_RoutinesStatus(buffer_arg) {
  return health_health_pb.RoutinesStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_health_ServingStatus(arg) {
  if (!(arg instanceof health_health_pb.ServingStatus)) {
    throw new Error('Expected argument of type nocloud.health.ServingStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_health_ServingStatus(buffer_arg) {
  return health_health_pb.ServingStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthServiceService = exports.HealthServiceService = {
  probe: {
    path: '/nocloud.health.HealthService/Probe',
    requestStream: false,
    responseStream: false,
    requestType: health_health_pb.ProbeRequest,
    responseType: health_health_pb.ProbeResponse,
    requestSerialize: serialize_nocloud_health_ProbeRequest,
    requestDeserialize: deserialize_nocloud_health_ProbeRequest,
    responseSerialize: serialize_nocloud_health_ProbeResponse,
    responseDeserialize: deserialize_nocloud_health_ProbeResponse,
  },
};

exports.HealthServiceClient = grpc.makeGenericClientConstructor(HealthServiceService);
var InternalProbeServiceService = exports.InternalProbeServiceService = {
  service: {
    path: '/nocloud.health.InternalProbeService/Service',
    requestStream: false,
    responseStream: false,
    requestType: health_health_pb.ProbeRequest,
    responseType: health_health_pb.ServingStatus,
    requestSerialize: serialize_nocloud_health_ProbeRequest,
    requestDeserialize: deserialize_nocloud_health_ProbeRequest,
    responseSerialize: serialize_nocloud_health_ServingStatus,
    responseDeserialize: deserialize_nocloud_health_ServingStatus,
  },
  routine: {
    path: '/nocloud.health.InternalProbeService/Routine',
    requestStream: false,
    responseStream: false,
    requestType: health_health_pb.ProbeRequest,
    responseType: health_health_pb.RoutinesStatus,
    requestSerialize: serialize_nocloud_health_ProbeRequest,
    requestDeserialize: deserialize_nocloud_health_ProbeRequest,
    responseSerialize: serialize_nocloud_health_RoutinesStatus,
    responseDeserialize: deserialize_nocloud_health_RoutinesStatus,
  },
};

exports.InternalProbeServiceClient = grpc.makeGenericClientConstructor(InternalProbeServiceService);
