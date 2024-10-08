// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: cc/chats.proto

package cc

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Chat struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid  string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Title string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
}

func (x *Chat) Reset() {
	*x = Chat{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Chat) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Chat) ProtoMessage() {}

func (x *Chat) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Chat.ProtoReflect.Descriptor instead.
func (*Chat) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{0}
}

func (x *Chat) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Chat) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

type ChatMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid    string                     `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	From    string                     `protobuf:"bytes,2,opt,name=from,proto3" json:"from,omitempty"`
	To      string                     `protobuf:"bytes,3,opt,name=to,proto3" json:"to,omitempty"`
	Message string                     `protobuf:"bytes,4,opt,name=message,proto3" json:"message,omitempty"`
	Meta    map[string]*structpb.Value `protobuf:"bytes,5,rep,name=meta,proto3" json:"meta,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ChatMessage) Reset() {
	*x = ChatMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatMessage) ProtoMessage() {}

func (x *ChatMessage) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatMessage.ProtoReflect.Descriptor instead.
func (*ChatMessage) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{1}
}

func (x *ChatMessage) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ChatMessage) GetFrom() string {
	if x != nil {
		return x.From
	}
	return ""
}

func (x *ChatMessage) GetTo() string {
	if x != nil {
		return x.To
	}
	return ""
}

func (x *ChatMessage) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *ChatMessage) GetMeta() map[string]*structpb.Value {
	if x != nil {
		return x.Meta
	}
	return nil
}

type ChatMessageStreamRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *ChatMessageStreamRequest) Reset() {
	*x = ChatMessageStreamRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatMessageStreamRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatMessageStreamRequest) ProtoMessage() {}

func (x *ChatMessageStreamRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatMessageStreamRequest.ProtoReflect.Descriptor instead.
func (*ChatMessageStreamRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{2}
}

func (x *ChatMessageStreamRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type SendChatMessageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message  *ChatMessage `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	Entities []string     `protobuf:"bytes,2,rep,name=entities,proto3" json:"entities,omitempty"`
}

func (x *SendChatMessageRequest) Reset() {
	*x = SendChatMessageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendChatMessageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendChatMessageRequest) ProtoMessage() {}

func (x *SendChatMessageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendChatMessageRequest.ProtoReflect.Descriptor instead.
func (*SendChatMessageRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{3}
}

func (x *SendChatMessageRequest) GetMessage() *ChatMessage {
	if x != nil {
		return x.Message
	}
	return nil
}

func (x *SendChatMessageRequest) GetEntities() []string {
	if x != nil {
		return x.Entities
	}
	return nil
}

type DeleteChatMessageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *DeleteChatMessageRequest) Reset() {
	*x = DeleteChatMessageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteChatMessageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteChatMessageRequest) ProtoMessage() {}

func (x *DeleteChatMessageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteChatMessageRequest.ProtoReflect.Descriptor instead.
func (*DeleteChatMessageRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{4}
}

func (x *DeleteChatMessageRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type GetChatMessageRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *GetChatMessageRequest) Reset() {
	*x = GetChatMessageRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetChatMessageRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetChatMessageRequest) ProtoMessage() {}

func (x *GetChatMessageRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetChatMessageRequest.ProtoReflect.Descriptor instead.
func (*GetChatMessageRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{5}
}

func (x *GetChatMessageRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type ListChatMessagesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChatUuid string `protobuf:"bytes,1,opt,name=chatUuid,proto3" json:"chatUuid,omitempty"`
}

func (x *ListChatMessagesRequest) Reset() {
	*x = ListChatMessagesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListChatMessagesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListChatMessagesRequest) ProtoMessage() {}

func (x *ListChatMessagesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListChatMessagesRequest.ProtoReflect.Descriptor instead.
func (*ListChatMessagesRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{6}
}

func (x *ListChatMessagesRequest) GetChatUuid() string {
	if x != nil {
		return x.ChatUuid
	}
	return ""
}

type ListChatMessagesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Messages []*ChatMessage `protobuf:"bytes,1,rep,name=messages,proto3" json:"messages,omitempty"`
}

func (x *ListChatMessagesResponse) Reset() {
	*x = ListChatMessagesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListChatMessagesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListChatMessagesResponse) ProtoMessage() {}

func (x *ListChatMessagesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListChatMessagesResponse.ProtoReflect.Descriptor instead.
func (*ListChatMessagesResponse) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{7}
}

func (x *ListChatMessagesResponse) GetMessages() []*ChatMessage {
	if x != nil {
		return x.Messages
	}
	return nil
}

type InviteChatRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChatUuid string `protobuf:"bytes,1,opt,name=chatUuid,proto3" json:"chatUuid,omitempty"`
	UserUuid string `protobuf:"bytes,2,opt,name=userUuid,proto3" json:"userUuid,omitempty"`
}

func (x *InviteChatRequest) Reset() {
	*x = InviteChatRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InviteChatRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InviteChatRequest) ProtoMessage() {}

func (x *InviteChatRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InviteChatRequest.ProtoReflect.Descriptor instead.
func (*InviteChatRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{8}
}

func (x *InviteChatRequest) GetChatUuid() string {
	if x != nil {
		return x.ChatUuid
	}
	return ""
}

func (x *InviteChatRequest) GetUserUuid() string {
	if x != nil {
		return x.UserUuid
	}
	return ""
}

type CreateChatRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Chat *Chat `protobuf:"bytes,1,opt,name=chat,proto3" json:"chat,omitempty"`
}

func (x *CreateChatRequest) Reset() {
	*x = CreateChatRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateChatRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateChatRequest) ProtoMessage() {}

func (x *CreateChatRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateChatRequest.ProtoReflect.Descriptor instead.
func (*CreateChatRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{9}
}

func (x *CreateChatRequest) GetChat() *Chat {
	if x != nil {
		return x.Chat
	}
	return nil
}

type GetChatRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *GetChatRequest) Reset() {
	*x = GetChatRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetChatRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetChatRequest) ProtoMessage() {}

func (x *GetChatRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetChatRequest.ProtoReflect.Descriptor instead.
func (*GetChatRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{10}
}

func (x *GetChatRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type DeleteChatRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *DeleteChatRequest) Reset() {
	*x = DeleteChatRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteChatRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteChatRequest) ProtoMessage() {}

func (x *DeleteChatRequest) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteChatRequest.ProtoReflect.Descriptor instead.
func (*DeleteChatRequest) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{11}
}

func (x *DeleteChatRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Response) Reset() {
	*x = Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cc_chats_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Response) ProtoMessage() {}

func (x *Response) ProtoReflect() protoreflect.Message {
	mi := &file_cc_chats_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Response.ProtoReflect.Descriptor instead.
func (*Response) Descriptor() ([]byte, []int) {
	return file_cc_chats_proto_rawDescGZIP(), []int{12}
}

var File_cc_chats_proto protoreflect.FileDescriptor

var file_cc_chats_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x63, 0x63, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0a, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x1a, 0x1c, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75,
	0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x30, 0x0a, 0x04, 0x43, 0x68, 0x61, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x22, 0xe7, 0x01, 0x0a, 0x0b, 0x43,
	0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x66, 0x72, 0x6f, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x66, 0x72,
	0x6f, 0x6d, 0x12, 0x0e, 0x0a, 0x02, 0x74, 0x6f, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x74, 0x6f, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x35, 0x0a, 0x04,
	0x6d, 0x65, 0x74, 0x61, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x6e, 0x6f, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x6d,
	0x65, 0x74, 0x61, 0x1a, 0x4f, 0x0a, 0x09, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b,
	0x65, 0x79, 0x12, 0x2c, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x22, 0x2e, 0x0a, 0x18, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x22, 0x67, 0x0a, 0x16, 0x53, 0x65, 0x6e, 0x64, 0x43, 0x68, 0x61, 0x74,
	0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x31,
	0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61,
	0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x18, 0x02, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x22, 0x2e, 0x0a,
	0x18, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x2b, 0x0a,
	0x15, 0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x35, 0x0a, 0x17, 0x4c, 0x69,
	0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x74, 0x55, 0x75, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x68, 0x61, 0x74, 0x55, 0x75, 0x69,
	0x64, 0x22, 0x4f, 0x0a, 0x18, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a,
	0x08, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61,
	0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x08, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x73, 0x22, 0x4b, 0x0a, 0x11, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x74, 0x55,
	0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x68, 0x61, 0x74, 0x55,
	0x75, 0x69, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x55, 0x75, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x55, 0x75, 0x69, 0x64, 0x22,
	0x39, 0x0a, 0x11, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x24, 0x0a, 0x04, 0x63, 0x68, 0x61, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e,
	0x43, 0x68, 0x61, 0x74, 0x52, 0x04, 0x63, 0x68, 0x61, 0x74, 0x22, 0x24, 0x0a, 0x0e, 0x47, 0x65,
	0x74, 0x43, 0x68, 0x61, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x22, 0x27, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x0a, 0x0a, 0x08, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xad, 0x08, 0x0a, 0x0b, 0x43, 0x68, 0x61, 0x74, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x64, 0x0a, 0x0f, 0x53, 0x65, 0x6e, 0x64, 0x43, 0x68, 0x61,
	0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x22, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x53, 0x65, 0x6e, 0x64, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x6e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x14, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0e, 0x3a, 0x01, 0x2a,
	0x1a, 0x09, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x12, 0x81, 0x01, 0x0a, 0x10,
	0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x12, 0x23, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x63, 0x63, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x22, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x1c, 0x12, 0x1a, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x73, 0x2f, 0x7b, 0x63, 0x68, 0x61,
	0x74, 0x55, 0x75, 0x69, 0x64, 0x7d, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x12,
	0x66, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x21, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x47,
	0x65, 0x74, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63,
	0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x18, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x12, 0x12, 0x10, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2f, 0x7b, 0x75, 0x75, 0x69, 0x64, 0x7d, 0x12, 0x69, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x24, 0x2e, 0x6e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x18, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x12,
	0x2a, 0x10, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2f, 0x7b, 0x75, 0x75, 0x69,
	0x64, 0x7d, 0x12, 0x5b, 0x0a, 0x11, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74,
	0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x17, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x1a, 0x17, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68,
	0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x14, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x0e, 0x3a, 0x01, 0x2a, 0x32, 0x09, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x12,
	0x4e, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x74, 0x12, 0x1a, 0x2e, 0x6e, 0x6f, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x10, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x22, 0x15, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0f,
	0x12, 0x0d, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x73, 0x2f, 0x7b, 0x75, 0x75, 0x69, 0x64, 0x7d, 0x12,
	0x57, 0x0a, 0x06, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x12, 0x1d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x43, 0x68, 0x61,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x18,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x12, 0x3a, 0x01, 0x2a, 0x22, 0x0d, 0x2f, 0x63, 0x68, 0x61, 0x74,
	0x73, 0x2f, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x12, 0x50, 0x0a, 0x0a, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x12, 0x1d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2e, 0x63, 0x63, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x10, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x63, 0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x22, 0x11, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0b, 0x3a,
	0x01, 0x2a, 0x1a, 0x06, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x73, 0x12, 0x58, 0x0a, 0x0a, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74, 0x12, 0x1d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x68, 0x61, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x63, 0x63, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x15, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x0f, 0x2a, 0x0d, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x73, 0x2f, 0x7b, 0x75,
	0x75, 0x69, 0x64, 0x7d, 0x12, 0x43, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x68,
	0x61, 0x74, 0x12, 0x10, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e,
	0x43, 0x68, 0x61, 0x74, 0x1a, 0x10, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63,
	0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x22, 0x11, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0b, 0x3a, 0x01,
	0x2a, 0x32, 0x06, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x73, 0x12, 0x6a, 0x0a, 0x06, 0x53, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x12, 0x24, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63,
	0x2e, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x53, 0x74, 0x72, 0x65,
	0x61, 0x6d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x6e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x22, 0x1f, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x19, 0x12, 0x17, 0x2f, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x73, 0x2f, 0x7b, 0x75, 0x75, 0x69, 0x64, 0x7d, 0x2f, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x30, 0x01, 0x42, 0x8a, 0x01, 0x0a, 0x0e, 0x63, 0x6f, 0x6d, 0x2e, 0x6e, 0x6f,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x63, 0x63, 0x42, 0x0a, 0x43, 0x68, 0x61, 0x74, 0x73, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x23, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x73, 0x6c, 0x6e, 0x74, 0x6f, 0x70, 0x70, 0x2f, 0x6e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63, 0x63, 0xa2, 0x02, 0x03, 0x4e, 0x43,
	0x58, 0xaa, 0x02, 0x0a, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x43, 0x63, 0xca, 0x02,
	0x0a, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x43, 0x63, 0xe2, 0x02, 0x16, 0x4e, 0x6f,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x43, 0x63, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0b, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x3a, 0x3a,
	0x43, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_cc_chats_proto_rawDescOnce sync.Once
	file_cc_chats_proto_rawDescData = file_cc_chats_proto_rawDesc
)

func file_cc_chats_proto_rawDescGZIP() []byte {
	file_cc_chats_proto_rawDescOnce.Do(func() {
		file_cc_chats_proto_rawDescData = protoimpl.X.CompressGZIP(file_cc_chats_proto_rawDescData)
	})
	return file_cc_chats_proto_rawDescData
}

var file_cc_chats_proto_msgTypes = make([]protoimpl.MessageInfo, 14)
var file_cc_chats_proto_goTypes = []any{
	(*Chat)(nil),                     // 0: nocloud.cc.Chat
	(*ChatMessage)(nil),              // 1: nocloud.cc.ChatMessage
	(*ChatMessageStreamRequest)(nil), // 2: nocloud.cc.ChatMessageStreamRequest
	(*SendChatMessageRequest)(nil),   // 3: nocloud.cc.SendChatMessageRequest
	(*DeleteChatMessageRequest)(nil), // 4: nocloud.cc.DeleteChatMessageRequest
	(*GetChatMessageRequest)(nil),    // 5: nocloud.cc.GetChatMessageRequest
	(*ListChatMessagesRequest)(nil),  // 6: nocloud.cc.ListChatMessagesRequest
	(*ListChatMessagesResponse)(nil), // 7: nocloud.cc.ListChatMessagesResponse
	(*InviteChatRequest)(nil),        // 8: nocloud.cc.InviteChatRequest
	(*CreateChatRequest)(nil),        // 9: nocloud.cc.CreateChatRequest
	(*GetChatRequest)(nil),           // 10: nocloud.cc.GetChatRequest
	(*DeleteChatRequest)(nil),        // 11: nocloud.cc.DeleteChatRequest
	(*Response)(nil),                 // 12: nocloud.cc.Response
	nil,                              // 13: nocloud.cc.ChatMessage.MetaEntry
	(*structpb.Value)(nil),           // 14: google.protobuf.Value
}
var file_cc_chats_proto_depIdxs = []int32{
	13, // 0: nocloud.cc.ChatMessage.meta:type_name -> nocloud.cc.ChatMessage.MetaEntry
	1,  // 1: nocloud.cc.SendChatMessageRequest.message:type_name -> nocloud.cc.ChatMessage
	1,  // 2: nocloud.cc.ListChatMessagesResponse.messages:type_name -> nocloud.cc.ChatMessage
	0,  // 3: nocloud.cc.CreateChatRequest.chat:type_name -> nocloud.cc.Chat
	14, // 4: nocloud.cc.ChatMessage.MetaEntry.value:type_name -> google.protobuf.Value
	3,  // 5: nocloud.cc.ChatService.SendChatMessage:input_type -> nocloud.cc.SendChatMessageRequest
	6,  // 6: nocloud.cc.ChatService.ListChatMessages:input_type -> nocloud.cc.ListChatMessagesRequest
	5,  // 7: nocloud.cc.ChatService.GetChatMessage:input_type -> nocloud.cc.GetChatMessageRequest
	4,  // 8: nocloud.cc.ChatService.DeleteChatMessage:input_type -> nocloud.cc.DeleteChatMessageRequest
	1,  // 9: nocloud.cc.ChatService.UpdateChatMessage:input_type -> nocloud.cc.ChatMessage
	10, // 10: nocloud.cc.ChatService.GetChat:input_type -> nocloud.cc.GetChatRequest
	8,  // 11: nocloud.cc.ChatService.Invite:input_type -> nocloud.cc.InviteChatRequest
	9,  // 12: nocloud.cc.ChatService.CreateChat:input_type -> nocloud.cc.CreateChatRequest
	11, // 13: nocloud.cc.ChatService.DeleteChat:input_type -> nocloud.cc.DeleteChatRequest
	0,  // 14: nocloud.cc.ChatService.UpdateChat:input_type -> nocloud.cc.Chat
	2,  // 15: nocloud.cc.ChatService.Stream:input_type -> nocloud.cc.ChatMessageStreamRequest
	1,  // 16: nocloud.cc.ChatService.SendChatMessage:output_type -> nocloud.cc.ChatMessage
	7,  // 17: nocloud.cc.ChatService.ListChatMessages:output_type -> nocloud.cc.ListChatMessagesResponse
	1,  // 18: nocloud.cc.ChatService.GetChatMessage:output_type -> nocloud.cc.ChatMessage
	12, // 19: nocloud.cc.ChatService.DeleteChatMessage:output_type -> nocloud.cc.Response
	1,  // 20: nocloud.cc.ChatService.UpdateChatMessage:output_type -> nocloud.cc.ChatMessage
	0,  // 21: nocloud.cc.ChatService.GetChat:output_type -> nocloud.cc.Chat
	12, // 22: nocloud.cc.ChatService.Invite:output_type -> nocloud.cc.Response
	0,  // 23: nocloud.cc.ChatService.CreateChat:output_type -> nocloud.cc.Chat
	12, // 24: nocloud.cc.ChatService.DeleteChat:output_type -> nocloud.cc.Response
	0,  // 25: nocloud.cc.ChatService.UpdateChat:output_type -> nocloud.cc.Chat
	1,  // 26: nocloud.cc.ChatService.Stream:output_type -> nocloud.cc.ChatMessage
	16, // [16:27] is the sub-list for method output_type
	5,  // [5:16] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_cc_chats_proto_init() }
func file_cc_chats_proto_init() {
	if File_cc_chats_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_cc_chats_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Chat); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*ChatMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*ChatMessageStreamRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*SendChatMessageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*DeleteChatMessageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*GetChatMessageRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*ListChatMessagesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[7].Exporter = func(v any, i int) any {
			switch v := v.(*ListChatMessagesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[8].Exporter = func(v any, i int) any {
			switch v := v.(*InviteChatRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[9].Exporter = func(v any, i int) any {
			switch v := v.(*CreateChatRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[10].Exporter = func(v any, i int) any {
			switch v := v.(*GetChatRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[11].Exporter = func(v any, i int) any {
			switch v := v.(*DeleteChatRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cc_chats_proto_msgTypes[12].Exporter = func(v any, i int) any {
			switch v := v.(*Response); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_cc_chats_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   14,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_cc_chats_proto_goTypes,
		DependencyIndexes: file_cc_chats_proto_depIdxs,
		MessageInfos:      file_cc_chats_proto_msgTypes,
	}.Build()
	File_cc_chats_proto = out.File
	file_cc_chats_proto_rawDesc = nil
	file_cc_chats_proto_goTypes = nil
	file_cc_chats_proto_depIdxs = nil
}
