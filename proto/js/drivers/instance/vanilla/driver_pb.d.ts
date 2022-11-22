// package: nocloud.instance.driver.vanilla
// file: drivers/instance/vanilla/driver.proto

import * as jspb from "google-protobuf";
import * as services_services_pb from "../../../services/services_pb";
import * as instances_instances_pb from "../../../instances/instances_pb";
import * as services_providers_services_providers_pb from "../../../services_providers/services_providers_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class TestServiceProviderConfigRequest extends jspb.Message {
  hasServicesProvider(): boolean;
  clearServicesProvider(): void;
  getServicesProvider(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setServicesProvider(value?: services_providers_services_providers_pb.ServicesProvider): void;

  getSyntaxOnly(): boolean;
  setSyntaxOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestServiceProviderConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestServiceProviderConfigRequest): TestServiceProviderConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestServiceProviderConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestServiceProviderConfigRequest;
  static deserializeBinaryFromReader(message: TestServiceProviderConfigRequest, reader: jspb.BinaryReader): TestServiceProviderConfigRequest;
}

export namespace TestServiceProviderConfigRequest {
  export type AsObject = {
    servicesProvider?: services_providers_services_providers_pb.ServicesProvider.AsObject,
    syntaxOnly: boolean,
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

export class UpRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): instances_instances_pb.InstancesGroup | undefined;
  setGroup(value?: instances_instances_pb.InstancesGroup): void;

  hasServicesProvider(): boolean;
  clearServicesProvider(): void;
  getServicesProvider(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setServicesProvider(value?: services_providers_services_providers_pb.ServicesProvider): void;

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
    group?: instances_instances_pb.InstancesGroup.AsObject,
    servicesProvider?: services_providers_services_providers_pb.ServicesProvider.AsObject,
  }
}

export class UpResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): instances_instances_pb.InstancesGroup | undefined;
  setGroup(value?: instances_instances_pb.InstancesGroup): void;

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
    group?: instances_instances_pb.InstancesGroup.AsObject,
  }
}

export class DownRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): instances_instances_pb.InstancesGroup | undefined;
  setGroup(value?: instances_instances_pb.InstancesGroup): void;

  hasServicesProvider(): boolean;
  clearServicesProvider(): void;
  getServicesProvider(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setServicesProvider(value?: services_providers_services_providers_pb.ServicesProvider): void;

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
    group?: instances_instances_pb.InstancesGroup.AsObject,
    servicesProvider?: services_providers_services_providers_pb.ServicesProvider.AsObject,
  }
}

export class DownResponse extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): instances_instances_pb.InstancesGroup | undefined;
  setGroup(value?: instances_instances_pb.InstancesGroup): void;

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
    group?: instances_instances_pb.InstancesGroup.AsObject,
  }
}

export class MonitoringRequest extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<instances_instances_pb.InstancesGroup>;
  setGroupsList(value: Array<instances_instances_pb.InstancesGroup>): void;
  addGroups(value?: instances_instances_pb.InstancesGroup, index?: number): instances_instances_pb.InstancesGroup;

  hasServicesProvider(): boolean;
  clearServicesProvider(): void;
  getServicesProvider(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setServicesProvider(value?: services_providers_services_providers_pb.ServicesProvider): void;

  getScheduled(): boolean;
  setScheduled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitoringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonitoringRequest): MonitoringRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonitoringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitoringRequest;
  static deserializeBinaryFromReader(message: MonitoringRequest, reader: jspb.BinaryReader): MonitoringRequest;
}

export namespace MonitoringRequest {
  export type AsObject = {
    groupsList: Array<instances_instances_pb.InstancesGroup.AsObject>,
    servicesProvider?: services_providers_services_providers_pb.ServicesProvider.AsObject,
    scheduled: boolean,
  }
}

export class MonitoringResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitoringResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MonitoringResponse): MonitoringResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonitoringResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitoringResponse;
  static deserializeBinaryFromReader(message: MonitoringResponse, reader: jspb.BinaryReader): MonitoringResponse;
}

export namespace MonitoringResponse {
  export type AsObject = {
  }
}

export class InvokeRequest extends jspb.Message {
  hasInstance(): boolean;
  clearInstance(): void;
  getInstance(): instances_instances_pb.Instance | undefined;
  setInstance(value?: instances_instances_pb.Instance): void;

  hasServicesProvider(): boolean;
  clearServicesProvider(): void;
  getServicesProvider(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setServicesProvider(value?: services_providers_services_providers_pb.ServicesProvider): void;

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
    instance?: instances_instances_pb.Instance.AsObject,
    servicesProvider?: services_providers_services_providers_pb.ServicesProvider.AsObject,
    method: string,
    paramsMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class SpInvokeRequest extends jspb.Message {
  hasServicesProvider(): boolean;
  clearServicesProvider(): void;
  getServicesProvider(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setServicesProvider(value?: services_providers_services_providers_pb.ServicesProvider): void;

  getMethod(): string;
  setMethod(value: string): void;

  getParamsMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpInvokeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SpInvokeRequest): SpInvokeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpInvokeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpInvokeRequest;
  static deserializeBinaryFromReader(message: SpInvokeRequest, reader: jspb.BinaryReader): SpInvokeRequest;
}

export namespace SpInvokeRequest {
  export type AsObject = {
    servicesProvider?: services_providers_services_providers_pb.ServicesProvider.AsObject,
    method: string,
    paramsMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

