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
// @generated from file billing/billing.proto (package nocloud.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Value } from "@bufbuild/protobuf";
import { Software } from "../ansible/ansible_pb.js";
import { NoCloudStatus } from "../statuses/statuses_pb.js";
import { NoCloudState } from "../states/states_pb.js";

/**
 * @generated from enum nocloud.billing.PlanKind
 */
export const PlanKind = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.PlanKind",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "DYNAMIC"},
    {no: 2, name: "STATIC"},
  ],
);

/**
 * @generated from enum nocloud.billing.Round
 */
export const Round = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.Round",
  [
    {no: 0, name: "NONE"},
    {no: 1, name: "FLOOR"},
    {no: 2, name: "ROUND"},
    {no: 3, name: "CEIL"},
  ],
);

/**
 * @generated from enum nocloud.billing.Kind
 */
export const Kind = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.Kind",
  [
    {no: 0, name: "UNSPECIFIED"},
    {no: 1, name: "POSTPAID"},
    {no: 2, name: "PREPAID"},
  ],
);

/**
 * @generated from enum nocloud.billing.PeriodKind
 */
export const PeriodKind = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.PeriodKind",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "CALENDAR_MONTH"},
    {no: 2, name: "CALENDAR_YEAR"},
  ],
);

/**
 * @generated from enum nocloud.billing.Priority
 */
export const Priority = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.Priority",
  [
    {no: 0, name: "NORMAL"},
    {no: 1, name: "URGENT"},
    {no: 2, name: "ADDITIONAL"},
  ],
);

/**
 * @generated from enum nocloud.billing.BillingStatus
 */
export const BillingStatus = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.BillingStatus",
  [
    {no: 0, name: "BILLING_STATUS_UNKNOWN"},
    {no: 1, name: "PAID"},
    {no: 2, name: "UNPAID"},
    {no: 3, name: "CANCELED"},
    {no: 4, name: "TERMINATED"},
    {no: 5, name: "DRAFT"},
    {no: 6, name: "RETURNED"},
  ],
);

/**
 * @generated from enum nocloud.billing.ActionType
 */
export const ActionType = /*@__PURE__*/ proto3.makeEnum(
  "nocloud.billing.ActionType",
  [
    {no: 0, name: "ACTION_TYPE_UNKNOWN"},
    {no: 1, name: "NO_ACTION"},
    {no: 2, name: "INSTANCE_START"},
    {no: 3, name: "INSTANCE_RENEWAL"},
    {no: 4, name: "BALANCE"},
  ],
);

/**
 * @generated from message nocloud.billing.FeeRange
 */
export const FeeRange = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.FeeRange",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "to", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "factor", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.Fee
 */
export const Fee = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Fee",
  () => [
    { no: 1, name: "precision", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "enum", T: proto3.getEnumType(Round) },
    { no: 3, name: "default", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "ranges", kind: "message", T: FeeRange, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.Plan
 */
export const Plan = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Plan",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "kind", kind: "enum", T: proto3.getEnumType(PlanKind) },
    { no: 6, name: "resources", kind: "message", T: ResourceConf, repeated: true },
    { no: 7, name: "products", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Product} },
    { no: 8, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 9, name: "fee", kind: "message", T: Fee },
    { no: 10, name: "software", kind: "message", T: Software, repeated: true },
    { no: 11, name: "status", kind: "enum", T: proto3.getEnumType(NoCloudStatus) },
    { no: 12, name: "addons", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.ListRequest
 */
export const ListRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ListRequest",
  () => [
    { no: 1, name: "sp_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "anonymously", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "show_deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 6, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "sort", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 11, name: "exclude_uuids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.ListResponse
 */
export const ListResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ListResponse",
  () => [
    { no: 1, name: "pool", kind: "message", T: Plan, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message nocloud.billing.ListPlansInstancesRequest
 */
export const ListPlansInstancesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ListPlansInstancesRequest",
  () => [
    { no: 1, name: "anonymously", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "uuids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.ListPlansInstancesResponse
 */
export const ListPlansInstancesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ListPlansInstancesResponse",
  () => [
    { no: 1, name: "plans", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.billing.PlansUniqueRequest
 */
export const PlansUniqueRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.PlansUniqueRequest",
  () => [
    { no: 1, name: "sp_uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "anonymously", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "show_deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.billing.PlansUniqueResponse
 */
export const PlansUniqueResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.PlansUniqueResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "unique", kind: "message", T: Value },
  ],
);

/**
 * @generated from message nocloud.billing.ResourceConf
 */
export const ResourceConf = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ResourceConf",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(Kind) },
    { no: 3, name: "price", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "period", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "except", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "on", kind: "enum", T: proto3.getEnumType(NoCloudState), repeated: true },
    { no: 7, name: "fee", kind: "message", T: Fee },
    { no: 8, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 10, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "virtual", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "min", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 13, name: "max", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 14, name: "period_kind", kind: "enum", T: proto3.getEnumType(PeriodKind) },
    { no: 15, name: "description_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.Product
 */
export const Product = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Product",
  () => [
    { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(Kind) },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "period", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 6, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 7, name: "sorter", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 8, name: "installation_fee", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 9, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "group", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "period_kind", kind: "enum", T: proto3.getEnumType(PeriodKind) },
    { no: 12, name: "description_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "addons", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.Transaction
 */
export const Transaction = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Transaction",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exec", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "proc", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "processed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "priority", kind: "enum", T: proto3.getEnumType(Priority) },
    { no: 6, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "records", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 10, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 11, name: "currency", kind: "message", T: Currency },
    { no: 12, name: "created", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 14, name: "previous", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * Position. Instance must be specified to connect action with instance
 *
 * @generated from message nocloud.billing.Item
 */
export const Item = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Item",
  () => [
    { no: 1, name: "amount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "unit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "instance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.Invoice
 */
export const Invoice = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Invoice",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payment", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "processed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "returned", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "deadline", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "status", kind: "enum", T: proto3.getEnumType(BillingStatus) },
    { no: 7, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "transactions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 10, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 11, name: "currency", kind: "message", T: Currency },
    { no: 12, name: "created", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 13, name: "items", kind: "message", T: Item, repeated: true },
    { no: 14, name: "type", kind: "enum", T: proto3.getEnumType(ActionType) },
    { no: 15, name: "number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.Invoices
 */
export const Invoices = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Invoices",
  () => [
    { no: 1, name: "pool", kind: "message", T: Invoice, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.Transactions
 */
export const Transactions = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Transactions",
  () => [
    { no: 1, name: "pool", kind: "message", T: Transaction, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.Record
 */
export const Record = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Record",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "exec", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "processed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "priority", kind: "enum", T: proto3.getEnumType(Priority) },
    { no: 7, name: "instance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "state", kind: "enum", T: proto3.getEnumType(NoCloudState) },
    { no: 9, name: "resource", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "product", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 12, name: "meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 13, name: "currency", kind: "message", T: Currency },
    { no: 14, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 17, name: "previous", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 18, name: "cost", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 19, name: "addon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.Records
 */
export const Records = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Records",
  () => [
    { no: 1, name: "pool", kind: "message", T: Record, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.GetActiveRequest
 */
export const GetActiveRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetActiveRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.GetTransactionsRequest
 */
export const GetTransactionsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetTransactionsRequest",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "sort", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.billing.ReprocessTransactionsRequest
 */
export const ReprocessTransactionsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ReprocessTransactionsRequest",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.GetTransactionsCountRequest
 */
export const GetTransactionsCountRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetTransactionsCountRequest",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.billing.GetTransactionsCountResponse
 */
export const GetTransactionsCountResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetTransactionsCountResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message nocloud.billing.UpdateTransactionRequest
 */
export const UpdateTransactionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateTransactionRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exec", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message nocloud.billing.CreateInvoiceRequest
 */
export const CreateInvoiceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CreateInvoiceRequest",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
    { no: 2, name: "is_send_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.billing.UpdateInvoiceRequest
 */
export const UpdateInvoiceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateInvoiceRequest",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
    { no: 2, name: "is_send_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.billing.UpdateInvoiceStatusRequest
 */
export const UpdateInvoiceStatusRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateInvoiceStatusRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(BillingStatus) },
    { no: 3, name: "params", kind: "message", T: UpdateInvoiceStatusRequest_Params },
  ],
);

/**
 * @generated from message nocloud.billing.UpdateInvoiceStatusRequest.Params
 */
export const UpdateInvoiceStatusRequest_Params = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateInvoiceStatusRequest.Params",
  () => [
    { no: 1, name: "payment_date", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "is_send_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "UpdateInvoiceStatusRequest_Params"},
);

/**
 * @generated from message nocloud.billing.GetInvoicesCountRequest
 */
export const GetInvoicesCountRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInvoicesCountRequest",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(BillingStatus), opt: true },
    { no: 4, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.billing.GetInvoicesRequest
 */
export const GetInvoicesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInvoicesRequest",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "page", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 4, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "sort", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(BillingStatus), opt: true },
    { no: 9, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message nocloud.billing.GetInvoicesCountResponse
 */
export const GetInvoicesCountResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInvoicesCountResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message nocloud.billing.UpdateTransactionResponse
 */
export const UpdateTransactionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateTransactionResponse",
  () => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message nocloud.billing.PayRequest
 */
export const PayRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.PayRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.PayResponse
 */
export const PayResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.PayResponse",
  () => [
    { no: 1, name: "payment_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.CostEstimation
 */
export const CostEstimation = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CostEstimation",
  () => [
    { no: 1, name: "resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 1 /* ScalarType.DOUBLE */} },
    { no: 2, name: "product", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * -------------------------------------
 *
 * @generated from message nocloud.billing.GetInstancesReportRequest
 */
export const GetInstancesReportRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInstancesReportRequest",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 2, name: "to", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "page", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 5, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "sort", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.billing.InstanceReport
 */
export const InstanceReport = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.InstanceReport",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "currency", kind: "message", T: Currency },
  ],
);

/**
 * @generated from message nocloud.billing.GetInstancesReportResponse
 */
export const GetInstancesReportResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInstancesReportResponse",
  () => [
    { no: 1, name: "reports", kind: "message", T: InstanceReport, repeated: true },
  ],
);

/**
 * -------------------------------------
 *
 * @generated from message nocloud.billing.GetRecordsReportsRequest
 */
export const GetRecordsReportsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetRecordsReportsRequest",
  () => [
    { no: 1, name: "page", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 2, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "sort", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 6, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.billing.GetRecordsReportsResponse
 */
export const GetRecordsReportsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetRecordsReportsResponse",
  () => [
    { no: 1, name: "records", kind: "message", T: Record, repeated: true },
    { no: 2, name: "total", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * -------------------------------------
 *
 * @generated from message nocloud.billing.GetInstancesReportsCountRequest
 */
export const GetInstancesReportsCountRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInstancesReportsCountRequest",
  [],
);

/**
 * -------------------------------------
 *
 * @generated from message nocloud.billing.GetRecordsReportsCountRequest
 */
export const GetRecordsReportsCountRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetRecordsReportsCountRequest",
  () => [
    { no: 1, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message nocloud.billing.GetReportsCountResponse
 */
export const GetReportsCountResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetReportsCountResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "unique", kind: "message", T: Value },
  ],
);

/**
 * @generated from message nocloud.billing.GetInvoiceSettingsTemplateExampleRequest
 */
export const GetInvoiceSettingsTemplateExampleRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInvoiceSettingsTemplateExampleRequest",
  () => [
    { no: 1, name: "template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_with_number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "reset_counter_mode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "issue_renewal_invoice_after", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.GetInvoiceSettingsTemplateExampleResponse
 */
export const GetInvoiceSettingsTemplateExampleResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetInvoiceSettingsTemplateExampleResponse",
  () => [
    { no: 1, name: "template_example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_template_example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "issue_renewal_invoice_after_example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.CreateTopUpBalanceInvoiceRequest
 */
export const CreateTopUpBalanceInvoiceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CreateTopUpBalanceInvoiceRequest",
  () => [
    { no: 1, name: "sum", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.Currency
 */
export const Currency = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.Currency",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message nocloud.billing.CreateCurrencyRequest
 */
export const CreateCurrencyRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CreateCurrencyRequest",
  () => [
    { no: 1, name: "currency", kind: "message", T: Currency },
  ],
);

/**
 * @generated from message nocloud.billing.CreateCurrencyResponse
 */
export const CreateCurrencyResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CreateCurrencyResponse",
  [],
);

/**
 * @generated from message nocloud.billing.CreateExchangeRateRequest
 */
export const CreateExchangeRateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CreateExchangeRateRequest",
  () => [
    { no: 1, name: "from", kind: "message", T: Currency },
    { no: 2, name: "to", kind: "message", T: Currency },
    { no: 3, name: "rate", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "commission", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.CreateExchangeRateResponse
 */
export const CreateExchangeRateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.CreateExchangeRateResponse",
  [],
);

/**
 * @generated from message nocloud.billing.UpdateExchangeRateRequest
 */
export const UpdateExchangeRateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateExchangeRateRequest",
  () => [
    { no: 1, name: "from", kind: "message", T: Currency },
    { no: 2, name: "to", kind: "message", T: Currency },
    { no: 3, name: "rate", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "commission", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.UpdateExchangeRateResponse
 */
export const UpdateExchangeRateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.UpdateExchangeRateResponse",
  [],
);

/**
 * @generated from message nocloud.billing.DeleteExchangeRateRequest
 */
export const DeleteExchangeRateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.DeleteExchangeRateRequest",
  () => [
    { no: 1, name: "from", kind: "message", T: Currency },
    { no: 2, name: "to", kind: "message", T: Currency },
  ],
);

/**
 * @generated from message nocloud.billing.DeleteExchangeRateResponse
 */
export const DeleteExchangeRateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.DeleteExchangeRateResponse",
  [],
);

/**
 * @generated from message nocloud.billing.GetCurrenciesRequest
 */
export const GetCurrenciesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetCurrenciesRequest",
  [],
);

/**
 * @generated from message nocloud.billing.GetCurrenciesResponse
 */
export const GetCurrenciesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetCurrenciesResponse",
  () => [
    { no: 1, name: "currencies", kind: "message", T: Currency, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.GetExchangeRateRequest
 */
export const GetExchangeRateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetExchangeRateRequest",
  () => [
    { no: 1, name: "from", kind: "message", T: Currency },
    { no: 2, name: "to", kind: "message", T: Currency },
  ],
);

/**
 * @generated from message nocloud.billing.GetExchangeRatesRequest
 */
export const GetExchangeRatesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetExchangeRatesRequest",
  [],
);

/**
 * @generated from message nocloud.billing.GetExchangeRateResponse
 */
export const GetExchangeRateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetExchangeRateResponse",
  () => [
    { no: 1, name: "from", kind: "message", T: Currency },
    { no: 2, name: "to", kind: "message", T: Currency },
    { no: 3, name: "rate", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "commission", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.GetExchangeRatesResponse
 */
export const GetExchangeRatesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.GetExchangeRatesResponse",
  () => [
    { no: 1, name: "rates", kind: "message", T: GetExchangeRateResponse, repeated: true },
  ],
);

/**
 * @generated from message nocloud.billing.ConversionRequest
 */
export const ConversionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ConversionRequest",
  () => [
    { no: 1, name: "from", kind: "message", T: Currency },
    { no: 2, name: "to", kind: "message", T: Currency },
    { no: 3, name: "amount", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * @generated from message nocloud.billing.ConversionResponse
 */
export const ConversionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "nocloud.billing.ConversionResponse",
  () => [
    { no: 1, name: "amount", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

