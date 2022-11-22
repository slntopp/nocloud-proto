// package: nocloud.services
// file: services/services.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as instances_instances_pb from "../instances/instances_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as hasher_hasherpb_hasher_pb from "../hasher/hasherpb/hasher_pb";
import * as states_states_pb from "../states/states_pb";
import * as access_access_pb from "../access/access_pb";

export class Service extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getStatus(): ServiceStatusMap[keyof ServiceStatusMap];
  setStatus(value: ServiceStatusMap[keyof ServiceStatusMap]): void;

  getContextMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearContextMap(): void;
  clearInstancesGroupsList(): void;
  getInstancesGroupsList(): Array<instances_instances_pb.InstancesGroup>;
  setInstancesGroupsList(value: Array<instances_instances_pb.InstancesGroup>): void;
  addInstancesGroups(value?: instances_instances_pb.InstancesGroup, index?: number): instances_instances_pb.InstancesGroup;

  getHash(): string;
  setHash(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): access_access_pb.Access | undefined;
  setAccess(value?: access_access_pb.Access): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    uuid: string,
    version: string,
    title: string,
    status: ServiceStatusMap[keyof ServiceStatusMap],
    contextMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    instancesGroupsList: Array<instances_instances_pb.InstancesGroup.AsObject>,
    hash: string,
    access?: access_access_pb.Access.AsObject,
  }
}

export class Services extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<Service>;
  setPoolList(value: Array<Service>): void;
  addPool(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Services.AsObject;
  static toObject(includeInstance: boolean, msg: Services): Services.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Services, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Services;
  static deserializeBinaryFromReader(message: Services, reader: jspb.BinaryReader): Services;
}

export namespace Services {
  export type AsObject = {
    poolList: Array<Service.AsObject>,
  }
}

export class TestConfigError extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getInstanceGroup(): string;
  setInstanceGroup(value: string): void;

  getInstance(): string;
  setInstance(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestConfigError.AsObject;
  static toObject(includeInstance: boolean, msg: TestConfigError): TestConfigError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestConfigError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestConfigError;
  static deserializeBinaryFromReader(message: TestConfigError, reader: jspb.BinaryReader): TestConfigError;
}

export namespace TestConfigError {
  export type AsObject = {
    error: string,
    instanceGroup: string,
    instance: string,
  }
}

export class TestConfigResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  clearErrorsList(): void;
  getErrorsList(): Array<TestConfigError>;
  setErrorsList(value: Array<TestConfigError>): void;
  addErrors(value?: TestConfigError, index?: number): TestConfigError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestConfigResponse): TestConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestConfigResponse;
  static deserializeBinaryFromReader(message: TestConfigResponse, reader: jspb.BinaryReader): TestConfigResponse;
}

export namespace TestConfigResponse {
  export type AsObject = {
    result: boolean,
    errorsList: Array<TestConfigError.AsObject>,
  }
}

export class CreateRequest extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  getNamespace(): string;
  setNamespace(value: string): void;

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
    service?: Service.AsObject,
    namespace: string,
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

  getError(): string;
  setError(value: string): void;

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
    error: string,
  }
}

export class UpRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpRequest): UpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpRequest;
  static deserializeBinaryFromReader(message: UpRequest, reader: jspb.BinaryReader): UpRequest;
}

export namespace UpRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class UpError extends jspb.Message {
  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpError.AsObject;
  static toObject(includeInstance: boolean, msg: UpError): UpError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpError;
  static deserializeBinaryFromReader(message: UpError, reader: jspb.BinaryReader): UpError;
}

export namespace UpError {
  export type AsObject = {
    dataMap: Array<[string, string]>,
  }
}

export class UpResponse extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<UpError>;
  setErrorsList(value: Array<UpError>): void;
  addErrors(value?: UpError, index?: number): UpError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpResponse): UpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpResponse;
  static deserializeBinaryFromReader(message: UpResponse, reader: jspb.BinaryReader): UpResponse;
}

export namespace UpResponse {
  export type AsObject = {
    errorsList: Array<UpError.AsObject>,
  }
}

export class DownRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownRequest): DownRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownRequest;
  static deserializeBinaryFromReader(message: DownRequest, reader: jspb.BinaryReader): DownRequest;
}

export namespace DownRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownResponse): DownResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownResponse;
  static deserializeBinaryFromReader(message: DownResponse, reader: jspb.BinaryReader): DownResponse;
}

export namespace DownResponse {
  export type AsObject = {
  }
}

export class ListRequest extends jspb.Message {
  hasShowDeleted(): boolean;
  clearShowDeleted(): void;
  getShowDeleted(): string;
  setShowDeleted(value: string): void;

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
    showDeleted: string,
    namespace: string,
    depth: number,
  }
}

export class GetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

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
  }
}

export class GetStatesRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatesRequest): GetStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatesRequest;
  static deserializeBinaryFromReader(message: GetStatesRequest, reader: jspb.BinaryReader): GetStatesRequest;
}

export namespace GetStatesRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class StreamRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    uuid: string,
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

export class SuspendResponse extends jspb.Message {
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
  }
}

export class UnsuspendResponse extends jspb.Message {
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
  }
}

export interface ServiceStatusMap {
  UNSPECIFIED: 0;
  INIT: 1;
  MODIFIED: 2;
  UP: 3;
  DOWN: 4;
  DEL: 5;
  PROC: 6;
  SUS: 7;
}

export const ServiceStatus: ServiceStatusMap;

