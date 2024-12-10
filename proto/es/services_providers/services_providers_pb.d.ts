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

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { State } from "../states/states_pb.js";
import type { Access } from "../access/access_pb.js";
import type { NoCloudStatus } from "../statuses/statuses_pb.js";

/**
 * @generated from message nocloud.services_providers.Var
 */
export declare class Var extends Message<Var> {
  /**
   * @generated from field: map<string, google.protobuf.Value> value = 1;
   */
  value: { [key: string]: Value };

  constructor(data?: PartialMessage<Var>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.Var";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Var;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Var;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Var;

  static equals(a: Var | PlainMessage<Var> | undefined, b: Var | PlainMessage<Var> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ProxyConf
 */
export declare class ProxyConf extends Message<ProxyConf> {
  /**
   * @generated from field: optional string socket = 1;
   */
  socket?: string;

  constructor(data?: PartialMessage<ProxyConf>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ProxyConf";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProxyConf;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProxyConf;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProxyConf;

  static equals(a: ProxyConf | PlainMessage<ProxyConf> | undefined, b: ProxyConf | PlainMessage<ProxyConf> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.LocationConf
 */
export declare class LocationConf extends Message<LocationConf> {
  /**
   * @generated from field: float x = 1;
   */
  x: number;

  /**
   * @generated from field: float y = 2;
   */
  y: number;

  /**
   * @generated from field: string id = 3;
   */
  id: string;

  /**
   * @generated from field: string title = 4;
   */
  title: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> extra = 5;
   */
  extra: { [key: string]: Value };

  /**
   * @generated from field: string type = 6;
   */
  type: string;

  constructor(data?: PartialMessage<LocationConf>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.LocationConf";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationConf;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationConf;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationConf;

  static equals(a: LocationConf | PlainMessage<LocationConf> | undefined, b: LocationConf | PlainMessage<LocationConf> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.Hook
 */
export declare class Hook extends Message<Hook> {
  /**
   * @generated from field: string playbook = 1;
   */
  playbook: string;

  /**
   * @generated from field: map<string, string> vars = 2;
   */
  vars: { [key: string]: string };

  constructor(data?: PartialMessage<Hook>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.Hook";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook;

  static equals(a: Hook | PlainMessage<Hook> | undefined, b: Hook | PlainMessage<Hook> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ServicesProvider
 */
export declare class ServicesProvider extends Message<ServicesProvider> {
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
   * json
   *
   * @generated from field: map<string, google.protobuf.Value> secrets = 4;
   */
  secrets: { [key: string]: Value };

  /**
   * @generated from field: map<string, nocloud.services_providers.Var> vars = 5;
   */
  vars: { [key: string]: Var };

  /**
   * @generated from field: map<string, google.protobuf.Struct> extentions = 6;
   */
  extentions: { [key: string]: Struct };

  /**
   * @generated from field: nocloud.states.State state = 7;
   */
  state?: State;

  /**
   * @generated from field: map<string, google.protobuf.Value> public_data = 8;
   */
  publicData: { [key: string]: Value };

  /**
   * If set to true, the provider will be visible to all users
   *
   * @generated from field: bool public = 9;
   */
  public: boolean;

  /**
   * @generated from field: optional nocloud.services_providers.ProxyConf proxy = 10;
   */
  proxy?: ProxyConf;

  /**
   * @generated from field: repeated nocloud.services_providers.LocationConf locations = 11;
   */
  locations: LocationConf[];

  /**
   * @generated from field: optional nocloud.access.Access access = 12;
   */
  access?: Access;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 13;
   */
  meta: { [key: string]: Value };

  /**
   * @generated from field: nocloud.statuses.NoCloudStatus status = 14;
   */
  status: NoCloudStatus;

  /**
   * @generated from field: map<string, nocloud.services_providers.Hook> hooks = 15;
   */
  hooks: { [key: string]: Hook };

  constructor(data?: PartialMessage<ServicesProvider>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ServicesProvider";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServicesProvider;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServicesProvider;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServicesProvider;

  static equals(a: ServicesProvider | PlainMessage<ServicesProvider> | undefined, b: ServicesProvider | PlainMessage<ServicesProvider> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.TestResponse
 */
export declare class TestResponse extends Message<TestResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<TestResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.TestResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestResponse;

  static equals(a: TestResponse | PlainMessage<TestResponse> | undefined, b: TestResponse | PlainMessage<TestResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.GetRequest
 */
export declare class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.GetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest;

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ListRequest
 */
export declare class ListRequest extends Message<ListRequest> {
  /**
   * @generated from field: bool anonymously = 1;
   */
  anonymously: boolean;

  /**
   * @generated from field: bool show_deleted = 2;
   */
  showDeleted: boolean;

  /**
   * @generated from field: repeated string exclude_uuids = 3;
   */
  excludeUuids: string[];

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 4;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<ListRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ListRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest;

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ListResponse
 */
export declare class ListResponse extends Message<ListResponse> {
  /**
   * @generated from field: repeated nocloud.services_providers.ServicesProvider pool = 1;
   */
  pool: ServicesProvider[];

  constructor(data?: PartialMessage<ListResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ListResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse;

  static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.DeleteRequest
 */
export declare class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.DeleteRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRequest;

  static equals(a: DeleteRequest | PlainMessage<DeleteRequest> | undefined, b: DeleteRequest | PlainMessage<DeleteRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.DeleteResponse
 */
export declare class DeleteResponse extends Message<DeleteResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: repeated string services = 2;
   */
  services: string[];

  constructor(data?: PartialMessage<DeleteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.DeleteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse;

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ListExtentionsResponse
 */
export declare class ListExtentionsResponse extends Message<ListExtentionsResponse> {
  /**
   * @generated from field: repeated string types = 1;
   */
  types: string[];

  constructor(data?: PartialMessage<ListExtentionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ListExtentionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExtentionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExtentionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExtentionsResponse;

  static equals(a: ListExtentionsResponse | PlainMessage<ListExtentionsResponse> | undefined, b: ListExtentionsResponse | PlainMessage<ListExtentionsResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.BindPlanRequest
 */
export declare class BindPlanRequest extends Message<BindPlanRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: repeated string plans = 2;
   */
  plans: string[];

  constructor(data?: PartialMessage<BindPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.BindPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BindPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BindPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BindPlanRequest;

  static equals(a: BindPlanRequest | PlainMessage<BindPlanRequest> | undefined, b: BindPlanRequest | PlainMessage<BindPlanRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.BindPlanResponse
 */
export declare class BindPlanResponse extends Message<BindPlanResponse> {
  constructor(data?: PartialMessage<BindPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.BindPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BindPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BindPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BindPlanResponse;

  static equals(a: BindPlanResponse | PlainMessage<BindPlanResponse> | undefined, b: BindPlanResponse | PlainMessage<BindPlanResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.UnbindPlanRequest
 */
export declare class UnbindPlanRequest extends Message<UnbindPlanRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: repeated string plans = 2;
   */
  plans: string[];

  constructor(data?: PartialMessage<UnbindPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.UnbindPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnbindPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnbindPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnbindPlanRequest;

  static equals(a: UnbindPlanRequest | PlainMessage<UnbindPlanRequest> | undefined, b: UnbindPlanRequest | PlainMessage<UnbindPlanRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.UnbindPlanResponse
 */
export declare class UnbindPlanResponse extends Message<UnbindPlanResponse> {
  constructor(data?: PartialMessage<UnbindPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.UnbindPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnbindPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnbindPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnbindPlanResponse;

  static equals(a: UnbindPlanResponse | PlainMessage<UnbindPlanResponse> | undefined, b: UnbindPlanResponse | PlainMessage<UnbindPlanResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.InvokeRequest
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
  static readonly typeName = "nocloud.services_providers.InvokeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvokeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvokeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvokeRequest;

  static equals(a: InvokeRequest | PlainMessage<InvokeRequest> | undefined, b: InvokeRequest | PlainMessage<InvokeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.InvokeResponse
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
  static readonly typeName = "nocloud.services_providers.InvokeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvokeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvokeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvokeResponse;

  static equals(a: InvokeResponse | PlainMessage<InvokeResponse> | undefined, b: InvokeResponse | PlainMessage<InvokeResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.PrepSP
 */
export declare class PrepSP extends Message<PrepSP> {
  /**
   * SP Base config
   *
   * @generated from field: nocloud.services_providers.ServicesProvider sp = 1;
   */
  sp?: ServicesProvider;

  /**
   * Extra Params not related to SP or method or alike
   *
   * @generated from field: map<string, google.protobuf.Value> extra = 2;
   */
  extra: { [key: string]: Value };

  constructor(data?: PartialMessage<PrepSP>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.PrepSP";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrepSP;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrepSP;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrepSP;

  static equals(a: PrepSP | PlainMessage<PrepSP> | undefined, b: PrepSP | PlainMessage<PrepSP> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.GetTypeRequest
 */
export declare class GetTypeRequest extends Message<GetTypeRequest> {
  constructor(data?: PartialMessage<GetTypeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.GetTypeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTypeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTypeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTypeRequest;

  static equals(a: GetTypeRequest | PlainMessage<GetTypeRequest> | undefined, b: GetTypeRequest | PlainMessage<GetTypeRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.GetTypeResponse
 */
export declare class GetTypeResponse extends Message<GetTypeResponse> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  constructor(data?: PartialMessage<GetTypeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.GetTypeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTypeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTypeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTypeResponse;

  static equals(a: GetTypeResponse | PlainMessage<GetTypeResponse> | undefined, b: GetTypeResponse | PlainMessage<GetTypeResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ServicesProvidersExtentionData
 */
export declare class ServicesProvidersExtentionData extends Message<ServicesProvidersExtentionData> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: google.protobuf.Struct data = 2;
   */
  data?: Struct;

  constructor(data?: PartialMessage<ServicesProvidersExtentionData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ServicesProvidersExtentionData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServicesProvidersExtentionData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServicesProvidersExtentionData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServicesProvidersExtentionData;

  static equals(a: ServicesProvidersExtentionData | PlainMessage<ServicesProvidersExtentionData> | undefined, b: ServicesProvidersExtentionData | PlainMessage<ServicesProvidersExtentionData> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.GenericResponse
 */
export declare class GenericResponse extends Message<GenericResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<GenericResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.GenericResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenericResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenericResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenericResponse;

  static equals(a: GenericResponse | PlainMessage<GenericResponse> | undefined, b: GenericResponse | PlainMessage<GenericResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ShowcaseItem
 */
export declare class ShowcaseItem extends Message<ShowcaseItem> {
  /**
   * @generated from field: optional string plan = 1;
   */
  plan?: string;

  /**
   * @generated from field: string services_provider = 2;
   */
  servicesProvider: string;

  /**
   * @generated from field: repeated string locations = 3;
   */
  locations: string[];

  constructor(data?: PartialMessage<ShowcaseItem>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ShowcaseItem";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShowcaseItem;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShowcaseItem;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShowcaseItem;

  static equals(a: ShowcaseItem | PlainMessage<ShowcaseItem> | undefined, b: ShowcaseItem | PlainMessage<ShowcaseItem> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.Showcase
 */
export declare class Showcase extends Message<Showcase> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: string icon = 3;
   */
  icon: string;

  /**
   * @generated from field: repeated nocloud.services_providers.ShowcaseItem items = 4;
   */
  items: ShowcaseItem[];

  /**
   * @generated from field: google.protobuf.Value promo = 5;
   */
  promo?: Value;

  /**
   * @generated from field: bool primary = 6;
   */
  primary: boolean;

  /**
   * @generated from field: bool public = 7;
   */
  public: boolean;

  /**
   * @generated from field: repeated nocloud.services_providers.LocationConf locations = 8;
   */
  locations: LocationConf[];

  /**
   * @generated from field: optional int32 sorter = 9;
   */
  sorter?: number;

  constructor(data?: PartialMessage<Showcase>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.Showcase";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Showcase;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Showcase;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Showcase;

  static equals(a: Showcase | PlainMessage<Showcase> | undefined, b: Showcase | PlainMessage<Showcase> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.Showcases
 */
export declare class Showcases extends Message<Showcases> {
  /**
   * @generated from field: repeated nocloud.services_providers.Showcase showcases = 1;
   */
  showcases: Showcase[];

  constructor(data?: PartialMessage<Showcases>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.Showcases";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Showcases;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Showcases;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Showcases;

  static equals(a: Showcases | PlainMessage<Showcases> | undefined, b: Showcases | PlainMessage<Showcases> | undefined): boolean;
}

/**
 * @generated from message nocloud.services_providers.ObjectPublicData
 */
export declare class ObjectPublicData extends Message<ObjectPublicData> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> data = 2;
   */
  data: { [key: string]: Value };

  constructor(data?: PartialMessage<ObjectPublicData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.services_providers.ObjectPublicData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectPublicData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectPublicData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectPublicData;

  static equals(a: ObjectPublicData | PlainMessage<ObjectPublicData> | undefined, b: ObjectPublicData | PlainMessage<ObjectPublicData> | undefined): boolean;
}

