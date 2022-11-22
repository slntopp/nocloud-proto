// package: nocloud.instances
// file: instances/instances.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as hasher_hasherpb_hasher_pb from "../hasher/hasherpb/hasher_pb";
import * as states_states_pb from "../states/states_pb";
import * as billing_billing_pb from "../billing/billing_pb";
import * as services_providers_services_providers_pb from "../services_providers/services_providers_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as access_access_pb from "../access/access_pb";

export class Instance extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getStatus(): InstanceStatusMap[keyof InstanceStatusMap];
  setStatus(value: InstanceStatusMap[keyof InstanceStatusMap]): void;

  getConfigMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearConfigMap(): void;
  getResourcesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearResourcesMap(): void;
  getDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearDataMap(): void;
  hasState(): boolean;
  clearState(): void;
  getState(): states_states_pb.State | undefined;
  setState(value?: states_states_pb.State): void;

  getHash(): string;
  setHash(value: string): void;

  hasBillingPlan(): boolean;
  clearBillingPlan(): void;
  getBillingPlan(): billing_billing_pb.Plan | undefined;
  setBillingPlan(value?: billing_billing_pb.Plan): void;

  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): string;
  setProduct(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): access_access_pb.Access | undefined;
  setAccess(value?: access_access_pb.Access): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    uuid: string,
    title: string,
    status: InstanceStatusMap[keyof InstanceStatusMap],
    configMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    resourcesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    dataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    state?: states_states_pb.State.AsObject,
    hash: string,
    billingPlan?: billing_billing_pb.Plan.AsObject,
    product: string,
    access?: access_access_pb.Access.AsObject,
  }
}

export class InstancesGroup extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getStatus(): InstanceStatusMap[keyof InstanceStatusMap];
  setStatus(value: InstanceStatusMap[keyof InstanceStatusMap]): void;

  getConfigMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearConfigMap(): void;
  clearInstancesList(): void;
  getInstancesList(): Array<Instance>;
  setInstancesList(value: Array<Instance>): void;
  addInstances(value?: Instance, index?: number): Instance;

  getResourcesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearResourcesMap(): void;
  getDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearDataMap(): void;
  getHash(): string;
  setHash(value: string): void;

  hasSp(): boolean;
  clearSp(): void;
  getSp(): string;
  setSp(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): access_access_pb.Access | undefined;
  setAccess(value?: access_access_pb.Access): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstancesGroup.AsObject;
  static toObject(includeInstance: boolean, msg: InstancesGroup): InstancesGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstancesGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstancesGroup;
  static deserializeBinaryFromReader(message: InstancesGroup, reader: jspb.BinaryReader): InstancesGroup;
}

export namespace InstancesGroup {
  export type AsObject = {
    uuid: string,
    type: string,
    title: string,
    status: InstanceStatusMap[keyof InstanceStatusMap],
    configMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    instancesList: Array<Instance.AsObject>,
    resourcesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    dataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    hash: string,
    sp: string,
    access?: access_access_pb.Access.AsObject,
  }
}

export class TestInstancesGroupConfigRequest extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): InstancesGroup | undefined;
  setGroup(value?: InstancesGroup): void;

  hasSp(): boolean;
  clearSp(): void;
  getSp(): services_providers_services_providers_pb.ServicesProvider | undefined;
  setSp(value?: services_providers_services_providers_pb.ServicesProvider): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestInstancesGroupConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestInstancesGroupConfigRequest): TestInstancesGroupConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestInstancesGroupConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestInstancesGroupConfigRequest;
  static deserializeBinaryFromReader(message: TestInstancesGroupConfigRequest, reader: jspb.BinaryReader): TestInstancesGroupConfigRequest;
}

export namespace TestInstancesGroupConfigRequest {
  export type AsObject = {
    group?: InstancesGroup.AsObject,
    sp?: services_providers_services_providers_pb.ServicesProvider.AsObject,
  }
}

export class TestInstancesGroupConfigError extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getInstance(): string;
  setInstance(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestInstancesGroupConfigError.AsObject;
  static toObject(includeInstance: boolean, msg: TestInstancesGroupConfigError): TestInstancesGroupConfigError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestInstancesGroupConfigError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestInstancesGroupConfigError;
  static deserializeBinaryFromReader(message: TestInstancesGroupConfigError, reader: jspb.BinaryReader): TestInstancesGroupConfigError;
}

export namespace TestInstancesGroupConfigError {
  export type AsObject = {
    error: string,
    instance: string,
  }
}

export class TestInstancesGroupConfigResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  clearErrorsList(): void;
  getErrorsList(): Array<TestInstancesGroupConfigError>;
  setErrorsList(value: Array<TestInstancesGroupConfigError>): void;
  addErrors(value?: TestInstancesGroupConfigError, index?: number): TestInstancesGroupConfigError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestInstancesGroupConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestInstancesGroupConfigResponse): TestInstancesGroupConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestInstancesGroupConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestInstancesGroupConfigResponse;
  static deserializeBinaryFromReader(message: TestInstancesGroupConfigResponse, reader: jspb.BinaryReader): TestInstancesGroupConfigResponse;
}

export namespace TestInstancesGroupConfigResponse {
  export type AsObject = {
    result: boolean,
    errorsList: Array<TestInstancesGroupConfigError.AsObject>,
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

export class ObjectData extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getDataMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectData.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectData): ObjectData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectData;
  static deserializeBinaryFromReader(message: ObjectData, reader: jspb.BinaryReader): ObjectData;
}

export namespace ObjectData {
  export type AsObject = {
    uuid: string,
    dataMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export interface InstanceStatusMap {
  UNSPECIFIED: 0;
  INIT: 1;
  MODIFIED: 2;
  UP: 3;
  DOWN: 4;
  DEL: 5;
  SUS: 6;
}

export const InstanceStatus: InstanceStatusMap;

