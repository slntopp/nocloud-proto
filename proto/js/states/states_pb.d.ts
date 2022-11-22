// package: nocloud.states
// file: states/states.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class State extends jspb.Message {
  getState(): NoCloudStateMap[keyof NoCloudStateMap];
  setState(value: NoCloudStateMap[keyof NoCloudStateMap]): void;

  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  hasTs(): boolean;
  clearTs(): void;
  getTs(): number;
  setTs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    state: NoCloudStateMap[keyof NoCloudStateMap],
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    ts: number,
  }
}

export class ObjectState extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  hasState(): boolean;
  clearState(): void;
  getState(): State | undefined;
  setState(value?: State): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectState.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectState): ObjectState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectState;
  static deserializeBinaryFromReader(message: ObjectState, reader: jspb.BinaryReader): ObjectState;
}

export namespace ObjectState {
  export type AsObject = {
    uuid: string,
    state?: State.AsObject,
  }
}

export interface NoCloudStateMap {
  INIT: 0;
  UNKNOWN: 1;
  STOPPED: 2;
  RUNNING: 3;
  FAILURE: 4;
  DELETED: 5;
  SUSPENDED: 6;
  OPERATION: 7;
}

export const NoCloudState: NoCloudStateMap;

