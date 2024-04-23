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

// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: services/services.proto

package servicesconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	services "github.com/slntopp/nocloud-proto/services"
	states "github.com/slntopp/nocloud-proto/states"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// ServicesServiceName is the fully-qualified name of the ServicesService service.
	ServicesServiceName = "nocloud.services.ServicesService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// ServicesServiceCreateProcedure is the fully-qualified name of the ServicesService's Create RPC.
	ServicesServiceCreateProcedure = "/nocloud.services.ServicesService/Create"
	// ServicesServiceUpdateProcedure is the fully-qualified name of the ServicesService's Update RPC.
	ServicesServiceUpdateProcedure = "/nocloud.services.ServicesService/Update"
	// ServicesServiceDeleteProcedure is the fully-qualified name of the ServicesService's Delete RPC.
	ServicesServiceDeleteProcedure = "/nocloud.services.ServicesService/Delete"
	// ServicesServiceGetProcedure is the fully-qualified name of the ServicesService's Get RPC.
	ServicesServiceGetProcedure = "/nocloud.services.ServicesService/Get"
	// ServicesServiceListProcedure is the fully-qualified name of the ServicesService's List RPC.
	ServicesServiceListProcedure = "/nocloud.services.ServicesService/List"
	// ServicesServiceUpProcedure is the fully-qualified name of the ServicesService's Up RPC.
	ServicesServiceUpProcedure = "/nocloud.services.ServicesService/Up"
	// ServicesServiceDownProcedure is the fully-qualified name of the ServicesService's Down RPC.
	ServicesServiceDownProcedure = "/nocloud.services.ServicesService/Down"
	// ServicesServiceSuspendProcedure is the fully-qualified name of the ServicesService's Suspend RPC.
	ServicesServiceSuspendProcedure = "/nocloud.services.ServicesService/Suspend"
	// ServicesServiceUnsuspendProcedure is the fully-qualified name of the ServicesService's Unsuspend
	// RPC.
	ServicesServiceUnsuspendProcedure = "/nocloud.services.ServicesService/Unsuspend"
	// ServicesServiceStreamProcedure is the fully-qualified name of the ServicesService's Stream RPC.
	ServicesServiceStreamProcedure = "/nocloud.services.ServicesService/Stream"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	servicesServiceServiceDescriptor         = services.File_services_services_proto.Services().ByName("ServicesService")
	servicesServiceCreateMethodDescriptor    = servicesServiceServiceDescriptor.Methods().ByName("Create")
	servicesServiceUpdateMethodDescriptor    = servicesServiceServiceDescriptor.Methods().ByName("Update")
	servicesServiceDeleteMethodDescriptor    = servicesServiceServiceDescriptor.Methods().ByName("Delete")
	servicesServiceGetMethodDescriptor       = servicesServiceServiceDescriptor.Methods().ByName("Get")
	servicesServiceListMethodDescriptor      = servicesServiceServiceDescriptor.Methods().ByName("List")
	servicesServiceUpMethodDescriptor        = servicesServiceServiceDescriptor.Methods().ByName("Up")
	servicesServiceDownMethodDescriptor      = servicesServiceServiceDescriptor.Methods().ByName("Down")
	servicesServiceSuspendMethodDescriptor   = servicesServiceServiceDescriptor.Methods().ByName("Suspend")
	servicesServiceUnsuspendMethodDescriptor = servicesServiceServiceDescriptor.Methods().ByName("Unsuspend")
	servicesServiceStreamMethodDescriptor    = servicesServiceServiceDescriptor.Methods().ByName("Stream")
)

// ServicesServiceClient is a client for the nocloud.services.ServicesService service.
type ServicesServiceClient interface {
	// rpc TestConfig(nocloud.services.CreateRequest)
	// returns (nocloud.services.TestConfigResponse) {
	// option (google.api.http) = {
	// post : "/services"
	// body : "*"
	// };
	// };
	Create(context.Context, *connect.Request[services.CreateRequest]) (*connect.Response[services.Service], error)
	Update(context.Context, *connect.Request[services.Service]) (*connect.Response[services.Service], error)
	Delete(context.Context, *connect.Request[services.DeleteRequest]) (*connect.Response[services.DeleteResponse], error)
	Get(context.Context, *connect.Request[services.GetRequest]) (*connect.Response[services.Service], error)
	List(context.Context, *connect.Request[services.ListRequest]) (*connect.Response[services.Services], error)
	Up(context.Context, *connect.Request[services.UpRequest]) (*connect.Response[services.UpResponse], error)
	Down(context.Context, *connect.Request[services.DownRequest]) (*connect.Response[services.DownResponse], error)
	Suspend(context.Context, *connect.Request[services.SuspendRequest]) (*connect.Response[services.SuspendResponse], error)
	Unsuspend(context.Context, *connect.Request[services.UnsuspendRequest]) (*connect.Response[services.UnsuspendResponse], error)
	Stream(context.Context, *connect.Request[services.StreamRequest]) (*connect.ServerStreamForClient[states.ObjectState], error)
}

// NewServicesServiceClient constructs a client for the nocloud.services.ServicesService service. By
// default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses,
// and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewServicesServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) ServicesServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &servicesServiceClient{
		create: connect.NewClient[services.CreateRequest, services.Service](
			httpClient,
			baseURL+ServicesServiceCreateProcedure,
			connect.WithSchema(servicesServiceCreateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		update: connect.NewClient[services.Service, services.Service](
			httpClient,
			baseURL+ServicesServiceUpdateProcedure,
			connect.WithSchema(servicesServiceUpdateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[services.DeleteRequest, services.DeleteResponse](
			httpClient,
			baseURL+ServicesServiceDeleteProcedure,
			connect.WithSchema(servicesServiceDeleteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		get: connect.NewClient[services.GetRequest, services.Service](
			httpClient,
			baseURL+ServicesServiceGetProcedure,
			connect.WithSchema(servicesServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[services.ListRequest, services.Services](
			httpClient,
			baseURL+ServicesServiceListProcedure,
			connect.WithSchema(servicesServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		up: connect.NewClient[services.UpRequest, services.UpResponse](
			httpClient,
			baseURL+ServicesServiceUpProcedure,
			connect.WithSchema(servicesServiceUpMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		down: connect.NewClient[services.DownRequest, services.DownResponse](
			httpClient,
			baseURL+ServicesServiceDownProcedure,
			connect.WithSchema(servicesServiceDownMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		suspend: connect.NewClient[services.SuspendRequest, services.SuspendResponse](
			httpClient,
			baseURL+ServicesServiceSuspendProcedure,
			connect.WithSchema(servicesServiceSuspendMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		unsuspend: connect.NewClient[services.UnsuspendRequest, services.UnsuspendResponse](
			httpClient,
			baseURL+ServicesServiceUnsuspendProcedure,
			connect.WithSchema(servicesServiceUnsuspendMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		stream: connect.NewClient[services.StreamRequest, states.ObjectState](
			httpClient,
			baseURL+ServicesServiceStreamProcedure,
			connect.WithSchema(servicesServiceStreamMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// servicesServiceClient implements ServicesServiceClient.
type servicesServiceClient struct {
	create    *connect.Client[services.CreateRequest, services.Service]
	update    *connect.Client[services.Service, services.Service]
	delete    *connect.Client[services.DeleteRequest, services.DeleteResponse]
	get       *connect.Client[services.GetRequest, services.Service]
	list      *connect.Client[services.ListRequest, services.Services]
	up        *connect.Client[services.UpRequest, services.UpResponse]
	down      *connect.Client[services.DownRequest, services.DownResponse]
	suspend   *connect.Client[services.SuspendRequest, services.SuspendResponse]
	unsuspend *connect.Client[services.UnsuspendRequest, services.UnsuspendResponse]
	stream    *connect.Client[services.StreamRequest, states.ObjectState]
}

// Create calls nocloud.services.ServicesService.Create.
func (c *servicesServiceClient) Create(ctx context.Context, req *connect.Request[services.CreateRequest]) (*connect.Response[services.Service], error) {
	return c.create.CallUnary(ctx, req)
}

// Update calls nocloud.services.ServicesService.Update.
func (c *servicesServiceClient) Update(ctx context.Context, req *connect.Request[services.Service]) (*connect.Response[services.Service], error) {
	return c.update.CallUnary(ctx, req)
}

// Delete calls nocloud.services.ServicesService.Delete.
func (c *servicesServiceClient) Delete(ctx context.Context, req *connect.Request[services.DeleteRequest]) (*connect.Response[services.DeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// Get calls nocloud.services.ServicesService.Get.
func (c *servicesServiceClient) Get(ctx context.Context, req *connect.Request[services.GetRequest]) (*connect.Response[services.Service], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls nocloud.services.ServicesService.List.
func (c *servicesServiceClient) List(ctx context.Context, req *connect.Request[services.ListRequest]) (*connect.Response[services.Services], error) {
	return c.list.CallUnary(ctx, req)
}

// Up calls nocloud.services.ServicesService.Up.
func (c *servicesServiceClient) Up(ctx context.Context, req *connect.Request[services.UpRequest]) (*connect.Response[services.UpResponse], error) {
	return c.up.CallUnary(ctx, req)
}

// Down calls nocloud.services.ServicesService.Down.
func (c *servicesServiceClient) Down(ctx context.Context, req *connect.Request[services.DownRequest]) (*connect.Response[services.DownResponse], error) {
	return c.down.CallUnary(ctx, req)
}

// Suspend calls nocloud.services.ServicesService.Suspend.
func (c *servicesServiceClient) Suspend(ctx context.Context, req *connect.Request[services.SuspendRequest]) (*connect.Response[services.SuspendResponse], error) {
	return c.suspend.CallUnary(ctx, req)
}

// Unsuspend calls nocloud.services.ServicesService.Unsuspend.
func (c *servicesServiceClient) Unsuspend(ctx context.Context, req *connect.Request[services.UnsuspendRequest]) (*connect.Response[services.UnsuspendResponse], error) {
	return c.unsuspend.CallUnary(ctx, req)
}

// Stream calls nocloud.services.ServicesService.Stream.
func (c *servicesServiceClient) Stream(ctx context.Context, req *connect.Request[services.StreamRequest]) (*connect.ServerStreamForClient[states.ObjectState], error) {
	return c.stream.CallServerStream(ctx, req)
}

// ServicesServiceHandler is an implementation of the nocloud.services.ServicesService service.
type ServicesServiceHandler interface {
	// rpc TestConfig(nocloud.services.CreateRequest)
	// returns (nocloud.services.TestConfigResponse) {
	// option (google.api.http) = {
	// post : "/services"
	// body : "*"
	// };
	// };
	Create(context.Context, *connect.Request[services.CreateRequest]) (*connect.Response[services.Service], error)
	Update(context.Context, *connect.Request[services.Service]) (*connect.Response[services.Service], error)
	Delete(context.Context, *connect.Request[services.DeleteRequest]) (*connect.Response[services.DeleteResponse], error)
	Get(context.Context, *connect.Request[services.GetRequest]) (*connect.Response[services.Service], error)
	List(context.Context, *connect.Request[services.ListRequest]) (*connect.Response[services.Services], error)
	Up(context.Context, *connect.Request[services.UpRequest]) (*connect.Response[services.UpResponse], error)
	Down(context.Context, *connect.Request[services.DownRequest]) (*connect.Response[services.DownResponse], error)
	Suspend(context.Context, *connect.Request[services.SuspendRequest]) (*connect.Response[services.SuspendResponse], error)
	Unsuspend(context.Context, *connect.Request[services.UnsuspendRequest]) (*connect.Response[services.UnsuspendResponse], error)
	Stream(context.Context, *connect.Request[services.StreamRequest], *connect.ServerStream[states.ObjectState]) error
}

// NewServicesServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewServicesServiceHandler(svc ServicesServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	servicesServiceCreateHandler := connect.NewUnaryHandler(
		ServicesServiceCreateProcedure,
		svc.Create,
		connect.WithSchema(servicesServiceCreateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceUpdateHandler := connect.NewUnaryHandler(
		ServicesServiceUpdateProcedure,
		svc.Update,
		connect.WithSchema(servicesServiceUpdateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceDeleteHandler := connect.NewUnaryHandler(
		ServicesServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(servicesServiceDeleteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceGetHandler := connect.NewUnaryHandler(
		ServicesServiceGetProcedure,
		svc.Get,
		connect.WithSchema(servicesServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceListHandler := connect.NewUnaryHandler(
		ServicesServiceListProcedure,
		svc.List,
		connect.WithSchema(servicesServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceUpHandler := connect.NewUnaryHandler(
		ServicesServiceUpProcedure,
		svc.Up,
		connect.WithSchema(servicesServiceUpMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceDownHandler := connect.NewUnaryHandler(
		ServicesServiceDownProcedure,
		svc.Down,
		connect.WithSchema(servicesServiceDownMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceSuspendHandler := connect.NewUnaryHandler(
		ServicesServiceSuspendProcedure,
		svc.Suspend,
		connect.WithSchema(servicesServiceSuspendMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceUnsuspendHandler := connect.NewUnaryHandler(
		ServicesServiceUnsuspendProcedure,
		svc.Unsuspend,
		connect.WithSchema(servicesServiceUnsuspendMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	servicesServiceStreamHandler := connect.NewServerStreamHandler(
		ServicesServiceStreamProcedure,
		svc.Stream,
		connect.WithSchema(servicesServiceStreamMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/nocloud.services.ServicesService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case ServicesServiceCreateProcedure:
			servicesServiceCreateHandler.ServeHTTP(w, r)
		case ServicesServiceUpdateProcedure:
			servicesServiceUpdateHandler.ServeHTTP(w, r)
		case ServicesServiceDeleteProcedure:
			servicesServiceDeleteHandler.ServeHTTP(w, r)
		case ServicesServiceGetProcedure:
			servicesServiceGetHandler.ServeHTTP(w, r)
		case ServicesServiceListProcedure:
			servicesServiceListHandler.ServeHTTP(w, r)
		case ServicesServiceUpProcedure:
			servicesServiceUpHandler.ServeHTTP(w, r)
		case ServicesServiceDownProcedure:
			servicesServiceDownHandler.ServeHTTP(w, r)
		case ServicesServiceSuspendProcedure:
			servicesServiceSuspendHandler.ServeHTTP(w, r)
		case ServicesServiceUnsuspendProcedure:
			servicesServiceUnsuspendHandler.ServeHTTP(w, r)
		case ServicesServiceStreamProcedure:
			servicesServiceStreamHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedServicesServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedServicesServiceHandler struct{}

func (UnimplementedServicesServiceHandler) Create(context.Context, *connect.Request[services.CreateRequest]) (*connect.Response[services.Service], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Create is not implemented"))
}

func (UnimplementedServicesServiceHandler) Update(context.Context, *connect.Request[services.Service]) (*connect.Response[services.Service], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Update is not implemented"))
}

func (UnimplementedServicesServiceHandler) Delete(context.Context, *connect.Request[services.DeleteRequest]) (*connect.Response[services.DeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Delete is not implemented"))
}

func (UnimplementedServicesServiceHandler) Get(context.Context, *connect.Request[services.GetRequest]) (*connect.Response[services.Service], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Get is not implemented"))
}

func (UnimplementedServicesServiceHandler) List(context.Context, *connect.Request[services.ListRequest]) (*connect.Response[services.Services], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.List is not implemented"))
}

func (UnimplementedServicesServiceHandler) Up(context.Context, *connect.Request[services.UpRequest]) (*connect.Response[services.UpResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Up is not implemented"))
}

func (UnimplementedServicesServiceHandler) Down(context.Context, *connect.Request[services.DownRequest]) (*connect.Response[services.DownResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Down is not implemented"))
}

func (UnimplementedServicesServiceHandler) Suspend(context.Context, *connect.Request[services.SuspendRequest]) (*connect.Response[services.SuspendResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Suspend is not implemented"))
}

func (UnimplementedServicesServiceHandler) Unsuspend(context.Context, *connect.Request[services.UnsuspendRequest]) (*connect.Response[services.UnsuspendResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Unsuspend is not implemented"))
}

func (UnimplementedServicesServiceHandler) Stream(context.Context, *connect.Request[services.StreamRequest], *connect.ServerStream[states.ObjectState]) error {
	return connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.services.ServicesService.Stream is not implemented"))
}