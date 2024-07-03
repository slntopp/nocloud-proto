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

// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: instances/instances.proto

package instances

import (
	context "context"
	notes "github.com/slntopp/nocloud-proto/notes"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	InstancesService_Invoke_FullMethodName           = "/nocloud.instances.InstancesService/Invoke"
	InstancesService_Delete_FullMethodName           = "/nocloud.instances.InstancesService/Delete"
	InstancesService_AddNote_FullMethodName          = "/nocloud.instances.InstancesService/AddNote"
	InstancesService_PatchNote_FullMethodName        = "/nocloud.instances.InstancesService/PatchNote"
	InstancesService_RemoveNote_FullMethodName       = "/nocloud.instances.InstancesService/RemoveNote"
	InstancesService_Detach_FullMethodName           = "/nocloud.instances.InstancesService/Detach"
	InstancesService_Attach_FullMethodName           = "/nocloud.instances.InstancesService/Attach"
	InstancesService_List_FullMethodName             = "/nocloud.instances.InstancesService/List"
	InstancesService_Get_FullMethodName              = "/nocloud.instances.InstancesService/Get"
	InstancesService_TransferIG_FullMethodName       = "/nocloud.instances.InstancesService/TransferIG"
	InstancesService_TransferInstance_FullMethodName = "/nocloud.instances.InstancesService/TransferInstance"
)

// InstancesServiceClient is the client API for InstancesService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InstancesServiceClient interface {
	Invoke(ctx context.Context, in *InvokeRequest, opts ...grpc.CallOption) (*InvokeResponse, error)
	Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error)
	AddNote(ctx context.Context, in *notes.AddNoteRequest, opts ...grpc.CallOption) (*notes.NoteResponse, error)
	PatchNote(ctx context.Context, in *notes.PatchNoteRequest, opts ...grpc.CallOption) (*notes.NoteResponse, error)
	RemoveNote(ctx context.Context, in *notes.RemoveNoteRequest, opts ...grpc.CallOption) (*notes.NoteResponse, error)
	Detach(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error)
	Attach(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error)
	List(ctx context.Context, in *ListInstancesRequest, opts ...grpc.CallOption) (*ListInstancesResponse, error)
	Get(ctx context.Context, in *Instance, opts ...grpc.CallOption) (*Instance, error)
	TransferIG(ctx context.Context, in *TransferIGRequest, opts ...grpc.CallOption) (*TransferIGResponse, error)
	TransferInstance(ctx context.Context, in *TransferInstanceRequest, opts ...grpc.CallOption) (*TransferInstanceResponse, error)
}

type instancesServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewInstancesServiceClient(cc grpc.ClientConnInterface) InstancesServiceClient {
	return &instancesServiceClient{cc}
}

func (c *instancesServiceClient) Invoke(ctx context.Context, in *InvokeRequest, opts ...grpc.CallOption) (*InvokeResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(InvokeResponse)
	err := c.cc.Invoke(ctx, InstancesService_Invoke_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(DeleteResponse)
	err := c.cc.Invoke(ctx, InstancesService_Delete_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) AddNote(ctx context.Context, in *notes.AddNoteRequest, opts ...grpc.CallOption) (*notes.NoteResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(notes.NoteResponse)
	err := c.cc.Invoke(ctx, InstancesService_AddNote_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) PatchNote(ctx context.Context, in *notes.PatchNoteRequest, opts ...grpc.CallOption) (*notes.NoteResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(notes.NoteResponse)
	err := c.cc.Invoke(ctx, InstancesService_PatchNote_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) RemoveNote(ctx context.Context, in *notes.RemoveNoteRequest, opts ...grpc.CallOption) (*notes.NoteResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(notes.NoteResponse)
	err := c.cc.Invoke(ctx, InstancesService_RemoveNote_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) Detach(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(DeleteResponse)
	err := c.cc.Invoke(ctx, InstancesService_Detach_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) Attach(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(DeleteResponse)
	err := c.cc.Invoke(ctx, InstancesService_Attach_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) List(ctx context.Context, in *ListInstancesRequest, opts ...grpc.CallOption) (*ListInstancesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListInstancesResponse)
	err := c.cc.Invoke(ctx, InstancesService_List_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) Get(ctx context.Context, in *Instance, opts ...grpc.CallOption) (*Instance, error) {
	out := new(Instance)
	err := c.cc.Invoke(ctx, InstancesService_Get_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) TransferIG(ctx context.Context, in *TransferIGRequest, opts ...grpc.CallOption) (*TransferIGResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(TransferIGResponse)
	err := c.cc.Invoke(ctx, InstancesService_TransferIG_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *instancesServiceClient) TransferInstance(ctx context.Context, in *TransferInstanceRequest, opts ...grpc.CallOption) (*TransferInstanceResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(TransferInstanceResponse)
	err := c.cc.Invoke(ctx, InstancesService_TransferInstance_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InstancesServiceServer is the server API for InstancesService service.
// All implementations must embed UnimplementedInstancesServiceServer
// for forward compatibility.
type InstancesServiceServer interface {
	Invoke(context.Context, *InvokeRequest) (*InvokeResponse, error)
	Delete(context.Context, *DeleteRequest) (*DeleteResponse, error)
	AddNote(context.Context, *notes.AddNoteRequest) (*notes.NoteResponse, error)
	PatchNote(context.Context, *notes.PatchNoteRequest) (*notes.NoteResponse, error)
	RemoveNote(context.Context, *notes.RemoveNoteRequest) (*notes.NoteResponse, error)
	Detach(context.Context, *DeleteRequest) (*DeleteResponse, error)
	Attach(context.Context, *DeleteRequest) (*DeleteResponse, error)
	List(context.Context, *ListInstancesRequest) (*ListInstancesResponse, error)
	Get(context.Context, *Instance) (*Instance, error)
	TransferIG(context.Context, *TransferIGRequest) (*TransferIGResponse, error)
	TransferInstance(context.Context, *TransferInstanceRequest) (*TransferInstanceResponse, error)
	mustEmbedUnimplementedInstancesServiceServer()
}

// UnimplementedInstancesServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedInstancesServiceServer struct{}

func (UnimplementedInstancesServiceServer) Invoke(context.Context, *InvokeRequest) (*InvokeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Invoke not implemented")
}
func (UnimplementedInstancesServiceServer) Delete(context.Context, *DeleteRequest) (*DeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedInstancesServiceServer) AddNote(context.Context, *notes.AddNoteRequest) (*notes.NoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddNote not implemented")
}
func (UnimplementedInstancesServiceServer) PatchNote(context.Context, *notes.PatchNoteRequest) (*notes.NoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PatchNote not implemented")
}
func (UnimplementedInstancesServiceServer) RemoveNote(context.Context, *notes.RemoveNoteRequest) (*notes.NoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveNote not implemented")
}
func (UnimplementedInstancesServiceServer) Detach(context.Context, *DeleteRequest) (*DeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Detach not implemented")
}
func (UnimplementedInstancesServiceServer) Attach(context.Context, *DeleteRequest) (*DeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Attach not implemented")
}
func (UnimplementedInstancesServiceServer) List(context.Context, *ListInstancesRequest) (*ListInstancesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedInstancesServiceServer) Get(context.Context, *Instance) (*Instance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedInstancesServiceServer) TransferIG(context.Context, *TransferIGRequest) (*TransferIGResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TransferIG not implemented")
}
func (UnimplementedInstancesServiceServer) TransferInstance(context.Context, *TransferInstanceRequest) (*TransferInstanceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TransferInstance not implemented")
}
func (UnimplementedInstancesServiceServer) mustEmbedUnimplementedInstancesServiceServer() {}
func (UnimplementedInstancesServiceServer) testEmbeddedByValue()                          {}

// UnsafeInstancesServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InstancesServiceServer will
// result in compilation errors.
type UnsafeInstancesServiceServer interface {
	mustEmbedUnimplementedInstancesServiceServer()
}

func RegisterInstancesServiceServer(s grpc.ServiceRegistrar, srv InstancesServiceServer) {
	// If the following call pancis, it indicates UnimplementedInstancesServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&InstancesService_ServiceDesc, srv)
}

func _InstancesService_Invoke_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InvokeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).Invoke(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_Invoke_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).Invoke(ctx, req.(*InvokeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_Delete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).Delete(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_AddNote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(notes.AddNoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).AddNote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_AddNote_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).AddNote(ctx, req.(*notes.AddNoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_PatchNote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(notes.PatchNoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).PatchNote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_PatchNote_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).PatchNote(ctx, req.(*notes.PatchNoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_RemoveNote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(notes.RemoveNoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).RemoveNote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_RemoveNote_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).RemoveNote(ctx, req.(*notes.RemoveNoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_Detach_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).Detach(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_Detach_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).Detach(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_Attach_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).Attach(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_Attach_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).Attach(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListInstancesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_List_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).List(ctx, req.(*ListInstancesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Instance)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_Get_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).Get(ctx, req.(*Instance))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_TransferIG_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransferIGRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).TransferIG(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_TransferIG_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).TransferIG(ctx, req.(*TransferIGRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InstancesService_TransferInstance_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransferInstanceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InstancesServiceServer).TransferInstance(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InstancesService_TransferInstance_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InstancesServiceServer).TransferInstance(ctx, req.(*TransferInstanceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// InstancesService_ServiceDesc is the grpc.ServiceDesc for InstancesService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InstancesService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nocloud.instances.InstancesService",
	HandlerType: (*InstancesServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Invoke",
			Handler:    _InstancesService_Invoke_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _InstancesService_Delete_Handler,
		},
		{
			MethodName: "AddNote",
			Handler:    _InstancesService_AddNote_Handler,
		},
		{
			MethodName: "PatchNote",
			Handler:    _InstancesService_PatchNote_Handler,
		},
		{
			MethodName: "RemoveNote",
			Handler:    _InstancesService_RemoveNote_Handler,
		},
		{
			MethodName: "Detach",
			Handler:    _InstancesService_Detach_Handler,
		},
		{
			MethodName: "Attach",
			Handler:    _InstancesService_Attach_Handler,
		},
		{
			MethodName: "List",
			Handler:    _InstancesService_List_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _InstancesService_Get_Handler,
		},
		{
			MethodName: "TransferIG",
			Handler:    _InstancesService_TransferIG_Handler,
		},
		{
			MethodName: "TransferInstance",
			Handler:    _InstancesService_TransferInstance_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "instances/instances.proto",
}
