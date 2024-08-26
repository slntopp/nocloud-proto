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
// @generated from file edge/edge.proto (package nocloud.edge, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, TestRequest, TestResponse } from "./edge_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ObjectState } from "../states/states_pb.js";

/**
 * @generated from service nocloud.edge.EdgeService
 */
export declare const EdgeService: {
  readonly typeName: "nocloud.edge.EdgeService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.edge.EdgeService.Test
     */
    readonly test: {
      readonly name: "Test",
      readonly I: typeof TestRequest,
      readonly O: typeof TestResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.edge.EdgeService.PostState
     */
    readonly postState: {
      readonly name: "PostState",
      readonly I: typeof ObjectState,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
  }
};

