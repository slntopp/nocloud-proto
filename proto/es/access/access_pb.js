//
//Copyright © 2021-2023 Nikita Ivanovski info@slnt-opp.xyz
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//http://www.apache.org/licenses/LICENSE-2.0
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file access/access.proto (package nocloud.access, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum nocloud.access.Level
 */
export const Level = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.access.Level",
  [
    {no: 0, name: "NONE"},
    {no: 1, name: "READ"},
    {no: 2, name: "MGMT"},
    {no: 3, name: "ADMIN"},
    {no: 4, name: "ROOT"},
  ],
);

/**
 * Access
 *
 * @generated from message nocloud.access.Access
 */
export const Access = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.access.Access",
  () => [
    { no: 1, name: "level", kind: "enum", T: proto3.getEnumType(Level) },
    { no: 2, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.access.Node
 */
export const Node = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.access.Node",
  () => [
    { no: 1, name: "node", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "edge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.access.Nodes
 */
export const Nodes = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.access.Nodes",
  () => [
    { no: 1, name: "nodes", kind: "message", T: Node, repeated: true },
  ],
);

