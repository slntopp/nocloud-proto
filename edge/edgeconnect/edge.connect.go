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
// Source: edge/edge.proto

package edgeconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	edge "github.com/slntopp/nocloud-proto/edge"
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
	// EdgeServiceName is the fully-qualified name of the EdgeService service.
	EdgeServiceName = "nocloud.edge.EdgeService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// EdgeServiceTestProcedure is the fully-qualified name of the EdgeService's Test RPC.
	EdgeServiceTestProcedure = "/nocloud.edge.EdgeService/Test"
	// EdgeServicePostStateProcedure is the fully-qualified name of the EdgeService's PostState RPC.
	EdgeServicePostStateProcedure = "/nocloud.edge.EdgeService/PostState"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	edgeServiceServiceDescriptor         = edge.File_edge_edge_proto.Services().ByName("EdgeService")
	edgeServiceTestMethodDescriptor      = edgeServiceServiceDescriptor.Methods().ByName("Test")
	edgeServicePostStateMethodDescriptor = edgeServiceServiceDescriptor.Methods().ByName("PostState")
)

// EdgeServiceClient is a client for the nocloud.edge.EdgeService service.
type EdgeServiceClient interface {
	Test(context.Context, *connect.Request[edge.TestRequest]) (*connect.Response[edge.TestResponse], error)
	PostState(context.Context, *connect.Request[states.ObjectState]) (*connect.Response[edge.Empty], error)
}

// NewEdgeServiceClient constructs a client for the nocloud.edge.EdgeService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewEdgeServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) EdgeServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &edgeServiceClient{
		test: connect.NewClient[edge.TestRequest, edge.TestResponse](
			httpClient,
			baseURL+EdgeServiceTestProcedure,
			connect.WithSchema(edgeServiceTestMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		postState: connect.NewClient[states.ObjectState, edge.Empty](
			httpClient,
			baseURL+EdgeServicePostStateProcedure,
			connect.WithSchema(edgeServicePostStateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// edgeServiceClient implements EdgeServiceClient.
type edgeServiceClient struct {
	test      *connect.Client[edge.TestRequest, edge.TestResponse]
	postState *connect.Client[states.ObjectState, edge.Empty]
}

// Test calls nocloud.edge.EdgeService.Test.
func (c *edgeServiceClient) Test(ctx context.Context, req *connect.Request[edge.TestRequest]) (*connect.Response[edge.TestResponse], error) {
	return c.test.CallUnary(ctx, req)
}

// PostState calls nocloud.edge.EdgeService.PostState.
func (c *edgeServiceClient) PostState(ctx context.Context, req *connect.Request[states.ObjectState]) (*connect.Response[edge.Empty], error) {
	return c.postState.CallUnary(ctx, req)
}

// EdgeServiceHandler is an implementation of the nocloud.edge.EdgeService service.
type EdgeServiceHandler interface {
	Test(context.Context, *connect.Request[edge.TestRequest]) (*connect.Response[edge.TestResponse], error)
	PostState(context.Context, *connect.Request[states.ObjectState]) (*connect.Response[edge.Empty], error)
}

// NewEdgeServiceHandler builds an HTTP handler from the service implementation. It returns the path
// on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewEdgeServiceHandler(svc EdgeServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	edgeServiceTestHandler := connect.NewUnaryHandler(
		EdgeServiceTestProcedure,
		svc.Test,
		connect.WithSchema(edgeServiceTestMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	edgeServicePostStateHandler := connect.NewUnaryHandler(
		EdgeServicePostStateProcedure,
		svc.PostState,
		connect.WithSchema(edgeServicePostStateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/nocloud.edge.EdgeService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case EdgeServiceTestProcedure:
			edgeServiceTestHandler.ServeHTTP(w, r)
		case EdgeServicePostStateProcedure:
			edgeServicePostStateHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedEdgeServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedEdgeServiceHandler struct{}

func (UnimplementedEdgeServiceHandler) Test(context.Context, *connect.Request[edge.TestRequest]) (*connect.Response[edge.TestResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.edge.EdgeService.Test is not implemented"))
}

func (UnimplementedEdgeServiceHandler) PostState(context.Context, *connect.Request[states.ObjectState]) (*connect.Response[edge.Empty], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.edge.EdgeService.PostState is not implemented"))
}