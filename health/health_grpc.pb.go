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
// source: health/health.proto

package health

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	HealthService_Probe_FullMethodName = "/nocloud.health.HealthService/Probe"
)

// HealthServiceClient is the client API for HealthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type HealthServiceClient interface {
	Probe(ctx context.Context, in *ProbeRequest, opts ...grpc.CallOption) (*ProbeResponse, error)
}

type healthServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewHealthServiceClient(cc grpc.ClientConnInterface) HealthServiceClient {
	return &healthServiceClient{cc}
}

func (c *healthServiceClient) Probe(ctx context.Context, in *ProbeRequest, opts ...grpc.CallOption) (*ProbeResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ProbeResponse)
	err := c.cc.Invoke(ctx, HealthService_Probe_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// HealthServiceServer is the server API for HealthService service.
// All implementations must embed UnimplementedHealthServiceServer
// for forward compatibility.
type HealthServiceServer interface {
	Probe(context.Context, *ProbeRequest) (*ProbeResponse, error)
	mustEmbedUnimplementedHealthServiceServer()
}

// UnimplementedHealthServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedHealthServiceServer struct{}

func (UnimplementedHealthServiceServer) Probe(context.Context, *ProbeRequest) (*ProbeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Probe not implemented")
}
func (UnimplementedHealthServiceServer) mustEmbedUnimplementedHealthServiceServer() {}
func (UnimplementedHealthServiceServer) testEmbeddedByValue()                       {}

// UnsafeHealthServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to HealthServiceServer will
// result in compilation errors.
type UnsafeHealthServiceServer interface {
	mustEmbedUnimplementedHealthServiceServer()
}

func RegisterHealthServiceServer(s grpc.ServiceRegistrar, srv HealthServiceServer) {
	// If the following call pancis, it indicates UnimplementedHealthServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&HealthService_ServiceDesc, srv)
}

func _HealthService_Probe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProbeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HealthServiceServer).Probe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: HealthService_Probe_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HealthServiceServer).Probe(ctx, req.(*ProbeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// HealthService_ServiceDesc is the grpc.ServiceDesc for HealthService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var HealthService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nocloud.health.HealthService",
	HandlerType: (*HealthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Probe",
			Handler:    _HealthService_Probe_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "health/health.proto",
}

const (
	InternalProbeService_Service_FullMethodName = "/nocloud.health.InternalProbeService/Service"
	InternalProbeService_Routine_FullMethodName = "/nocloud.health.InternalProbeService/Routine"
)

// InternalProbeServiceClient is the client API for InternalProbeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InternalProbeServiceClient interface {
	Service(ctx context.Context, in *ProbeRequest, opts ...grpc.CallOption) (*ServingStatus, error)
	Routine(ctx context.Context, in *ProbeRequest, opts ...grpc.CallOption) (*RoutinesStatus, error)
}

type internalProbeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewInternalProbeServiceClient(cc grpc.ClientConnInterface) InternalProbeServiceClient {
	return &internalProbeServiceClient{cc}
}

func (c *internalProbeServiceClient) Service(ctx context.Context, in *ProbeRequest, opts ...grpc.CallOption) (*ServingStatus, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ServingStatus)
	err := c.cc.Invoke(ctx, InternalProbeService_Service_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalProbeServiceClient) Routine(ctx context.Context, in *ProbeRequest, opts ...grpc.CallOption) (*RoutinesStatus, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(RoutinesStatus)
	err := c.cc.Invoke(ctx, InternalProbeService_Routine_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InternalProbeServiceServer is the server API for InternalProbeService service.
// All implementations must embed UnimplementedInternalProbeServiceServer
// for forward compatibility.
type InternalProbeServiceServer interface {
	Service(context.Context, *ProbeRequest) (*ServingStatus, error)
	Routine(context.Context, *ProbeRequest) (*RoutinesStatus, error)
	mustEmbedUnimplementedInternalProbeServiceServer()
}

// UnimplementedInternalProbeServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedInternalProbeServiceServer struct{}

func (UnimplementedInternalProbeServiceServer) Service(context.Context, *ProbeRequest) (*ServingStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Service not implemented")
}
func (UnimplementedInternalProbeServiceServer) Routine(context.Context, *ProbeRequest) (*RoutinesStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Routine not implemented")
}
func (UnimplementedInternalProbeServiceServer) mustEmbedUnimplementedInternalProbeServiceServer() {}
func (UnimplementedInternalProbeServiceServer) testEmbeddedByValue()                              {}

// UnsafeInternalProbeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InternalProbeServiceServer will
// result in compilation errors.
type UnsafeInternalProbeServiceServer interface {
	mustEmbedUnimplementedInternalProbeServiceServer()
}

func RegisterInternalProbeServiceServer(s grpc.ServiceRegistrar, srv InternalProbeServiceServer) {
	// If the following call pancis, it indicates UnimplementedInternalProbeServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&InternalProbeService_ServiceDesc, srv)
}

func _InternalProbeService_Service_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProbeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalProbeServiceServer).Service(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalProbeService_Service_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalProbeServiceServer).Service(ctx, req.(*ProbeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalProbeService_Routine_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProbeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalProbeServiceServer).Routine(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: InternalProbeService_Routine_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalProbeServiceServer).Routine(ctx, req.(*ProbeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// InternalProbeService_ServiceDesc is the grpc.ServiceDesc for InternalProbeService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InternalProbeService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nocloud.health.InternalProbeService",
	HandlerType: (*InternalProbeServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Service",
			Handler:    _InternalProbeService_Service_Handler,
		},
		{
			MethodName: "Routine",
			Handler:    _InternalProbeService_Routine_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "health/health.proto",
}
