// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file billing/addons/addons.proto (package nocloud.billing.addons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message nocloud.billing.addons.Addon
 */
export declare class Addon extends Message<Addon> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: bool public = 3;
   */
  public: boolean;

  /**
   * @generated from field: string group = 4;
   */
  group: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 5;
   */
  meta: { [key: string]: Value };

  /**
   * @generated from field: string description_id = 6;
   */
  descriptionId: string;

  /**
   * @generated from field: map<int64, double> periods = 7;
   */
  periods: { [key: string]: number };

  /**
   * @generated from field: int64 created = 8;
   */
  created: bigint;

  /**
   * @generated from field: bool system = 9;
   */
  system: boolean;

  constructor(data?: PartialMessage<Addon>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.addons.Addon";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Addon;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Addon;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Addon;

  static equals(a: Addon | PlainMessage<Addon> | undefined, b: Addon | PlainMessage<Addon> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.addons.ListAddonsRequest
 */
export declare class ListAddonsRequest extends Message<ListAddonsRequest> {
  /**
   * @generated from field: optional uint64 page = 1;
   */
  page?: bigint;

  /**
   * @generated from field: optional uint64 limit = 2;
   */
  limit?: bigint;

  /**
   * @generated from field: optional string field = 3;
   */
  field?: string;

  /**
   * @generated from field: optional string sort = 4;
   */
  sort?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 5;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<ListAddonsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.addons.ListAddonsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAddonsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAddonsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAddonsRequest;

  static equals(a: ListAddonsRequest | PlainMessage<ListAddonsRequest> | undefined, b: ListAddonsRequest | PlainMessage<ListAddonsRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.addons.CountAddonsRequest
 */
export declare class CountAddonsRequest extends Message<CountAddonsRequest> {
  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 1;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<CountAddonsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.addons.CountAddonsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountAddonsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountAddonsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountAddonsRequest;

  static equals(a: CountAddonsRequest | PlainMessage<CountAddonsRequest> | undefined, b: CountAddonsRequest | PlainMessage<CountAddonsRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.addons.CountAddonsResponse
 */
export declare class CountAddonsResponse extends Message<CountAddonsResponse> {
  /**
   * @generated from field: int64 total = 1;
   */
  total: bigint;

  /**
   * @generated from field: google.protobuf.Value unique = 2;
   */
  unique?: Value;

  constructor(data?: PartialMessage<CountAddonsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.addons.CountAddonsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CountAddonsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CountAddonsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CountAddonsResponse;

  static equals(a: CountAddonsResponse | PlainMessage<CountAddonsResponse> | undefined, b: CountAddonsResponse | PlainMessage<CountAddonsResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.billing.addons.ListAddonsResponse
 */
export declare class ListAddonsResponse extends Message<ListAddonsResponse> {
  /**
   * @generated from field: repeated nocloud.billing.addons.Addon addons = 1;
   */
  addons: Addon[];

  constructor(data?: PartialMessage<ListAddonsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.billing.addons.ListAddonsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAddonsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAddonsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAddonsResponse;

  static equals(a: ListAddonsResponse | PlainMessage<ListAddonsResponse> | undefined, b: ListAddonsResponse | PlainMessage<ListAddonsResponse> | undefined): boolean;
}

