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
// @generated from file instances/instances.proto (package nocloud.instances, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { NoCloudStatus } from "../statuses/statuses_pb.js";
import type { State } from "../states/states_pb.js";
import type { CostEstimation, Plan } from "../billing/billing_pb.js";
import type { Access } from "../access/access_pb.js";
import type { Software } from "../ansible/ansible_pb.js";
import type { AdminNote } from "../notes/notes_pb.js";
import type { ServicesProvider } from "../services_providers/services_providers_pb.js";

/**
 * @generated from message nocloud.instances.Instance
 */
export declare class Instance extends Message<Instance> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: nocloud.statuses.NoCloudStatus status = 3;
   */
  status: NoCloudStatus;

  /**
   * @generated from field: map<string, google.protobuf.Value> config = 4;
   */
  config: { [key: string]: Value };

  /**
   * @generated from field: map<string, google.protobuf.Value> resources = 5;
   */
  resources: { [key: string]: Value };

  /**
   * @generated from field: map<string, google.protobuf.Value> data = 6;
   */
  data: { [key: string]: Value };

  /**
   * @generated from field: nocloud.states.State state = 7;
   */
  state?: State;

  /**
   * @generated from field: string hash = 8;
   */
  hash: string;

  /**
   * @generated from field: nocloud.billing.Plan billing_plan = 9;
   */
  billingPlan?: Plan;

  /**
   * @generated from field: optional string product = 10;
   */
  product?: string;

  /**
   * @generated from field: optional nocloud.access.Access access = 11;
   */
  access?: Access;

  /**
   * @generated from field: int64 created = 12;
   */
  created: bigint;

  /**
   * Must match contain all the software from the Billing Plan
   *
   * @generated from field: repeated nocloud.ansible.Software software = 13;
   */
  software: Software[];

  /**
   * @generated from field: repeated nocloud.notes.AdminNote admin_notes = 14;
   */
  adminNotes: AdminNote[];

  /**
   * @generated from field: int64 deleted = 15;
   */
  deleted: bigint;

  /**
   * @generated from field: optional int64 period = 16;
   */
  period?: bigint;

  /**
   * @generated from field: double estimate = 17;
   */
  estimate: number;

  /**
   * @generated from field: repeated string addons = 18;
   */
  addons: string[];

  constructor(data?: PartialMessage<Instance>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.Instance";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Instance;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Instance;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Instance;

  static equals(a: Instance | PlainMessage<Instance> | undefined, b: Instance | PlainMessage<Instance> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.InstancesGroup
 */
export declare class InstancesGroup extends Message<InstancesGroup> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string type = 2;
   */
  type: string;

  /**
   * @generated from field: string title = 3;
   */
  title: string;

  /**
   * @generated from field: nocloud.statuses.NoCloudStatus status = 4;
   */
  status: NoCloudStatus;

  /**
   * @generated from field: map<string, google.protobuf.Value> config = 5;
   */
  config: { [key: string]: Value };

  /**
   * @generated from field: repeated nocloud.instances.Instance instances = 6;
   */
  instances: Instance[];

  /**
   * @generated from field: map<string, google.protobuf.Value> resources = 7;
   */
  resources: { [key: string]: Value };

  /**
   * @generated from field: map<string, google.protobuf.Value> data = 8;
   */
  data: { [key: string]: Value };

  /**
   * @generated from field: string hash = 9;
   */
  hash: string;

  /**
   * @generated from field: optional string sp = 10;
   */
  sp?: string;

  /**
   * @generated from field: optional nocloud.access.Access access = 11;
   */
  access?: Access;

  constructor(data?: PartialMessage<InstancesGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.InstancesGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstancesGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstancesGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstancesGroup;

  static equals(a: InstancesGroup | PlainMessage<InstancesGroup> | undefined, b: InstancesGroup | PlainMessage<InstancesGroup> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.Context
 */
export declare class Context extends Message<Context> {
  /**
   * @generated from field: string instance = 1;
   */
  instance: string;

  /**
   * @generated from field: string sp = 2;
   */
  sp: string;

  /**
   * @generated from field: string event = 3;
   */
  event: string;

  constructor(data?: PartialMessage<Context>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.Context";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Context;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Context;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Context;

  static equals(a: Context | PlainMessage<Context> | undefined, b: Context | PlainMessage<Context> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TestInstancesGroupConfigRequest
 */
export declare class TestInstancesGroupConfigRequest extends Message<TestInstancesGroupConfigRequest> {
  /**
   * @generated from field: nocloud.instances.InstancesGroup group = 1;
   */
  group?: InstancesGroup;

  /**
   * @generated from field: nocloud.services_providers.ServicesProvider sp = 2;
   */
  sp?: ServicesProvider;

  /**
   * UUIDs of instances to estimate cost
   *
   * @generated from field: repeated string estimate_instances = 3;
   */
  estimateInstances: string[];

  constructor(data?: PartialMessage<TestInstancesGroupConfigRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TestInstancesGroupConfigRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestInstancesGroupConfigRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestInstancesGroupConfigRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestInstancesGroupConfigRequest;

  static equals(a: TestInstancesGroupConfigRequest | PlainMessage<TestInstancesGroupConfigRequest> | undefined, b: TestInstancesGroupConfigRequest | PlainMessage<TestInstancesGroupConfigRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TestInstancesGroupConfigError
 */
export declare class TestInstancesGroupConfigError extends Message<TestInstancesGroupConfigError> {
  /**
   * @generated from field: string error = 1;
   */
  error: string;

  /**
   * @generated from field: string instance = 2;
   */
  instance: string;

  constructor(data?: PartialMessage<TestInstancesGroupConfigError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TestInstancesGroupConfigError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestInstancesGroupConfigError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestInstancesGroupConfigError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestInstancesGroupConfigError;

  static equals(a: TestInstancesGroupConfigError | PlainMessage<TestInstancesGroupConfigError> | undefined, b: TestInstancesGroupConfigError | PlainMessage<TestInstancesGroupConfigError> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.InstanceCostEstimation
 */
export declare class InstanceCostEstimation extends Message<InstanceCostEstimation> {
  /**
   * @generated from field: nocloud.billing.CostEstimation down_payment = 1;
   */
  downPayment?: CostEstimation;

  /**
   * @generated from field: nocloud.billing.CostEstimation general = 2;
   */
  general?: CostEstimation;

  constructor(data?: PartialMessage<InstanceCostEstimation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.InstanceCostEstimation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstanceCostEstimation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstanceCostEstimation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstanceCostEstimation;

  static equals(a: InstanceCostEstimation | PlainMessage<InstanceCostEstimation> | undefined, b: InstanceCostEstimation | PlainMessage<InstanceCostEstimation> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TestInstancesGroupConfigResponse
 */
export declare class TestInstancesGroupConfigResponse extends Message<TestInstancesGroupConfigResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: repeated nocloud.instances.TestInstancesGroupConfigError errors = 2;
   */
  errors: TestInstancesGroupConfigError[];

  /**
   * @generated from field: map<string, nocloud.instances.InstanceCostEstimation> estimations = 3;
   */
  estimations: { [key: string]: InstanceCostEstimation };

  constructor(data?: PartialMessage<TestInstancesGroupConfigResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TestInstancesGroupConfigResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestInstancesGroupConfigResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestInstancesGroupConfigResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestInstancesGroupConfigResponse;

  static equals(a: TestInstancesGroupConfigResponse | PlainMessage<TestInstancesGroupConfigResponse> | undefined, b: TestInstancesGroupConfigResponse | PlainMessage<TestInstancesGroupConfigResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.InvokeRequest
 */
export declare class InvokeRequest extends Message<InvokeRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string method = 2;
   */
  method: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> params = 3;
   */
  params: { [key: string]: Value };

  constructor(data?: PartialMessage<InvokeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.InvokeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvokeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvokeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvokeRequest;

  static equals(a: InvokeRequest | PlainMessage<InvokeRequest> | undefined, b: InvokeRequest | PlainMessage<InvokeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.InvokeResponse
 */
export declare class InvokeResponse extends Message<InvokeResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 2;
   */
  meta: { [key: string]: Value };

  constructor(data?: PartialMessage<InvokeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.InvokeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvokeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvokeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvokeResponse;

  static equals(a: InvokeResponse | PlainMessage<InvokeResponse> | undefined, b: InvokeResponse | PlainMessage<InvokeResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.DeleteRequest
 */
export declare class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.DeleteRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRequest;

  static equals(a: DeleteRequest | PlainMessage<DeleteRequest> | undefined, b: DeleteRequest | PlainMessage<DeleteRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.DeleteResponse
 */
export declare class DeleteResponse extends Message<DeleteResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 2;
   */
  meta: { [key: string]: Value };

  constructor(data?: PartialMessage<DeleteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.DeleteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse;

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TransferIGRequest
 */
export declare class TransferIGRequest extends Message<TransferIGRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string service = 2;
   */
  service: string;

  constructor(data?: PartialMessage<TransferIGRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TransferIGRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferIGRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferIGRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferIGRequest;

  static equals(a: TransferIGRequest | PlainMessage<TransferIGRequest> | undefined, b: TransferIGRequest | PlainMessage<TransferIGRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TransferIGResponse
 */
export declare class TransferIGResponse extends Message<TransferIGResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 2;
   */
  meta: { [key: string]: Value };

  constructor(data?: PartialMessage<TransferIGResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TransferIGResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferIGResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferIGResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferIGResponse;

  static equals(a: TransferIGResponse | PlainMessage<TransferIGResponse> | undefined, b: TransferIGResponse | PlainMessage<TransferIGResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TransferInstanceRequest
 */
export declare class TransferInstanceRequest extends Message<TransferInstanceRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string ig = 2;
   */
  ig: string;

  constructor(data?: PartialMessage<TransferInstanceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TransferInstanceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferInstanceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferInstanceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferInstanceRequest;

  static equals(a: TransferInstanceRequest | PlainMessage<TransferInstanceRequest> | undefined, b: TransferInstanceRequest | PlainMessage<TransferInstanceRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.TransferInstanceResponse
 */
export declare class TransferInstanceResponse extends Message<TransferInstanceResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 2;
   */
  meta: { [key: string]: Value };

  constructor(data?: PartialMessage<TransferInstanceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.TransferInstanceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferInstanceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferInstanceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferInstanceResponse;

  static equals(a: TransferInstanceResponse | PlainMessage<TransferInstanceResponse> | undefined, b: TransferInstanceResponse | PlainMessage<TransferInstanceResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.ObjectData
 */
export declare class ObjectData extends Message<ObjectData> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> data = 2;
   */
  data: { [key: string]: Value };

  constructor(data?: PartialMessage<ObjectData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.ObjectData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectData;

  static equals(a: ObjectData | PlainMessage<ObjectData> | undefined, b: ObjectData | PlainMessage<ObjectData> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.ListInstancesRequest
 */
export declare class ListInstancesRequest extends Message<ListInstancesRequest> {
  /**
   * @generated from field: optional uint64 page = 1;
   */
  page?: bigint;

  /**
   * @generated from field: optional uint64 limit = 2;
   */
  limit?: bigint;

  /**
   * Sort field
   *
   * @generated from field: optional string field = 3;
   */
  field?: string;

  /**
   * Sort direction
   *
   * @generated from field: optional string sort = 4;
   */
  sort?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 5;
   */
  filters: { [key: string]: Value };

  /**
   * Sort custom order
   *
   * @generated from field: optional google.protobuf.Value custom_order = 6;
   */
  customOrder?: Value;

  constructor(data?: PartialMessage<ListInstancesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.ListInstancesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInstancesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInstancesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInstancesRequest;

  static equals(a: ListInstancesRequest | PlainMessage<ListInstancesRequest> | undefined, b: ListInstancesRequest | PlainMessage<ListInstancesRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.ResponseInstance
 */
export declare class ResponseInstance extends Message<ResponseInstance> {
  /**
   * @generated from field: nocloud.instances.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: string service = 2;
   */
  service: string;

  /**
   * @generated from field: string sp = 3;
   */
  sp: string;

  /**
   * @generated from field: string type = 4;
   */
  type: string;

  /**
   * @generated from field: string account = 5;
   */
  account: string;

  /**
   * @generated from field: string namespace = 6;
   */
  namespace: string;

  constructor(data?: PartialMessage<ResponseInstance>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.ResponseInstance";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseInstance;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseInstance;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseInstance;

  static equals(a: ResponseInstance | PlainMessage<ResponseInstance> | undefined, b: ResponseInstance | PlainMessage<ResponseInstance> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.GetUniqueRequest
 */
export declare class GetUniqueRequest extends Message<GetUniqueRequest> {
  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 5;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<GetUniqueRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.GetUniqueRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUniqueRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUniqueRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUniqueRequest;

  static equals(a: GetUniqueRequest | PlainMessage<GetUniqueRequest> | undefined, b: GetUniqueRequest | PlainMessage<GetUniqueRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.GetUniqueResponse
 */
export declare class GetUniqueResponse extends Message<GetUniqueResponse> {
  /**
   * @generated from field: uint64 total = 1;
   */
  total: bigint;

  /**
   * @generated from field: google.protobuf.Value unique = 2;
   */
  unique?: Value;

  constructor(data?: PartialMessage<GetUniqueResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.GetUniqueResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUniqueResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUniqueResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUniqueResponse;

  static equals(a: GetUniqueResponse | PlainMessage<GetUniqueResponse> | undefined, b: GetUniqueResponse | PlainMessage<GetUniqueResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.ListInstancesResponse
 */
export declare class ListInstancesResponse extends Message<ListInstancesResponse> {
  /**
   * @generated from field: repeated nocloud.instances.ResponseInstance pool = 1;
   */
  pool: ResponseInstance[];

  /**
   * @generated from field: int64 count = 2;
   */
  count: bigint;

  constructor(data?: PartialMessage<ListInstancesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.ListInstancesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInstancesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInstancesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInstancesResponse;

  static equals(a: ListInstancesResponse | PlainMessage<ListInstancesResponse> | undefined, b: ListInstancesResponse | PlainMessage<ListInstancesResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.CreateRequest
 */
export declare class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: string ig = 1;
   */
  ig: string;

  /**
   * @generated from field: nocloud.instances.Instance instance = 2;
   */
  instance?: Instance;

  constructor(data?: PartialMessage<CreateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.CreateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRequest;

  static equals(a: CreateRequest | PlainMessage<CreateRequest> | undefined, b: CreateRequest | PlainMessage<CreateRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.CreateResponse
 */
export declare class CreateResponse extends Message<CreateResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<CreateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.CreateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateResponse;

  static equals(a: CreateResponse | PlainMessage<CreateResponse> | undefined, b: CreateResponse | PlainMessage<CreateResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.UpdateRequest
 */
export declare class UpdateRequest extends Message<UpdateRequest> {
  /**
   * @generated from field: nocloud.instances.Instance instance = 1;
   */
  instance?: Instance;

  constructor(data?: PartialMessage<UpdateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.UpdateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRequest;

  static equals(a: UpdateRequest | PlainMessage<UpdateRequest> | undefined, b: UpdateRequest | PlainMessage<UpdateRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instances.UpdateResponse
 */
export declare class UpdateResponse extends Message<UpdateResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<UpdateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instances.UpdateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateResponse;

  static equals(a: UpdateResponse | PlainMessage<UpdateResponse> | undefined, b: UpdateResponse | PlainMessage<UpdateResponse> | undefined): boolean;
}

