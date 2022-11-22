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
var dns_dns_pb = require('../dns/dns_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_nocloud_dns_ListRequest(arg) {
  if (!(arg instanceof dns_dns_pb.ListRequest)) {
    throw new Error('Expected argument of type nocloud.dns.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_dns_ListRequest(buffer_arg) {
  return dns_dns_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_dns_ListResponse(arg) {
  if (!(arg instanceof dns_dns_pb.ListResponse)) {
    throw new Error('Expected argument of type nocloud.dns.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_dns_ListResponse(buffer_arg) {
  return dns_dns_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_dns_Result(arg) {
  if (!(arg instanceof dns_dns_pb.Result)) {
    throw new Error('Expected argument of type nocloud.dns.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_dns_Result(buffer_arg) {
  return dns_dns_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_dns_Zone(arg) {
  if (!(arg instanceof dns_dns_pb.Zone)) {
    throw new Error('Expected argument of type nocloud.dns.Zone');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_dns_Zone(buffer_arg) {
  return dns_dns_pb.Zone.deserializeBinary(new Uint8Array(buffer_arg));
}


var DNSService = exports.DNSService = {
  get: {
    path: '/nocloud.dns.DNS/Get',
    requestStream: false,
    responseStream: false,
    requestType: dns_dns_pb.Zone,
    responseType: dns_dns_pb.Zone,
    requestSerialize: serialize_nocloud_dns_Zone,
    requestDeserialize: deserialize_nocloud_dns_Zone,
    responseSerialize: serialize_nocloud_dns_Zone,
    responseDeserialize: deserialize_nocloud_dns_Zone,
  },
  list: {
    path: '/nocloud.dns.DNS/List',
    requestStream: false,
    responseStream: false,
    requestType: dns_dns_pb.ListRequest,
    responseType: dns_dns_pb.ListResponse,
    requestSerialize: serialize_nocloud_dns_ListRequest,
    requestDeserialize: deserialize_nocloud_dns_ListRequest,
    responseSerialize: serialize_nocloud_dns_ListResponse,
    responseDeserialize: deserialize_nocloud_dns_ListResponse,
  },
  put: {
    path: '/nocloud.dns.DNS/Put',
    requestStream: false,
    responseStream: false,
    requestType: dns_dns_pb.Zone,
    responseType: dns_dns_pb.Result,
    requestSerialize: serialize_nocloud_dns_Zone,
    requestDeserialize: deserialize_nocloud_dns_Zone,
    responseSerialize: serialize_nocloud_dns_Result,
    responseDeserialize: deserialize_nocloud_dns_Result,
  },
  delete: {
    path: '/nocloud.dns.DNS/Delete',
    requestStream: false,
    responseStream: false,
    requestType: dns_dns_pb.Zone,
    responseType: dns_dns_pb.Result,
    requestSerialize: serialize_nocloud_dns_Zone,
    requestDeserialize: deserialize_nocloud_dns_Zone,
    responseSerialize: serialize_nocloud_dns_Result,
    responseDeserialize: deserialize_nocloud_dns_Result,
  },
};

exports.DNSClient = grpc.makeGenericClientConstructor(DNSService);
