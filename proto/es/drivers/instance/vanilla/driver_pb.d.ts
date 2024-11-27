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
// @generated from file drivers/instance/vanilla/driver.proto (package nocloud.instance.driver.vanilla, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ServicesProvider } from "../../../services_providers/services_providers_pb.js";
import type { Instance, InstancesGroup } from "../../../instances/instances_pb.js";
import type { Addon } from "../../../billing/addons/addons_pb.js";

/**
 * @generated from message nocloud.instance.driver.vanilla.TestServiceProviderConfigRequest
 */
export declare class TestServiceProviderConfigRequest extends Message<TestServiceProviderConfigRequest> {
  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 1;
   */
  servicesProvider?: ServicesProvider;

  /**
   * @generated from field: bool syntax_only = 2;
   */
  syntaxOnly: boolean;

  constructor(data?: PartialMessage<TestServiceProviderConfigRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.TestServiceProviderConfigRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestServiceProviderConfigRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestServiceProviderConfigRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestServiceProviderConfigRequest;

  static equals(a: TestServiceProviderConfigRequest | PlainMessage<TestServiceProviderConfigRequest> | undefined, b: TestServiceProviderConfigRequest | PlainMessage<TestServiceProviderConfigRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.GetTypeRequest
 */
export declare class GetTypeRequest extends Message<GetTypeRequest> {
  constructor(data?: PartialMessage<GetTypeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.GetTypeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTypeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTypeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTypeRequest;

  static equals(a: GetTypeRequest | PlainMessage<GetTypeRequest> | undefined, b: GetTypeRequest | PlainMessage<GetTypeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.GetTypeResponse
 */
export declare class GetTypeResponse extends Message<GetTypeResponse> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  constructor(data?: PartialMessage<GetTypeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.GetTypeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTypeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTypeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTypeResponse;

  static equals(a: GetTypeResponse | PlainMessage<GetTypeResponse> | undefined, b: GetTypeResponse | PlainMessage<GetTypeResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.UpRequest
 */
export declare class UpRequest extends Message<UpRequest> {
  /**
   * @generated from field: nocloud.instances.InstancesGroup group = 1;
   */
  group?: InstancesGroup;

  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 2;
   */
  servicesProvider?: ServicesProvider;

  constructor(data?: PartialMessage<UpRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.UpRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpRequest;

  static equals(a: UpRequest | PlainMessage<UpRequest> | undefined, b: UpRequest | PlainMessage<UpRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.UpResponse
 */
export declare class UpResponse extends Message<UpResponse> {
  /**
   * @generated from field: nocloud.instances.InstancesGroup group = 1;
   */
  group?: InstancesGroup;

  constructor(data?: PartialMessage<UpResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.UpResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpResponse;

  static equals(a: UpResponse | PlainMessage<UpResponse> | undefined, b: UpResponse | PlainMessage<UpResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.DownRequest
 */
export declare class DownRequest extends Message<DownRequest> {
  /**
   * @generated from field: nocloud.instances.InstancesGroup group = 1;
   */
  group?: InstancesGroup;

  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 2;
   */
  servicesProvider?: ServicesProvider;

  constructor(data?: PartialMessage<DownRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.DownRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownRequest;

  static equals(a: DownRequest | PlainMessage<DownRequest> | undefined, b: DownRequest | PlainMessage<DownRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.DownResponse
 */
export declare class DownResponse extends Message<DownResponse> {
  /**
   * @generated from field: nocloud.instances.InstancesGroup group = 1;
   */
  group?: InstancesGroup;

  constructor(data?: PartialMessage<DownResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.DownResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownResponse;

  static equals(a: DownResponse | PlainMessage<DownResponse> | undefined, b: DownResponse | PlainMessage<DownResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.MonitoringRequest
 */
export declare class MonitoringRequest extends Message<MonitoringRequest> {
  /**
   * @generated from field: repeated nocloud.instances.InstancesGroup groups = 1;
   */
  groups: InstancesGroup[];

  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 2;
   */
  servicesProvider?: ServicesProvider;

  /**
   * @generated from field: bool scheduled = 3;
   */
  scheduled: boolean;

  /**
   * @generated from field: map<string, double> balance = 4;
   */
  balance: { [key: string]: number };

  /**
   * @generated from field: map<string, nocloud.billing.addons.Addon> addons = 5;
   */
  addons: { [key: string]: Addon };

  constructor(data?: PartialMessage<MonitoringRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.MonitoringRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MonitoringRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MonitoringRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MonitoringRequest;

  static equals(a: MonitoringRequest | PlainMessage<MonitoringRequest> | undefined, b: MonitoringRequest | PlainMessage<MonitoringRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.MonitoringResponse
 */
export declare class MonitoringResponse extends Message<MonitoringResponse> {
  constructor(data?: PartialMessage<MonitoringResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.MonitoringResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MonitoringResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MonitoringResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MonitoringResponse;

  static equals(a: MonitoringResponse | PlainMessage<MonitoringResponse> | undefined, b: MonitoringResponse | PlainMessage<MonitoringResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.InvokeRequest
 */
export declare class InvokeRequest extends Message<InvokeRequest> {
  /**
   * @generated from field: nocloud.instances.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 2;
   */
  servicesProvider?: ServicesProvider;

  /**
   * @generated from field: string method = 3;
   */
  method: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> params = 4;
   */
  params: { [key: string]: Value };

  constructor(data?: PartialMessage<InvokeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.InvokeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvokeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvokeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvokeRequest;

  static equals(a: InvokeRequest | PlainMessage<InvokeRequest> | undefined, b: InvokeRequest | PlainMessage<InvokeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.SpInvokeRequest
 */
export declare class SpInvokeRequest extends Message<SpInvokeRequest> {
  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 1;
   */
  servicesProvider?: ServicesProvider;

  /**
   * @generated from field: string method = 2;
   */
  method: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> params = 3;
   */
  params: { [key: string]: Value };

  constructor(data?: PartialMessage<SpInvokeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.SpInvokeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpInvokeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpInvokeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpInvokeRequest;

  static equals(a: SpInvokeRequest | PlainMessage<SpInvokeRequest> | undefined, b: SpInvokeRequest | PlainMessage<SpInvokeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.ExpirationRecord
 */
export declare class ExpirationRecord extends Message<ExpirationRecord> {
  /**
   * @generated from field: int64 expires = 1;
   */
  expires: bigint;

  /**
   * @generated from field: string product = 2;
   */
  product: string;

  /**
   * @generated from field: string resource = 3;
   */
  resource: string;

  /**
   * @generated from field: string addon = 4;
   */
  addon: string;

  /**
   * @generated from field: int64 period = 5;
   */
  period: bigint;

  constructor(data?: PartialMessage<ExpirationRecord>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.ExpirationRecord";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpirationRecord;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpirationRecord;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpirationRecord;

  static equals(a: ExpirationRecord | PlainMessage<ExpirationRecord> | undefined, b: ExpirationRecord | PlainMessage<ExpirationRecord> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.GetExpirationRequest
 */
export declare class GetExpirationRequest extends Message<GetExpirationRequest> {
  /**
   * @generated from field: nocloud.instances.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: nocloud.services_providers.ServicesProvider services_provider = 2;
   */
  servicesProvider?: ServicesProvider;

  constructor(data?: PartialMessage<GetExpirationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.GetExpirationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetExpirationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetExpirationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetExpirationRequest;

  static equals(a: GetExpirationRequest | PlainMessage<GetExpirationRequest> | undefined, b: GetExpirationRequest | PlainMessage<GetExpirationRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.instance.driver.vanilla.GetExpirationResponse
 */
export declare class GetExpirationResponse extends Message<GetExpirationResponse> {
  /**
   * @generated from field: repeated nocloud.instance.driver.vanilla.ExpirationRecord records = 1;
   */
  records: ExpirationRecord[];

  constructor(data?: PartialMessage<GetExpirationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.instance.driver.vanilla.GetExpirationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetExpirationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetExpirationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetExpirationResponse;

  static equals(a: GetExpirationResponse | PlainMessage<GetExpirationResponse> | undefined, b: GetExpirationResponse | PlainMessage<GetExpirationResponse> | undefined): boolean;
}

