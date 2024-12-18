// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: billing/addons/addons.proto

package addons

import (
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

type Kind int32

const (
	Kind_UNSPECIFIED Kind = 0 // Shall never be used, requests will be rejected
	Kind_POSTPAID    Kind = 1 // Transaction must be processed based on End time
	Kind_PREPAID     Kind = 2 // Transaction must be processed based on Start time
)

// Enum value maps for Kind.
var (
	Kind_name = map[int32]string{
		0: "UNSPECIFIED",
		1: "POSTPAID",
		2: "PREPAID",
	}
	Kind_value = map[string]int32{
		"UNSPECIFIED": 0,
		"POSTPAID":    1,
		"PREPAID":     2,
	}
)

func (x Kind) Enum() *Kind {
	p := new(Kind)
	*p = x
	return p
}

func (x Kind) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Kind) Descriptor() protoreflect.EnumDescriptor {
	return file_billing_addons_addons_proto_enumTypes[0].Descriptor()
}

func (Kind) Type() protoreflect.EnumType {
	return &file_billing_addons_addons_proto_enumTypes[0]
}

func (x Kind) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Kind.Descriptor instead.
func (Kind) EnumDescriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{0}
}

type Addon struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid          string                     `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Title         string                     `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Public        bool                       `protobuf:"varint,3,opt,name=public,proto3" json:"public,omitempty"`
	Group         string                     `protobuf:"bytes,4,opt,name=group,proto3" json:"group,omitempty"`
	Meta          map[string]*structpb.Value `protobuf:"bytes,5,rep,name=meta,proto3" json:"meta,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	DescriptionId string                     `protobuf:"bytes,6,opt,name=description_id,json=descriptionId,proto3" json:"description_id,omitempty"`
	Periods       map[int64]float64          `protobuf:"bytes,7,rep,name=periods,proto3" json:"periods,omitempty" protobuf_key:"varint,1,opt,name=key,proto3" protobuf_val:"fixed64,2,opt,name=value,proto3"`
	Created       int64                      `protobuf:"varint,8,opt,name=created,proto3" json:"created,omitempty"`
	System        bool                       `protobuf:"varint,9,opt,name=system,proto3" json:"system,omitempty"`
	Kind          Kind                       `protobuf:"varint,10,opt,name=kind,proto3,enum=nocloud.billing.addons.Kind" json:"kind,omitempty"`
}

func (x *Addon) Reset() {
	*x = Addon{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_addons_addons_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Addon) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Addon) ProtoMessage() {}

func (x *Addon) ProtoReflect() protoreflect.Message {
	mi := &file_billing_addons_addons_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Addon.ProtoReflect.Descriptor instead.
func (*Addon) Descriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{0}
}

func (x *Addon) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Addon) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Addon) GetPublic() bool {
	if x != nil {
		return x.Public
	}
	return false
}

func (x *Addon) GetGroup() string {
	if x != nil {
		return x.Group
	}
	return ""
}

func (x *Addon) GetMeta() map[string]*structpb.Value {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *Addon) GetDescriptionId() string {
	if x != nil {
		return x.DescriptionId
	}
	return ""
}

func (x *Addon) GetPeriods() map[int64]float64 {
	if x != nil {
		return x.Periods
	}
	return nil
}

func (x *Addon) GetCreated() int64 {
	if x != nil {
		return x.Created
	}
	return 0
}

func (x *Addon) GetSystem() bool {
	if x != nil {
		return x.System
	}
	return false
}

func (x *Addon) GetKind() Kind {
	if x != nil {
		return x.Kind
	}
	return Kind_UNSPECIFIED
}

type BulkAddons struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Addons []*Addon `protobuf:"bytes,1,rep,name=addons,proto3" json:"addons,omitempty"`
}

func (x *BulkAddons) Reset() {
	*x = BulkAddons{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_addons_addons_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BulkAddons) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BulkAddons) ProtoMessage() {}

func (x *BulkAddons) ProtoReflect() protoreflect.Message {
	mi := &file_billing_addons_addons_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BulkAddons.ProtoReflect.Descriptor instead.
func (*BulkAddons) Descriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{1}
}

func (x *BulkAddons) GetAddons() []*Addon {
	if x != nil {
		return x.Addons
	}
	return nil
}

type ListAddonsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page    *uint64                    `protobuf:"varint,1,opt,name=page,proto3,oneof" json:"page,omitempty"`
	Limit   *uint64                    `protobuf:"varint,2,opt,name=limit,proto3,oneof" json:"limit,omitempty"`
	Field   *string                    `protobuf:"bytes,3,opt,name=field,proto3,oneof" json:"field,omitempty"`
	Sort    *string                    `protobuf:"bytes,4,opt,name=sort,proto3,oneof" json:"sort,omitempty"`
	Filters map[string]*structpb.Value `protobuf:"bytes,5,rep,name=filters,proto3" json:"filters,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ListAddonsRequest) Reset() {
	*x = ListAddonsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_addons_addons_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListAddonsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListAddonsRequest) ProtoMessage() {}

func (x *ListAddonsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_billing_addons_addons_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListAddonsRequest.ProtoReflect.Descriptor instead.
func (*ListAddonsRequest) Descriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{2}
}

func (x *ListAddonsRequest) GetPage() uint64 {
	if x != nil && x.Page != nil {
		return *x.Page
	}
	return 0
}

func (x *ListAddonsRequest) GetLimit() uint64 {
	if x != nil && x.Limit != nil {
		return *x.Limit
	}
	return 0
}

func (x *ListAddonsRequest) GetField() string {
	if x != nil && x.Field != nil {
		return *x.Field
	}
	return ""
}

func (x *ListAddonsRequest) GetSort() string {
	if x != nil && x.Sort != nil {
		return *x.Sort
	}
	return ""
}

func (x *ListAddonsRequest) GetFilters() map[string]*structpb.Value {
	if x != nil {
		return x.Filters
	}
	return nil
}

type CountAddonsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Filters map[string]*structpb.Value `protobuf:"bytes,1,rep,name=filters,proto3" json:"filters,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *CountAddonsRequest) Reset() {
	*x = CountAddonsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_addons_addons_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CountAddonsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CountAddonsRequest) ProtoMessage() {}

func (x *CountAddonsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_billing_addons_addons_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CountAddonsRequest.ProtoReflect.Descriptor instead.
func (*CountAddonsRequest) Descriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{3}
}

func (x *CountAddonsRequest) GetFilters() map[string]*structpb.Value {
	if x != nil {
		return x.Filters
	}
	return nil
}

type CountAddonsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total  int64           `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
	Unique *structpb.Value `protobuf:"bytes,2,opt,name=unique,proto3" json:"unique,omitempty"`
}

func (x *CountAddonsResponse) Reset() {
	*x = CountAddonsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_addons_addons_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CountAddonsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CountAddonsResponse) ProtoMessage() {}

func (x *CountAddonsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_billing_addons_addons_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CountAddonsResponse.ProtoReflect.Descriptor instead.
func (*CountAddonsResponse) Descriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{4}
}

func (x *CountAddonsResponse) GetTotal() int64 {
	if x != nil {
		return x.Total
	}
	return 0
}

func (x *CountAddonsResponse) GetUnique() *structpb.Value {
	if x != nil {
		return x.Unique
	}
	return nil
}

type ListAddonsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Addons []*Addon `protobuf:"bytes,1,rep,name=addons,proto3" json:"addons,omitempty"`
}

func (x *ListAddonsResponse) Reset() {
	*x = ListAddonsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_addons_addons_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListAddonsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListAddonsResponse) ProtoMessage() {}

func (x *ListAddonsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_billing_addons_addons_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListAddonsResponse.ProtoReflect.Descriptor instead.
func (*ListAddonsResponse) Descriptor() ([]byte, []int) {
	return file_billing_addons_addons_proto_rawDescGZIP(), []int{5}
}

func (x *ListAddonsResponse) GetAddons() []*Addon {
	if x != nil {
		return x.Addons
	}
	return nil
}

var File_billing_addons_addons_proto protoreflect.FileDescriptor

var file_billing_addons_addons_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2f, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73,
	0x2f, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x6e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x61,
	0x64, 0x64, 0x6f, 0x6e, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0xfa, 0x03, 0x0a, 0x05, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x12, 0x12, 0x0a,
	0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69,
	0x63, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x12,
	0x14, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x67, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x3b, 0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x05, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69,
	0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2e, 0x41, 0x64, 0x64,
	0x6f, 0x6e, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x6d, 0x65,
	0x74, 0x61, 0x12, 0x25, 0x0a, 0x0e, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x44, 0x0a, 0x07, 0x70, 0x65, 0x72,
	0x69, 0x6f, 0x64, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x6e, 0x6f, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x61, 0x64, 0x64,
	0x6f, 0x6e, 0x73, 0x2e, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x2e, 0x50, 0x65, 0x72, 0x69, 0x6f, 0x64,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x70, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x73, 0x12,
	0x18, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x18, 0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x73, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x12, 0x30, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x1c, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e,
	0x67, 0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2e, 0x4b, 0x69, 0x6e, 0x64, 0x52, 0x04, 0x6b,
	0x69, 0x6e, 0x64, 0x1a, 0x4f, 0x0a, 0x09, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b,
	0x65, 0x79, 0x12, 0x2c, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3a, 0x0a, 0x0c, 0x50, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x22, 0x43, 0x0a, 0x0a, 0x42, 0x75, 0x6c, 0x6b, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x12, 0x35,
	0x0a, 0x06, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d,
	0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67,
	0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2e, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x52, 0x06, 0x61,
	0x64, 0x64, 0x6f, 0x6e, 0x73, 0x22, 0xc7, 0x02, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x64,
	0x64, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x04, 0x70,
	0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x48, 0x00, 0x52, 0x04, 0x70, 0x61, 0x67,
	0x65, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x04, 0x48, 0x01, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x88, 0x01, 0x01, 0x12,
	0x19, 0x0a, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02,
	0x52, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x73, 0x6f,
	0x72, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74,
	0x88, 0x01, 0x01, 0x12, 0x50, 0x0a, 0x07, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x18, 0x05,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x36, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62,
	0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e,
	0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x66, 0x69,
	0x6c, 0x74, 0x65, 0x72, 0x73, 0x1a, 0x52, 0x0a, 0x0c, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2c, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x70, 0x61,
	0x67, 0x65, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x42, 0x08, 0x0a, 0x06,
	0x5f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x73, 0x6f, 0x72, 0x74, 0x22,
	0xbb, 0x01, 0x0a, 0x12, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x51, 0x0a, 0x07, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x37, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73,
	0x2e, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x07, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x73, 0x1a, 0x52, 0x0a, 0x0c, 0x46, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2c, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x5b, 0x0a,
	0x13, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x12, 0x2e, 0x0a, 0x06, 0x75, 0x6e,
	0x69, 0x71, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c,
	0x75, 0x65, 0x52, 0x06, 0x75, 0x6e, 0x69, 0x71, 0x75, 0x65, 0x22, 0x4b, 0x0a, 0x12, 0x4c, 0x69,
	0x73, 0x74, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x35, 0x0a, 0x06, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69,
	0x6e, 0x67, 0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2e, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x52,
	0x06, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x2a, 0x32, 0x0a, 0x04, 0x4b, 0x69, 0x6e, 0x64, 0x12,
	0x0f, 0x0a, 0x0b, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x12, 0x0c, 0x0a, 0x08, 0x50, 0x4f, 0x53, 0x54, 0x50, 0x41, 0x49, 0x44, 0x10, 0x01, 0x12, 0x0b,
	0x0a, 0x07, 0x50, 0x52, 0x45, 0x50, 0x41, 0x49, 0x44, 0x10, 0x02, 0x42, 0xd4, 0x01, 0x0a, 0x1a,
	0x63, 0x6f, 0x6d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c,
	0x69, 0x6e, 0x67, 0x2e, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x42, 0x0b, 0x41, 0x64, 0x64, 0x6f,
	0x6e, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6c, 0x6e, 0x74, 0x6f, 0x70, 0x70, 0x2f, 0x6e, 0x6f,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x69, 0x6c, 0x6c,
	0x69, 0x6e, 0x67, 0x2f, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0xa2, 0x02, 0x03, 0x4e, 0x42, 0x41,
	0xaa, 0x02, 0x16, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x42, 0x69, 0x6c, 0x6c, 0x69,
	0x6e, 0x67, 0x2e, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0xca, 0x02, 0x16, 0x4e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x5c, 0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x5c, 0x41, 0x64, 0x64, 0x6f,
	0x6e, 0x73, 0xe2, 0x02, 0x22, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x42, 0x69, 0x6c,
	0x6c, 0x69, 0x6e, 0x67, 0x5c, 0x41, 0x64, 0x64, 0x6f, 0x6e, 0x73, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x18, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x3a, 0x3a, 0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x3a, 0x3a, 0x41, 0x64, 0x64, 0x6f,
	0x6e, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_billing_addons_addons_proto_rawDescOnce sync.Once
	file_billing_addons_addons_proto_rawDescData = file_billing_addons_addons_proto_rawDesc
)

func file_billing_addons_addons_proto_rawDescGZIP() []byte {
	file_billing_addons_addons_proto_rawDescOnce.Do(func() {
		file_billing_addons_addons_proto_rawDescData = protoimpl.X.CompressGZIP(file_billing_addons_addons_proto_rawDescData)
	})
	return file_billing_addons_addons_proto_rawDescData
}

var file_billing_addons_addons_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_billing_addons_addons_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_billing_addons_addons_proto_goTypes = []any{
	(Kind)(0),                   // 0: nocloud.billing.addons.Kind
	(*Addon)(nil),               // 1: nocloud.billing.addons.Addon
	(*BulkAddons)(nil),          // 2: nocloud.billing.addons.BulkAddons
	(*ListAddonsRequest)(nil),   // 3: nocloud.billing.addons.ListAddonsRequest
	(*CountAddonsRequest)(nil),  // 4: nocloud.billing.addons.CountAddonsRequest
	(*CountAddonsResponse)(nil), // 5: nocloud.billing.addons.CountAddonsResponse
	(*ListAddonsResponse)(nil),  // 6: nocloud.billing.addons.ListAddonsResponse
	nil,                         // 7: nocloud.billing.addons.Addon.MetaEntry
	nil,                         // 8: nocloud.billing.addons.Addon.PeriodsEntry
	nil,                         // 9: nocloud.billing.addons.ListAddonsRequest.FiltersEntry
	nil,                         // 10: nocloud.billing.addons.CountAddonsRequest.FiltersEntry
	(*structpb.Value)(nil),      // 11: google.protobuf.Value
}
var file_billing_addons_addons_proto_depIdxs = []int32{
	7,  // 0: nocloud.billing.addons.Addon.meta:type_name -> nocloud.billing.addons.Addon.MetaEntry
	8,  // 1: nocloud.billing.addons.Addon.periods:type_name -> nocloud.billing.addons.Addon.PeriodsEntry
	0,  // 2: nocloud.billing.addons.Addon.kind:type_name -> nocloud.billing.addons.Kind
	1,  // 3: nocloud.billing.addons.BulkAddons.addons:type_name -> nocloud.billing.addons.Addon
	9,  // 4: nocloud.billing.addons.ListAddonsRequest.filters:type_name -> nocloud.billing.addons.ListAddonsRequest.FiltersEntry
	10, // 5: nocloud.billing.addons.CountAddonsRequest.filters:type_name -> nocloud.billing.addons.CountAddonsRequest.FiltersEntry
	11, // 6: nocloud.billing.addons.CountAddonsResponse.unique:type_name -> google.protobuf.Value
	1,  // 7: nocloud.billing.addons.ListAddonsResponse.addons:type_name -> nocloud.billing.addons.Addon
	11, // 8: nocloud.billing.addons.Addon.MetaEntry.value:type_name -> google.protobuf.Value
	11, // 9: nocloud.billing.addons.ListAddonsRequest.FiltersEntry.value:type_name -> google.protobuf.Value
	11, // 10: nocloud.billing.addons.CountAddonsRequest.FiltersEntry.value:type_name -> google.protobuf.Value
	11, // [11:11] is the sub-list for method output_type
	11, // [11:11] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_billing_addons_addons_proto_init() }
func file_billing_addons_addons_proto_init() {
	if File_billing_addons_addons_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_billing_addons_addons_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Addon); i {
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
		file_billing_addons_addons_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*BulkAddons); i {
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
		file_billing_addons_addons_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*ListAddonsRequest); i {
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
		file_billing_addons_addons_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*CountAddonsRequest); i {
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
		file_billing_addons_addons_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*CountAddonsResponse); i {
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
		file_billing_addons_addons_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*ListAddonsResponse); i {
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
	file_billing_addons_addons_proto_msgTypes[2].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_billing_addons_addons_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_billing_addons_addons_proto_goTypes,
		DependencyIndexes: file_billing_addons_addons_proto_depIdxs,
		EnumInfos:         file_billing_addons_addons_proto_enumTypes,
		MessageInfos:      file_billing_addons_addons_proto_msgTypes,
	}.Build()
	File_billing_addons_addons_proto = out.File
	file_billing_addons_addons_proto_rawDesc = nil
	file_billing_addons_addons_proto_goTypes = nil
	file_billing_addons_addons_proto_depIdxs = nil
}
