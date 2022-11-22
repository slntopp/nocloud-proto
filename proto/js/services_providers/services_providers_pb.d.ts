// package: nocloud.services_providers
// file: services_providers/services_providers.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as states_states_pb from "../states/states_pb";
import * as access_access_pb from "../access/access_pb";

export class Var extends jspb.Message {
  getValueMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearValueMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Var.AsObject;
  static toObject(includeInstance: boolean, msg: Var): Var.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Var, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Var;
  static deserializeBinaryFromReader(message: Var, reader: jspb.BinaryReader): Var;
}

export namespace Var {
  export type AsObject = {
    valueMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class ProxyConf extends jspb.Message {
  hasSocket(): boolean;
  clearSocket(): void;
  getSocket(): string;
  setSocket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProxyConf.AsObject;
  static toObject(includeInstance: boolean, msg: ProxyConf): ProxyConf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProxyConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProxyConf;
  static deserializeBinaryFromReader(message: ProxyConf, reader: jspb.BinaryReader): ProxyConf;
}

export namespace ProxyConf {
  export type AsObject = {
    socket: string,
  }
}

export class LocationConf extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getExtraMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearExtraMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationConf.AsObject;
  static toObject(includeInstance: boolean, msg: LocationConf): LocationConf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationConf;
  static deserializeBinaryFromReader(message: LocationConf, reader: jspb.BinaryReader): LocationConf;
}

export namespace LocationConf {
  export type AsObject = {
    x: number,
    y: number,
    id: string,
    title: string,
    extraMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class ServicesProvider extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getSecretsMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearSecretsMap(): void;
  getVarsMap(): jspb.Map<string, Var>;
  clearVarsMap(): void;
  getExtentionsMap(): jspb.Map<string, google_protobuf_struct_pb.Struct>;
  clearExtentionsMap(): void;
  hasState(): boolean;
  clearState(): void;
  getState(): states_states_pb.State | undefined;
  setState(value?: states_states_pb.State): void;

  getPublicDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearPublicDataMap(): void;
  getPublic(): boolean;
  setPublic(value: boolean): void;

  hasProxy(): boolean;
  clearProxy(): void;
  getProxy(): ProxyConf | undefined;
  setProxy(value?: ProxyConf): void;

  clearLocationsList(): void;
  getLocationsList(): Array<LocationConf>;
  setLocationsList(value: Array<LocationConf>): void;
  addLocations(value?: LocationConf, index?: number): LocationConf;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): access_access_pb.Access | undefined;
  setAccess(value?: access_access_pb.Access): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicesProvider.AsObject;
  static toObject(includeInstance: boolean, msg: ServicesProvider): ServicesProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServicesProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicesProvider;
  static deserializeBinaryFromReader(message: ServicesProvider, reader: jspb.BinaryReader): ServicesProvider;
}

export namespace ServicesProvider {
  export type AsObject = {
    uuid: string,
    type: string,
    title: string,
    secretsMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    varsMap: Array<[string, Var.AsObject]>,
    extentionsMap: Array<[string, google_protobuf_struct_pb.Struct.AsObject]>,
    state?: states_states_pb.State.AsObject,
    publicDataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    pb_public: boolean,
    proxy?: ProxyConf.AsObject,
    locationsList: Array<LocationConf.AsObject>,
    access?: access_access_pb.Access.AsObject,
  }
}

export class TestResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestResponse): TestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestResponse;
  static deserializeBinaryFromReader(message: TestResponse, reader: jspb.BinaryReader): TestResponse;
}

export namespace TestResponse {
  export type AsObject = {
    result: boolean,
    error: string,
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

export class ListRequest extends jspb.Message {
  getAnonymously(): boolean;
  setAnonymously(value: boolean): void;

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
    anonymously: boolean,
  }
}

export class ListResponse extends jspb.Message {
  clearPoolList(): void;
  getPoolList(): Array<ServicesProvider>;
  setPoolList(value: Array<ServicesProvider>): void;
  addPool(value?: ServicesProvider, index?: number): ServicesProvider;

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
    poolList: Array<ServicesProvider.AsObject>,
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

  clearServicesList(): void;
  getServicesList(): Array<string>;
  setServicesList(value: Array<string>): void;
  addServices(value: string, index?: number): string;

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
    servicesList: Array<string>,
  }
}

export class ListExtentionsResponse extends jspb.Message {
  clearTypesList(): void;
  getTypesList(): Array<string>;
  setTypesList(value: Array<string>): void;
  addTypes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExtentionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExtentionsResponse): ListExtentionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListExtentionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExtentionsResponse;
  static deserializeBinaryFromReader(message: ListExtentionsResponse, reader: jspb.BinaryReader): ListExtentionsResponse;
}

export namespace ListExtentionsResponse {
  export type AsObject = {
    typesList: Array<string>,
  }
}

export class BindPlanRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getPlanUuid(): string;
  setPlanUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BindPlanRequest): BindPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindPlanRequest;
  static deserializeBinaryFromReader(message: BindPlanRequest, reader: jspb.BinaryReader): BindPlanRequest;
}

export namespace BindPlanRequest {
  export type AsObject = {
    uuid: string,
    planUuid: string,
  }
}

export class BindPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BindPlanResponse): BindPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindPlanResponse;
  static deserializeBinaryFromReader(message: BindPlanResponse, reader: jspb.BinaryReader): BindPlanResponse;
}

export namespace BindPlanResponse {
  export type AsObject = {
  }
}

export class UnbindPlanRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getPlanUuid(): string;
  setPlanUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnbindPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnbindPlanRequest): UnbindPlanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnbindPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnbindPlanRequest;
  static deserializeBinaryFromReader(message: UnbindPlanRequest, reader: jspb.BinaryReader): UnbindPlanRequest;
}

export namespace UnbindPlanRequest {
  export type AsObject = {
    uuid: string,
    planUuid: string,
  }
}

export class UnbindPlanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnbindPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnbindPlanResponse): UnbindPlanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnbindPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnbindPlanResponse;
  static deserializeBinaryFromReader(message: UnbindPlanResponse, reader: jspb.BinaryReader): UnbindPlanResponse;
}

export namespace UnbindPlanResponse {
  export type AsObject = {
  }
}

export class InvokeRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getParamsMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeRequest): InvokeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeRequest;
  static deserializeBinaryFromReader(message: InvokeRequest, reader: jspb.BinaryReader): InvokeRequest;
}

export namespace InvokeRequest {
  export type AsObject = {
    uuid: string,
    method: string,
    paramsMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class InvokeResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeResponse): InvokeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeResponse;
  static deserializeBinaryFromReader(message: InvokeResponse, reader: jspb.BinaryReader): InvokeResponse;
}

export namespace InvokeResponse {
  export type AsObject = {
    result: boolean,
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class GetTypeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTypeRequest): GetTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTypeRequest;
  static deserializeBinaryFromReader(message: GetTypeRequest, reader: jspb.BinaryReader): GetTypeRequest;
}

export namespace GetTypeRequest {
  export type AsObject = {
  }
}

export class GetTypeResponse extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTypeResponse): GetTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTypeResponse;
  static deserializeBinaryFromReader(message: GetTypeResponse, reader: jspb.BinaryReader): GetTypeResponse;
}

export namespace GetTypeResponse {
  export type AsObject = {
    type: string,
  }
}

export class ServicesProvidersExtentionData extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServicesProvidersExtentionData.AsObject;
  static toObject(includeInstance: boolean, msg: ServicesProvidersExtentionData): ServicesProvidersExtentionData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServicesProvidersExtentionData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServicesProvidersExtentionData;
  static deserializeBinaryFromReader(message: ServicesProvidersExtentionData, reader: jspb.BinaryReader): ServicesProvidersExtentionData;
}

export namespace ServicesProvidersExtentionData {
  export type AsObject = {
    uuid: string,
    data?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GenericResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenericResponse): GenericResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenericResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericResponse;
  static deserializeBinaryFromReader(message: GenericResponse, reader: jspb.BinaryReader): GenericResponse;
}

export namespace GenericResponse {
  export type AsObject = {
    result: boolean,
    error: string,
  }
}

export class ObjectPublicData extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectPublicData.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectPublicData): ObjectPublicData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectPublicData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectPublicData;
  static deserializeBinaryFromReader(message: ObjectPublicData, reader: jspb.BinaryReader): ObjectPublicData;
}

export namespace ObjectPublicData {
  export type AsObject = {
    uuid: string,
    dataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

