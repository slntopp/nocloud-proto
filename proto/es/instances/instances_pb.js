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
// @generated from file instances/instances.proto (package nocloud.instances, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Value } from "@bufbuild/protobuf";
import { NoCloudStatus } from "../statuses/statuses_pb.js";
import { State } from "../states/states_pb.js";
import { CostEstimation, Plan } from "../billing/billing_pb.js";
import { Access } from "../access/access_pb.js";
import { Software } from "../ansible/ansible_pb.js";
import { AdminNote } from "../notes/notes_pb.js";
import { ServicesProvider } from "../services_providers/services_providers_pb.js";

/**
 * @generated from message nocloud.instances.Instance
 */
export const Instance = proto3.makeMessageType(
  "nocloud.instances.Instance",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(NoCloudStatus) },
    { no: 4, name: "config", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 5, name: "resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 6, name: "data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 7, name: "state", kind: "message", T: State },
    { no: 8, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "billing_plan", kind: "message", T: Plan },
    { no: 10, name: "product", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "access", kind: "message", T: Access, opt: true },
    { no: 12, name: "created", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "software", kind: "message", T: Software, repeated: true },
    { no: 14, name: "admin_notes", kind: "message", T: AdminNote, repeated: true },
    { no: 15, name: "addons", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.instances.InstancesGroup
 */
export const InstancesGroup = proto3.makeMessageType(
  "nocloud.instances.InstancesGroup",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(NoCloudStatus) },
    { no: 5, name: "config", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 6, name: "instances", kind: "message", T: Instance, repeated: true },
    { no: 7, name: "resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 8, name: "data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 9, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "sp", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "access", kind: "message", T: Access, opt: true },
  ],
);

/**
 * @generated from message nocloud.instances.TestInstancesGroupConfigRequest
 */
export const TestInstancesGroupConfigRequest = proto3.makeMessageType(
  "nocloud.instances.TestInstancesGroupConfigRequest",
  () => [
    { no: 1, name: "group", kind: "message", T: InstancesGroup },
    { no: 2, name: "sp", kind: "message", T: ServicesProvider },
    { no: 3, name: "estimate_instances", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.instances.TestInstancesGroupConfigError
 */
export const TestInstancesGroupConfigError = proto3.makeMessageType(
  "nocloud.instances.TestInstancesGroupConfigError",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "instance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.instances.InstanceCostEstimation
 */
export const InstanceCostEstimation = proto3.makeMessageType(
  "nocloud.instances.InstanceCostEstimation",
  () => [
    { no: 1, name: "down_payment", kind: "message", T: CostEstimation },
    { no: 2, name: "general", kind: "message", T: CostEstimation },
  ],
);

/**
 * @generated from message nocloud.instances.TestInstancesGroupConfigResponse
 */
export const TestInstancesGroupConfigResponse = proto3.makeMessageType(
  "nocloud.instances.TestInstancesGroupConfigResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "errors", kind: "message", T: TestInstancesGroupConfigError, repeated: true },
    { no: 3, name: "estimations", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: InstanceCostEstimation} },
  ],
);

/**
 * @generated from message nocloud.instances.InvokeRequest
 */
export const InvokeRequest = proto3.makeMessageType(
  "nocloud.instances.InvokeRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "params", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.instances.InvokeResponse
 */
export const InvokeResponse = proto3.makeMessageType(
  "nocloud.instances.InvokeResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.instances.DeleteRequest
 */
export const DeleteRequest = proto3.makeMessageType(
  "nocloud.instances.DeleteRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.instances.DeleteResponse
 */
export const DeleteResponse = proto3.makeMessageType(
  "nocloud.instances.DeleteResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.instances.TransferIGRequest
 */
export const TransferIGRequest = proto3.makeMessageType(
  "nocloud.instances.TransferIGRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.instances.TransferIGResponse
 */
export const TransferIGResponse = proto3.makeMessageType(
  "nocloud.instances.TransferIGResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.instances.TransferInstanceRequest
 */
export const TransferInstanceRequest = proto3.makeMessageType(
  "nocloud.instances.TransferInstanceRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ig", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.instances.TransferInstanceResponse
 */
export const TransferInstanceResponse = proto3.makeMessageType(
  "nocloud.instances.TransferInstanceResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.instances.ObjectData
 */
export const ObjectData = proto3.makeMessageType(
  "nocloud.instances.ObjectData",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

