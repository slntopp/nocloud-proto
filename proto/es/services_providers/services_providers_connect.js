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
// @generated from file services_providers/services_providers.proto (package nocloud.services_providers, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BindPlanRequest, BindPlanResponse, DeleteRequest, DeleteResponse, GenericResponse, GetRequest, GetTypeRequest, GetTypeResponse, InvokeRequest, InvokeResponse, ListExtentionsResponse, ListRequest, ListResponse, PrepSP, ServicesProvider, ServicesProvidersExtentionData, Showcase, Showcases, TestResponse, UnbindPlanRequest, UnbindPlanResponse } from "./services_providers_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service nocloud.services_providers.ServicesProvidersService
 */
export const ServicesProvidersService = {
  typeName: "nocloud.services_providers.ServicesProvidersService",
  methods: {
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Test
     */
    test: {
      name: "Test",
      I: ServicesProvider,
      O: TestResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Create
     */
    create: {
      name: "Create",
      I: ServicesProvider,
      O: ServicesProvider,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Update
     */
    update: {
      name: "Update",
      I: ServicesProvider,
      O: ServicesProvider,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Get
     */
    get: {
      name: "Get",
      I: GetRequest,
      O: ServicesProvider,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Invoke
     */
    invoke: {
      name: "Invoke",
      I: InvokeRequest,
      O: InvokeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.Prep
     */
    prep: {
      name: "Prep",
      I: PrepSP,
      O: PrepSP,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.ListExtentions
     */
    listExtentions: {
      name: "ListExtentions",
      I: ListRequest,
      O: ListExtentionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.BindPlan
     */
    bindPlan: {
      name: "BindPlan",
      I: BindPlanRequest,
      O: BindPlanResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersService.UnbindPlan
     */
    unbindPlan: {
      name: "UnbindPlan",
      I: UnbindPlanRequest,
      O: UnbindPlanResponse,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.services_providers.ServicesProvidersExtentionsService
 */
export const ServicesProvidersExtentionsService = {
  typeName: "nocloud.services_providers.ServicesProvidersExtentionsService",
  methods: {
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersExtentionsService.GetType
     */
    getType: {
      name: "GetType",
      I: GetTypeRequest,
      O: GetTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersExtentionsService.Test
     */
    test: {
      name: "Test",
      I: ServicesProvidersExtentionData,
      O: GenericResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersExtentionsService.Register
     */
    register: {
      name: "Register",
      I: ServicesProvidersExtentionData,
      O: GenericResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersExtentionsService.Update
     */
    update: {
      name: "Update",
      I: ServicesProvidersExtentionData,
      O: GenericResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ServicesProvidersExtentionsService.Unregister
     */
    unregister: {
      name: "Unregister",
      I: ServicesProvidersExtentionData,
      O: GenericResponse,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.services_providers.ShowcasesService
 */
export const ShowcasesService = {
  typeName: "nocloud.services_providers.ShowcasesService",
  methods: {
    /**
     * @generated from rpc nocloud.services_providers.ShowcasesService.Create
     */
    create: {
      name: "Create",
      I: Showcase,
      O: Showcase,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ShowcasesService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ShowcasesService.Update
     */
    update: {
      name: "Update",
      I: Showcase,
      O: Showcase,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ShowcasesService.Get
     */
    get: {
      name: "Get",
      I: GetRequest,
      O: Showcase,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.services_providers.ShowcasesService.List
     */
    list: {
      name: "List",
      I: ListRequest,
      O: Showcases,
      kind: MethodKind.Unary,
    },
  }
};

