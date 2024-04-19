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

// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=js+dts"
// @generated from file services/services.proto (package nocloud.services, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateRequest, DeleteRequest, DeleteResponse, DownRequest, DownResponse, GetRequest, ListRequest, Service, Services, StreamRequest, SuspendRequest, SuspendResponse, UnsuspendRequest, UnsuspendResponse, UpRequest, UpResponse } from "./services_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ObjectState } from "../states/states_pb.js";

/**
 * @generated from service nocloud.services.ServicesService
 */
export declare const ServicesService: {
  readonly typeName: "nocloud.services.ServicesService",
  readonly methods: {
    /**
     *
     * rpc TestConfig(nocloud.services.CreateRequest)
     * returns (nocloud.services.TestConfigResponse) {
     * option (google.api.http) = {
     * post : "/services"
     * body : "*"
     * };
     * };
     *
     * @generated from rpc nocloud.services.ServicesService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof CreateRequest,
      readonly O: typeof Service,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Service,
      readonly O: typeof Service,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof DeleteRequest,
      readonly O: typeof DeleteResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof GetRequest,
      readonly O: typeof Service,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListRequest,
      readonly O: typeof Services,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Up
     */
    readonly up: {
      readonly name: "Up",
      readonly I: typeof UpRequest,
      readonly O: typeof UpResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Down
     */
    readonly down: {
      readonly name: "Down",
      readonly I: typeof DownRequest,
      readonly O: typeof DownResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Suspend
     */
    readonly suspend: {
      readonly name: "Suspend",
      readonly I: typeof SuspendRequest,
      readonly O: typeof SuspendResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Unsuspend
     */
    readonly unsuspend: {
      readonly name: "Unsuspend",
      readonly I: typeof UnsuspendRequest,
      readonly O: typeof UnsuspendResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services.ServicesService.Stream
     */
    readonly stream: {
      readonly name: "Stream",
      readonly I: typeof StreamRequest,
      readonly O: typeof ObjectState,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

