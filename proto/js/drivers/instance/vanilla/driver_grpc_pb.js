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
var drivers_instance_vanilla_driver_pb = require('../../../drivers/instance/vanilla/driver_pb.js');
var services_services_pb = require('../../../services/services_pb.js');
var instances_instances_pb = require('../../../instances/instances_pb.js');
var services_providers_services_providers_pb = require('../../../services_providers/services_providers_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nocloud_instance_driver_vanilla_DownRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.DownRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.DownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_DownRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.DownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_DownResponse(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.DownResponse)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.DownResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_DownResponse(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.DownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_GetTypeRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.GetTypeRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.GetTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_GetTypeRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.GetTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_GetTypeResponse(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.GetTypeResponse)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.GetTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_GetTypeResponse(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.GetTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_InvokeRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.InvokeRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.InvokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_InvokeRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_MonitoringRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.MonitoringRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.MonitoringRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_MonitoringRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.MonitoringRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_MonitoringResponse(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.MonitoringResponse)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.MonitoringResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_MonitoringResponse(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.MonitoringResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_SpInvokeRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.SpInvokeRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.SpInvokeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_SpInvokeRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.SpInvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_TestServiceProviderConfigRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.TestServiceProviderConfigRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.TestServiceProviderConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_TestServiceProviderConfigRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.TestServiceProviderConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_UpRequest(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.UpRequest)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.UpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_UpRequest(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.UpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instance_driver_vanilla_UpResponse(arg) {
  if (!(arg instanceof drivers_instance_vanilla_driver_pb.UpResponse)) {
    throw new Error('Expected argument of type nocloud.instance.driver.vanilla.UpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instance_driver_vanilla_UpResponse(buffer_arg) {
  return drivers_instance_vanilla_driver_pb.UpResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nocloud_instances_TestInstancesGroupConfigRequest(arg) {
  if (!(arg instanceof instances_instances_pb.TestInstancesGroupConfigRequest)) {
    throw new Error('Expected argument of type nocloud.instances.TestInstancesGroupConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instances_TestInstancesGroupConfigRequest(buffer_arg) {
  return instances_instances_pb.TestInstancesGroupConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_instances_TestInstancesGroupConfigResponse(arg) {
  if (!(arg instanceof instances_instances_pb.TestInstancesGroupConfigResponse)) {
    throw new Error('Expected argument of type nocloud.instances.TestInstancesGroupConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_instances_TestInstancesGroupConfigResponse(buffer_arg) {
  return instances_instances_pb.TestInstancesGroupConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nocloud_services_providers_TestResponse(arg) {
  if (!(arg instanceof services_providers_services_providers_pb.TestResponse)) {
    throw new Error('Expected argument of type nocloud.services_providers.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_services_providers_TestResponse(buffer_arg) {
  return services_providers_services_providers_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DriverServiceService = exports.DriverServiceService = {
  testServiceProviderConfig: {
    path: '/nocloud.instance.driver.vanilla.DriverService/TestServiceProviderConfig',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.TestServiceProviderConfigRequest,
    responseType: services_providers_services_providers_pb.TestResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_TestServiceProviderConfigRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_TestServiceProviderConfigRequest,
    responseSerialize: serialize_nocloud_services_providers_TestResponse,
    responseDeserialize: deserialize_nocloud_services_providers_TestResponse,
  },
  testInstancesGroupConfig: {
    path: '/nocloud.instance.driver.vanilla.DriverService/TestInstancesGroupConfig',
    requestStream: false,
    responseStream: false,
    requestType: instances_instances_pb.TestInstancesGroupConfigRequest,
    responseType: instances_instances_pb.TestInstancesGroupConfigResponse,
    requestSerialize: serialize_nocloud_instances_TestInstancesGroupConfigRequest,
    requestDeserialize: deserialize_nocloud_instances_TestInstancesGroupConfigRequest,
    responseSerialize: serialize_nocloud_instances_TestInstancesGroupConfigResponse,
    responseDeserialize: deserialize_nocloud_instances_TestInstancesGroupConfigResponse,
  },
  getType: {
    path: '/nocloud.instance.driver.vanilla.DriverService/GetType',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.GetTypeRequest,
    responseType: drivers_instance_vanilla_driver_pb.GetTypeResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_GetTypeRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_GetTypeRequest,
    responseSerialize: serialize_nocloud_instance_driver_vanilla_GetTypeResponse,
    responseDeserialize: deserialize_nocloud_instance_driver_vanilla_GetTypeResponse,
  },
  up: {
    path: '/nocloud.instance.driver.vanilla.DriverService/Up',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.UpRequest,
    responseType: drivers_instance_vanilla_driver_pb.UpResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_UpRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_UpRequest,
    responseSerialize: serialize_nocloud_instance_driver_vanilla_UpResponse,
    responseDeserialize: deserialize_nocloud_instance_driver_vanilla_UpResponse,
  },
  down: {
    path: '/nocloud.instance.driver.vanilla.DriverService/Down',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.DownRequest,
    responseType: drivers_instance_vanilla_driver_pb.DownResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_DownRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_DownRequest,
    responseSerialize: serialize_nocloud_instance_driver_vanilla_DownResponse,
    responseDeserialize: deserialize_nocloud_instance_driver_vanilla_DownResponse,
  },
  monitoring: {
    path: '/nocloud.instance.driver.vanilla.DriverService/Monitoring',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.MonitoringRequest,
    responseType: drivers_instance_vanilla_driver_pb.MonitoringResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_MonitoringRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_MonitoringRequest,
    responseSerialize: serialize_nocloud_instance_driver_vanilla_MonitoringResponse,
    responseDeserialize: deserialize_nocloud_instance_driver_vanilla_MonitoringResponse,
  },
  suspendMonitoring: {
    path: '/nocloud.instance.driver.vanilla.DriverService/SuspendMonitoring',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.MonitoringRequest,
    responseType: drivers_instance_vanilla_driver_pb.MonitoringResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_MonitoringRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_MonitoringRequest,
    responseSerialize: serialize_nocloud_instance_driver_vanilla_MonitoringResponse,
    responseDeserialize: deserialize_nocloud_instance_driver_vanilla_MonitoringResponse,
  },
  invoke: {
    path: '/nocloud.instance.driver.vanilla.DriverService/Invoke',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.InvokeRequest,
    responseType: instances_instances_pb.InvokeResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_InvokeRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_InvokeRequest,
    responseSerialize: serialize_nocloud_instances_InvokeResponse,
    responseDeserialize: deserialize_nocloud_instances_InvokeResponse,
  },
  spInvoke: {
    path: '/nocloud.instance.driver.vanilla.DriverService/SpInvoke',
    requestStream: false,
    responseStream: false,
    requestType: drivers_instance_vanilla_driver_pb.SpInvokeRequest,
    responseType: services_providers_services_providers_pb.InvokeResponse,
    requestSerialize: serialize_nocloud_instance_driver_vanilla_SpInvokeRequest,
    requestDeserialize: deserialize_nocloud_instance_driver_vanilla_SpInvokeRequest,
    responseSerialize: serialize_nocloud_services_providers_InvokeResponse,
    responseDeserialize: deserialize_nocloud_services_providers_InvokeResponse,
  },
};

exports.DriverServiceClient = grpc.makeGenericClientConstructor(DriverServiceService);
