// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: billing/descriptions/descriptions.proto

package descriptions

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Description struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *Description) Reset() {
	*x = Description{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_descriptions_descriptions_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Description) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Description) ProtoMessage() {}

func (x *Description) ProtoReflect() protoreflect.Message {
	mi := &file_billing_descriptions_descriptions_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Description.ProtoReflect.Descriptor instead.
func (*Description) Descriptor() ([]byte, []int) {
	return file_billing_descriptions_descriptions_proto_rawDescGZIP(), []int{0}
}

func (x *Description) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Description) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

type ListDescriptionsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Page  *uint64 `protobuf:"varint,1,opt,name=page,proto3,oneof" json:"page,omitempty"`
	Limit *uint64 `protobuf:"varint,2,opt,name=limit,proto3,oneof" json:"limit,omitempty"`
	Field *string `protobuf:"bytes,3,opt,name=field,proto3,oneof" json:"field,omitempty"`
	Sort  *string `protobuf:"bytes,4,opt,name=sort,proto3,oneof" json:"sort,omitempty"`
}

func (x *ListDescriptionsRequest) Reset() {
	*x = ListDescriptionsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_descriptions_descriptions_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDescriptionsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDescriptionsRequest) ProtoMessage() {}

func (x *ListDescriptionsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_billing_descriptions_descriptions_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDescriptionsRequest.ProtoReflect.Descriptor instead.
func (*ListDescriptionsRequest) Descriptor() ([]byte, []int) {
	return file_billing_descriptions_descriptions_proto_rawDescGZIP(), []int{1}
}

func (x *ListDescriptionsRequest) GetPage() uint64 {
	if x != nil && x.Page != nil {
		return *x.Page
	}
	return 0
}

func (x *ListDescriptionsRequest) GetLimit() uint64 {
	if x != nil && x.Limit != nil {
		return *x.Limit
	}
	return 0
}

func (x *ListDescriptionsRequest) GetField() string {
	if x != nil && x.Field != nil {
		return *x.Field
	}
	return ""
}

func (x *ListDescriptionsRequest) GetSort() string {
	if x != nil && x.Sort != nil {
		return *x.Sort
	}
	return ""
}

type CountDescriptionsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *CountDescriptionsRequest) Reset() {
	*x = CountDescriptionsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_descriptions_descriptions_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CountDescriptionsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CountDescriptionsRequest) ProtoMessage() {}

func (x *CountDescriptionsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_billing_descriptions_descriptions_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CountDescriptionsRequest.ProtoReflect.Descriptor instead.
func (*CountDescriptionsRequest) Descriptor() ([]byte, []int) {
	return file_billing_descriptions_descriptions_proto_rawDescGZIP(), []int{2}
}

type CountDescriptionsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total int64 `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *CountDescriptionsResponse) Reset() {
	*x = CountDescriptionsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_descriptions_descriptions_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CountDescriptionsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CountDescriptionsResponse) ProtoMessage() {}

func (x *CountDescriptionsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_billing_descriptions_descriptions_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CountDescriptionsResponse.ProtoReflect.Descriptor instead.
func (*CountDescriptionsResponse) Descriptor() ([]byte, []int) {
	return file_billing_descriptions_descriptions_proto_rawDescGZIP(), []int{3}
}

func (x *CountDescriptionsResponse) GetTotal() int64 {
	if x != nil {
		return x.Total
	}
	return 0
}

type ListDescriptionsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Descriptions []*Description `protobuf:"bytes,1,rep,name=descriptions,proto3" json:"descriptions,omitempty"`
}

func (x *ListDescriptionsResponse) Reset() {
	*x = ListDescriptionsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_billing_descriptions_descriptions_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDescriptionsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDescriptionsResponse) ProtoMessage() {}

func (x *ListDescriptionsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_billing_descriptions_descriptions_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDescriptionsResponse.ProtoReflect.Descriptor instead.
func (*ListDescriptionsResponse) Descriptor() ([]byte, []int) {
	return file_billing_descriptions_descriptions_proto_rawDescGZIP(), []int{4}
}

func (x *ListDescriptionsResponse) GetDescriptions() []*Description {
	if x != nil {
		return x.Descriptions
	}
	return nil
}

var File_billing_descriptions_descriptions_proto protoreflect.FileDescriptor

var file_billing_descriptions_descriptions_proto_rawDesc = []byte{
	0x0a, 0x27, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x6e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x64, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x35, 0x0a, 0x0b, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x22, 0xa7, 0x01, 0x0a,
	0x17, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x48, 0x00, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x88, 0x01,
	0x01, 0x12, 0x19, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04,
	0x48, 0x01, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a, 0x05,
	0x66, 0x69, 0x65, 0x6c, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x05, 0x66,
	0x69, 0x65, 0x6c, 0x64, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x88, 0x01, 0x01,
	0x42, 0x07, 0x0a, 0x05, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x42, 0x07, 0x0a,
	0x05, 0x5f, 0x73, 0x6f, 0x72, 0x74, 0x22, 0x1a, 0x0a, 0x18, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x44,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x22, 0x31, 0x0a, 0x19, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x44, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x22, 0x69, 0x0a, 0x18, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x4d, 0x0a, 0x0c, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x29, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x0c, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x42, 0xfe, 0x01, 0x0a, 0x20, 0x63, 0x6f, 0x6d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2e, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x42, 0x11, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x35, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6c, 0x6e, 0x74, 0x6f, 0x70, 0x70, 0x2f, 0x6e,
	0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x69, 0x6c,
	0x6c, 0x69, 0x6e, 0x67, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0xa2, 0x02, 0x03, 0x4e, 0x42, 0x44, 0xaa, 0x02, 0x1c, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0xca, 0x02, 0x1c, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x5c, 0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x5c, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0xe2, 0x02, 0x28, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c,
	0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x5c, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x1e, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x3a, 0x3a, 0x42, 0x69, 0x6c, 0x6c,
	0x69, 0x6e, 0x67, 0x3a, 0x3a, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_billing_descriptions_descriptions_proto_rawDescOnce sync.Once
	file_billing_descriptions_descriptions_proto_rawDescData = file_billing_descriptions_descriptions_proto_rawDesc
)

func file_billing_descriptions_descriptions_proto_rawDescGZIP() []byte {
	file_billing_descriptions_descriptions_proto_rawDescOnce.Do(func() {
		file_billing_descriptions_descriptions_proto_rawDescData = protoimpl.X.CompressGZIP(file_billing_descriptions_descriptions_proto_rawDescData)
	})
	return file_billing_descriptions_descriptions_proto_rawDescData
}

var file_billing_descriptions_descriptions_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_billing_descriptions_descriptions_proto_goTypes = []any{
	(*Description)(nil),               // 0: nocloud.billing.descriptions.Description
	(*ListDescriptionsRequest)(nil),   // 1: nocloud.billing.descriptions.ListDescriptionsRequest
	(*CountDescriptionsRequest)(nil),  // 2: nocloud.billing.descriptions.CountDescriptionsRequest
	(*CountDescriptionsResponse)(nil), // 3: nocloud.billing.descriptions.CountDescriptionsResponse
	(*ListDescriptionsResponse)(nil),  // 4: nocloud.billing.descriptions.ListDescriptionsResponse
}
var file_billing_descriptions_descriptions_proto_depIdxs = []int32{
	0, // 0: nocloud.billing.descriptions.ListDescriptionsResponse.descriptions:type_name -> nocloud.billing.descriptions.Description
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_billing_descriptions_descriptions_proto_init() }
func file_billing_descriptions_descriptions_proto_init() {
	if File_billing_descriptions_descriptions_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_billing_descriptions_descriptions_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Description); i {
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
		file_billing_descriptions_descriptions_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*ListDescriptionsRequest); i {
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
		file_billing_descriptions_descriptions_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*CountDescriptionsRequest); i {
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
		file_billing_descriptions_descriptions_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*CountDescriptionsResponse); i {
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
		file_billing_descriptions_descriptions_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*ListDescriptionsResponse); i {
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
	file_billing_descriptions_descriptions_proto_msgTypes[1].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_billing_descriptions_descriptions_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_billing_descriptions_descriptions_proto_goTypes,
		DependencyIndexes: file_billing_descriptions_descriptions_proto_depIdxs,
		MessageInfos:      file_billing_descriptions_descriptions_proto_msgTypes,
	}.Build()
	File_billing_descriptions_descriptions_proto = out.File
	file_billing_descriptions_descriptions_proto_rawDesc = nil
	file_billing_descriptions_descriptions_proto_goTypes = nil
	file_billing_descriptions_descriptions_proto_depIdxs = nil
}
