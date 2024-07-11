// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file cc/chats.proto (package nocloud.cc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message nocloud.cc.Chat
 */
export declare class Chat extends Message<Chat> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  constructor(data?: PartialMessage<Chat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.Chat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Chat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Chat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Chat;

  static equals(a: Chat | PlainMessage<Chat> | undefined, b: Chat | PlainMessage<Chat> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.ChatMessage
 */
export declare class ChatMessage extends Message<ChatMessage> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string from = 2;
   */
  from: string;

  /**
   * @generated from field: string to = 3;
   */
  to: string;

  /**
   * @generated from field: string message = 4;
   */
  message: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 5;
   */
  meta: { [key: string]: Value };

  constructor(data?: PartialMessage<ChatMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.ChatMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessage;

  static equals(a: ChatMessage | PlainMessage<ChatMessage> | undefined, b: ChatMessage | PlainMessage<ChatMessage> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.ChatMessageStreamRequest
 */
export declare class ChatMessageStreamRequest extends Message<ChatMessageStreamRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<ChatMessageStreamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.ChatMessageStreamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessageStreamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessageStreamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessageStreamRequest;

  static equals(a: ChatMessageStreamRequest | PlainMessage<ChatMessageStreamRequest> | undefined, b: ChatMessageStreamRequest | PlainMessage<ChatMessageStreamRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.SendChatMessageRequest
 */
export declare class SendChatMessageRequest extends Message<SendChatMessageRequest> {
  /**
   * @generated from field: nocloud.cc.ChatMessage message = 1;
   */
  message?: ChatMessage;

  /**
   * @generated from field: repeated string entities = 2;
   */
  entities: string[];

  constructor(data?: PartialMessage<SendChatMessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.SendChatMessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendChatMessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendChatMessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendChatMessageRequest;

  static equals(a: SendChatMessageRequest | PlainMessage<SendChatMessageRequest> | undefined, b: SendChatMessageRequest | PlainMessage<SendChatMessageRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.DeleteChatMessageRequest
 */
export declare class DeleteChatMessageRequest extends Message<DeleteChatMessageRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteChatMessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.DeleteChatMessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteChatMessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteChatMessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteChatMessageRequest;

  static equals(a: DeleteChatMessageRequest | PlainMessage<DeleteChatMessageRequest> | undefined, b: DeleteChatMessageRequest | PlainMessage<DeleteChatMessageRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.GetChatMessageRequest
 */
export declare class GetChatMessageRequest extends Message<GetChatMessageRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetChatMessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.GetChatMessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChatMessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChatMessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChatMessageRequest;

  static equals(a: GetChatMessageRequest | PlainMessage<GetChatMessageRequest> | undefined, b: GetChatMessageRequest | PlainMessage<GetChatMessageRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.ListChatMessagesRequest
 */
export declare class ListChatMessagesRequest extends Message<ListChatMessagesRequest> {
  /**
   * @generated from field: string chatUuid = 1;
   */
  chatUuid: string;

  constructor(data?: PartialMessage<ListChatMessagesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.ListChatMessagesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListChatMessagesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListChatMessagesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListChatMessagesRequest;

  static equals(a: ListChatMessagesRequest | PlainMessage<ListChatMessagesRequest> | undefined, b: ListChatMessagesRequest | PlainMessage<ListChatMessagesRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.ListChatMessagesResponse
 */
export declare class ListChatMessagesResponse extends Message<ListChatMessagesResponse> {
  /**
   * @generated from field: repeated nocloud.cc.ChatMessage messages = 1;
   */
  messages: ChatMessage[];

  constructor(data?: PartialMessage<ListChatMessagesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.ListChatMessagesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListChatMessagesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListChatMessagesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListChatMessagesResponse;

  static equals(a: ListChatMessagesResponse | PlainMessage<ListChatMessagesResponse> | undefined, b: ListChatMessagesResponse | PlainMessage<ListChatMessagesResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.InviteChatRequest
 */
export declare class InviteChatRequest extends Message<InviteChatRequest> {
  /**
   * @generated from field: string chatUuid = 1;
   */
  chatUuid: string;

  /**
   * @generated from field: string userUuid = 2;
   */
  userUuid: string;

  constructor(data?: PartialMessage<InviteChatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.InviteChatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InviteChatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InviteChatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InviteChatRequest;

  static equals(a: InviteChatRequest | PlainMessage<InviteChatRequest> | undefined, b: InviteChatRequest | PlainMessage<InviteChatRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.CreateChatRequest
 */
export declare class CreateChatRequest extends Message<CreateChatRequest> {
  /**
   * @generated from field: nocloud.cc.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<CreateChatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.CreateChatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateChatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateChatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateChatRequest;

  static equals(a: CreateChatRequest | PlainMessage<CreateChatRequest> | undefined, b: CreateChatRequest | PlainMessage<CreateChatRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.GetChatRequest
 */
export declare class GetChatRequest extends Message<GetChatRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetChatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.GetChatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChatRequest;

  static equals(a: GetChatRequest | PlainMessage<GetChatRequest> | undefined, b: GetChatRequest | PlainMessage<GetChatRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.DeleteChatRequest
 */
export declare class DeleteChatRequest extends Message<DeleteChatRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteChatRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.DeleteChatRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteChatRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteChatRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteChatRequest;

  static equals(a: DeleteChatRequest | PlainMessage<DeleteChatRequest> | undefined, b: DeleteChatRequest | PlainMessage<DeleteChatRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.cc.Response
 */
export declare class Response extends Message<Response> {
  constructor(data?: PartialMessage<Response>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.cc.Response";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Response;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Response;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Response;

  static equals(a: Response | PlainMessage<Response> | undefined, b: Response | PlainMessage<Response> | undefined): boolean;
}

