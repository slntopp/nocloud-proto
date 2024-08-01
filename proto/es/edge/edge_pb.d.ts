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

// @generated by protoc-gen-es v2.0.0 with parameter "target=js+dts"
// @generated from file edge/edge.proto (package nocloud.edge, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { ObjectStateSchema } from "../states/states_pb";

/**
 * Describes the file edge/edge.proto.
 */
export declare const file_edge_edge: GenFile;

/**
 * @generated from message nocloud.edge.TestRequest
 */
export declare type TestRequest = Message<"nocloud.edge.TestRequest"> & {
};

/**
 * Describes the message nocloud.edge.TestRequest.
 * Use `create(TestRequestSchema)` to create a new message.
 */
export declare const TestRequestSchema: GenMessage<TestRequest>;

/**
 * @generated from message nocloud.edge.TestResponse
 */
export declare type TestResponse = Message<"nocloud.edge.TestResponse"> & {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;

  /**
   * @generated from field: string error = 2;
   */
  error: string;
};

/**
 * Describes the message nocloud.edge.TestResponse.
 * Use `create(TestResponseSchema)` to create a new message.
 */
export declare const TestResponseSchema: GenMessage<TestResponse>;

/**
 * @generated from message nocloud.edge.Empty
 */
export declare type Empty = Message<"nocloud.edge.Empty"> & {
};

/**
 * Describes the message nocloud.edge.Empty.
 * Use `create(EmptySchema)` to create a new message.
 */
export declare const EmptySchema: GenMessage<Empty>;

/**
 * @generated from service nocloud.edge.EdgeService
 */
export declare const EdgeService: GenService<{
  /**
   * @generated from rpc nocloud.edge.EdgeService.Test
   */
  test: {
    methodKind: "unary";
    input: typeof TestRequestSchema;
    output: typeof TestResponseSchema;
  },
  /**
   * @generated from rpc nocloud.edge.EdgeService.PostState
   */
  postState: {
    methodKind: "unary";
    input: typeof ObjectStateSchema;
    output: typeof EmptySchema;
  },
}>;

