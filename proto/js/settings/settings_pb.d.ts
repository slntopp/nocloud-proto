// package: nocloud.settings
// file: settings/settings.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class GetRequest extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): void;
  addKeys(value: string, index?: number): string;

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
    keysList: Array<string>,
  }
}

export class PutRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string;
  setDescription(value: string): void;

  hasPublic(): boolean;
  clearPublic(): void;
  getPublic(): boolean;
  setPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutRequest): PutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutRequest;
  static deserializeBinaryFromReader(message: PutRequest, reader: jspb.BinaryReader): PutRequest;
}

export namespace PutRequest {
  export type AsObject = {
    key: string,
    value: string,
    description: string,
    pb_public: boolean,
  }
}

export class PutResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutResponse): PutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResponse;
  static deserializeBinaryFromReader(message: PutResponse, reader: jspb.BinaryReader): PutResponse;
}

export namespace PutResponse {
  export type AsObject = {
    key: string,
  }
}

export class KeysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeysRequest): KeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeysRequest;
  static deserializeBinaryFromReader(message: KeysRequest, reader: jspb.BinaryReader): KeysRequest;
}

export namespace KeysRequest {
  export type AsObject = {
  }
}

export class KeysResponse extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<KeysResponse.Key>;
  setPoolList(value: Array<KeysResponse.Key>): void;
  addPool(value?: KeysResponse.Key, index?: number): KeysResponse.Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeysResponse): KeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeysResponse;
  static deserializeBinaryFromReader(message: KeysResponse, reader: jspb.BinaryReader): KeysResponse;
}

export namespace KeysResponse {
  export type AsObject = {
    poolList: Array<KeysResponse.Key.AsObject>,
  }

  export class Key extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getPublic(): boolean;
    setPublic(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
  }

  export namespace Key {
    export type AsObject = {
      key: string,
      description: string,
      pb_public: boolean,
    }
  }
}

export class DeleteRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

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
    key: string,
  }
}

export class DeleteResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

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
    key: string,
  }
}

