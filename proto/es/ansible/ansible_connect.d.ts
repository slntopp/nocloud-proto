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

// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=js+dts"
// @generated from file ansible/ansible.proto (package nocloud.ansible, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreatePlaybookRequest, CreatePlaybookResponse, CreateRunRequest, DeletePlaybookRequest, DeletePlaybookResponse, DeleteRunRequest, DeleteRunResponse, ExecRunRequest, ExecRunResponse, GetPlaybookRequest, GetPlaybookResponse, GetRunRequest, Job, ListPlaybooksRequest, ListPlaybooksResponse, ListRunsRequest, ResyncRunRequest, Run, Runs, UpdatePlaybookRequest, UpdatePlaybookResponse, WatchRunRequest } from "./ansible_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service nocloud.ansible.AnsibleService
 */
export declare const AnsibleService: {
  readonly typeName: "nocloud.ansible.AnsibleService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof GetRunRequest,
      readonly O: typeof Run,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListRunsRequest,
      readonly O: typeof Runs,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof CreateRunRequest,
      readonly O: typeof Run,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.Exec
     */
    readonly exec: {
      readonly name: "Exec",
      readonly I: typeof ExecRunRequest,
      readonly O: typeof ExecRunResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.Watch
     */
    readonly watch: {
      readonly name: "Watch",
      readonly I: typeof WatchRunRequest,
      readonly O: typeof Job,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof DeleteRunRequest,
      readonly O: typeof DeleteRunResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.AnsibleService.Resync
     */
    readonly resync: {
      readonly name: "Resync",
      readonly I: typeof ResyncRunRequest,
      readonly O: typeof Run,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.ansible.PlaybooksService
 */
export declare const PlaybooksService: {
  readonly typeName: "nocloud.ansible.PlaybooksService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.ansible.PlaybooksService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof GetPlaybookRequest,
      readonly O: typeof GetPlaybookResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.PlaybooksService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListPlaybooksRequest,
      readonly O: typeof ListPlaybooksResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.PlaybooksService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof CreatePlaybookRequest,
      readonly O: typeof CreatePlaybookResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.PlaybooksService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof UpdatePlaybookRequest,
      readonly O: typeof UpdatePlaybookResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.ansible.PlaybooksService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof DeletePlaybookRequest,
      readonly O: typeof DeletePlaybookResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
