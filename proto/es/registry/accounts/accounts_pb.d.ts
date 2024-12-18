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

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Currency } from "../../billing/billing_pb.js";
import type { Access } from "../../access/access_pb.js";
import type { AdminNote } from "../../notes/notes_pb.js";

/**
 * @generated from enum nocloud.registry.accounts.AccountStatus
 */
export declare enum AccountStatus {
  /**
   * @generated from enum value: ACTIVE = 0;
   */
  ACTIVE = 0,

  /**
   * @generated from enum value: LOCK = 1;
   */
  LOCK = 1,

  /**
   * @generated from enum value: PERMANENT_LOCK = 2;
   */
  PERMANENT_LOCK = 2,
}

/**
 * @generated from message nocloud.registry.accounts.Credentials
 */
export declare class Credentials extends Message<Credentials> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: repeated string data = 2;
   */
  data: string[];

  constructor(data?: PartialMessage<Credentials>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.Credentials";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Credentials;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Credentials;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Credentials;

  static equals(a: Credentials | PlainMessage<Credentials> | undefined, b: Credentials | PlainMessage<Credentials> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.CreateRequest
 */
export declare class CreateRequest extends Message<CreateRequest> {
  /**
   * New Account title
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * Credentials for New Account
   *
   * @generated from field: nocloud.registry.accounts.Credentials auth = 2;
   */
  auth?: Credentials;

  /**
   * Namespace to put Account under
   *
   * @generated from field: string namespace = 3;
   */
  namespace: string;

  /**
   * Account access level to parent namespace
   *
   * @generated from field: optional int32 access = 4;
   */
  access?: number;

  /**
   * Account Balance Currency
   *
   * @generated from field: nocloud.billing.Currency currency = 5;
   */
  currency?: Currency;

  /**
   * @generated from field: google.protobuf.Struct data = 6;
   */
  data?: Struct;

  /**
   * Mother account of this account. If != "" - then this account is gonna be subaccount
   *
   * @generated from field: string account_owner = 7;
   */
  accountOwner: string;

  constructor(data?: PartialMessage<CreateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.CreateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRequest;

  static equals(a: CreateRequest | PlainMessage<CreateRequest> | undefined, b: CreateRequest | PlainMessage<CreateRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.CreateResponse
 */
export declare class CreateResponse extends Message<CreateResponse> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string namespace = 2;
   */
  namespace: string;

  constructor(data?: PartialMessage<CreateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.CreateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateResponse;

  static equals(a: CreateResponse | PlainMessage<CreateResponse> | undefined, b: CreateResponse | PlainMessage<CreateResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.GetRequest
 */
export declare class GetRequest extends Message<GetRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: bool public = 2;
   */
  public: boolean;

  constructor(data?: PartialMessage<GetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.GetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest;

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.SuspendConf
 */
export declare class SuspendConf extends Message<SuspendConf> {
  /**
   * @generated from field: optional bool immune = 1;
   */
  immune?: boolean;

  /**
   * @generated from field: optional float limit = 2;
   */
  limit?: number;

  constructor(data?: PartialMessage<SuspendConf>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.SuspendConf";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuspendConf;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuspendConf;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuspendConf;

  static equals(a: SuspendConf | PlainMessage<SuspendConf> | undefined, b: SuspendConf | PlainMessage<SuspendConf> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.Account
 */
export declare class Account extends Message<Account> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: google.protobuf.Struct data = 3;
   */
  data?: Struct;

  /**
   * @generated from field: optional double balance = 4;
   */
  balance?: number;

  /**
   * @generated from field: optional nocloud.access.Access access = 5;
   */
  access?: Access;

  /**
   * @generated from field: optional nocloud.registry.accounts.SuspendConf suspend_conf = 6;
   */
  suspendConf?: SuspendConf;

  /**
   * @generated from field: optional bool suspended = 7;
   */
  suspended?: boolean;

  /**
   * Account Balance Currency
   *
   * @generated from field: optional nocloud.billing.Currency currency = 8;
   */
  currency?: Currency;

  /**
   * @generated from field: nocloud.registry.accounts.AccountStatus status = 9;
   */
  status: AccountStatus;

  /**
   * @generated from field: repeated nocloud.notes.AdminNote admin_notes = 10;
   */
  adminNotes: AdminNote[];

  /**
   * @generated from field: bool active = 11;
   */
  active: boolean;

  /**
   * List of UUID's of sub-accounts of this account
   *
   * @generated from field: repeated string subaccounts = 12;
   */
  subaccounts: string[];

  /**
   * Mother account of this account. If != "" - then this account is subaccount
   *
   * @generated from field: string account_owner = 13;
   */
  accountOwner: string;

  /**
   * @generated from field: string paymentsGateway = 14;
   */
  paymentsGateway: string;

  constructor(data?: PartialMessage<Account>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.Account";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Account;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Account;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Account;

  static equals(a: Account | PlainMessage<Account> | undefined, b: Account | PlainMessage<Account> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.UpdateResponse
 */
export declare class UpdateResponse extends Message<UpdateResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<UpdateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.UpdateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateResponse;

  static equals(a: UpdateResponse | PlainMessage<UpdateResponse> | undefined, b: UpdateResponse | PlainMessage<UpdateResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.ListRequest
 */
export declare class ListRequest extends Message<ListRequest> {
  /**
   * Namespace ID to seek account in
   *
   * @generated from field: optional string namespace = 1;
   */
  namespace?: string;

  /**
   * Depth
   *
   * @generated from field: optional int32 depth = 2;
   */
  depth?: number;

  /**
   * @generated from field: optional uint64 page = 3;
   */
  page?: bigint;

  /**
   * @generated from field: optional uint64 limit = 4;
   */
  limit?: bigint;

  /**
   * @generated from field: optional string field = 5;
   */
  field?: string;

  /**
   * @generated from field: optional string sort = 6;
   */
  sort?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 7;
   */
  filters: { [key: string]: Value };

  constructor(data?: PartialMessage<ListRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.ListRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest;

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.ListResponse
 */
export declare class ListResponse extends Message<ListResponse> {
  /**
   * @generated from field: repeated nocloud.registry.accounts.Account pool = 1;
   */
  pool: Account[];

  /**
   * @generated from field: int64 count = 2;
   */
  count: bigint;

  /**
   * @generated from field: int64 active = 3;
   */
  active: bigint;

  constructor(data?: PartialMessage<ListResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.ListResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse;

  static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.SetCredentialsRequest
 */
export declare class SetCredentialsRequest extends Message<SetCredentialsRequest> {
  /**
   * @generated from field: string account = 1;
   */
  account: string;

  /**
   * @generated from field: nocloud.registry.accounts.Credentials auth = 2;
   */
  auth?: Credentials;

  constructor(data?: PartialMessage<SetCredentialsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.SetCredentialsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCredentialsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCredentialsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCredentialsRequest;

  static equals(a: SetCredentialsRequest | PlainMessage<SetCredentialsRequest> | undefined, b: SetCredentialsRequest | PlainMessage<SetCredentialsRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.SetCredentialsResponse
 */
export declare class SetCredentialsResponse extends Message<SetCredentialsResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<SetCredentialsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.SetCredentialsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCredentialsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCredentialsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCredentialsResponse;

  static equals(a: SetCredentialsResponse | PlainMessage<SetCredentialsResponse> | undefined, b: SetCredentialsResponse | PlainMessage<SetCredentialsResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.TokenRequest
 */
export declare class TokenRequest extends Message<TokenRequest> {
  /**
   * @generated from field: nocloud.registry.accounts.Credentials auth = 1;
   */
  auth?: Credentials;

  /**
   * @generated from field: int32 exp = 2;
   */
  exp: number;

  /**
   * @generated from field: bool root_claim = 3;
   */
  rootClaim: boolean;

  /**
   * @generated from field: string sp_claim = 4;
   */
  spClaim: string;

  /**
   * @generated from field: string instance_claim = 5;
   */
  instanceClaim: string;

  /**
   * @generated from field: optional string uuid = 6;
   */
  uuid?: string;

  constructor(data?: PartialMessage<TokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.TokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRequest;

  static equals(a: TokenRequest | PlainMessage<TokenRequest> | undefined, b: TokenRequest | PlainMessage<TokenRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.TokenResponse
 */
export declare class TokenResponse extends Message<TokenResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  constructor(data?: PartialMessage<TokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.TokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenResponse;

  static equals(a: TokenResponse | PlainMessage<TokenResponse> | undefined, b: TokenResponse | PlainMessage<TokenResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.DeleteRequest
 */
export declare class DeleteRequest extends Message<DeleteRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.DeleteRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRequest;

  static equals(a: DeleteRequest | PlainMessage<DeleteRequest> | undefined, b: DeleteRequest | PlainMessage<DeleteRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.DeleteResponse
 */
export declare class DeleteResponse extends Message<DeleteResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<DeleteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.DeleteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteResponse;

  static equals(a: DeleteResponse | PlainMessage<DeleteResponse> | undefined, b: DeleteResponse | PlainMessage<DeleteResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.SuspendRequest
 */
export declare class SuspendRequest extends Message<SuspendRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<SuspendRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.SuspendRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuspendRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuspendRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuspendRequest;

  static equals(a: SuspendRequest | PlainMessage<SuspendRequest> | undefined, b: SuspendRequest | PlainMessage<SuspendRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.SuspendResponse
 */
export declare class SuspendResponse extends Message<SuspendResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<SuspendResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.SuspendResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuspendResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuspendResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuspendResponse;

  static equals(a: SuspendResponse | PlainMessage<SuspendResponse> | undefined, b: SuspendResponse | PlainMessage<SuspendResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.UnsuspendRequest
 */
export declare class UnsuspendRequest extends Message<UnsuspendRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<UnsuspendRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.UnsuspendRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnsuspendRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnsuspendRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnsuspendRequest;

  static equals(a: UnsuspendRequest | PlainMessage<UnsuspendRequest> | undefined, b: UnsuspendRequest | PlainMessage<UnsuspendRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.registry.accounts.UnsuspendResponse
 */
export declare class UnsuspendResponse extends Message<UnsuspendResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<UnsuspendResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.registry.accounts.UnsuspendResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnsuspendResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnsuspendResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnsuspendResponse;

  static equals(a: UnsuspendResponse | PlainMessage<UnsuspendResponse> | undefined, b: UnsuspendResponse | PlainMessage<UnsuspendResponse> | undefined): boolean;
}

