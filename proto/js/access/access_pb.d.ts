// package: nocloud.access
// file: access/access.proto

import * as jspb from "google-protobuf";

export class Access extends jspb.Message {
  getLevel(): LevelMap[keyof LevelMap];
  setLevel(value: LevelMap[keyof LevelMap]): void;

  getRole(): string;
  setRole(value: string): void;

  hasNamespace(): boolean;
  clearNamespace(): void;
  getNamespace(): string;
  setNamespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Access.AsObject;
  static toObject(includeInstance: boolean, msg: Access): Access.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Access, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Access;
  static deserializeBinaryFromReader(message: Access, reader: jspb.BinaryReader): Access;
}

export namespace Access {
  export type AsObject = {
    level: LevelMap[keyof LevelMap],
    role: string,
    namespace: string,
  }
}

export class Node extends jspb.Message {
  getNode(): string;
  setNode(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getEdge(): string;
  setEdge(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    node: string,
    parent: string,
    edge: string,
  }
}

export class Nodes extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): void;
  addNodes(value?: Node, index?: number): Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nodes.AsObject;
  static toObject(includeInstance: boolean, msg: Nodes): Nodes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Nodes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nodes;
  static deserializeBinaryFromReader(message: Nodes, reader: jspb.BinaryReader): Nodes;
}

export namespace Nodes {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
  }
}

export interface LevelMap {
  NONE: 0;
  READ: 1;
  MGMT: 2;
  ADMIN: 3;
  ROOT: 4;
}

export const Level: LevelMap;

