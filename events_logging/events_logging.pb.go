//
//Copyright © 2021-2023 Nikita Ivanovski info@slnt-opp.xyz
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: events_logging/events_logging.proto

package events_logging

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

type Snapshot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   int32  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Diff string `protobuf:"bytes,2,opt,name=diff,proto3" json:"diff,omitempty"`
}

func (x *Snapshot) Reset() {
	*x = Snapshot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_logging_events_logging_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Snapshot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Snapshot) ProtoMessage() {}

func (x *Snapshot) ProtoReflect() protoreflect.Message {
	mi := &file_events_logging_events_logging_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Snapshot.ProtoReflect.Descriptor instead.
func (*Snapshot) Descriptor() ([]byte, []int) {
	return file_events_logging_events_logging_proto_rawDescGZIP(), []int{0}
}

func (x *Snapshot) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Snapshot) GetDiff() string {
	if x != nil {
		return x.Diff
	}
	return ""
}

type Event struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int32     `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Entity    string    `protobuf:"bytes,2,opt,name=entity,proto3" json:"entity,omitempty"`
	Uuid      string    `protobuf:"bytes,3,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Scope     string    `protobuf:"bytes,4,opt,name=scope,proto3" json:"scope,omitempty"`
	Action    string    `protobuf:"bytes,5,opt,name=action,proto3" json:"action,omitempty"`
	Rc        int32     `protobuf:"varint,6,opt,name=rc,proto3" json:"rc,omitempty"`
	Requestor string    `protobuf:"bytes,7,opt,name=requestor,proto3" json:"requestor,omitempty"`
	Ts        int64     `protobuf:"varint,8,opt,name=ts,proto3" json:"ts,omitempty"`
	Snapshot  *Snapshot `protobuf:"bytes,9,opt,name=snapshot,proto3,oneof" json:"snapshot,omitempty"`
}

func (x *Event) Reset() {
	*x = Event{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_logging_events_logging_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Event) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Event) ProtoMessage() {}

func (x *Event) ProtoReflect() protoreflect.Message {
	mi := &file_events_logging_events_logging_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Event.ProtoReflect.Descriptor instead.
func (*Event) Descriptor() ([]byte, []int) {
	return file_events_logging_events_logging_proto_rawDescGZIP(), []int{1}
}

func (x *Event) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Event) GetEntity() string {
	if x != nil {
		return x.Entity
	}
	return ""
}

func (x *Event) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Event) GetScope() string {
	if x != nil {
		return x.Scope
	}
	return ""
}

func (x *Event) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (x *Event) GetRc() int32 {
	if x != nil {
		return x.Rc
	}
	return 0
}

func (x *Event) GetRequestor() string {
	if x != nil {
		return x.Requestor
	}
	return ""
}

func (x *Event) GetTs() int64 {
	if x != nil {
		return x.Ts
	}
	return 0
}

func (x *Event) GetSnapshot() *Snapshot {
	if x != nil {
		return x.Snapshot
	}
	return nil
}

type Events struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Events []*Event `protobuf:"bytes,1,rep,name=events,proto3" json:"events,omitempty"`
	Count  int64    `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
}

func (x *Events) Reset() {
	*x = Events{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_logging_events_logging_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Events) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Events) ProtoMessage() {}

func (x *Events) ProtoReflect() protoreflect.Message {
	mi := &file_events_logging_events_logging_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Events.ProtoReflect.Descriptor instead.
func (*Events) Descriptor() ([]byte, []int) {
	return file_events_logging_events_logging_proto_rawDescGZIP(), []int{2}
}

func (x *Events) GetEvents() []*Event {
	if x != nil {
		return x.Events
	}
	return nil
}

func (x *Events) GetCount() int64 {
	if x != nil {
		return x.Count
	}
	return 0
}

type GetEventsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Requestor *string                    `protobuf:"bytes,1,opt,name=requestor,proto3,oneof" json:"requestor,omitempty"`
	Uuid      *string                    `protobuf:"bytes,2,opt,name=uuid,proto3,oneof" json:"uuid,omitempty"`
	Page      *int64                     `protobuf:"varint,3,opt,name=page,proto3,oneof" json:"page,omitempty"`
	Limit     *int64                     `protobuf:"varint,4,opt,name=limit,proto3,oneof" json:"limit,omitempty"`
	Field     *string                    `protobuf:"bytes,5,opt,name=field,proto3,oneof" json:"field,omitempty"`
	Sort      *string                    `protobuf:"bytes,6,opt,name=sort,proto3,oneof" json:"sort,omitempty"`
	Filters   map[string]*structpb.Value `protobuf:"bytes,7,rep,name=filters,proto3" json:"filters,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *GetEventsRequest) Reset() {
	*x = GetEventsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_logging_events_logging_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetEventsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetEventsRequest) ProtoMessage() {}

func (x *GetEventsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_events_logging_events_logging_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetEventsRequest.ProtoReflect.Descriptor instead.
func (*GetEventsRequest) Descriptor() ([]byte, []int) {
	return file_events_logging_events_logging_proto_rawDescGZIP(), []int{3}
}

func (x *GetEventsRequest) GetRequestor() string {
	if x != nil && x.Requestor != nil {
		return *x.Requestor
	}
	return ""
}

func (x *GetEventsRequest) GetUuid() string {
	if x != nil && x.Uuid != nil {
		return *x.Uuid
	}
	return ""
}

func (x *GetEventsRequest) GetPage() int64 {
	if x != nil && x.Page != nil {
		return *x.Page
	}
	return 0
}

func (x *GetEventsRequest) GetLimit() int64 {
	if x != nil && x.Limit != nil {
		return *x.Limit
	}
	return 0
}

func (x *GetEventsRequest) GetField() string {
	if x != nil && x.Field != nil {
		return *x.Field
	}
	return ""
}

func (x *GetEventsRequest) GetSort() string {
	if x != nil && x.Sort != nil {
		return *x.Sort
	}
	return ""
}

func (x *GetEventsRequest) GetFilters() map[string]*structpb.Value {
	if x != nil {
		return x.Filters
	}
	return nil
}

type GetEventsCountRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Requestor *string                    `protobuf:"bytes,1,opt,name=requestor,proto3,oneof" json:"requestor,omitempty"`
	Uuid      *string                    `protobuf:"bytes,2,opt,name=uuid,proto3,oneof" json:"uuid,omitempty"`
	Filters   map[string]*structpb.Value `protobuf:"bytes,7,rep,name=filters,proto3" json:"filters,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *GetEventsCountRequest) Reset() {
	*x = GetEventsCountRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_logging_events_logging_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetEventsCountRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetEventsCountRequest) ProtoMessage() {}

func (x *GetEventsCountRequest) ProtoReflect() protoreflect.Message {
	mi := &file_events_logging_events_logging_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetEventsCountRequest.ProtoReflect.Descriptor instead.
func (*GetEventsCountRequest) Descriptor() ([]byte, []int) {
	return file_events_logging_events_logging_proto_rawDescGZIP(), []int{4}
}

func (x *GetEventsCountRequest) GetRequestor() string {
	if x != nil && x.Requestor != nil {
		return *x.Requestor
	}
	return ""
}

func (x *GetEventsCountRequest) GetUuid() string {
	if x != nil && x.Uuid != nil {
		return *x.Uuid
	}
	return ""
}

func (x *GetEventsCountRequest) GetFilters() map[string]*structpb.Value {
	if x != nil {
		return x.Filters
	}
	return nil
}

type GetEventsCountResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total  uint64          `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
	Unique *structpb.Value `protobuf:"bytes,2,opt,name=unique,proto3" json:"unique,omitempty"`
}

func (x *GetEventsCountResponse) Reset() {
	*x = GetEventsCountResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_events_logging_events_logging_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetEventsCountResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetEventsCountResponse) ProtoMessage() {}

func (x *GetEventsCountResponse) ProtoReflect() protoreflect.Message {
	mi := &file_events_logging_events_logging_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetEventsCountResponse.ProtoReflect.Descriptor instead.
func (*GetEventsCountResponse) Descriptor() ([]byte, []int) {
	return file_events_logging_events_logging_proto_rawDescGZIP(), []int{5}
}

func (x *GetEventsCountResponse) GetTotal() uint64 {
	if x != nil {
		return x.Total
	}
	return 0
}

func (x *GetEventsCountResponse) GetUnique() *structpb.Value {
	if x != nil {
		return x.Unique
	}
	return nil
}

var File_events_logging_events_logging_proto protoreflect.FileDescriptor

var file_events_logging_events_logging_proto_rawDesc = []byte{
	0x0a, 0x23, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67,
	0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x1a, 0x1c, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x2e, 0x0a, 0x08, 0x53, 0x6e, 0x61,
	0x70, 0x73, 0x68, 0x6f, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x69, 0x66, 0x66, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x69, 0x66, 0x66, 0x22, 0xff, 0x01, 0x0a, 0x05, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12,
	0x14, 0x0a, 0x05, 0x73, 0x63, 0x6f, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x73, 0x63, 0x6f, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a,
	0x02, 0x72, 0x63, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x72, 0x63, 0x12, 0x1c, 0x0a,
	0x09, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x74,
	0x73, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x74, 0x73, 0x12, 0x41, 0x0a, 0x08, 0x73,
	0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e,
	0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c,
	0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x48,
	0x00, 0x52, 0x08, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x88, 0x01, 0x01, 0x42, 0x0b,
	0x0a, 0x09, 0x5f, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x22, 0x55, 0x0a, 0x06, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x35, 0x0a, 0x06, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x52, 0x06, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x22, 0x98, 0x03, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x21, 0x0a, 0x09, 0x72, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x09, 0x72, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x03, 0x48, 0x02, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05,
	0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x48, 0x03, 0x52, 0x05, 0x6c,
	0x69, 0x6d, 0x69, 0x74, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x04, 0x52, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x88,
	0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x05, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x88, 0x01, 0x01, 0x12, 0x4f, 0x0a, 0x07, 0x66,
	0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x35, 0x2e, 0x6e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f,
	0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x52, 0x07, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x1a, 0x52, 0x0a, 0x0c,
	0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2c,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x42, 0x07,
	0x0a, 0x05, 0x5f, 0x75, 0x75, 0x69, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x70, 0x61, 0x67, 0x65,
	0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x66,
	0x69, 0x65, 0x6c, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x73, 0x6f, 0x72, 0x74, 0x22, 0x94, 0x02,
	0x0a, 0x15, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x21, 0x0a, 0x09, 0x72, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x09, 0x72, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x88, 0x01, 0x01, 0x12, 0x54, 0x0a, 0x07, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x18, 0x07,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x47, 0x65,
	0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x07, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x1a, 0x52, 0x0a, 0x0c, 0x46, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2c, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x0c, 0x0a,
	0x0a, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x42, 0x07, 0x0a, 0x05, 0x5f,
	0x75, 0x75, 0x69, 0x64, 0x22, 0x5e, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x05, 0x74,
	0x6f, 0x74, 0x61, 0x6c, 0x12, 0x2e, 0x0a, 0x06, 0x75, 0x6e, 0x69, 0x71, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x06, 0x75, 0x6e,
	0x69, 0x71, 0x75, 0x65, 0x32, 0x89, 0x02, 0x0a, 0x14, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x4c,
	0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x6a, 0x0a,
	0x09, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x28, 0x2e, 0x6e, 0x6f, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67,
	0x69, 0x6e, 0x67, 0x2e, 0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x73, 0x22, 0x13, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0d, 0x3a, 0x01, 0x2a, 0x22,
	0x08, 0x2f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x12, 0x84, 0x01, 0x0a, 0x08, 0x47, 0x65,
	0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x2d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e,
	0x47, 0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2e, 0x47,
	0x65, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x19, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x13, 0x3a, 0x01, 0x2a,
	0x22, 0x0e, 0x2f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x2f, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x42, 0xd6, 0x01, 0x0a, 0x1a, 0x63, 0x6f, 0x6d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x42,
	0x12, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x4c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x73, 0x6c, 0x6e, 0x74, 0x6f, 0x70, 0x70, 0x2f, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c,
	0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0xa2, 0x02, 0x03, 0x4e, 0x45, 0x58, 0xaa, 0x02, 0x15, 0x4e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x4c, 0x6f, 0x67,
	0x67, 0x69, 0x6e, 0x67, 0xca, 0x02, 0x15, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x4c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0xe2, 0x02, 0x21, 0x4e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x4c, 0x6f, 0x67,
	0x67, 0x69, 0x6e, 0x67, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x16, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x3a, 0x3a, 0x45, 0x76, 0x65, 0x6e,
	0x74, 0x73, 0x4c, 0x6f, 0x67, 0x67, 0x69, 0x6e, 0x67, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_events_logging_events_logging_proto_rawDescOnce sync.Once
	file_events_logging_events_logging_proto_rawDescData = file_events_logging_events_logging_proto_rawDesc
)

func file_events_logging_events_logging_proto_rawDescGZIP() []byte {
	file_events_logging_events_logging_proto_rawDescOnce.Do(func() {
		file_events_logging_events_logging_proto_rawDescData = protoimpl.X.CompressGZIP(file_events_logging_events_logging_proto_rawDescData)
	})
	return file_events_logging_events_logging_proto_rawDescData
}

var file_events_logging_events_logging_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_events_logging_events_logging_proto_goTypes = []interface{}{
	(*Snapshot)(nil),               // 0: nocloud.events_logging.Snapshot
	(*Event)(nil),                  // 1: nocloud.events_logging.Event
	(*Events)(nil),                 // 2: nocloud.events_logging.Events
	(*GetEventsRequest)(nil),       // 3: nocloud.events_logging.GetEventsRequest
	(*GetEventsCountRequest)(nil),  // 4: nocloud.events_logging.GetEventsCountRequest
	(*GetEventsCountResponse)(nil), // 5: nocloud.events_logging.GetEventsCountResponse
	nil,                            // 6: nocloud.events_logging.GetEventsRequest.FiltersEntry
	nil,                            // 7: nocloud.events_logging.GetEventsCountRequest.FiltersEntry
	(*structpb.Value)(nil),         // 8: google.protobuf.Value
}
var file_events_logging_events_logging_proto_depIdxs = []int32{
	0, // 0: nocloud.events_logging.Event.snapshot:type_name -> nocloud.events_logging.Snapshot
	1, // 1: nocloud.events_logging.Events.events:type_name -> nocloud.events_logging.Event
	6, // 2: nocloud.events_logging.GetEventsRequest.filters:type_name -> nocloud.events_logging.GetEventsRequest.FiltersEntry
	7, // 3: nocloud.events_logging.GetEventsCountRequest.filters:type_name -> nocloud.events_logging.GetEventsCountRequest.FiltersEntry
	8, // 4: nocloud.events_logging.GetEventsCountResponse.unique:type_name -> google.protobuf.Value
	8, // 5: nocloud.events_logging.GetEventsRequest.FiltersEntry.value:type_name -> google.protobuf.Value
	8, // 6: nocloud.events_logging.GetEventsCountRequest.FiltersEntry.value:type_name -> google.protobuf.Value
	3, // 7: nocloud.events_logging.EventsLoggingService.GetEvents:input_type -> nocloud.events_logging.GetEventsRequest
	4, // 8: nocloud.events_logging.EventsLoggingService.GetCount:input_type -> nocloud.events_logging.GetEventsCountRequest
	2, // 9: nocloud.events_logging.EventsLoggingService.GetEvents:output_type -> nocloud.events_logging.Events
	5, // 10: nocloud.events_logging.EventsLoggingService.GetCount:output_type -> nocloud.events_logging.GetEventsCountResponse
	9, // [9:11] is the sub-list for method output_type
	7, // [7:9] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_events_logging_events_logging_proto_init() }
func file_events_logging_events_logging_proto_init() {
	if File_events_logging_events_logging_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_events_logging_events_logging_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Snapshot); i {
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
		file_events_logging_events_logging_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Event); i {
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
		file_events_logging_events_logging_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Events); i {
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
		file_events_logging_events_logging_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetEventsRequest); i {
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
		file_events_logging_events_logging_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetEventsCountRequest); i {
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
		file_events_logging_events_logging_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetEventsCountResponse); i {
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
	file_events_logging_events_logging_proto_msgTypes[1].OneofWrappers = []interface{}{}
	file_events_logging_events_logging_proto_msgTypes[3].OneofWrappers = []interface{}{}
	file_events_logging_events_logging_proto_msgTypes[4].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_events_logging_events_logging_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_events_logging_events_logging_proto_goTypes,
		DependencyIndexes: file_events_logging_events_logging_proto_depIdxs,
		MessageInfos:      file_events_logging_events_logging_proto_msgTypes,
	}.Build()
	File_events_logging_events_logging_proto = out.File
	file_events_logging_events_logging_proto_rawDesc = nil
	file_events_logging_events_logging_proto_goTypes = nil
	file_events_logging_events_logging_proto_depIdxs = nil
}
