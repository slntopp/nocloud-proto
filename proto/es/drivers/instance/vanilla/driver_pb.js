//
//Copyright © 2021-2023 Nikita Ivanovski info@slnt-opp.xyz
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file drivers/instance/vanilla/driver.proto (package nocloud.instance.driver.vanilla, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Value } from "@bufbuild/protobuf";
import { ServicesProvider } from "../../../services_providers/services_providers_pb.js";
import { Instance, InstancesGroup } from "../../../instances/instances_pb.js";

/**
 * @generated from message nocloud.instance.driver.vanilla.TestServiceProviderConfigRequest
 */
export const TestServiceProviderConfigRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.TestServiceProviderConfigRequest",
  () => [
    { no: 1, name: "services_provider", kind: "message", T: ServicesProvider },
    { no: 2, name: "syntax_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.GetTypeRequest
 */
export const GetTypeRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.GetTypeRequest",
  [],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.GetTypeResponse
 */
export const GetTypeResponse = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.GetTypeResponse",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.UpRequest
 */
export const UpRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.UpRequest",
  () => [
    { no: 1, name: "group", kind: "message", T: InstancesGroup },
    { no: 2, name: "services_provider", kind: "message", T: ServicesProvider },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.UpResponse
 */
export const UpResponse = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.UpResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: InstancesGroup },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.DownRequest
 */
export const DownRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.DownRequest",
  () => [
    { no: 1, name: "group", kind: "message", T: InstancesGroup },
    { no: 2, name: "services_provider", kind: "message", T: ServicesProvider },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.DownResponse
 */
export const DownResponse = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.DownResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: InstancesGroup },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.MonitoringRequest
 */
export const MonitoringRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.MonitoringRequest",
  () => [
    { no: 1, name: "groups", kind: "message", T: InstancesGroup, repeated: true },
    { no: 2, name: "services_provider", kind: "message", T: ServicesProvider },
    { no: 3, name: "scheduled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.MonitoringResponse
 */
export const MonitoringResponse = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.MonitoringResponse",
  [],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.InvokeRequest
 */
export const InvokeRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.InvokeRequest",
  () => [
    { no: 1, name: "instance", kind: "message", T: Instance },
    { no: 2, name: "services_provider", kind: "message", T: ServicesProvider },
    { no: 3, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "params", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.instance.driver.vanilla.SpInvokeRequest
 */
export const SpInvokeRequest = proto3.makeMessageType(
  "nocloud.instance.driver.vanilla.SpInvokeRequest",
  () => [
    { no: 1, name: "services_provider", kind: "message", T: ServicesProvider },
    { no: 2, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "params", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

