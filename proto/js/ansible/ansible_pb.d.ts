// package: nocloud.ansible
// file: ansible/ansible.proto

import * as jspb from "google-protobuf";

export class Run extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  clearInstancesList(): void;
  getInstancesList(): Array<Instance>;
  setInstancesList(value: Array<Instance>): void;
  addInstances(value?: Instance, index?: number): Instance;

  getPlaybook(): string;
  setPlaybook(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getJobsMap(): jspb.Map<string, string>;
  clearJobsMap(): void;
  getStatus(): string;
  setStatus(value: string): void;

  getRc(): number;
  setRc(value: number): void;

  hasSshKey(): boolean;
  clearSshKey(): void;
  getSshKey(): string;
  setSshKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Run.AsObject;
  static toObject(includeInstance: boolean, msg: Run): Run.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Run, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Run;
  static deserializeBinaryFromReader(message: Run, reader: jspb.BinaryReader): Run;
}

export namespace Run {
  export type AsObject = {
    uuid: string,
    instancesList: Array<Instance.AsObject>,
    playbook: string,
    title: string,
    jobsMap: Array<[string, string]>,
    status: string,
    rc: number,
    sshKey: string,
  }
}

export class Instance extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  hasPort(): boolean;
  clearPort(): void;
  getPort(): string;
  setPort(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): string;
  setUser(value: string): void;

  hasPass(): boolean;
  clearPass(): void;
  getPass(): string;
  setPass(value: string): void;

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
    host: string,
    port: string,
    user: string,
    pass: string,
  }
}

export class GetRunRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunRequest): GetRunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunRequest;
  static deserializeBinaryFromReader(message: GetRunRequest, reader: jspb.BinaryReader): GetRunRequest;
}

export namespace GetRunRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class ExecRunRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecRunRequest): ExecRunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecRunRequest;
  static deserializeBinaryFromReader(message: ExecRunRequest, reader: jspb.BinaryReader): ExecRunRequest;
}

export namespace ExecRunRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class WatchRunRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRunRequest): WatchRunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRunRequest;
  static deserializeBinaryFromReader(message: WatchRunRequest, reader: jspb.BinaryReader): WatchRunRequest;
}

export namespace WatchRunRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteRunRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRunRequest): DeleteRunRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRunRequest;
  static deserializeBinaryFromReader(message: DeleteRunRequest, reader: jspb.BinaryReader): DeleteRunRequest;
}

export namespace DeleteRunRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRunResponse): DeleteRunResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRunResponse;
  static deserializeBinaryFromReader(message: DeleteRunResponse, reader: jspb.BinaryReader): DeleteRunResponse;
}

export namespace DeleteRunResponse {
  export type AsObject = {
  }
}

