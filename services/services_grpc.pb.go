// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: services/services.proto

package services

import (
	context "context"
	states "github.com/slntopp/nocloud-proto/states"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServicesServiceClient is the client API for ServicesService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServicesServiceClient interface {
	TestConfig(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*TestConfigResponse, error)
	Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*Service, error)
	Update(ctx context.Context, in *Service, opts ...grpc.CallOption) (*Service, error)
	Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error)
	Get(ctx context.Context, in *GetRequest, opts ...grpc.CallOption) (*Service, error)
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*Services, error)
	Up(ctx context.Context, in *UpRequest, opts ...grpc.CallOption) (*UpResponse, error)
	Down(ctx context.Context, in *DownRequest, opts ...grpc.CallOption) (*DownResponse, error)
	Suspend(ctx context.Context, in *SuspendRequest, opts ...grpc.CallOption) (*SuspendResponse, error)
	Unsuspend(ctx context.Context, in *UnsuspendRequest, opts ...grpc.CallOption) (*UnsuspendResponse, error)
	Stream(ctx context.Context, in *StreamRequest, opts ...grpc.CallOption) (ServicesService_StreamClient, error)
}

type servicesServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewServicesServiceClient(cc grpc.ClientConnInterface) ServicesServiceClient {
	return &servicesServiceClient{cc}
}

func (c *servicesServiceClient) TestConfig(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*TestConfigResponse, error) {
	out := new(TestConfigResponse)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/TestConfig", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*Service, error) {
	out := new(Service)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Update(ctx context.Context, in *Service, opts ...grpc.CallOption) (*Service, error) {
	out := new(Service)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Delete(ctx context.Context, in *DeleteRequest, opts ...grpc.CallOption) (*DeleteResponse, error) {
	out := new(DeleteResponse)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Get(ctx context.Context, in *GetRequest, opts ...grpc.CallOption) (*Service, error) {
	out := new(Service)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*Services, error) {
	out := new(Services)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Up(ctx context.Context, in *UpRequest, opts ...grpc.CallOption) (*UpResponse, error) {
	out := new(UpResponse)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Up", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Down(ctx context.Context, in *DownRequest, opts ...grpc.CallOption) (*DownResponse, error) {
	out := new(DownResponse)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Down", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Suspend(ctx context.Context, in *SuspendRequest, opts ...grpc.CallOption) (*SuspendResponse, error) {
	out := new(SuspendResponse)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Suspend", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Unsuspend(ctx context.Context, in *UnsuspendRequest, opts ...grpc.CallOption) (*UnsuspendResponse, error) {
	out := new(UnsuspendResponse)
	err := c.cc.Invoke(ctx, "/nocloud.services.ServicesService/Unsuspend", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servicesServiceClient) Stream(ctx context.Context, in *StreamRequest, opts ...grpc.CallOption) (ServicesService_StreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &ServicesService_ServiceDesc.Streams[0], "/nocloud.services.ServicesService/Stream", opts...)
	if err != nil {
		return nil, err
	}
	x := &servicesServiceStreamClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ServicesService_StreamClient interface {
	Recv() (*states.ObjectState, error)
	grpc.ClientStream
}

type servicesServiceStreamClient struct {
	grpc.ClientStream
}

func (x *servicesServiceStreamClient) Recv() (*states.ObjectState, error) {
	m := new(states.ObjectState)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ServicesServiceServer is the server API for ServicesService service.
// All implementations must embed UnimplementedServicesServiceServer
// for forward compatibility
type ServicesServiceServer interface {
	TestConfig(context.Context, *CreateRequest) (*TestConfigResponse, error)
	Create(context.Context, *CreateRequest) (*Service, error)
	Update(context.Context, *Service) (*Service, error)
	Delete(context.Context, *DeleteRequest) (*DeleteResponse, error)
	Get(context.Context, *GetRequest) (*Service, error)
	List(context.Context, *ListRequest) (*Services, error)
	Up(context.Context, *UpRequest) (*UpResponse, error)
	Down(context.Context, *DownRequest) (*DownResponse, error)
	Suspend(context.Context, *SuspendRequest) (*SuspendResponse, error)
	Unsuspend(context.Context, *UnsuspendRequest) (*UnsuspendResponse, error)
	Stream(*StreamRequest, ServicesService_StreamServer) error
	mustEmbedUnimplementedServicesServiceServer()
}

// UnimplementedServicesServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServicesServiceServer struct {
}

func (UnimplementedServicesServiceServer) TestConfig(context.Context, *CreateRequest) (*TestConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TestConfig not implemented")
}
func (UnimplementedServicesServiceServer) Create(context.Context, *CreateRequest) (*Service, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedServicesServiceServer) Update(context.Context, *Service) (*Service, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedServicesServiceServer) Delete(context.Context, *DeleteRequest) (*DeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedServicesServiceServer) Get(context.Context, *GetRequest) (*Service, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedServicesServiceServer) List(context.Context, *ListRequest) (*Services, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedServicesServiceServer) Up(context.Context, *UpRequest) (*UpResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Up not implemented")
}
func (UnimplementedServicesServiceServer) Down(context.Context, *DownRequest) (*DownResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Down not implemented")
}
func (UnimplementedServicesServiceServer) Suspend(context.Context, *SuspendRequest) (*SuspendResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suspend not implemented")
}
func (UnimplementedServicesServiceServer) Unsuspend(context.Context, *UnsuspendRequest) (*UnsuspendResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Unsuspend not implemented")
}
func (UnimplementedServicesServiceServer) Stream(*StreamRequest, ServicesService_StreamServer) error {
	return status.Errorf(codes.Unimplemented, "method Stream not implemented")
}
func (UnimplementedServicesServiceServer) mustEmbedUnimplementedServicesServiceServer() {}

// UnsafeServicesServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServicesServiceServer will
// result in compilation errors.
type UnsafeServicesServiceServer interface {
	mustEmbedUnimplementedServicesServiceServer()
}

func RegisterServicesServiceServer(s grpc.ServiceRegistrar, srv ServicesServiceServer) {
	s.RegisterService(&ServicesService_ServiceDesc, srv)
}

func _ServicesService_TestConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).TestConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/TestConfig",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).TestConfig(ctx, req.(*CreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Create(ctx, req.(*CreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Service)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Update(ctx, req.(*Service))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Delete(ctx, req.(*DeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Get(ctx, req.(*GetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).List(ctx, req.(*ListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Up_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Up(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Up",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Up(ctx, req.(*UpRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Down_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DownRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Down(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Down",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Down(ctx, req.(*DownRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Suspend_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuspendRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Suspend(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Suspend",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Suspend(ctx, req.(*SuspendRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Unsuspend_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UnsuspendRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServicesServiceServer).Unsuspend(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.services.ServicesService/Unsuspend",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServicesServiceServer).Unsuspend(ctx, req.(*UnsuspendRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServicesService_Stream_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(StreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ServicesServiceServer).Stream(m, &servicesServiceStreamServer{stream})
}

type ServicesService_StreamServer interface {
	Send(*states.ObjectState) error
	grpc.ServerStream
}

type servicesServiceStreamServer struct {
	grpc.ServerStream
}

func (x *servicesServiceStreamServer) Send(m *states.ObjectState) error {
	return x.ServerStream.SendMsg(m)
}

// ServicesService_ServiceDesc is the grpc.ServiceDesc for ServicesService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ServicesService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nocloud.services.ServicesService",
	HandlerType: (*ServicesServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TestConfig",
			Handler:    _ServicesService_TestConfig_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _ServicesService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ServicesService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _ServicesService_Delete_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _ServicesService_Get_Handler,
		},
		{
			MethodName: "List",
			Handler:    _ServicesService_List_Handler,
		},
		{
			MethodName: "Up",
			Handler:    _ServicesService_Up_Handler,
		},
		{
			MethodName: "Down",
			Handler:    _ServicesService_Down_Handler,
		},
		{
			MethodName: "Suspend",
			Handler:    _ServicesService_Suspend_Handler,
		},
		{
			MethodName: "Unsuspend",
			Handler:    _ServicesService_Unsuspend_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Stream",
			Handler:       _ServicesService_Stream_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "services/services.proto",
}
