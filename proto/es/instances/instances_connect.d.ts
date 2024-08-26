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

// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js+dts"
// @generated from file instances/instances.proto (package nocloud.instances, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteRequest, DeleteResponse, InvokeRequest, InvokeResponse, ListInstancesRequest, ListInstancesResponse, TransferIGRequest, TransferIGResponse, TransferInstanceRequest, TransferInstanceResponse } from "./instances_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { AddNoteRequest, NoteResponse, PatchNoteRequest, RemoveNoteRequest } from "../notes/notes_pb.js";

/**
 * @generated from service nocloud.instances.InstancesService
 */
export declare const InstancesService: {
  readonly typeName: "nocloud.instances.InstancesService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.instances.InstancesService.Invoke
     */
    readonly invoke: {
      readonly name: "Invoke",
      readonly I: typeof InvokeRequest,
      readonly O: typeof InvokeResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof DeleteRequest,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.AddNote
     */
    readonly addNote: {
      readonly name: "AddNote",
      readonly I: typeof AddNoteRequest,
      readonly O: typeof NoteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.PatchNote
     */
    readonly patchNote: {
      readonly name: "PatchNote",
      readonly I: typeof PatchNoteRequest,
      readonly O: typeof NoteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.RemoveNote
     */
    readonly removeNote: {
      readonly name: "RemoveNote",
      readonly I: typeof RemoveNoteRequest,
      readonly O: typeof NoteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.Detach
     */
    readonly detach: {
      readonly name: "Detach",
      readonly I: typeof DeleteRequest,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.Attach
     */
    readonly attach: {
      readonly name: "Attach",
      readonly I: typeof DeleteRequest,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListInstancesRequest,
      readonly O: typeof ListInstancesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.TransferIG
     */
    readonly transferIG: {
      readonly name: "TransferIG",
      readonly I: typeof TransferIGRequest,
      readonly O: typeof TransferIGResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instances.InstancesService.TransferInstance
     */
    readonly transferInstance: {
      readonly name: "TransferInstance",
      readonly I: typeof TransferInstanceRequest,
      readonly O: typeof TransferInstanceResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

