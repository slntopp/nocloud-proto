// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: events_logging/events_logging.proto

package events_logging

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// EventsLoggingServiceClient is the client API for EventsLoggingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EventsLoggingServiceClient interface {
	GetEvents(ctx context.Context, in *GetEventsRequest, opts ...grpc.CallOption) (*Events, error)
	GetCount(ctx context.Context, in *GetEventsCountRequest, opts ...grpc.CallOption) (*GetEventsCountResponse, error)
}

type eventsLoggingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEventsLoggingServiceClient(cc grpc.ClientConnInterface) EventsLoggingServiceClient {
	return &eventsLoggingServiceClient{cc}
}

func (c *eventsLoggingServiceClient) GetEvents(ctx context.Context, in *GetEventsRequest, opts ...grpc.CallOption) (*Events, error) {
	out := new(Events)
	err := c.cc.Invoke(ctx, "/nocloud.events_logging.EventsLoggingService/GetEvents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *eventsLoggingServiceClient) GetCount(ctx context.Context, in *GetEventsCountRequest, opts ...grpc.CallOption) (*GetEventsCountResponse, error) {
	out := new(GetEventsCountResponse)
	err := c.cc.Invoke(ctx, "/nocloud.events_logging.EventsLoggingService/GetCount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EventsLoggingServiceServer is the server API for EventsLoggingService service.
// All implementations must embed UnimplementedEventsLoggingServiceServer
// for forward compatibility
type EventsLoggingServiceServer interface {
	GetEvents(context.Context, *GetEventsRequest) (*Events, error)
	GetCount(context.Context, *GetEventsCountRequest) (*GetEventsCountResponse, error)
	mustEmbedUnimplementedEventsLoggingServiceServer()
}

// UnimplementedEventsLoggingServiceServer must be embedded to have forward compatible implementations.
type UnimplementedEventsLoggingServiceServer struct {
}

func (UnimplementedEventsLoggingServiceServer) GetEvents(context.Context, *GetEventsRequest) (*Events, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEvents not implemented")
}
func (UnimplementedEventsLoggingServiceServer) GetCount(context.Context, *GetEventsCountRequest) (*GetEventsCountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCount not implemented")
}
func (UnimplementedEventsLoggingServiceServer) mustEmbedUnimplementedEventsLoggingServiceServer() {}

// UnsafeEventsLoggingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EventsLoggingServiceServer will
// result in compilation errors.
type UnsafeEventsLoggingServiceServer interface {
	mustEmbedUnimplementedEventsLoggingServiceServer()
}

func RegisterEventsLoggingServiceServer(s grpc.ServiceRegistrar, srv EventsLoggingServiceServer) {
	s.RegisterService(&EventsLoggingService_ServiceDesc, srv)
}

func _EventsLoggingService_GetEvents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEventsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EventsLoggingServiceServer).GetEvents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.events_logging.EventsLoggingService/GetEvents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EventsLoggingServiceServer).GetEvents(ctx, req.(*GetEventsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EventsLoggingService_GetCount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEventsCountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EventsLoggingServiceServer).GetCount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/nocloud.events_logging.EventsLoggingService/GetCount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EventsLoggingServiceServer).GetCount(ctx, req.(*GetEventsCountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EventsLoggingService_ServiceDesc is the grpc.ServiceDesc for EventsLoggingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EventsLoggingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "nocloud.events_logging.EventsLoggingService",
	HandlerType: (*EventsLoggingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEvents",
			Handler:    _EventsLoggingService_GetEvents_Handler,
		},
		{
			MethodName: "GetCount",
			Handler:    _EventsLoggingService_GetCount_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "events_logging/events_logging.proto",
}
