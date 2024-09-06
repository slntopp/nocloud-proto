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

// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file services_providers/services_providers.proto (package nocloud.services_providers, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Value } from "@bufbuild/protobuf";
import { State } from "../states/states_pb.js";
import { Access } from "../access/access_pb.js";
import { NoCloudStatus } from "../statuses/statuses_pb.js";

/**
 * @generated from message nocloud.services_providers.Var
 */
export const Var = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.Var",
  () => [
    { no: 1, name: "value", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.services_providers.ProxyConf
 */
export const ProxyConf = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ProxyConf",
  () => [
    { no: 1, name: "socket", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.LocationConf
 */
export const LocationConf = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.LocationConf",
  () => [
    { no: 1, name: "x", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "y", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "extra", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 6, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.Hook
 */
export const Hook = proto3.makeMessageType(
  "nocloud.services_providers.Hook",
  () => [
    { no: 1, name: "playbook", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "vars", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message nocloud.services_providers.ServicesProvider
 */
export const ServicesProvider = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ServicesProvider",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "secrets", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 5, name: "vars", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Var} },
    { no: 6, name: "extentions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Struct} },
    { no: 7, name: "state", kind: "message", T: State },
    { no: 8, name: "public_data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 9, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "proxy", kind: "message", T: ProxyConf, opt: true },
    { no: 11, name: "locations", kind: "message", T: LocationConf, repeated: true },
    { no: 12, name: "access", kind: "message", T: Access, opt: true },
    { no: 13, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 14, name: "status", kind: "enum", T: proto3.getEnumType(NoCloudStatus) },
    { no: 15, name: "hooks", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Hook} },
  ],
);

/**
 * @generated from message nocloud.services_providers.TestResponse
 */
export const TestResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.TestResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.GetRequest
 */
export const GetRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.GetRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.ListRequest
 */
export const ListRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ListRequest",
  () => [
    { no: 1, name: "anonymously", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "show_deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.ListResponse
 */
export const ListResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ListResponse",
  () => [
    { no: 1, name: "pool", kind: "message", T: ServicesProvider, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.DeleteRequest
 */
export const DeleteRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.DeleteRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.DeleteResponse
 */
export const DeleteResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.DeleteResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "services", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.ListExtentionsResponse
 */
export const ListExtentionsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ListExtentionsResponse",
  () => [
    { no: 1, name: "types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.BindPlanRequest
 */
export const BindPlanRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.BindPlanRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plans", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.BindPlanResponse
 */
export const BindPlanResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.BindPlanResponse",
  [],
);

/**
 * @generated from message nocloud.services_providers.UnbindPlanRequest
 */
export const UnbindPlanRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.UnbindPlanRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plans", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.UnbindPlanResponse
 */
export const UnbindPlanResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.UnbindPlanResponse",
  [],
);

/**
 * @generated from message nocloud.services_providers.InvokeRequest
 */
export const InvokeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.InvokeRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "params", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.services_providers.InvokeResponse
 */
export const InvokeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.InvokeResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.services_providers.PrepSP
 */
export const PrepSP = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.PrepSP",
  () => [
    { no: 1, name: "sp", kind: "message", T: ServicesProvider },
    { no: 2, name: "extra", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.services_providers.GetTypeRequest
 */
export const GetTypeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.GetTypeRequest",
  [],
);

/**
 * @generated from message nocloud.services_providers.GetTypeResponse
 */
export const GetTypeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.GetTypeResponse",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.ServicesProvidersExtentionData
 */
export const ServicesProvidersExtentionData = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ServicesProvidersExtentionData",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message nocloud.services_providers.GenericResponse
 */
export const GenericResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.GenericResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.services_providers.ShowcaseItem
 */
export const ShowcaseItem = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ShowcaseItem",
  () => [
    { no: 1, name: "plan", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "services_provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "locations", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.Showcase
 */
export const Showcase = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.Showcase",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "items", kind: "message", T: ShowcaseItem, repeated: true },
    { no: 5, name: "promo", kind: "message", T: Value },
    { no: 6, name: "primary", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "locations", kind: "message", T: LocationConf, repeated: true },
    { no: 9, name: "sorter", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.Showcases
 */
export const Showcases = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.Showcases",
  () => [
    { no: 1, name: "showcases", kind: "message", T: Showcase, repeated: true },
  ],
);

/**
 * @generated from message nocloud.services_providers.ObjectPublicData
 */
export const ObjectPublicData = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.services_providers.ObjectPublicData",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

