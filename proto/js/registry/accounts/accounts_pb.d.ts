// package: nocloud.registry.accounts
// file: registry/accounts/accounts.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as access_access_pb from "../../access/access_pb";

export class Credentials extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearDataList(): void;
  getDataList(): Array<string>;
  setDataList(value: Array<string>): void;
  addData(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credentials.AsObject;
  static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credentials;
  static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
  export type AsObject = {
    type: string,
    dataList: Array<string>,
  }
}

export class CreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): Credentials | undefined;
  setAuth(value?: Credentials): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): number;
  setAccess(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    title: string,
    auth?: Credentials.AsObject,
    namespace: string,
    access: number,
  }
}

export class CreateResponse extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    uuid: string,
  }
}

export class GetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    uuid: string,
    pb_public: boolean,
  }
}

export class SuspendConf extends jspb.Message {
  hasImmune(): boolean;
  clearImmune(): void;
  getImmune(): boolean;
  setImmune(value: boolean): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendConf.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendConf): SuspendConf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendConf;
  static deserializeBinaryFromReader(message: SuspendConf, reader: jspb.BinaryReader): SuspendConf;
}

export namespace SuspendConf {
  export type AsObject = {
    immune: boolean,
    limit: number,
  }
}

export class Account extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): number;
  setBalance(value: number): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): access_access_pb.Access | undefined;
  setAccess(value?: access_access_pb.Access): void;

  hasSuspendConf(): boolean;
  clearSuspendConf(): void;
  getSuspendConf(): SuspendConf | undefined;
  setSuspendConf(value?: SuspendConf): void;

  hasSuspended(): boolean;
  clearSuspended(): void;
  getSuspended(): boolean;
  setSuspended(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    uuid: string,
    title: string,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    balance: number,
    access?: access_access_pb.Access.AsObject,
    suspendConf?: SuspendConf.AsObject,
    suspended: boolean,
  }
}

export class UpdateResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class ListRequest extends jspb.Message {
  hasNamespace(): boolean;
  clearNamespace(): void;
  getNamespace(): string;
  setNamespace(value: string): void;

  hasDepth(): boolean;
  clearDepth(): void;
  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    namespace: string,
    depth: number,
  }
}

export class ListResponse extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<Account>;
  setPoolList(value: Array<Account>): void;
  addPool(value?: Account, index?: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    poolList: Array<Account.AsObject>,
  }
}

export class SetCredentialsRequest extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): Credentials | undefined;
  setAuth(value?: Credentials): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCredentialsRequest): SetCredentialsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCredentialsRequest;
  static deserializeBinaryFromReader(message: SetCredentialsRequest, reader: jspb.BinaryReader): SetCredentialsRequest;
}

export namespace SetCredentialsRequest {
  export type AsObject = {
    account: string,
    auth?: Credentials.AsObject,
  }
}

export class SetCredentialsResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCredentialsResponse): SetCredentialsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCredentialsResponse;
  static deserializeBinaryFromReader(message: SetCredentialsResponse, reader: jspb.BinaryReader): SetCredentialsResponse;
}

export namespace SetCredentialsResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class TokenRequest extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): Credentials | undefined;
  setAuth(value?: Credentials): void;

  getExp(): number;
  setExp(value: number): void;

  getRootClaim(): boolean;
  setRootClaim(value: boolean): void;

  getSpClaim(): string;
  setSpClaim(value: string): void;

  getInstanceClaim(): string;
  setInstanceClaim(value: string): void;

  hasUuid(): boolean;
  clearUuid(): void;
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenRequest;
  static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
  export type AsObject = {
    auth?: Credentials.AsObject,
    exp: number,
    rootClaim: boolean,
    spClaim: string,
    instanceClaim: string,
    uuid: string,
  }
}

export class TokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenResponse;
  static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
  export type AsObject = {
    token: string,
  }
}

export class DeleteRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class SuspendRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendRequest): SuspendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendRequest;
  static deserializeBinaryFromReader(message: SuspendRequest, reader: jspb.BinaryReader): SuspendRequest;
}

export namespace SuspendRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class SuspendResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuspendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuspendResponse): SuspendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuspendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuspendResponse;
  static deserializeBinaryFromReader(message: SuspendResponse, reader: jspb.BinaryReader): SuspendResponse;
}

export namespace SuspendResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class UnsuspendRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsuspendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsuspendRequest): UnsuspendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsuspendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsuspendRequest;
  static deserializeBinaryFromReader(message: UnsuspendRequest, reader: jspb.BinaryReader): UnsuspendRequest;
}

export namespace UnsuspendRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class UnsuspendResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsuspendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsuspendResponse): UnsuspendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsuspendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsuspendResponse;
  static deserializeBinaryFromReader(message: UnsuspendResponse, reader: jspb.BinaryReader): UnsuspendResponse;
}

export namespace UnsuspendResponse {
  export type AsObject = {
    result: boolean,
  }
}

