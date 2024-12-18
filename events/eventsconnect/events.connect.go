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
// Source: events/events.proto

package eventsconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	events "github.com/slntopp/nocloud-proto/events"
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
	// EventsServiceName is the fully-qualified name of the EventsService service.
	EventsServiceName = "nocloud.events.EventsService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// EventsServicePublishProcedure is the fully-qualified name of the EventsService's Publish RPC.
	EventsServicePublishProcedure = "/nocloud.events.EventsService/Publish"
	// EventsServiceConsumeProcedure is the fully-qualified name of the EventsService's Consume RPC.
	EventsServiceConsumeProcedure = "/nocloud.events.EventsService/Consume"
	// EventsServiceListProcedure is the fully-qualified name of the EventsService's List RPC.
	EventsServiceListProcedure = "/nocloud.events.EventsService/List"
	// EventsServiceCancelProcedure is the fully-qualified name of the EventsService's Cancel RPC.
	EventsServiceCancelProcedure = "/nocloud.events.EventsService/Cancel"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	eventsServiceServiceDescriptor       = events.File_events_events_proto.Services().ByName("EventsService")
	eventsServicePublishMethodDescriptor = eventsServiceServiceDescriptor.Methods().ByName("Publish")
	eventsServiceConsumeMethodDescriptor = eventsServiceServiceDescriptor.Methods().ByName("Consume")
	eventsServiceListMethodDescriptor    = eventsServiceServiceDescriptor.Methods().ByName("List")
	eventsServiceCancelMethodDescriptor  = eventsServiceServiceDescriptor.Methods().ByName("Cancel")
)

// EventsServiceClient is a client for the nocloud.events.EventsService service.
type EventsServiceClient interface {
	Publish(context.Context, *connect.Request[events.Event]) (*connect.Response[events.Response], error)
	Consume(context.Context, *connect.Request[events.ConsumeRequest]) (*connect.ServerStreamForClient[events.Event], error)
	List(context.Context, *connect.Request[events.ConsumeRequest]) (*connect.Response[events.Events], error)
	Cancel(context.Context, *connect.Request[events.CancelRequest]) (*connect.Response[events.Response], error)
}

// NewEventsServiceClient constructs a client for the nocloud.events.EventsService service. By
// default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses,
// and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewEventsServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) EventsServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &eventsServiceClient{
		publish: connect.NewClient[events.Event, events.Response](
			httpClient,
			baseURL+EventsServicePublishProcedure,
			connect.WithSchema(eventsServicePublishMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		consume: connect.NewClient[events.ConsumeRequest, events.Event](
			httpClient,
			baseURL+EventsServiceConsumeProcedure,
			connect.WithSchema(eventsServiceConsumeMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[events.ConsumeRequest, events.Events](
			httpClient,
			baseURL+EventsServiceListProcedure,
			connect.WithSchema(eventsServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		cancel: connect.NewClient[events.CancelRequest, events.Response](
			httpClient,
			baseURL+EventsServiceCancelProcedure,
			connect.WithSchema(eventsServiceCancelMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// eventsServiceClient implements EventsServiceClient.
type eventsServiceClient struct {
	publish *connect.Client[events.Event, events.Response]
	consume *connect.Client[events.ConsumeRequest, events.Event]
	list    *connect.Client[events.ConsumeRequest, events.Events]
	cancel  *connect.Client[events.CancelRequest, events.Response]
}

// Publish calls nocloud.events.EventsService.Publish.
func (c *eventsServiceClient) Publish(ctx context.Context, req *connect.Request[events.Event]) (*connect.Response[events.Response], error) {
	return c.publish.CallUnary(ctx, req)
}

// Consume calls nocloud.events.EventsService.Consume.
func (c *eventsServiceClient) Consume(ctx context.Context, req *connect.Request[events.ConsumeRequest]) (*connect.ServerStreamForClient[events.Event], error) {
	return c.consume.CallServerStream(ctx, req)
}

// List calls nocloud.events.EventsService.List.
func (c *eventsServiceClient) List(ctx context.Context, req *connect.Request[events.ConsumeRequest]) (*connect.Response[events.Events], error) {
	return c.list.CallUnary(ctx, req)
}

// Cancel calls nocloud.events.EventsService.Cancel.
func (c *eventsServiceClient) Cancel(ctx context.Context, req *connect.Request[events.CancelRequest]) (*connect.Response[events.Response], error) {
	return c.cancel.CallUnary(ctx, req)
}

// EventsServiceHandler is an implementation of the nocloud.events.EventsService service.
type EventsServiceHandler interface {
	Publish(context.Context, *connect.Request[events.Event]) (*connect.Response[events.Response], error)
	Consume(context.Context, *connect.Request[events.ConsumeRequest], *connect.ServerStream[events.Event]) error
	List(context.Context, *connect.Request[events.ConsumeRequest]) (*connect.Response[events.Events], error)
	Cancel(context.Context, *connect.Request[events.CancelRequest]) (*connect.Response[events.Response], error)
}

// NewEventsServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewEventsServiceHandler(svc EventsServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	eventsServicePublishHandler := connect.NewUnaryHandler(
		EventsServicePublishProcedure,
		svc.Publish,
		connect.WithSchema(eventsServicePublishMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	eventsServiceConsumeHandler := connect.NewServerStreamHandler(
		EventsServiceConsumeProcedure,
		svc.Consume,
		connect.WithSchema(eventsServiceConsumeMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	eventsServiceListHandler := connect.NewUnaryHandler(
		EventsServiceListProcedure,
		svc.List,
		connect.WithSchema(eventsServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	eventsServiceCancelHandler := connect.NewUnaryHandler(
		EventsServiceCancelProcedure,
		svc.Cancel,
		connect.WithSchema(eventsServiceCancelMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/nocloud.events.EventsService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case EventsServicePublishProcedure:
			eventsServicePublishHandler.ServeHTTP(w, r)
		case EventsServiceConsumeProcedure:
			eventsServiceConsumeHandler.ServeHTTP(w, r)
		case EventsServiceListProcedure:
			eventsServiceListHandler.ServeHTTP(w, r)
		case EventsServiceCancelProcedure:
			eventsServiceCancelHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedEventsServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedEventsServiceHandler struct{}

func (UnimplementedEventsServiceHandler) Publish(context.Context, *connect.Request[events.Event]) (*connect.Response[events.Response], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.events.EventsService.Publish is not implemented"))
}

func (UnimplementedEventsServiceHandler) Consume(context.Context, *connect.Request[events.ConsumeRequest], *connect.ServerStream[events.Event]) error {
	return connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.events.EventsService.Consume is not implemented"))
}

func (UnimplementedEventsServiceHandler) List(context.Context, *connect.Request[events.ConsumeRequest]) (*connect.Response[events.Events], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.events.EventsService.List is not implemented"))
}

func (UnimplementedEventsServiceHandler) Cancel(context.Context, *connect.Request[events.CancelRequest]) (*connect.Response[events.Response], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.events.EventsService.Cancel is not implemented"))
}
