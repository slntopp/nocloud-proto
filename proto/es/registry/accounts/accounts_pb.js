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
// @generated from file registry/accounts/accounts.proto (package nocloud.registry.accounts, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Value } from "@bufbuild/protobuf";
import { Currency } from "../../billing/billing_pb.js";
import { Access } from "../../access/access_pb.js";
import { AdminNote } from "../../notes/notes_pb.js";

/**
 * @generated from enum nocloud.registry.accounts.AccountStatus
 */
export const AccountStatus = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.registry.accounts.AccountStatus",
  [
    {no: 0, name: "ACTIVE"},
    {no: 1, name: "LOCK"},
    {no: 2, name: "PERMANENT_LOCK"},
  ],
);

/**
 * @generated from message nocloud.registry.accounts.Credentials
 */
export const Credentials = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.Credentials",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.CreateRequest
 */
export const CreateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.CreateRequest",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auth", kind: "message", T: Credentials },
    { no: 3, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "access", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 5, name: "currency", kind: "message", T: Currency },
    { no: 6, name: "data", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.CreateResponse
 */
export const CreateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.CreateResponse",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.GetRequest
 */
export const GetRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.GetRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.SuspendConf
 */
export const SuspendConf = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.SuspendConf",
  () => [
    { no: 1, name: "immune", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "limit", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.Account
 */
export const Account = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.Account",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data", kind: "message", T: Struct },
    { no: 4, name: "balance", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 5, name: "access", kind: "message", T: Access, opt: true },
    { no: 6, name: "suspend_conf", kind: "message", T: SuspendConf, opt: true },
    { no: 7, name: "suspended", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 8, name: "currency", kind: "message", T: Currency, opt: true },
    { no: 9, name: "status", kind: "enum", T: proto3.getEnumType(AccountStatus) },
    { no: 10, name: "admin_notes", kind: "message", T: AdminNote, repeated: true },
    { no: 11, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.UpdateResponse
 */
export const UpdateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.UpdateResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.ListRequest
 */
export const ListRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.ListRequest",
  () => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "sort", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.ListResponse
 */
export const ListResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.ListResponse",
  () => [
    { no: 1, name: "pool", kind: "message", T: Account, repeated: true },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "active", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.SetCredentialsRequest
 */
export const SetCredentialsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.SetCredentialsRequest",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auth", kind: "message", T: Credentials },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.SetCredentialsResponse
 */
export const SetCredentialsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.SetCredentialsResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.TokenRequest
 */
export const TokenRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.TokenRequest",
  () => [
    { no: 1, name: "auth", kind: "message", T: Credentials },
    { no: 2, name: "exp", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "root_claim", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "sp_claim", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "instance_claim", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.TokenResponse
 */
export const TokenResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.TokenResponse",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.DeleteRequest
 */
export const DeleteRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.DeleteRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.DeleteResponse
 */
export const DeleteResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.DeleteResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.SuspendRequest
 */
export const SuspendRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.SuspendRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.SuspendResponse
 */
export const SuspendResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.SuspendResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.UnsuspendRequest
 */
export const UnsuspendRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.UnsuspendRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.registry.accounts.UnsuspendResponse
 */
export const UnsuspendResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.registry.accounts.UnsuspendResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

