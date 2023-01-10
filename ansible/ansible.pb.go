//
//Copyright © 2023 Nikita Ivanovski info@slnt-opp.xyz
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: ansible/ansible.proto

package ansible

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Run struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid      string            `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`           // Run UUID generated by Ansible Runner
	Instances []*Instance       `protobuf:"bytes,2,rep,name=instances,proto3" json:"instances,omitempty"` // Instances to run Playbook at
	Playbook  string            `protobuf:"bytes,3,opt,name=playbook,proto3" json:"playbook,omitempty"`   // Playbook to run
	Title     string            `protobuf:"bytes,4,opt,name=title,proto3" json:"title,omitempty"`         // Run name (must be valid filename)
	Jobs      map[string]string `protobuf:"bytes,5,rep,name=jobs,proto3" json:"jobs,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Status    string            `protobuf:"bytes,6,opt,name=status,proto3" json:"status,omitempty"`
	Rc        int64             `protobuf:"varint,7,opt,name=rc,proto3" json:"rc,omitempty"`
	// Use custom Private Key for SSH (applied to all Instances, can be
	// overriden only with login/pass)
	SshKey *string `protobuf:"bytes,8,opt,name=ssh_key,json=sshKey,proto3,oneof" json:"ssh_key,omitempty"`
}

func (x *Run) Reset() {
	*x = Run{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Run) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Run) ProtoMessage() {}

func (x *Run) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Run.ProtoReflect.Descriptor instead.
func (*Run) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{0}
}

func (x *Run) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Run) GetInstances() []*Instance {
	if x != nil {
		return x.Instances
	}
	return nil
}

func (x *Run) GetPlaybook() string {
	if x != nil {
		return x.Playbook
	}
	return ""
}

func (x *Run) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Run) GetJobs() map[string]string {
	if x != nil {
		return x.Jobs
	}
	return nil
}

func (x *Run) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *Run) GetRc() int64 {
	if x != nil {
		return x.Rc
	}
	return 0
}

func (x *Run) GetSshKey() string {
	if x != nil && x.SshKey != nil {
		return *x.SshKey
	}
	return ""
}

type Instance struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"` // NoCloud Instance UUID
	// SSH Setup
	Host string  `protobuf:"bytes,2,opt,name=host,proto3" json:"host,omitempty"`       // SSH accessible hostname(hostname, IP addr, domain name)
	Port *string `protobuf:"bytes,3,opt,name=port,proto3,oneof" json:"port,omitempty"` // SSH port
	User *string `protobuf:"bytes,4,opt,name=user,proto3,oneof" json:"user,omitempty"` // SSH User
	Pass *string `protobuf:"bytes,5,opt,name=pass,proto3,oneof" json:"pass,omitempty"` // SSH Password
}

func (x *Instance) Reset() {
	*x = Instance{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Instance) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Instance) ProtoMessage() {}

func (x *Instance) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Instance.ProtoReflect.Descriptor instead.
func (*Instance) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{1}
}

func (x *Instance) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Instance) GetHost() string {
	if x != nil {
		return x.Host
	}
	return ""
}

func (x *Instance) GetPort() string {
	if x != nil && x.Port != nil {
		return *x.Port
	}
	return ""
}

func (x *Instance) GetUser() string {
	if x != nil && x.User != nil {
		return *x.User
	}
	return ""
}

func (x *Instance) GetPass() string {
	if x != nil && x.Pass != nil {
		return *x.Pass
	}
	return ""
}

type GetRunRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *GetRunRequest) Reset() {
	*x = GetRunRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRunRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRunRequest) ProtoMessage() {}

func (x *GetRunRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRunRequest.ProtoReflect.Descriptor instead.
func (*GetRunRequest) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{2}
}

func (x *GetRunRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type ExecRunRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *ExecRunRequest) Reset() {
	*x = ExecRunRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExecRunRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExecRunRequest) ProtoMessage() {}

func (x *ExecRunRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExecRunRequest.ProtoReflect.Descriptor instead.
func (*ExecRunRequest) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{3}
}

func (x *ExecRunRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type WatchRunRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *WatchRunRequest) Reset() {
	*x = WatchRunRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WatchRunRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WatchRunRequest) ProtoMessage() {}

func (x *WatchRunRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WatchRunRequest.ProtoReflect.Descriptor instead.
func (*WatchRunRequest) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{4}
}

func (x *WatchRunRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type DeleteRunRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *DeleteRunRequest) Reset() {
	*x = DeleteRunRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRunRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRunRequest) ProtoMessage() {}

func (x *DeleteRunRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRunRequest.ProtoReflect.Descriptor instead.
func (*DeleteRunRequest) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{5}
}

func (x *DeleteRunRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type DeleteRunResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteRunResponse) Reset() {
	*x = DeleteRunResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ansible_ansible_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRunResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRunResponse) ProtoMessage() {}

func (x *DeleteRunResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ansible_ansible_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRunResponse.ProtoReflect.Descriptor instead.
func (*DeleteRunResponse) Descriptor() ([]byte, []int) {
	return file_ansible_ansible_proto_rawDescGZIP(), []int{6}
}

var File_ansible_ansible_proto protoreflect.FileDescriptor

var file_ansible_ansible_proto_rawDesc = []byte{
	0x0a, 0x15, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2f, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64,
	0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x22, 0xc3, 0x02, 0x0a, 0x03, 0x52, 0x75, 0x6e,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x12, 0x37, 0x0a, 0x09, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x52, 0x09, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x73, 0x12, 0x1a, 0x0a,
	0x08, 0x70, 0x6c, 0x61, 0x79, 0x62, 0x6f, 0x6f, 0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x70, 0x6c, 0x61, 0x79, 0x62, 0x6f, 0x6f, 0x6b, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74,
	0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12,
	0x32, 0x0a, 0x04, 0x6a, 0x6f, 0x62, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e,
	0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e,
	0x52, 0x75, 0x6e, 0x2e, 0x4a, 0x6f, 0x62, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x6a,
	0x6f, 0x62, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x72,
	0x63, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x72, 0x63, 0x12, 0x1c, 0x0a, 0x07, 0x73,
	0x73, 0x68, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06,
	0x73, 0x73, 0x68, 0x4b, 0x65, 0x79, 0x88, 0x01, 0x01, 0x1a, 0x37, 0x0a, 0x09, 0x4a, 0x6f, 0x62,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x73, 0x73, 0x68, 0x5f, 0x6b, 0x65, 0x79, 0x22, 0x98,
	0x01, 0x0a, 0x08, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12,
	0x12, 0x0a, 0x04, 0x68, 0x6f, 0x73, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68,
	0x6f, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04,
	0x75, 0x73, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x04, 0x75, 0x73,
	0x65, 0x72, 0x88, 0x01, 0x01, 0x12, 0x17, 0x0a, 0x04, 0x70, 0x61, 0x73, 0x73, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x04, 0x70, 0x61, 0x73, 0x73, 0x88, 0x01, 0x01, 0x42, 0x07,
	0x0a, 0x05, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x42, 0x07, 0x0a, 0x05, 0x5f, 0x75, 0x73, 0x65, 0x72,
	0x42, 0x07, 0x0a, 0x05, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x22, 0x23, 0x0a, 0x0d, 0x47, 0x65, 0x74,
	0x52, 0x75, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x24,
	0x0a, 0x0e, 0x45, 0x78, 0x65, 0x63, 0x52, 0x75, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x22, 0x25, 0x0a, 0x0f, 0x57, 0x61, 0x74, 0x63, 0x68, 0x52, 0x75, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x26, 0x0a, 0x10, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x75, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x22, 0x13, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x75, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xd8, 0x02, 0x0a, 0x0e, 0x41, 0x6e, 0x73,
	0x69, 0x62, 0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b, 0x0a, 0x03, 0x47,
	0x65, 0x74, 0x12, 0x1e, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73,
	0x69, 0x62, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x75, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73,
	0x69, 0x62, 0x6c, 0x65, 0x2e, 0x52, 0x75, 0x6e, 0x12, 0x4f, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x12, 0x21, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73,
	0x69, 0x62, 0x6c, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x75, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e,
	0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x75,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x34, 0x0a, 0x06, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e,
	0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x52, 0x75, 0x6e, 0x1a, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x52, 0x75, 0x6e, 0x12,
	0x3f, 0x0a, 0x04, 0x45, 0x78, 0x65, 0x63, 0x12, 0x1f, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x45, 0x78, 0x65, 0x63, 0x52, 0x75,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6e, 0x6f, 0x63, 0x6c, 0x6f,
	0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x52, 0x75, 0x6e, 0x30, 0x01,
	0x12, 0x41, 0x0a, 0x05, 0x57, 0x61, 0x74, 0x63, 0x68, 0x12, 0x20, 0x2e, 0x6e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x57, 0x61, 0x74, 0x63,
	0x68, 0x52, 0x75, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6e, 0x6f,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x2e, 0x52, 0x75,
	0x6e, 0x30, 0x01, 0x42, 0xaa, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x6e, 0x6f, 0x63, 0x6c,
	0x6f, 0x75, 0x64, 0x2e, 0x61, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x42, 0x0c, 0x41, 0x6e, 0x73,
	0x69, 0x62, 0x6c, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x28, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x6c, 0x6e, 0x74, 0x6f, 0x70, 0x70, 0x2f,
	0x6e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x61, 0x6e,
	0x73, 0x69, 0x62, 0x6c, 0x65, 0xa2, 0x02, 0x03, 0x4e, 0x41, 0x58, 0xaa, 0x02, 0x0f, 0x4e, 0x6f,
	0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2e, 0x41, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0xca, 0x02, 0x0f,
	0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x41, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65, 0xe2,
	0x02, 0x1b, 0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x5c, 0x41, 0x6e, 0x73, 0x69, 0x62, 0x6c,
	0x65, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x10,
	0x4e, 0x6f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x3a, 0x3a, 0x41, 0x6e, 0x73, 0x69, 0x62, 0x6c, 0x65,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ansible_ansible_proto_rawDescOnce sync.Once
	file_ansible_ansible_proto_rawDescData = file_ansible_ansible_proto_rawDesc
)

func file_ansible_ansible_proto_rawDescGZIP() []byte {
	file_ansible_ansible_proto_rawDescOnce.Do(func() {
		file_ansible_ansible_proto_rawDescData = protoimpl.X.CompressGZIP(file_ansible_ansible_proto_rawDescData)
	})
	return file_ansible_ansible_proto_rawDescData
}

var file_ansible_ansible_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_ansible_ansible_proto_goTypes = []interface{}{
	(*Run)(nil),               // 0: nocloud.ansible.Run
	(*Instance)(nil),          // 1: nocloud.ansible.Instance
	(*GetRunRequest)(nil),     // 2: nocloud.ansible.GetRunRequest
	(*ExecRunRequest)(nil),    // 3: nocloud.ansible.ExecRunRequest
	(*WatchRunRequest)(nil),   // 4: nocloud.ansible.WatchRunRequest
	(*DeleteRunRequest)(nil),  // 5: nocloud.ansible.DeleteRunRequest
	(*DeleteRunResponse)(nil), // 6: nocloud.ansible.DeleteRunResponse
	nil,                       // 7: nocloud.ansible.Run.JobsEntry
}
var file_ansible_ansible_proto_depIdxs = []int32{
	1, // 0: nocloud.ansible.Run.instances:type_name -> nocloud.ansible.Instance
	7, // 1: nocloud.ansible.Run.jobs:type_name -> nocloud.ansible.Run.JobsEntry
	2, // 2: nocloud.ansible.AnsibleService.Get:input_type -> nocloud.ansible.GetRunRequest
	5, // 3: nocloud.ansible.AnsibleService.Delete:input_type -> nocloud.ansible.DeleteRunRequest
	0, // 4: nocloud.ansible.AnsibleService.Create:input_type -> nocloud.ansible.Run
	3, // 5: nocloud.ansible.AnsibleService.Exec:input_type -> nocloud.ansible.ExecRunRequest
	4, // 6: nocloud.ansible.AnsibleService.Watch:input_type -> nocloud.ansible.WatchRunRequest
	0, // 7: nocloud.ansible.AnsibleService.Get:output_type -> nocloud.ansible.Run
	6, // 8: nocloud.ansible.AnsibleService.Delete:output_type -> nocloud.ansible.DeleteRunResponse
	0, // 9: nocloud.ansible.AnsibleService.Create:output_type -> nocloud.ansible.Run
	0, // 10: nocloud.ansible.AnsibleService.Exec:output_type -> nocloud.ansible.Run
	0, // 11: nocloud.ansible.AnsibleService.Watch:output_type -> nocloud.ansible.Run
	7, // [7:12] is the sub-list for method output_type
	2, // [2:7] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_ansible_ansible_proto_init() }
func file_ansible_ansible_proto_init() {
	if File_ansible_ansible_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ansible_ansible_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Run); i {
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
		file_ansible_ansible_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Instance); i {
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
		file_ansible_ansible_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRunRequest); i {
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
		file_ansible_ansible_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExecRunRequest); i {
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
		file_ansible_ansible_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WatchRunRequest); i {
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
		file_ansible_ansible_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRunRequest); i {
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
		file_ansible_ansible_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRunResponse); i {
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
	file_ansible_ansible_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_ansible_ansible_proto_msgTypes[1].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ansible_ansible_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_ansible_ansible_proto_goTypes,
		DependencyIndexes: file_ansible_ansible_proto_depIdxs,
		MessageInfos:      file_ansible_ansible_proto_msgTypes,
	}.Build()
	File_ansible_ansible_proto = out.File
	file_ansible_ansible_proto_rawDesc = nil
	file_ansible_ansible_proto_goTypes = nil
	file_ansible_ansible_proto_depIdxs = nil
}
