// package: nocloud.dns
// file: dns/dns.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";

export class Record extends jspb.Message {
  clearAList(): void;
  getAList(): Array<Record.A>;
  setAList(value: Array<Record.A>): void;
  addA(value?: Record.A, index?: number): Record.A;

  clearAaaaList(): void;
  getAaaaList(): Array<Record.AAAA>;
  setAaaaList(value: Array<Record.AAAA>): void;
  addAaaa(value?: Record.AAAA, index?: number): Record.AAAA;

  clearCnameList(): void;
  getCnameList(): Array<Record.CNAME>;
  setCnameList(value: Array<Record.CNAME>): void;
  addCname(value?: Record.CNAME, index?: number): Record.CNAME;

  clearTxtList(): void;
  getTxtList(): Array<Record.TXT>;
  setTxtList(value: Array<Record.TXT>): void;
  addTxt(value?: Record.TXT, index?: number): Record.TXT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    aList: Array<Record.A.AsObject>,
    aaaaList: Array<Record.AAAA.AsObject>,
    cnameList: Array<Record.CNAME.AsObject>,
    txtList: Array<Record.TXT.AsObject>,
  }

  export class A extends jspb.Message {
    getIp(): string;
    setIp(value: string): void;

    getTtl(): number;
    setTtl(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): A.AsObject;
    static toObject(includeInstance: boolean, msg: A): A.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: A, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): A;
    static deserializeBinaryFromReader(message: A, reader: jspb.BinaryReader): A;
  }

  export namespace A {
    export type AsObject = {
      ip: string,
      ttl: number,
    }
  }

  export class AAAA extends jspb.Message {
    getIp(): string;
    setIp(value: string): void;

    getTtl(): number;
    setTtl(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AAAA.AsObject;
    static toObject(includeInstance: boolean, msg: AAAA): AAAA.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AAAA, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AAAA;
    static deserializeBinaryFromReader(message: AAAA, reader: jspb.BinaryReader): AAAA;
  }

  export namespace AAAA {
    export type AsObject = {
      ip: string,
      ttl: number,
    }
  }

  export class CNAME extends jspb.Message {
    getHost(): string;
    setHost(value: string): void;

    getTtl(): number;
    setTtl(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CNAME.AsObject;
    static toObject(includeInstance: boolean, msg: CNAME): CNAME.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CNAME, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CNAME;
    static deserializeBinaryFromReader(message: CNAME, reader: jspb.BinaryReader): CNAME;
  }

  export namespace CNAME {
    export type AsObject = {
      host: string,
      ttl: number,
    }
  }

  export class TXT extends jspb.Message {
    getText(): string;
    setText(value: string): void;

    getTtl(): number;
    setTtl(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TXT.AsObject;
    static toObject(includeInstance: boolean, msg: TXT): TXT.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TXT, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TXT;
    static deserializeBinaryFromReader(message: TXT, reader: jspb.BinaryReader): TXT;
  }

  export namespace TXT {
    export type AsObject = {
      text: string,
      ttl: number,
    }
  }
}

export class Zone extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationsMap(): jspb.Map<string, Record>;
  clearLocationsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    name: string,
    locationsMap: Array<[string, Record.AsObject]>,
  }
}

export class ListRequest extends jspb.Message {
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
  }
}

export class ListResponse extends jspb.Message {
  clearZonesList(): void;
  getZonesList(): Array<string>;
  setZonesList(value: Array<string>): void;
  addZones(value: string, index?: number): string;

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
    zonesList: Array<string>,
  }
}

export class Result extends jspb.Message {
  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    result: number,
  }
}

