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
// Source: instances/instances.proto

package instancesconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	instances "github.com/slntopp/nocloud-proto/instances"
	notes "github.com/slntopp/nocloud-proto/notes"
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
	// InstancesServiceName is the fully-qualified name of the InstancesService service.
	InstancesServiceName = "nocloud.instances.InstancesService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// InstancesServiceInvokeProcedure is the fully-qualified name of the InstancesService's Invoke RPC.
	InstancesServiceInvokeProcedure = "/nocloud.instances.InstancesService/Invoke"
	// InstancesServiceDeleteProcedure is the fully-qualified name of the InstancesService's Delete RPC.
	InstancesServiceDeleteProcedure = "/nocloud.instances.InstancesService/Delete"
	// InstancesServiceAddNoteProcedure is the fully-qualified name of the InstancesService's AddNote
	// RPC.
	InstancesServiceAddNoteProcedure = "/nocloud.instances.InstancesService/AddNote"
	// InstancesServicePatchNoteProcedure is the fully-qualified name of the InstancesService's
	// PatchNote RPC.
	InstancesServicePatchNoteProcedure = "/nocloud.instances.InstancesService/PatchNote"
	// InstancesServiceRemoveNoteProcedure is the fully-qualified name of the InstancesService's
	// RemoveNote RPC.
	InstancesServiceRemoveNoteProcedure = "/nocloud.instances.InstancesService/RemoveNote"
	// InstancesServiceDetachProcedure is the fully-qualified name of the InstancesService's Detach RPC.
	InstancesServiceDetachProcedure = "/nocloud.instances.InstancesService/Detach"
	// InstancesServiceAttachProcedure is the fully-qualified name of the InstancesService's Attach RPC.
	InstancesServiceAttachProcedure = "/nocloud.instances.InstancesService/Attach"
	// InstancesServiceListProcedure is the fully-qualified name of the InstancesService's List RPC.
	InstancesServiceListProcedure = "/nocloud.instances.InstancesService/List"
	// InstancesServiceGetProcedure is the fully-qualified name of the InstancesService's Get RPC.
	InstancesServiceGetProcedure = "/nocloud.instances.InstancesService/Get"
	// InstancesServiceCreateProcedure is the fully-qualified name of the InstancesService's Create RPC.
	InstancesServiceCreateProcedure = "/nocloud.instances.InstancesService/Create"
	// InstancesServiceUpdateProcedure is the fully-qualified name of the InstancesService's Update RPC.
	InstancesServiceUpdateProcedure = "/nocloud.instances.InstancesService/Update"
	// InstancesServiceGetUniqueProcedure is the fully-qualified name of the InstancesService's
	// GetUnique RPC.
	InstancesServiceGetUniqueProcedure = "/nocloud.instances.InstancesService/GetUnique"
	// InstancesServiceTransferIGProcedure is the fully-qualified name of the InstancesService's
	// TransferIG RPC.
	InstancesServiceTransferIGProcedure = "/nocloud.instances.InstancesService/TransferIG"
	// InstancesServiceTransferInstanceProcedure is the fully-qualified name of the InstancesService's
	// TransferInstance RPC.
	InstancesServiceTransferInstanceProcedure = "/nocloud.instances.InstancesService/TransferInstance"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	instancesServiceServiceDescriptor                = instances.File_instances_instances_proto.Services().ByName("InstancesService")
	instancesServiceInvokeMethodDescriptor           = instancesServiceServiceDescriptor.Methods().ByName("Invoke")
	instancesServiceDeleteMethodDescriptor           = instancesServiceServiceDescriptor.Methods().ByName("Delete")
	instancesServiceAddNoteMethodDescriptor          = instancesServiceServiceDescriptor.Methods().ByName("AddNote")
	instancesServicePatchNoteMethodDescriptor        = instancesServiceServiceDescriptor.Methods().ByName("PatchNote")
	instancesServiceRemoveNoteMethodDescriptor       = instancesServiceServiceDescriptor.Methods().ByName("RemoveNote")
	instancesServiceDetachMethodDescriptor           = instancesServiceServiceDescriptor.Methods().ByName("Detach")
	instancesServiceAttachMethodDescriptor           = instancesServiceServiceDescriptor.Methods().ByName("Attach")
	instancesServiceListMethodDescriptor             = instancesServiceServiceDescriptor.Methods().ByName("List")
	instancesServiceGetMethodDescriptor              = instancesServiceServiceDescriptor.Methods().ByName("Get")
	instancesServiceCreateMethodDescriptor           = instancesServiceServiceDescriptor.Methods().ByName("Create")
	instancesServiceUpdateMethodDescriptor           = instancesServiceServiceDescriptor.Methods().ByName("Update")
	instancesServiceGetUniqueMethodDescriptor        = instancesServiceServiceDescriptor.Methods().ByName("GetUnique")
	instancesServiceTransferIGMethodDescriptor       = instancesServiceServiceDescriptor.Methods().ByName("TransferIG")
	instancesServiceTransferInstanceMethodDescriptor = instancesServiceServiceDescriptor.Methods().ByName("TransferInstance")
)

// InstancesServiceClient is a client for the nocloud.instances.InstancesService service.
type InstancesServiceClient interface {
	Invoke(context.Context, *connect.Request[instances.InvokeRequest]) (*connect.Response[instances.InvokeResponse], error)
	Delete(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error)
	AddNote(context.Context, *connect.Request[notes.AddNoteRequest]) (*connect.Response[notes.NoteResponse], error)
	PatchNote(context.Context, *connect.Request[notes.PatchNoteRequest]) (*connect.Response[notes.NoteResponse], error)
	RemoveNote(context.Context, *connect.Request[notes.RemoveNoteRequest]) (*connect.Response[notes.NoteResponse], error)
	Detach(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error)
	Attach(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error)
	List(context.Context, *connect.Request[instances.ListInstancesRequest]) (*connect.Response[instances.ListInstancesResponse], error)
	Get(context.Context, *connect.Request[instances.Instance]) (*connect.Response[instances.ResponseInstance], error)
	Create(context.Context, *connect.Request[instances.CreateRequest]) (*connect.Response[instances.CreateResponse], error)
	Update(context.Context, *connect.Request[instances.UpdateRequest]) (*connect.Response[instances.UpdateResponse], error)
	GetUnique(context.Context, *connect.Request[instances.GetUniqueRequest]) (*connect.Response[instances.GetUniqueResponse], error)
	TransferIG(context.Context, *connect.Request[instances.TransferIGRequest]) (*connect.Response[instances.TransferIGResponse], error)
	TransferInstance(context.Context, *connect.Request[instances.TransferInstanceRequest]) (*connect.Response[instances.TransferInstanceResponse], error)
}

// NewInstancesServiceClient constructs a client for the nocloud.instances.InstancesService service.
// By default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped
// responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewInstancesServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) InstancesServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &instancesServiceClient{
		invoke: connect.NewClient[instances.InvokeRequest, instances.InvokeResponse](
			httpClient,
			baseURL+InstancesServiceInvokeProcedure,
			connect.WithSchema(instancesServiceInvokeMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		delete: connect.NewClient[instances.DeleteRequest, instances.DeleteResponse](
			httpClient,
			baseURL+InstancesServiceDeleteProcedure,
			connect.WithSchema(instancesServiceDeleteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		addNote: connect.NewClient[notes.AddNoteRequest, notes.NoteResponse](
			httpClient,
			baseURL+InstancesServiceAddNoteProcedure,
			connect.WithSchema(instancesServiceAddNoteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		patchNote: connect.NewClient[notes.PatchNoteRequest, notes.NoteResponse](
			httpClient,
			baseURL+InstancesServicePatchNoteProcedure,
			connect.WithSchema(instancesServicePatchNoteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		removeNote: connect.NewClient[notes.RemoveNoteRequest, notes.NoteResponse](
			httpClient,
			baseURL+InstancesServiceRemoveNoteProcedure,
			connect.WithSchema(instancesServiceRemoveNoteMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		detach: connect.NewClient[instances.DeleteRequest, instances.DeleteResponse](
			httpClient,
			baseURL+InstancesServiceDetachProcedure,
			connect.WithSchema(instancesServiceDetachMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		attach: connect.NewClient[instances.DeleteRequest, instances.DeleteResponse](
			httpClient,
			baseURL+InstancesServiceAttachProcedure,
			connect.WithSchema(instancesServiceAttachMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		list: connect.NewClient[instances.ListInstancesRequest, instances.ListInstancesResponse](
			httpClient,
			baseURL+InstancesServiceListProcedure,
			connect.WithSchema(instancesServiceListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		get: connect.NewClient[instances.Instance, instances.ResponseInstance](
			httpClient,
			baseURL+InstancesServiceGetProcedure,
			connect.WithSchema(instancesServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		create: connect.NewClient[instances.CreateRequest, instances.CreateResponse](
			httpClient,
			baseURL+InstancesServiceCreateProcedure,
			connect.WithSchema(instancesServiceCreateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		update: connect.NewClient[instances.UpdateRequest, instances.UpdateResponse](
			httpClient,
			baseURL+InstancesServiceUpdateProcedure,
			connect.WithSchema(instancesServiceUpdateMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		getUnique: connect.NewClient[instances.GetUniqueRequest, instances.GetUniqueResponse](
			httpClient,
			baseURL+InstancesServiceGetUniqueProcedure,
			connect.WithSchema(instancesServiceGetUniqueMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		transferIG: connect.NewClient[instances.TransferIGRequest, instances.TransferIGResponse](
			httpClient,
			baseURL+InstancesServiceTransferIGProcedure,
			connect.WithSchema(instancesServiceTransferIGMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		transferInstance: connect.NewClient[instances.TransferInstanceRequest, instances.TransferInstanceResponse](
			httpClient,
			baseURL+InstancesServiceTransferInstanceProcedure,
			connect.WithSchema(instancesServiceTransferInstanceMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// instancesServiceClient implements InstancesServiceClient.
type instancesServiceClient struct {
	invoke           *connect.Client[instances.InvokeRequest, instances.InvokeResponse]
	delete           *connect.Client[instances.DeleteRequest, instances.DeleteResponse]
	addNote          *connect.Client[notes.AddNoteRequest, notes.NoteResponse]
	patchNote        *connect.Client[notes.PatchNoteRequest, notes.NoteResponse]
	removeNote       *connect.Client[notes.RemoveNoteRequest, notes.NoteResponse]
	detach           *connect.Client[instances.DeleteRequest, instances.DeleteResponse]
	attach           *connect.Client[instances.DeleteRequest, instances.DeleteResponse]
	list             *connect.Client[instances.ListInstancesRequest, instances.ListInstancesResponse]
	get              *connect.Client[instances.Instance, instances.ResponseInstance]
	create           *connect.Client[instances.CreateRequest, instances.CreateResponse]
	update           *connect.Client[instances.UpdateRequest, instances.UpdateResponse]
	getUnique        *connect.Client[instances.GetUniqueRequest, instances.GetUniqueResponse]
	transferIG       *connect.Client[instances.TransferIGRequest, instances.TransferIGResponse]
	transferInstance *connect.Client[instances.TransferInstanceRequest, instances.TransferInstanceResponse]
}

// Invoke calls nocloud.instances.InstancesService.Invoke.
func (c *instancesServiceClient) Invoke(ctx context.Context, req *connect.Request[instances.InvokeRequest]) (*connect.Response[instances.InvokeResponse], error) {
	return c.invoke.CallUnary(ctx, req)
}

// Delete calls nocloud.instances.InstancesService.Delete.
func (c *instancesServiceClient) Delete(ctx context.Context, req *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error) {
	return c.delete.CallUnary(ctx, req)
}

// AddNote calls nocloud.instances.InstancesService.AddNote.
func (c *instancesServiceClient) AddNote(ctx context.Context, req *connect.Request[notes.AddNoteRequest]) (*connect.Response[notes.NoteResponse], error) {
	return c.addNote.CallUnary(ctx, req)
}

// PatchNote calls nocloud.instances.InstancesService.PatchNote.
func (c *instancesServiceClient) PatchNote(ctx context.Context, req *connect.Request[notes.PatchNoteRequest]) (*connect.Response[notes.NoteResponse], error) {
	return c.patchNote.CallUnary(ctx, req)
}

// RemoveNote calls nocloud.instances.InstancesService.RemoveNote.
func (c *instancesServiceClient) RemoveNote(ctx context.Context, req *connect.Request[notes.RemoveNoteRequest]) (*connect.Response[notes.NoteResponse], error) {
	return c.removeNote.CallUnary(ctx, req)
}

// Detach calls nocloud.instances.InstancesService.Detach.
func (c *instancesServiceClient) Detach(ctx context.Context, req *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error) {
	return c.detach.CallUnary(ctx, req)
}

// Attach calls nocloud.instances.InstancesService.Attach.
func (c *instancesServiceClient) Attach(ctx context.Context, req *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error) {
	return c.attach.CallUnary(ctx, req)
}

// List calls nocloud.instances.InstancesService.List.
func (c *instancesServiceClient) List(ctx context.Context, req *connect.Request[instances.ListInstancesRequest]) (*connect.Response[instances.ListInstancesResponse], error) {
	return c.list.CallUnary(ctx, req)
}

// Get calls nocloud.instances.InstancesService.Get.
func (c *instancesServiceClient) Get(ctx context.Context, req *connect.Request[instances.Instance]) (*connect.Response[instances.ResponseInstance], error) {
	return c.get.CallUnary(ctx, req)
}

// Create calls nocloud.instances.InstancesService.Create.
func (c *instancesServiceClient) Create(ctx context.Context, req *connect.Request[instances.CreateRequest]) (*connect.Response[instances.CreateResponse], error) {
	return c.create.CallUnary(ctx, req)
}

// Update calls nocloud.instances.InstancesService.Update.
func (c *instancesServiceClient) Update(ctx context.Context, req *connect.Request[instances.UpdateRequest]) (*connect.Response[instances.UpdateResponse], error) {
	return c.update.CallUnary(ctx, req)
}

// GetUnique calls nocloud.instances.InstancesService.GetUnique.
func (c *instancesServiceClient) GetUnique(ctx context.Context, req *connect.Request[instances.GetUniqueRequest]) (*connect.Response[instances.GetUniqueResponse], error) {
	return c.getUnique.CallUnary(ctx, req)
}

// TransferIG calls nocloud.instances.InstancesService.TransferIG.
func (c *instancesServiceClient) TransferIG(ctx context.Context, req *connect.Request[instances.TransferIGRequest]) (*connect.Response[instances.TransferIGResponse], error) {
	return c.transferIG.CallUnary(ctx, req)
}

// TransferInstance calls nocloud.instances.InstancesService.TransferInstance.
func (c *instancesServiceClient) TransferInstance(ctx context.Context, req *connect.Request[instances.TransferInstanceRequest]) (*connect.Response[instances.TransferInstanceResponse], error) {
	return c.transferInstance.CallUnary(ctx, req)
}

// InstancesServiceHandler is an implementation of the nocloud.instances.InstancesService service.
type InstancesServiceHandler interface {
	Invoke(context.Context, *connect.Request[instances.InvokeRequest]) (*connect.Response[instances.InvokeResponse], error)
	Delete(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error)
	AddNote(context.Context, *connect.Request[notes.AddNoteRequest]) (*connect.Response[notes.NoteResponse], error)
	PatchNote(context.Context, *connect.Request[notes.PatchNoteRequest]) (*connect.Response[notes.NoteResponse], error)
	RemoveNote(context.Context, *connect.Request[notes.RemoveNoteRequest]) (*connect.Response[notes.NoteResponse], error)
	Detach(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error)
	Attach(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error)
	List(context.Context, *connect.Request[instances.ListInstancesRequest]) (*connect.Response[instances.ListInstancesResponse], error)
	Get(context.Context, *connect.Request[instances.Instance]) (*connect.Response[instances.ResponseInstance], error)
	Create(context.Context, *connect.Request[instances.CreateRequest]) (*connect.Response[instances.CreateResponse], error)
	Update(context.Context, *connect.Request[instances.UpdateRequest]) (*connect.Response[instances.UpdateResponse], error)
	GetUnique(context.Context, *connect.Request[instances.GetUniqueRequest]) (*connect.Response[instances.GetUniqueResponse], error)
	TransferIG(context.Context, *connect.Request[instances.TransferIGRequest]) (*connect.Response[instances.TransferIGResponse], error)
	TransferInstance(context.Context, *connect.Request[instances.TransferInstanceRequest]) (*connect.Response[instances.TransferInstanceResponse], error)
}

// NewInstancesServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewInstancesServiceHandler(svc InstancesServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	instancesServiceInvokeHandler := connect.NewUnaryHandler(
		InstancesServiceInvokeProcedure,
		svc.Invoke,
		connect.WithSchema(instancesServiceInvokeMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceDeleteHandler := connect.NewUnaryHandler(
		InstancesServiceDeleteProcedure,
		svc.Delete,
		connect.WithSchema(instancesServiceDeleteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceAddNoteHandler := connect.NewUnaryHandler(
		InstancesServiceAddNoteProcedure,
		svc.AddNote,
		connect.WithSchema(instancesServiceAddNoteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServicePatchNoteHandler := connect.NewUnaryHandler(
		InstancesServicePatchNoteProcedure,
		svc.PatchNote,
		connect.WithSchema(instancesServicePatchNoteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceRemoveNoteHandler := connect.NewUnaryHandler(
		InstancesServiceRemoveNoteProcedure,
		svc.RemoveNote,
		connect.WithSchema(instancesServiceRemoveNoteMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceDetachHandler := connect.NewUnaryHandler(
		InstancesServiceDetachProcedure,
		svc.Detach,
		connect.WithSchema(instancesServiceDetachMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceAttachHandler := connect.NewUnaryHandler(
		InstancesServiceAttachProcedure,
		svc.Attach,
		connect.WithSchema(instancesServiceAttachMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceListHandler := connect.NewUnaryHandler(
		InstancesServiceListProcedure,
		svc.List,
		connect.WithSchema(instancesServiceListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceGetHandler := connect.NewUnaryHandler(
		InstancesServiceGetProcedure,
		svc.Get,
		connect.WithSchema(instancesServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceCreateHandler := connect.NewUnaryHandler(
		InstancesServiceCreateProcedure,
		svc.Create,
		connect.WithSchema(instancesServiceCreateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceUpdateHandler := connect.NewUnaryHandler(
		InstancesServiceUpdateProcedure,
		svc.Update,
		connect.WithSchema(instancesServiceUpdateMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceGetUniqueHandler := connect.NewUnaryHandler(
		InstancesServiceGetUniqueProcedure,
		svc.GetUnique,
		connect.WithSchema(instancesServiceGetUniqueMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceTransferIGHandler := connect.NewUnaryHandler(
		InstancesServiceTransferIGProcedure,
		svc.TransferIG,
		connect.WithSchema(instancesServiceTransferIGMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	instancesServiceTransferInstanceHandler := connect.NewUnaryHandler(
		InstancesServiceTransferInstanceProcedure,
		svc.TransferInstance,
		connect.WithSchema(instancesServiceTransferInstanceMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/nocloud.instances.InstancesService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case InstancesServiceInvokeProcedure:
			instancesServiceInvokeHandler.ServeHTTP(w, r)
		case InstancesServiceDeleteProcedure:
			instancesServiceDeleteHandler.ServeHTTP(w, r)
		case InstancesServiceAddNoteProcedure:
			instancesServiceAddNoteHandler.ServeHTTP(w, r)
		case InstancesServicePatchNoteProcedure:
			instancesServicePatchNoteHandler.ServeHTTP(w, r)
		case InstancesServiceRemoveNoteProcedure:
			instancesServiceRemoveNoteHandler.ServeHTTP(w, r)
		case InstancesServiceDetachProcedure:
			instancesServiceDetachHandler.ServeHTTP(w, r)
		case InstancesServiceAttachProcedure:
			instancesServiceAttachHandler.ServeHTTP(w, r)
		case InstancesServiceListProcedure:
			instancesServiceListHandler.ServeHTTP(w, r)
		case InstancesServiceGetProcedure:
			instancesServiceGetHandler.ServeHTTP(w, r)
		case InstancesServiceCreateProcedure:
			instancesServiceCreateHandler.ServeHTTP(w, r)
		case InstancesServiceUpdateProcedure:
			instancesServiceUpdateHandler.ServeHTTP(w, r)
		case InstancesServiceGetUniqueProcedure:
			instancesServiceGetUniqueHandler.ServeHTTP(w, r)
		case InstancesServiceTransferIGProcedure:
			instancesServiceTransferIGHandler.ServeHTTP(w, r)
		case InstancesServiceTransferInstanceProcedure:
			instancesServiceTransferInstanceHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedInstancesServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedInstancesServiceHandler struct{}

func (UnimplementedInstancesServiceHandler) Invoke(context.Context, *connect.Request[instances.InvokeRequest]) (*connect.Response[instances.InvokeResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Invoke is not implemented"))
}

func (UnimplementedInstancesServiceHandler) Delete(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Delete is not implemented"))
}

func (UnimplementedInstancesServiceHandler) AddNote(context.Context, *connect.Request[notes.AddNoteRequest]) (*connect.Response[notes.NoteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.AddNote is not implemented"))
}

func (UnimplementedInstancesServiceHandler) PatchNote(context.Context, *connect.Request[notes.PatchNoteRequest]) (*connect.Response[notes.NoteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.PatchNote is not implemented"))
}

func (UnimplementedInstancesServiceHandler) RemoveNote(context.Context, *connect.Request[notes.RemoveNoteRequest]) (*connect.Response[notes.NoteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.RemoveNote is not implemented"))
}

func (UnimplementedInstancesServiceHandler) Detach(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Detach is not implemented"))
}

func (UnimplementedInstancesServiceHandler) Attach(context.Context, *connect.Request[instances.DeleteRequest]) (*connect.Response[instances.DeleteResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Attach is not implemented"))
}

func (UnimplementedInstancesServiceHandler) List(context.Context, *connect.Request[instances.ListInstancesRequest]) (*connect.Response[instances.ListInstancesResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.List is not implemented"))
}

func (UnimplementedInstancesServiceHandler) Get(context.Context, *connect.Request[instances.Instance]) (*connect.Response[instances.ResponseInstance], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Get is not implemented"))
}

func (UnimplementedInstancesServiceHandler) Create(context.Context, *connect.Request[instances.CreateRequest]) (*connect.Response[instances.CreateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Create is not implemented"))
}

func (UnimplementedInstancesServiceHandler) Update(context.Context, *connect.Request[instances.UpdateRequest]) (*connect.Response[instances.UpdateResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.Update is not implemented"))
}

func (UnimplementedInstancesServiceHandler) GetUnique(context.Context, *connect.Request[instances.GetUniqueRequest]) (*connect.Response[instances.GetUniqueResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.GetUnique is not implemented"))
}

func (UnimplementedInstancesServiceHandler) TransferIG(context.Context, *connect.Request[instances.TransferIGRequest]) (*connect.Response[instances.TransferIGResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.TransferIG is not implemented"))
}

func (UnimplementedInstancesServiceHandler) TransferInstance(context.Context, *connect.Request[instances.TransferInstanceRequest]) (*connect.Response[instances.TransferInstanceResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("nocloud.instances.InstancesService.TransferInstance is not implemented"))
}
