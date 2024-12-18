//
//Copyright © 2023 Nikita Ivanovski info@slnt-opp.xyz
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//http://www.apache.org/licenses/LICENSE-2.0
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: ansible/ansible.proto

package ansibleconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	ansible "github.com/slntopp/nocloud-proto/ansible"
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
	// AnsibleServiceName is the fully-qualified name of the AnsibleService service.
	AnsibleServiceName = "nocloud.ansible.AnsibleService"
	// PlaybooksServiceName is the fully-qualified name of the PlaybooksService service.
	PlaybooksServiceName = "nocloud.ansible.PlaybooksService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// AnsibleServiceGetProcedure is the fully-qualified name of the AnsibleService's Get RPC.
	AnsibleServiceGetProcedure = "/nocloud.ansible.AnsibleService/Get"
	// AnsibleServiceListProcedure is the fully-qualified name of the AnsibleService's List RPC.
	AnsibleServiceListProcedure = "/nocloud.ansible.AnsibleService/List"
	// AnsibleServiceCreateProcedure is the fully-qualified name of the AnsibleService's Create RPC.
	AnsibleServiceCreateProcedure = "/nocloud.ansible.AnsibleService/Create"
	// AnsibleServiceExecProcedure is the fully-qualified name of the AnsibleService's Exec RPC.
	AnsibleServiceExecProcedure = "/nocloud.ansible.AnsibleService/Exec"
	// AnsibleServiceWatchProcedure is the fully-qualified name of the AnsibleService's Watch RPC.
	AnsibleServiceWatchProcedure = "/nocloud.ansible.AnsibleService/Watch"
	// AnsibleServiceDeleteProcedure is the fully-qualified name of the AnsibleService's Delete RPC.
	AnsibleServiceDeleteProcedure = "/nocloud.ansible.AnsibleService/Delete"
	// AnsibleServiceResyncProcedure is the fully-qualified name of the AnsibleService's Resync RPC.
	AnsibleServiceResyncProcedure = "/nocloud.ansible.AnsibleService/Resync"
	// PlaybooksServiceGetProcedure is the fully-qualified name of the PlaybooksService's Get RPC.
	PlaybooksServiceGetProcedure = "/nocloud.ansible.PlaybooksService/Get"
	// PlaybooksServiceListProcedure is the fully-qualified name of the PlaybooksService's List RPC.
	PlaybooksServiceListProcedure = "/nocloud.ansible.PlaybooksService/List"
	// PlaybooksServiceCreateProcedure is the fully-qualified name of the PlaybooksService's Create RPC.
	PlaybooksServiceCreateProcedure = "/nocloud.ansible.PlaybooksService/Create"
	// PlaybooksServiceUpdateProcedure is the fully-qualified name of the PlaybooksService's Update RPC.
	PlaybooksServiceUpdateProcedure = "/nocloud.ansible.PlaybooksService/Update"
	// PlaybooksServiceDeleteProcedure is the fully-qualified name of the PlaybooksService's Delete RPC.
	PlaybooksServiceDeleteProcedure = "/nocloud.ansible.PlaybooksService/Delete"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	ansibleServiceServiceDescriptor        = ansible.File_ansible_ansible_proto.Services().ByName("AnsibleService")
	ansibleServiceGetMethodDescriptor      = ansibleServiceServiceDescriptor.Methods().ByName("Get")
	ansibleServiceListMethodDescriptor     = ansibleServiceServiceDescriptor.Methods().ByName("List")
	ansibleServiceCreateMethodDescriptor   = ansibleServiceServiceDescriptor.Methods().ByName("Create")
	ansibleServiceExecMethodDescriptor     = ansibleServiceServiceDescriptor.Methods().ByName("Exec")
	ansibleServiceWatchMethodDescriptor    = ansibleServiceServiceDescriptor.Methods().ByName("Watch")
	ansibleServiceDeleteMethodDescriptor   = ansibleServiceServiceDescriptor.Methods().ByName("Delete")
	ansibleServiceResyncMethodDescriptor   = ansibleServiceServiceDescriptor.Methods().ByName("Resync")
	playbooksServiceServiceDescriptor      = ansible.File_ansible_ansible_proto.Services().ByName("PlaybooksService")
	playbooksServiceGetMethodDescriptor    = playbooksServiceServiceDescriptor.Methods().ByName("Get")
	playbooksServiceListMethodDescriptor   = playbooksServiceServiceDescriptor.Methods().ByName("List")
	playbooksServiceCreateMethodDescriptor = playbooksServiceServiceDescriptor.Methods().ByName("Create")
	playbooksServiceUpdateMethodDescriptor = playbooksServiceServiceDescriptor.Methods().ByName("Update")
	playbooksServiceDeleteMethodDescriptor = playbooksServiceServiceDescriptor.Methods().ByName("Delete")
)

// AnsibleServiceClient is a client for the nocloud.ansible.AnsibleService service.
type AnsibleServiceClient interface {
	Get(context.Context, *connect.Request[ansible.GetRunRequest]) (*connect.Response[ansible.Run], error)
	List(context.Context, *connect.Request[ansible.ListRunsRequest]) (*connect.Response[ansible.Runs], error)
	Create(context.Context, *connect.Request[ansible.CreateRunRequest]) (*connect.Response[ansible.Run], error)
	Exec(context.Context, *connect.Request[ansible.ExecRunRequest]) (*connect.Response[ansible.ExecRunResponse], error)
	Watch(context.Context, *connect.Request[ansible.WatchRunRequest]) (*connect.ServerStreamForClient[ansible.Job], error)
	Delete(context.Context, *connect.Request[ansible.DeleteRunRequest]) (*connect.Response[ansible.DeleteRunResponse], error)
	Resync(context.Context, *connect.Request[ansible.ResyncRunRequest]) (*connect.Response[ansible.Run], error)
}

// NewAnsibleServiceClient constructs a client for the nocloud.ansible.AnsibleService service. By
// default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses,
// and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewAnsibleServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) AnsibleServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &ansibleServiceClient{
		get: connect.NewClient[ansible.GetRunRequest, ansible.Run](
			httpClient,
			baseURL+AnsibleServiceGetProcedure,
			connect.WithSchema(ansibleServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[ansible.ListRunsRequest, ansible.Runs](
			httpClient,
			baseURL+AnsibleServiceListProcedure,
			connect.WithSchema(ansibleServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		create: connect.NewClient[ansible.CreateRunRequest, ansible.Run](
			httpClient,
			baseURL+AnsibleServiceCreateProcedure,
			connect.WithSchema(ansibleServiceCreateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		exec: connect.NewClient[ansible.ExecRunRequest, ansible.ExecRunResponse](
			httpClient,
			baseURL+AnsibleServiceExecProcedure,
			connect.WithSchema(ansibleServiceExecMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		watch: connect.NewClient[ansible.WatchRunRequest, ansible.Job](
			httpClient,
			baseURL+AnsibleServiceWatchProcedure,
			connect.WithSchema(ansibleServiceWatchMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[ansible.DeleteRunRequest, ansible.DeleteRunResponse](
			httpClient,
			baseURL+AnsibleServiceDeleteProcedure,
			connect.WithSchema(ansibleServiceDeleteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		resync: connect.NewClient[ansible.ResyncRunRequest, ansible.Run](
			httpClient,
			baseURL+AnsibleServiceResyncProcedure,
			connect.WithSchema(ansibleServiceResyncMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// ansibleServiceClient implements AnsibleServiceClient.
type ansibleServiceClient struct {
	get    *connect.Client[ansible.GetRunRequest, ansible.Run]
	list   *connect.Client[ansible.ListRunsRequest, ansible.Runs]
	create *connect.Client[ansible.CreateRunRequest, ansible.Run]
	exec   *connect.Client[ansible.ExecRunRequest, ansible.ExecRunResponse]
	watch  *connect.Client[ansible.WatchRunRequest, ansible.Job]
	delete *connect.Client[ansible.DeleteRunRequest, ansible.DeleteRunResponse]
	resync *connect.Client[ansible.ResyncRunRequest, ansible.Run]
}

// Get calls nocloud.ansible.AnsibleService.Get.
func (c *ansibleServiceClient) Get(ctx context.Context, req *connect.Request[ansible.GetRunRequest]) (*connect.Response[ansible.Run], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls nocloud.ansible.AnsibleService.List.
func (c *ansibleServiceClient) List(ctx context.Context, req *connect.Request[ansible.ListRunsRequest]) (*connect.Response[ansible.Runs], error) {
	return c.list.CallUnary(ctx, req)
}

// Create calls nocloud.ansible.AnsibleService.Create.
func (c *ansibleServiceClient) Create(ctx context.Context, req *connect.Request[ansible.CreateRunRequest]) (*connect.Response[ansible.Run], error) {
	return c.create.CallUnary(ctx, req)
}

// Exec calls nocloud.ansible.AnsibleService.Exec.
func (c *ansibleServiceClient) Exec(ctx context.Context, req *connect.Request[ansible.ExecRunRequest]) (*connect.Response[ansible.ExecRunResponse], error) {
	return c.exec.CallUnary(ctx, req)
}

// Watch calls nocloud.ansible.AnsibleService.Watch.
func (c *ansibleServiceClient) Watch(ctx context.Context, req *connect.Request[ansible.WatchRunRequest]) (*connect.ServerStreamForClient[ansible.Job], error) {
	return c.watch.CallServerStream(ctx, req)
}

// Delete calls nocloud.ansible.AnsibleService.Delete.
func (c *ansibleServiceClient) Delete(ctx context.Context, req *connect.Request[ansible.DeleteRunRequest]) (*connect.Response[ansible.DeleteRunResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// Resync calls nocloud.ansible.AnsibleService.Resync.
func (c *ansibleServiceClient) Resync(ctx context.Context, req *connect.Request[ansible.ResyncRunRequest]) (*connect.Response[ansible.Run], error) {
	return c.resync.CallUnary(ctx, req)
}

// AnsibleServiceHandler is an implementation of the nocloud.ansible.AnsibleService service.
type AnsibleServiceHandler interface {
	Get(context.Context, *connect.Request[ansible.GetRunRequest]) (*connect.Response[ansible.Run], error)
	List(context.Context, *connect.Request[ansible.ListRunsRequest]) (*connect.Response[ansible.Runs], error)
	Create(context.Context, *connect.Request[ansible.CreateRunRequest]) (*connect.Response[ansible.Run], error)
	Exec(context.Context, *connect.Request[ansible.ExecRunRequest]) (*connect.Response[ansible.ExecRunResponse], error)
	Watch(context.Context, *connect.Request[ansible.WatchRunRequest], *connect.ServerStream[ansible.Job]) error
	Delete(context.Context, *connect.Request[ansible.DeleteRunRequest]) (*connect.Response[ansible.DeleteRunResponse], error)
	Resync(context.Context, *connect.Request[ansible.ResyncRunRequest]) (*connect.Response[ansible.Run], error)
}

// NewAnsibleServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewAnsibleServiceHandler(svc AnsibleServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	ansibleServiceGetHandler := connect.NewUnaryHandler(
		AnsibleServiceGetProcedure,
		svc.Get,
		connect.WithSchema(ansibleServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	ansibleServiceListHandler := connect.NewUnaryHandler(
		AnsibleServiceListProcedure,
		svc.List,
		connect.WithSchema(ansibleServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	ansibleServiceCreateHandler := connect.NewUnaryHandler(
		AnsibleServiceCreateProcedure,
		svc.Create,
		connect.WithSchema(ansibleServiceCreateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	ansibleServiceExecHandler := connect.NewUnaryHandler(
		AnsibleServiceExecProcedure,
		svc.Exec,
		connect.WithSchema(ansibleServiceExecMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	ansibleServiceWatchHandler := connect.NewServerStreamHandler(
		AnsibleServiceWatchProcedure,
		svc.Watch,
		connect.WithSchema(ansibleServiceWatchMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	ansibleServiceDeleteHandler := connect.NewUnaryHandler(
		AnsibleServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(ansibleServiceDeleteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	ansibleServiceResyncHandler := connect.NewUnaryHandler(
		AnsibleServiceResyncProcedure,
		svc.Resync,
		connect.WithSchema(ansibleServiceResyncMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/nocloud.ansible.AnsibleService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case AnsibleServiceGetProcedure:
			ansibleServiceGetHandler.ServeHTTP(w, r)
		case AnsibleServiceListProcedure:
			ansibleServiceListHandler.ServeHTTP(w, r)
		case AnsibleServiceCreateProcedure:
			ansibleServiceCreateHandler.ServeHTTP(w, r)
		case AnsibleServiceExecProcedure:
			ansibleServiceExecHandler.ServeHTTP(w, r)
		case AnsibleServiceWatchProcedure:
			ansibleServiceWatchHandler.ServeHTTP(w, r)
		case AnsibleServiceDeleteProcedure:
			ansibleServiceDeleteHandler.ServeHTTP(w, r)
		case AnsibleServiceResyncProcedure:
			ansibleServiceResyncHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedAnsibleServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedAnsibleServiceHandler struct{}

func (UnimplementedAnsibleServiceHandler) Get(context.Context, *connect.Request[ansible.GetRunRequest]) (*connect.Response[ansible.Run], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.Get is not implemented"))
}

func (UnimplementedAnsibleServiceHandler) List(context.Context, *connect.Request[ansible.ListRunsRequest]) (*connect.Response[ansible.Runs], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.List is not implemented"))
}

func (UnimplementedAnsibleServiceHandler) Create(context.Context, *connect.Request[ansible.CreateRunRequest]) (*connect.Response[ansible.Run], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.Create is not implemented"))
}

func (UnimplementedAnsibleServiceHandler) Exec(context.Context, *connect.Request[ansible.ExecRunRequest]) (*connect.Response[ansible.ExecRunResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.Exec is not implemented"))
}

func (UnimplementedAnsibleServiceHandler) Watch(context.Context, *connect.Request[ansible.WatchRunRequest], *connect.ServerStream[ansible.Job]) error {
	return connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.Watch is not implemented"))
}

func (UnimplementedAnsibleServiceHandler) Delete(context.Context, *connect.Request[ansible.DeleteRunRequest]) (*connect.Response[ansible.DeleteRunResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.Delete is not implemented"))
}

func (UnimplementedAnsibleServiceHandler) Resync(context.Context, *connect.Request[ansible.ResyncRunRequest]) (*connect.Response[ansible.Run], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.AnsibleService.Resync is not implemented"))
}

// PlaybooksServiceClient is a client for the nocloud.ansible.PlaybooksService service.
type PlaybooksServiceClient interface {
	Get(context.Context, *connect.Request[ansible.GetPlaybookRequest]) (*connect.Response[ansible.GetPlaybookResponse], error)
	List(context.Context, *connect.Request[ansible.ListPlaybooksRequest]) (*connect.Response[ansible.ListPlaybooksResponse], error)
	Create(context.Context, *connect.Request[ansible.CreatePlaybookRequest]) (*connect.Response[ansible.CreatePlaybookResponse], error)
	Update(context.Context, *connect.Request[ansible.UpdatePlaybookRequest]) (*connect.Response[ansible.UpdatePlaybookResponse], error)
	Delete(context.Context, *connect.Request[ansible.DeletePlaybookRequest]) (*connect.Response[ansible.DeletePlaybookResponse], error)
}

// NewPlaybooksServiceClient constructs a client for the nocloud.ansible.PlaybooksService service.
// By default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped
// responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewPlaybooksServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) PlaybooksServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &playbooksServiceClient{
		get: connect.NewClient[ansible.GetPlaybookRequest, ansible.GetPlaybookResponse](
			httpClient,
			baseURL+PlaybooksServiceGetProcedure,
			connect.WithSchema(playbooksServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[ansible.ListPlaybooksRequest, ansible.ListPlaybooksResponse](
			httpClient,
			baseURL+PlaybooksServiceListProcedure,
			connect.WithSchema(playbooksServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		create: connect.NewClient[ansible.CreatePlaybookRequest, ansible.CreatePlaybookResponse](
			httpClient,
			baseURL+PlaybooksServiceCreateProcedure,
			connect.WithSchema(playbooksServiceCreateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		update: connect.NewClient[ansible.UpdatePlaybookRequest, ansible.UpdatePlaybookResponse](
			httpClient,
			baseURL+PlaybooksServiceUpdateProcedure,
			connect.WithSchema(playbooksServiceUpdateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[ansible.DeletePlaybookRequest, ansible.DeletePlaybookResponse](
			httpClient,
			baseURL+PlaybooksServiceDeleteProcedure,
			connect.WithSchema(playbooksServiceDeleteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// playbooksServiceClient implements PlaybooksServiceClient.
type playbooksServiceClient struct {
	get    *connect.Client[ansible.GetPlaybookRequest, ansible.GetPlaybookResponse]
	list   *connect.Client[ansible.ListPlaybooksRequest, ansible.ListPlaybooksResponse]
	create *connect.Client[ansible.CreatePlaybookRequest, ansible.CreatePlaybookResponse]
	update *connect.Client[ansible.UpdatePlaybookRequest, ansible.UpdatePlaybookResponse]
	delete *connect.Client[ansible.DeletePlaybookRequest, ansible.DeletePlaybookResponse]
}

// Get calls nocloud.ansible.PlaybooksService.Get.
func (c *playbooksServiceClient) Get(ctx context.Context, req *connect.Request[ansible.GetPlaybookRequest]) (*connect.Response[ansible.GetPlaybookResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// List calls nocloud.ansible.PlaybooksService.List.
func (c *playbooksServiceClient) List(ctx context.Context, req *connect.Request[ansible.ListPlaybooksRequest]) (*connect.Response[ansible.ListPlaybooksResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Create calls nocloud.ansible.PlaybooksService.Create.
func (c *playbooksServiceClient) Create(ctx context.Context, req *connect.Request[ansible.CreatePlaybookRequest]) (*connect.Response[ansible.CreatePlaybookResponse], error) {
	return c.create.CallUnary(ctx, req)
}

// Update calls nocloud.ansible.PlaybooksService.Update.
func (c *playbooksServiceClient) Update(ctx context.Context, req *connect.Request[ansible.UpdatePlaybookRequest]) (*connect.Response[ansible.UpdatePlaybookResponse], error) {
	return c.update.CallUnary(ctx, req)
}

// Delete calls nocloud.ansible.PlaybooksService.Delete.
func (c *playbooksServiceClient) Delete(ctx context.Context, req *connect.Request[ansible.DeletePlaybookRequest]) (*connect.Response[ansible.DeletePlaybookResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// PlaybooksServiceHandler is an implementation of the nocloud.ansible.PlaybooksService service.
type PlaybooksServiceHandler interface {
	Get(context.Context, *connect.Request[ansible.GetPlaybookRequest]) (*connect.Response[ansible.GetPlaybookResponse], error)
	List(context.Context, *connect.Request[ansible.ListPlaybooksRequest]) (*connect.Response[ansible.ListPlaybooksResponse], error)
	Create(context.Context, *connect.Request[ansible.CreatePlaybookRequest]) (*connect.Response[ansible.CreatePlaybookResponse], error)
	Update(context.Context, *connect.Request[ansible.UpdatePlaybookRequest]) (*connect.Response[ansible.UpdatePlaybookResponse], error)
	Delete(context.Context, *connect.Request[ansible.DeletePlaybookRequest]) (*connect.Response[ansible.DeletePlaybookResponse], error)
}

// NewPlaybooksServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewPlaybooksServiceHandler(svc PlaybooksServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	playbooksServiceGetHandler := connect.NewUnaryHandler(
		PlaybooksServiceGetProcedure,
		svc.Get,
		connect.WithSchema(playbooksServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	playbooksServiceListHandler := connect.NewUnaryHandler(
		PlaybooksServiceListProcedure,
		svc.List,
		connect.WithSchema(playbooksServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	playbooksServiceCreateHandler := connect.NewUnaryHandler(
		PlaybooksServiceCreateProcedure,
		svc.Create,
		connect.WithSchema(playbooksServiceCreateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	playbooksServiceUpdateHandler := connect.NewUnaryHandler(
		PlaybooksServiceUpdateProcedure,
		svc.Update,
		connect.WithSchema(playbooksServiceUpdateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	playbooksServiceDeleteHandler := connect.NewUnaryHandler(
		PlaybooksServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(playbooksServiceDeleteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/nocloud.ansible.PlaybooksService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case PlaybooksServiceGetProcedure:
			playbooksServiceGetHandler.ServeHTTP(w, r)
		case PlaybooksServiceListProcedure:
			playbooksServiceListHandler.ServeHTTP(w, r)
		case PlaybooksServiceCreateProcedure:
			playbooksServiceCreateHandler.ServeHTTP(w, r)
		case PlaybooksServiceUpdateProcedure:
			playbooksServiceUpdateHandler.ServeHTTP(w, r)
		case PlaybooksServiceDeleteProcedure:
			playbooksServiceDeleteHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedPlaybooksServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedPlaybooksServiceHandler struct{}

func (UnimplementedPlaybooksServiceHandler) Get(context.Context, *connect.Request[ansible.GetPlaybookRequest]) (*connect.Response[ansible.GetPlaybookResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.PlaybooksService.Get is not implemented"))
}

func (UnimplementedPlaybooksServiceHandler) List(context.Context, *connect.Request[ansible.ListPlaybooksRequest]) (*connect.Response[ansible.ListPlaybooksResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.PlaybooksService.List is not implemented"))
}

func (UnimplementedPlaybooksServiceHandler) Create(context.Context, *connect.Request[ansible.CreatePlaybookRequest]) (*connect.Response[ansible.CreatePlaybookResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.PlaybooksService.Create is not implemented"))
}

func (UnimplementedPlaybooksServiceHandler) Update(context.Context, *connect.Request[ansible.UpdatePlaybookRequest]) (*connect.Response[ansible.UpdatePlaybookResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.PlaybooksService.Update is not implemented"))
}

func (UnimplementedPlaybooksServiceHandler) Delete(context.Context, *connect.Request[ansible.DeletePlaybookRequest]) (*connect.Response[ansible.DeletePlaybookResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.ansible.PlaybooksService.Delete is not implemented"))
}
