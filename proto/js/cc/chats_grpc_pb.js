// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cc_chats_pb = require('../cc/chats_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_nocloud_cc_Chat(arg) {
  if (!(arg instanceof cc_chats_pb.Chat)) {
    throw new Error('Expected argument of type nocloud.cc.Chat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_Chat(buffer_arg) {
  return cc_chats_pb.Chat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_ChatMessage(arg) {
  if (!(arg instanceof cc_chats_pb.ChatMessage)) {
    throw new Error('Expected argument of type nocloud.cc.ChatMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_ChatMessage(buffer_arg) {
  return cc_chats_pb.ChatMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_ChatMessageStreamRequest(arg) {
  if (!(arg instanceof cc_chats_pb.ChatMessageStreamRequest)) {
    throw new Error('Expected argument of type nocloud.cc.ChatMessageStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_ChatMessageStreamRequest(buffer_arg) {
  return cc_chats_pb.ChatMessageStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_CreateChatRequest(arg) {
  if (!(arg instanceof cc_chats_pb.CreateChatRequest)) {
    throw new Error('Expected argument of type nocloud.cc.CreateChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_CreateChatRequest(buffer_arg) {
  return cc_chats_pb.CreateChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_DeleteChatMessageRequest(arg) {
  if (!(arg instanceof cc_chats_pb.DeleteChatMessageRequest)) {
    throw new Error('Expected argument of type nocloud.cc.DeleteChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_DeleteChatMessageRequest(buffer_arg) {
  return cc_chats_pb.DeleteChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_DeleteChatRequest(arg) {
  if (!(arg instanceof cc_chats_pb.DeleteChatRequest)) {
    throw new Error('Expected argument of type nocloud.cc.DeleteChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_DeleteChatRequest(buffer_arg) {
  return cc_chats_pb.DeleteChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_GetChatMessageRequest(arg) {
  if (!(arg instanceof cc_chats_pb.GetChatMessageRequest)) {
    throw new Error('Expected argument of type nocloud.cc.GetChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_GetChatMessageRequest(buffer_arg) {
  return cc_chats_pb.GetChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_GetChatRequest(arg) {
  if (!(arg instanceof cc_chats_pb.GetChatRequest)) {
    throw new Error('Expected argument of type nocloud.cc.GetChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_GetChatRequest(buffer_arg) {
  return cc_chats_pb.GetChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_InviteChatRequest(arg) {
  if (!(arg instanceof cc_chats_pb.InviteChatRequest)) {
    throw new Error('Expected argument of type nocloud.cc.InviteChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_InviteChatRequest(buffer_arg) {
  return cc_chats_pb.InviteChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_ListChatMessagesRequest(arg) {
  if (!(arg instanceof cc_chats_pb.ListChatMessagesRequest)) {
    throw new Error('Expected argument of type nocloud.cc.ListChatMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_ListChatMessagesRequest(buffer_arg) {
  return cc_chats_pb.ListChatMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_ListChatMessagesResponse(arg) {
  if (!(arg instanceof cc_chats_pb.ListChatMessagesResponse)) {
    throw new Error('Expected argument of type nocloud.cc.ListChatMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_ListChatMessagesResponse(buffer_arg) {
  return cc_chats_pb.ListChatMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_Response(arg) {
  if (!(arg instanceof cc_chats_pb.Response)) {
    throw new Error('Expected argument of type nocloud.cc.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_Response(buffer_arg) {
  return cc_chats_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_cc_SendChatMessageRequest(arg) {
  if (!(arg instanceof cc_chats_pb.SendChatMessageRequest)) {
    throw new Error('Expected argument of type nocloud.cc.SendChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_cc_SendChatMessageRequest(buffer_arg) {
  return cc_chats_pb.SendChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  sendChatMessage: {
    path: '/nocloud.cc.ChatService/SendChatMessage',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.SendChatMessageRequest,
    responseType: cc_chats_pb.ChatMessage,
    requestSerialize: serialize_nocloud_cc_SendChatMessageRequest,
    requestDeserialize: deserialize_nocloud_cc_SendChatMessageRequest,
    responseSerialize: serialize_nocloud_cc_ChatMessage,
    responseDeserialize: deserialize_nocloud_cc_ChatMessage,
  },
  listChatMessages: {
    path: '/nocloud.cc.ChatService/ListChatMessages',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.ListChatMessagesRequest,
    responseType: cc_chats_pb.ListChatMessagesResponse,
    requestSerialize: serialize_nocloud_cc_ListChatMessagesRequest,
    requestDeserialize: deserialize_nocloud_cc_ListChatMessagesRequest,
    responseSerialize: serialize_nocloud_cc_ListChatMessagesResponse,
    responseDeserialize: deserialize_nocloud_cc_ListChatMessagesResponse,
  },
  getChatMessage: {
    path: '/nocloud.cc.ChatService/GetChatMessage',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.GetChatMessageRequest,
    responseType: cc_chats_pb.ChatMessage,
    requestSerialize: serialize_nocloud_cc_GetChatMessageRequest,
    requestDeserialize: deserialize_nocloud_cc_GetChatMessageRequest,
    responseSerialize: serialize_nocloud_cc_ChatMessage,
    responseDeserialize: deserialize_nocloud_cc_ChatMessage,
  },
  deleteChatMessage: {
    path: '/nocloud.cc.ChatService/DeleteChatMessage',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.DeleteChatMessageRequest,
    responseType: cc_chats_pb.Response,
    requestSerialize: serialize_nocloud_cc_DeleteChatMessageRequest,
    requestDeserialize: deserialize_nocloud_cc_DeleteChatMessageRequest,
    responseSerialize: serialize_nocloud_cc_Response,
    responseDeserialize: deserialize_nocloud_cc_Response,
  },
  updateChatMessage: {
    path: '/nocloud.cc.ChatService/UpdateChatMessage',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.ChatMessage,
    responseType: cc_chats_pb.ChatMessage,
    requestSerialize: serialize_nocloud_cc_ChatMessage,
    requestDeserialize: deserialize_nocloud_cc_ChatMessage,
    responseSerialize: serialize_nocloud_cc_ChatMessage,
    responseDeserialize: deserialize_nocloud_cc_ChatMessage,
  },
  getChat: {
    path: '/nocloud.cc.ChatService/GetChat',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.GetChatRequest,
    responseType: cc_chats_pb.Chat,
    requestSerialize: serialize_nocloud_cc_GetChatRequest,
    requestDeserialize: deserialize_nocloud_cc_GetChatRequest,
    responseSerialize: serialize_nocloud_cc_Chat,
    responseDeserialize: deserialize_nocloud_cc_Chat,
  },
  invite: {
    path: '/nocloud.cc.ChatService/Invite',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.InviteChatRequest,
    responseType: cc_chats_pb.Response,
    requestSerialize: serialize_nocloud_cc_InviteChatRequest,
    requestDeserialize: deserialize_nocloud_cc_InviteChatRequest,
    responseSerialize: serialize_nocloud_cc_Response,
    responseDeserialize: deserialize_nocloud_cc_Response,
  },
  createChat: {
    path: '/nocloud.cc.ChatService/CreateChat',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.CreateChatRequest,
    responseType: cc_chats_pb.Chat,
    requestSerialize: serialize_nocloud_cc_CreateChatRequest,
    requestDeserialize: deserialize_nocloud_cc_CreateChatRequest,
    responseSerialize: serialize_nocloud_cc_Chat,
    responseDeserialize: deserialize_nocloud_cc_Chat,
  },
  deleteChat: {
    path: '/nocloud.cc.ChatService/DeleteChat',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.DeleteChatRequest,
    responseType: cc_chats_pb.Response,
    requestSerialize: serialize_nocloud_cc_DeleteChatRequest,
    requestDeserialize: deserialize_nocloud_cc_DeleteChatRequest,
    responseSerialize: serialize_nocloud_cc_Response,
    responseDeserialize: deserialize_nocloud_cc_Response,
  },
  updateChat: {
    path: '/nocloud.cc.ChatService/UpdateChat',
    requestStream: false,
    responseStream: false,
    requestType: cc_chats_pb.Chat,
    responseType: cc_chats_pb.Chat,
    requestSerialize: serialize_nocloud_cc_Chat,
    requestDeserialize: deserialize_nocloud_cc_Chat,
    responseSerialize: serialize_nocloud_cc_Chat,
    responseDeserialize: deserialize_nocloud_cc_Chat,
  },
  stream: {
    path: '/nocloud.cc.ChatService/Stream',
    requestStream: false,
    responseStream: true,
    requestType: cc_chats_pb.ChatMessageStreamRequest,
    responseType: cc_chats_pb.ChatMessage,
    requestSerialize: serialize_nocloud_cc_ChatMessageStreamRequest,
    requestDeserialize: deserialize_nocloud_cc_ChatMessageStreamRequest,
    responseSerialize: serialize_nocloud_cc_ChatMessage,
    responseDeserialize: deserialize_nocloud_cc_ChatMessage,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
