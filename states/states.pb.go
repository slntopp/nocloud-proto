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
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: states/states.proto

package states

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

type NoCloudState int32

const (
	NoCloudState_INIT      NoCloudState = 0
	NoCloudState_UNKNOWN   NoCloudState = 1
	NoCloudState_STOPPED   NoCloudState = 2
	NoCloudState_RUNNING   NoCloudState = 3
	NoCloudState_FAILURE   NoCloudState = 4
	NoCloudState_DELETED   NoCloudState = 5
	NoCloudState_SUSPENDED NoCloudState = 6
	NoCloudState_OPERATION NoCloudState = 7
	NoCloudState_PENDING   NoCloudState = 8
)

// Enum value maps for NoCloudState.
var (
	NoCloudState_name = map[int32]string{
		0: "INIT",
		1: "UNKNOWN",
		2: "STOPPED",
		3: "RUNNING",
		4: "FAILURE",
		5: "DELETED",
		6: "SUSPENDED",
		7: "OPERATION",
		8: "PENDING",
	}
	NoCloudState_value = map[string]int32{
		"INIT":      0,
		"UNKNOWN":   1,
		"STOPPED":   2,
		"RUNNING":   3,
		"FAILURE":   4,
		"DELETED":   5,
		"SUSPENDED": 6,
		"OPERATION": 7,
		"PENDING":   8,
	}
)

func (x NoCloudState) Enum() *NoCloudState {
	p := new(NoCloudState)
	*p = x
	return p
}

func (x NoCloudState) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NoCloudState) Descriptor() protoreflect.EnumDescriptor {
	return file_states_states_proto_enumTypes[0].Descriptor()
}

func (NoCloudState) Type() protoreflect.EnumType {
	return &file_states_states_proto_enumTypes[0]
}

func (x NoCloudState) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NoCloudState.Descriptor instead.
func (NoCloudState) EnumDescriptor() ([]byte, []int) {
	return file_states_states_proto_rawDescGZIP(), []int{0}
}

type InterfaceKind int32

const (
	InterfaceKind_UNSPECIFIED InterfaceKind = 0
	InterfaceKind_SSH         InterfaceKind = 1 // Interface data must contain `host` and may contain `port` and `user`
)

// Enum value maps for InterfaceKind.
var (
	InterfaceKind_name = map[int32]string{
		0: "UNSPECIFIED",
		1: "SSH",
	}
	InterfaceKind_value = map[string]int32{
		"UNSPECIFIED": 0,
		"SSH":         1,
	}
)

func (x InterfaceKind) Enum() *InterfaceKind {
	p := new(InterfaceKind)
	*p = x
	return p
}

func (x InterfaceKind) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (InterfaceKind) Descriptor() protoreflect.EnumDescriptor {
	return file_states_states_proto_enumTypes[1].Descriptor()
}

func (InterfaceKind) Type() protoreflect.EnumType {
	return &file_states_states_proto_enumTypes[1]
}

func (x InterfaceKind) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use InterfaceKind.Descriptor instead.
func (InterfaceKind) EnumDescriptor() ([]byte, []int) {
	return file_states_states_proto_rawDescGZIP(), []int{1}
}

type Interface struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Kind InterfaceKind     `protobuf:"varint,1,opt,name=kind,proto3,enum=nocloud.states.InterfaceKind" json:"kind,omitempty"`
	Data map[string]string `protobuf:"bytes,2,rep,name=data,proto3" json:"data,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Interface) Reset() {
	*x = Interface{}
	if protoimpl.UnsafeEnabled {
		mi := &file_states_states_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Interface) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Interface) ProtoMessage() {}

func (x *Interface) ProtoReflect() protoreflect.Message {
	mi := &file_states_states_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Interface.ProtoReflect.Descriptor instead.
func (*Interface) Descriptor() ([]byte, []int) {
	return file_states_states_proto_rawDescGZIP(), []int{0}
}

func (x *Interface) GetKind() InterfaceKind {
	if x != nil {
		return x.Kind
	}
	return InterfaceKind_UNSPECIFIED
}

func (x *Interface) GetData() map[string]string {
	if x != nil {
		return x.Data
	}
	return nil
}

type State struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	State      NoCloudState               `protobuf:"varint,1,opt,name=state,proto3,enum=nocloud.states.NoCloudState" json:"state,omitempty"`                                                     // NoCloud Instance State
	Meta       map[string]*structpb.Value `protobuf:"bytes,2,rep,name=meta,proto3" json:"meta,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"` // Driver(Provider/Hypervisor) State data
	Interfaces []*Interface               `protobuf:"bytes,4,rep,name=interfaces,proto3" json:"interfaces,omitempty"`
	Ts         *int64                     `protobuf:"varint,3,opt,name=ts,proto3,oneof" json:"ts,omitempty"`
}

func (x *State) Reset() {
	*x = State{}
	if protoimpl.UnsafeEnabled {
		mi := &file_states_states_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *State) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*State) ProtoMessage() {}

func (x *State) ProtoReflect() protoreflect.Message {
	mi := &file_states_states_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use State.ProtoReflect.Descriptor instead.
func (*State) Descriptor() ([]byte, []int) {
	return file_states_states_proto_rawDescGZIP(), []int{1}
}

func (x *State) GetState() NoCloudState {
	if x != nil {
		return x.State
	}
	return NoCloudState_INIT
}

func (x *State) GetMeta() map[string]*structpb.Value {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *State) GetInterfaces() []*Interface {
	if x != nil {
		return x.Interfaces
	}
	return nil
}

func (x *State) GetTs() int64 {
	if x != nil && x.Ts != nil {
		return *x.Ts
	}
	return 0
}

type ObjectState struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid  string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	State *State `protobuf:"bytes,2,opt,name=state,proto3" json:"state,omitempty"`
}

func (x *ObjectState) Reset() {
	*x = ObjectState{}
	if protoimpl.UnsafeEnabled {
		mi := &file_states_states_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ObjectState) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ObjectState) ProtoMessage() {}

func (x *ObjectState) ProtoReflect() protoreflect.Message {
	mi := &file_states_states_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ObjectState.ProtoReflect.Descriptor instead.
func (*ObjectState) Descriptor() ([]byte, []int) {
	return file_states_states_proto_rawDescGZIP(), []int{2}
}

func (x *ObjectState) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ObjectState) GetState() *State {
	if x != nil {
		return x.State
	}
	return nil
}

var File_states_states_proto protoreflect.FileDescriptor

var file_states_states_proto_rawDesc = []byte{
	0x0a, 0x13, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73,
	0x74, 0x61, 0x74, 0x65, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0xb0, 0x01, 0x0a, 0x09, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63,
	0x65, 0x12, 0x31, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x1d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73,
	0x2e, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x4b, 0x69, 0x6e, 0x64, 0x52, 0x04,
	0x6b, 0x69, 0x6e, 0x64, 0x12, 0x37, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x23, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x73, 0x2e, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x2e, 0x44, 0x61,
	0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x37, 0x0a,
	0x09, 0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x98, 0x02, 0x0a, 0x05, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x12, 0x32, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x1c, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73,
	0x2e, 0x4e, 0x6f, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73,
	0x74, 0x61, 0x74, 0x65, 0x12, 0x33, 0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x73, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x12, 0x39, 0x0a, 0x0a, 0x69, 0x6e, 0x74,
	0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73, 0x2e, 0x49,
	0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x52, 0x0a, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x66,
	0x61, 0x63, 0x65, 0x73, 0x12, 0x13, 0x0a, 0x02, 0x74, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03,
	0x48, 0x00, 0x52, 0x02, 0x74, 0x73, 0x88, 0x01, 0x01, 0x1a, 0x4f, 0x0a, 0x09, 0x4d, 0x65, 0x74,
	0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2c, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x74,
	0x73, 0x22, 0x4e, 0x0a, 0x0b, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x74, 0x61, 0x74, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x12, 0x2b, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74,
	0x61, 0x74, 0x65, 0x73, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74,
	0x65, 0x2a, 0x84, 0x01, 0x0a, 0x0c, 0x4e, 0x6f, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x61,
	0x74, 0x65, 0x12, 0x08, 0x0a, 0x04, 0x49, 0x4e, 0x49, 0x54, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07,
	0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x54, 0x4f,
	0x50, 0x50, 0x45, 0x44, 0x10, 0x02, 0x12, 0x0b, 0x0a, 0x07, 0x52, 0x55, 0x4e, 0x4e, 0x49, 0x4e,
	0x47, 0x10, 0x03, 0x12, 0x0b, 0x0a, 0x07, 0x46, 0x41, 0x49, 0x4c, 0x55, 0x52, 0x45, 0x10, 0x04,
	0x12, 0x0b, 0x0a, 0x07, 0x44, 0x45, 0x4c, 0x45, 0x54, 0x45, 0x44, 0x10, 0x05, 0x12, 0x0d, 0x0a,
	0x09, 0x53, 0x55, 0x53, 0x50, 0x45, 0x4e, 0x44, 0x45, 0x44, 0x10, 0x06, 0x12, 0x0d, 0x0a, 0x09,
	0x4f, 0x50, 0x45, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x07, 0x12, 0x0b, 0x0a, 0x07, 0x50,
	0x45, 0x4e, 0x44, 0x49, 0x4e, 0x47, 0x10, 0x08, 0x2a, 0x29, 0x0a, 0x0d, 0x49, 0x6e, 0x74, 0x65,
	0x72, 0x66, 0x61, 0x63, 0x65, 0x4b, 0x69, 0x6e, 0x64, 0x12, 0x0f, 0x0a, 0x0b, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x53, 0x53,
	0x48, 0x10, 0x01, 0x42, 0xa3, 0x01, 0x0a, 0x12, 0x63, 0x6f, 0x6d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73, 0x42, 0x0b, 0x53, 0x74, 0x61, 0x74,
	0x65, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6c, 0x6e, 0x74, 0x6f, 0x70, 0x70, 0x2f, 0x6e, 0x6f,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x74, 0x61, 0x74,
	0x65, 0x73, 0xa2, 0x02, 0x03, 0x4e, 0x53, 0x58, 0xaa, 0x02, 0x0e, 0x4e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x65, 0x73, 0xca, 0x02, 0x0e, 0x4e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x5c, 0x53, 0x74, 0x61, 0x74, 0x65, 0x73, 0xe2, 0x02, 0x1a, 0x4e, 0x6f, 0x63,
	0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x53, 0x74, 0x61, 0x74, 0x65, 0x73, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0f, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x3a, 0x3a, 0x53, 0x74, 0x61, 0x74, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_states_states_proto_rawDescOnce sync.Once
	file_states_states_proto_rawDescData = file_states_states_proto_rawDesc
)

func file_states_states_proto_rawDescGZIP() []byte {
	file_states_states_proto_rawDescOnce.Do(func() {
		file_states_states_proto_rawDescData = protoimpl.X.CompressGZIP(file_states_states_proto_rawDescData)
	})
	return file_states_states_proto_rawDescData
}

var file_states_states_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_states_states_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_states_states_proto_goTypes = []any{
	(NoCloudState)(0),      // 0: nocloud.states.NoCloudState
	(InterfaceKind)(0),     // 1: nocloud.states.InterfaceKind
	(*Interface)(nil),      // 2: nocloud.states.Interface
	(*State)(nil),          // 3: nocloud.states.State
	(*ObjectState)(nil),    // 4: nocloud.states.ObjectState
	nil,                    // 5: nocloud.states.Interface.DataEntry
	nil,                    // 6: nocloud.states.State.MetaEntry
	(*structpb.Value)(nil), // 7: google.protobuf.Value
}
var file_states_states_proto_depIdxs = []int32{
	1, // 0: nocloud.states.Interface.kind:type_name -> nocloud.states.InterfaceKind
	5, // 1: nocloud.states.Interface.data:type_name -> nocloud.states.Interface.DataEntry
	0, // 2: nocloud.states.State.state:type_name -> nocloud.states.NoCloudState
	6, // 3: nocloud.states.State.meta:type_name -> nocloud.states.State.MetaEntry
	2, // 4: nocloud.states.State.interfaces:type_name -> nocloud.states.Interface
	3, // 5: nocloud.states.ObjectState.state:type_name -> nocloud.states.State
	7, // 6: nocloud.states.State.MetaEntry.value:type_name -> google.protobuf.Value
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_states_states_proto_init() }
func file_states_states_proto_init() {
	if File_states_states_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_states_states_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*Interface); i {
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
		file_states_states_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*State); i {
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
		file_states_states_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*ObjectState); i {
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
	file_states_states_proto_msgTypes[1].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_states_states_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_states_states_proto_goTypes,
		DependencyIndexes: file_states_states_proto_depIdxs,
		EnumInfos:         file_states_states_proto_enumTypes,
		MessageInfos:      file_states_states_proto_msgTypes,
	}.Build()
	File_states_states_proto = out.File
	file_states_states_proto_rawDesc = nil
	file_states_states_proto_goTypes = nil
	file_states_states_proto_depIdxs = nil
}
