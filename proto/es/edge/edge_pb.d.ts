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
// @generated from file edge/edge.proto (package nocloud.edge, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message nocloud.edge.TestRequest
 */
export declare class TestRequest extends Message<TestRequest> {
  constructor(data?: PartialMessage<TestRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.edge.TestRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestRequest;

  static equals(a: TestRequest | PlainMessage<TestRequest> | undefined, b: TestRequest | PlainMessage<TestRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.edge.TestResponse
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
  static readonly typeName = "nocloud.edge.TestResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestResponse;

  static equals(a: TestResponse | PlainMessage<TestResponse> | undefined, b: TestResponse | PlainMessage<TestResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.edge.Empty
 */
export declare class Empty extends Message<Empty> {
  constructor(data?: PartialMessage<Empty>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.edge.Empty";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty;

  static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean;
}

/**
 * @generated from message nocloud.edge.ConfigData
 */
export declare class ConfigData extends Message<ConfigData> {
  /**
   * @generated from field: string field = 1;
   */
  field: string;

  /**
   * @generated from field: google.protobuf.Value value = 2;
   */
  value?: Value;

  constructor(data?: PartialMessage<ConfigData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.edge.ConfigData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigData;

  static equals(a: ConfigData | PlainMessage<ConfigData> | undefined, b: ConfigData | PlainMessage<ConfigData> | undefined): boolean;
}

