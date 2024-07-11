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
// @generated from file statuses/statuses.proto (package nocloud.statuses, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Value } from "@bufbuild/protobuf";

/**
 * @generated from enum nocloud.statuses.NoCloudStatus
 */
export const NoCloudStatus = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.statuses.NoCloudStatus",
  [
    {no: 0, name: "UNSPECIFIED"},
    {no: 1, name: "INIT"},
    {no: 2, name: "MODIFIED"},
    {no: 3, name: "UP"},
    {no: 4, name: "DOWN"},
    {no: 5, name: "DEL"},
    {no: 6, name: "PROC"},
    {no: 7, name: "SUS"},
    {no: 8, name: "DETACHED"},
  ],
);

/**
 * @generated from message nocloud.statuses.Status
 */
export const Status = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.statuses.Status",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(NoCloudStatus) },
    { no: 2, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 3, name: "ts", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
  ],
);

/**
 * @generated from message nocloud.statuses.ObjectStatus
 */
export const ObjectStatus = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.statuses.ObjectStatus",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "message", T: Status },
  ],
);

