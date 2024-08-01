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
// @generated from file services/services.proto (package nocloud.services, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { NoCloudStatus } from "../statuses/statuses_pb.js";
import type { InstancesGroup } from "../instances/instances_pb.js";
import type { Access } from "../access/access_pb.js";

/**
 * @generated from message nocloud.services.Service
 */
export declare class Service extends Message<Service> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * @generated from field: string title = 3;
   */
  title: string;

  /**
   * @generated from field: nocloud.statuses.NoCloudStatus status = 4;
   */
  status: NoCloudStatus;

  /**
   * @generated from field: map<string, google.protobuf.Value> context = 5;
   */
  context: { [key: string]: Value };

  /**
   * @generated from field: repeated nocloud.instances.InstancesGroup instances_groups = 6;
   */
  instancesGroups: InstancesGroup[];

  /**
   * @generated from field: string hash = 7;
   */
  hash: string;

  /**
   * @generated from field: optional nocloud.access.Access access = 8;
   */
  access?: Access;

  constructor(data?: PartialMessage<Service>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.Service";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Service;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Service;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Service;

  static equals(a: Service | PlainMessage<Service> | undefined, b: Service | PlainMessage<Service> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.Services
 */
export declare class Services extends Message<Services> {
  /**
   * @generated from field: repeated nocloud.services.Service pool = 1;
   */
  pool: Service[];

  /**
   * @generated from field: int64 count = 2;
   */
  count: bigint;

  constructor(data?: PartialMessage<Services>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.Services";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Services;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Services;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Services;

  static equals(a: Services | PlainMessage<Services> | undefined, b: Services | PlainMessage<Services> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.TestConfigError
 */
export declare class TestConfigError extends Message<TestConfigError> {
  /**
   * @generated from field: string error = 1;
   */
  error: string;

  /**
   * @generated from field: string instance_group = 2;
   */
  instanceGroup: string;

  /**
   * @generated from field: string instance = 3;
   */
  instance: string;

  constructor(data?: PartialMessage<TestConfigError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.TestConfigError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestConfigError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestConfigError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestConfigError;

  static equals(a: TestConfigError | PlainMessage<TestConfigError> | undefined, b: TestConfigError | PlainMessage<TestConfigError> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.TestConfigResponse
 */
export declare class TestConfigResponse extends Message<TestConfigResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: repeated nocloud.services.TestConfigError errors = 2;
   */
  errors: TestConfigError[];

  constructor(data?: PartialMessage<TestConfigResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.TestConfigResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestConfigResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestConfigResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestConfigResponse;

  static equals(a: TestConfigResponse | PlainMessage<TestConfigResponse> | undefined, b: TestConfigResponse | PlainMessage<TestConfigResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.CreateRequest
 */
export declare class CreateRequest extends Message<CreateRequest> {
  /**
   * @generated from field: nocloud.services.Service service = 1;
   */
  service?: Service;

  /**
   * @generated from field: string namespace = 2;
   */
  namespace: string;

  constructor(data?: PartialMessage<CreateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.CreateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRequest;

  static equals(a: CreateRequest | PlainMessage<CreateRequest> | undefined, b: CreateRequest | PlainMessage<CreateRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.DeleteRequest
 */
export declare class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.DeleteRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRequest;

  static equals(a: DeleteRequest | PlainMessage<DeleteRequest> | undefined, b: DeleteRequest | PlainMessage<DeleteRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.DeleteResponse
 */
export declare class DeleteResponse extends Message<DeleteResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<DeleteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.DeleteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse;

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.UpRequest
 */
export declare class UpRequest extends Message<UpRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<UpRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.UpRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpRequest;

  static equals(a: UpRequest | PlainMessage<UpRequest> | undefined, b: UpRequest | PlainMessage<UpRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.UpError
 */
export declare class UpError extends Message<UpError> {
  /**
   * @generated from field: map<string, string> data = 1;
   */
  data: { [key: string]: string };

  constructor(data?: PartialMessage<UpError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.UpError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpError;

  static equals(a: UpError | PlainMessage<UpError> | undefined, b: UpError | PlainMessage<UpError> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.UpResponse
 */
export declare class UpResponse extends Message<UpResponse> {
  /**
   * @generated from field: repeated nocloud.services.UpError errors = 1;
   */
  errors: UpError[];

  constructor(data?: PartialMessage<UpResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.UpResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpResponse;

  static equals(a: UpResponse | PlainMessage<UpResponse> | undefined, b: UpResponse | PlainMessage<UpResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.DownRequest
 */
export declare class DownRequest extends Message<DownRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DownRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.DownRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownRequest;

  static equals(a: DownRequest | PlainMessage<DownRequest> | undefined, b: DownRequest | PlainMessage<DownRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.DownResponse
 */
export declare class DownResponse extends Message<DownResponse> {
  constructor(data?: PartialMessage<DownResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.DownResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownResponse;

  static equals(a: DownResponse | PlainMessage<DownResponse> | undefined, b: DownResponse | PlainMessage<DownResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.ListRequest
 */
export declare class ListRequest extends Message<ListRequest> {
  /**
   * @generated from field: optional bool show_deleted = 1;
   */
  showDeleted?: boolean;

  /**
   * @generated from field: optional string namespace = 2;
   */
  namespace?: string;

  /**
   * @generated from field: optional int32 depth = 3;
   */
  depth?: number;

  /**
   * @generated from field: optional uint64 page = 4;
   */
  page?: bigint;

  /**
   * @generated from field: optional uint64 limit = 5;
   */
  limit?: bigint;

  /**
   * @generated from field: optional string field = 6;
   */
  field?: string;

  /**
   * @generated from field: optional string sort = 7;
   */
  sort?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 8;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<ListRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.ListRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest;

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.GetRequest
 */
export declare class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: optional string show_deleted = 2;
   */
  showDeleted?: string;

  constructor(data?: PartialMessage<GetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.GetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest;

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.GetStatesRequest
 */
export declare class GetStatesRequest extends Message<GetStatesRequest> {
  /**
   * Service UUID
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetStatesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.GetStatesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStatesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStatesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStatesRequest;

  static equals(a: GetStatesRequest | PlainMessage<GetStatesRequest> | undefined, b: GetStatesRequest | PlainMessage<GetStatesRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.StreamRequest
 */
export declare class StreamRequest extends Message<StreamRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<StreamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.StreamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamRequest;

  static equals(a: StreamRequest | PlainMessage<StreamRequest> | undefined, b: StreamRequest | PlainMessage<StreamRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.SuspendRequest
 */
export declare class SuspendRequest extends Message<SuspendRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<SuspendRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.SuspendRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuspendRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuspendRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuspendRequest;

  static equals(a: SuspendRequest | PlainMessage<SuspendRequest> | undefined, b: SuspendRequest | PlainMessage<SuspendRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.UnsuspendRequest
 */
export declare class UnsuspendRequest extends Message<UnsuspendRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<UnsuspendRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.UnsuspendRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnsuspendRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnsuspendRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnsuspendRequest;

  static equals(a: UnsuspendRequest | PlainMessage<UnsuspendRequest> | undefined, b: UnsuspendRequest | PlainMessage<UnsuspendRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.SuspendResponse
 */
export declare class SuspendResponse extends Message<SuspendResponse> {
  constructor(data?: PartialMessage<SuspendResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.SuspendResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuspendResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuspendResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuspendResponse;

  static equals(a: SuspendResponse | PlainMessage<SuspendResponse> | undefined, b: SuspendResponse | PlainMessage<SuspendResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services.UnsuspendResponse
 */
export declare class UnsuspendResponse extends Message<UnsuspendResponse> {
  constructor(data?: PartialMessage<UnsuspendResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services.UnsuspendResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnsuspendResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnsuspendResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnsuspendResponse;

  static equals(a: UnsuspendResponse | PlainMessage<UnsuspendResponse> | undefined, b: UnsuspendResponse | PlainMessage<UnsuspendResponse> | undefined): boolean;
}

