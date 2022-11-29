// package: nocloud.cc
// file: cc/chats.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Chat extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    uuid: string,
    title: string,
  }
}

export class ChatMessage extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getMetaMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearMetaMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    uuid: string,
    from: string,
    to: string,
    message: string,
    metaMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
  }
}

export class ChatMessageStreamRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageStreamRequest): ChatMessageStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessageStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageStreamRequest;
  static deserializeBinaryFromReader(message: ChatMessageStreamRequest, reader: jspb.BinaryReader): ChatMessageStreamRequest;
}

export namespace ChatMessageStreamRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class SendChatMessageRequest extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): ChatMessage | undefined;
  setMessage(value?: ChatMessage): void;

  clearEntitiesList(): void;
  getEntitiesList(): Array<string>;
  setEntitiesList(value: Array<string>): void;
  addEntities(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendChatMessageRequest): SendChatMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendChatMessageRequest;
  static deserializeBinaryFromReader(message: SendChatMessageRequest, reader: jspb.BinaryReader): SendChatMessageRequest;
}

export namespace SendChatMessageRequest {
  export type AsObject = {
    message?: ChatMessage.AsObject,
    entitiesList: Array<string>,
  }
}

export class DeleteChatMessageRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessageRequest): DeleteChatMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessageRequest;
  static deserializeBinaryFromReader(message: DeleteChatMessageRequest, reader: jspb.BinaryReader): DeleteChatMessageRequest;
}

export namespace DeleteChatMessageRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class GetChatMessageRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageRequest): GetChatMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageRequest;
  static deserializeBinaryFromReader(message: GetChatMessageRequest, reader: jspb.BinaryReader): GetChatMessageRequest;
}

export namespace GetChatMessageRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class ListChatMessagesRequest extends jspb.Message {
  getChatuuid(): string;
  setChatuuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatMessagesRequest): ListChatMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListChatMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatMessagesRequest;
  static deserializeBinaryFromReader(message: ListChatMessagesRequest, reader: jspb.BinaryReader): ListChatMessagesRequest;
}

export namespace ListChatMessagesRequest {
  export type AsObject = {
    chatuuid: string,
  }
}

export class ListChatMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<ChatMessage>;
  setMessagesList(value: Array<ChatMessage>): void;
  addMessages(value?: ChatMessage, index?: number): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatMessagesResponse): ListChatMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListChatMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatMessagesResponse;
  static deserializeBinaryFromReader(message: ListChatMessagesResponse, reader: jspb.BinaryReader): ListChatMessagesResponse;
}

export namespace ListChatMessagesResponse {
  export type AsObject = {
    messagesList: Array<ChatMessage.AsObject>,
  }
}

export class InviteChatRequest extends jspb.Message {
  getChatuuid(): string;
  setChatuuid(value: string): void;

  getUseruuid(): string;
  setUseruuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteChatRequest): InviteChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteChatRequest;
  static deserializeBinaryFromReader(message: InviteChatRequest, reader: jspb.BinaryReader): InviteChatRequest;
}

export namespace InviteChatRequest {
  export type AsObject = {
    chatuuid: string,
    useruuid: string,
  }
}

export class CreateChatRequest extends jspb.Message {
  hasChat(): boolean;
  clearChat(): void;
  getChat(): Chat | undefined;
  setChat(value?: Chat): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatRequest): CreateChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatRequest;
  static deserializeBinaryFromReader(message: CreateChatRequest, reader: jspb.BinaryReader): CreateChatRequest;
}

export namespace CreateChatRequest {
  export type AsObject = {
    chat?: Chat.AsObject,
  }
}

export class GetChatRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatRequest): GetChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatRequest;
  static deserializeBinaryFromReader(message: GetChatRequest, reader: jspb.BinaryReader): GetChatRequest;
}

export namespace GetChatRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteChatRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatRequest): DeleteChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatRequest;
  static deserializeBinaryFromReader(message: DeleteChatRequest, reader: jspb.BinaryReader): DeleteChatRequest;
}

export namespace DeleteChatRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class Response extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
  }
}

