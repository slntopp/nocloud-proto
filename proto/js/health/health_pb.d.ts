// package: nocloud.health
// file: health/health.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class ProbeRequest extends jspb.Message {
  getProbeType(): string;
  setProbeType(value: string): void;

  getPayload(): string;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeRequest): ProbeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeRequest;
  static deserializeBinaryFromReader(message: ProbeRequest, reader: jspb.BinaryReader): ProbeRequest;
}

export namespace ProbeRequest {
  export type AsObject = {
    probeType: string,
    payload: string,
  }
}

export class ProbeResponse extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  clearServingList(): void;
  getServingList(): Array<ServingStatus>;
  setServingList(value: Array<ServingStatus>): void;
  addServing(value?: ServingStatus, index?: number): ServingStatus;

  clearRoutinesList(): void;
  getRoutinesList(): Array<RoutineStatus>;
  setRoutinesList(value: Array<RoutineStatus>): void;
  addRoutines(value?: RoutineStatus, index?: number): RoutineStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeResponse): ProbeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeResponse;
  static deserializeBinaryFromReader(message: ProbeResponse, reader: jspb.BinaryReader): ProbeResponse;
}

export namespace ProbeResponse {
  export type AsObject = {
    response: string,
    status: StatusMap[keyof StatusMap],
    servingList: Array<ServingStatus.AsObject>,
    routinesList: Array<RoutineStatus.AsObject>,
  }
}

export class ServingStatus extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServingStatus): ServingStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServingStatus;
  static deserializeBinaryFromReader(message: ServingStatus, reader: jspb.BinaryReader): ServingStatus;
}

export namespace ServingStatus {
  export type AsObject = {
    service: string,
    status: StatusMap[keyof StatusMap],
    error: string,
  }
}

export class RoutineStatus extends jspb.Message {
  getRoutine(): string;
  setRoutine(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ServingStatus | undefined;
  setStatus(value?: ServingStatus): void;

  getLastExecution(): string;
  setLastExecution(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RoutineStatus): RoutineStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoutineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoutineStatus;
  static deserializeBinaryFromReader(message: RoutineStatus, reader: jspb.BinaryReader): RoutineStatus;
}

export namespace RoutineStatus {
  export type AsObject = {
    routine: string,
    status?: ServingStatus.AsObject,
    lastExecution: string,
  }
}

export class RoutinesStatus extends jspb.Message {
  clearRoutinesList(): void;
  getRoutinesList(): Array<RoutineStatus>;
  setRoutinesList(value: Array<RoutineStatus>): void;
  addRoutines(value?: RoutineStatus, index?: number): RoutineStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutinesStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RoutinesStatus): RoutinesStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoutinesStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoutinesStatus;
  static deserializeBinaryFromReader(message: RoutinesStatus, reader: jspb.BinaryReader): RoutinesStatus;
}

export namespace RoutinesStatus {
  export type AsObject = {
    routinesList: Array<RoutineStatus.AsObject>,
  }
}

export interface StatusMap {
  UNKNOWN: 0;
  SERVING: 1;
  OFFLINE: 2;
  RUNNING: 3;
  STOPPED: 4;
  INTERNAL: 5;
  HASERRS: 6;
  NOEXIST: 7;
}

export const Status: StatusMap;

