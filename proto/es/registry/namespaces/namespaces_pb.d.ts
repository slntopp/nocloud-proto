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
// @generated from file registry/namespaces/namespaces.proto (package nocloud.registry.namespaces, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Access } from "../../access/access_pb";
import type { Value } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file registry/namespaces/namespaces.proto.
 */
export declare const file_registry_namespaces_namespaces: GenFile;

/**
 * @generated from message nocloud.registry.namespaces.CreateRequest
 */
export declare type CreateRequest = Message<"nocloud.registry.namespaces.CreateRequest"> & {
  /**
   * @generated from field: string title = 1;
   */
  title: string;
};

/**
 * Describes the message nocloud.registry.namespaces.CreateRequest.
 * Use `create(CreateRequestSchema)` to create a new message.
 */
export declare const CreateRequestSchema: GenMessage<CreateRequest>;

/**
 * @generated from message nocloud.registry.namespaces.CreateResponse
 */
export declare type CreateResponse = Message<"nocloud.registry.namespaces.CreateResponse"> & {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;
};

/**
 * Describes the message nocloud.registry.namespaces.CreateResponse.
 * Use `create(CreateResponseSchema)` to create a new message.
 */
export declare const CreateResponseSchema: GenMessage<CreateResponse>;

/**
 * @generated from message nocloud.registry.namespaces.Namespace
 */
export declare type Namespace = Message<"nocloud.registry.namespaces.Namespace"> & {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: optional nocloud.access.Access access = 3;
   */
  access?: Access;

  /**
   * @generated from field: map<string, google.protobuf.Value> meta = 4;
   */
  meta: { [key: string]: Value };
};

/**
 * Describes the message nocloud.registry.namespaces.Namespace.
 * Use `create(NamespaceSchema)` to create a new message.
 */
export declare const NamespaceSchema: GenMessage<Namespace>;

/**
 * @generated from message nocloud.registry.namespaces.JoinRequest
 */
export declare type JoinRequest = Message<"nocloud.registry.namespaces.JoinRequest"> & {
  /**
   * @generated from field: string namespace = 1;
   */
  namespace: string;

  /**
   * @generated from field: string account = 2;
   */
  account: string;

  /**
   * Account access level to namespace
   *
   * @generated from field: optional int32 access = 3;
   */
  access?: number;
};

/**
 * Describes the message nocloud.registry.namespaces.JoinRequest.
 * Use `create(JoinRequestSchema)` to create a new message.
 */
export declare const JoinRequestSchema: GenMessage<JoinRequest>;

/**
 * @generated from message nocloud.registry.namespaces.JoinResponse
 */
export declare type JoinResponse = Message<"nocloud.registry.namespaces.JoinResponse"> & {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;
};

/**
 * Describes the message nocloud.registry.namespaces.JoinResponse.
 * Use `create(JoinResponseSchema)` to create a new message.
 */
export declare const JoinResponseSchema: GenMessage<JoinResponse>;

/**
 * @generated from message nocloud.registry.namespaces.LinkRequest
 */
export declare type LinkRequest = Message<"nocloud.registry.namespaces.LinkRequest"> & {
  /**
   * @generated from field: string namespace = 1;
   */
  namespace: string;

  /**
   * @generated from field: string account = 2;
   */
  account: string;

  /**
   * Account access level to namespace
   *
   * @generated from field: optional int32 access = 3;
   */
  access?: number;

  /**
   * @generated from field: optional string role = 4;
   */
  role?: string;
};

/**
 * Describes the message nocloud.registry.namespaces.LinkRequest.
 * Use `create(LinkRequestSchema)` to create a new message.
 */
export declare const LinkRequestSchema: GenMessage<LinkRequest>;

/**
 * @generated from message nocloud.registry.namespaces.LinkResponse
 */
export declare type LinkResponse = Message<"nocloud.registry.namespaces.LinkResponse"> & {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;
};

/**
 * Describes the message nocloud.registry.namespaces.LinkResponse.
 * Use `create(LinkResponseSchema)` to create a new message.
 */
export declare const LinkResponseSchema: GenMessage<LinkResponse>;

/**
 * @generated from message nocloud.registry.namespaces.ListRequest
 */
export declare type ListRequest = Message<"nocloud.registry.namespaces.ListRequest"> & {
  /**
   * Depth
   *
   * @generated from field: optional int32 depth = 1;
   */
  depth?: number;

  /**
   * @generated from field: optional uint64 page = 2;
   */
  page?: bigint;

  /**
   * @generated from field: optional uint64 limit = 3;
   */
  limit?: bigint;

  /**
   * @generated from field: optional string field = 4;
   */
  field?: string;

  /**
   * @generated from field: optional string sort = 5;
   */
  sort?: string;

  /**
   * @generated from field: map<string, google.protobuf.Value> filters = 6;
   */
  filters: { [key: string]: Value };
};

/**
 * Describes the message nocloud.registry.namespaces.ListRequest.
 * Use `create(ListRequestSchema)` to create a new message.
 */
export declare const ListRequestSchema: GenMessage<ListRequest>;

/**
 * @generated from message nocloud.registry.namespaces.ListResponse
 */
export declare type ListResponse = Message<"nocloud.registry.namespaces.ListResponse"> & {
  /**
   * @generated from field: repeated nocloud.registry.namespaces.Namespace pool = 1;
   */
  pool: Namespace[];

  /**
   * @generated from field: int64 count = 2;
   */
  count: bigint;
};

/**
 * Describes the message nocloud.registry.namespaces.ListResponse.
 * Use `create(ListResponseSchema)` to create a new message.
 */
export declare const ListResponseSchema: GenMessage<ListResponse>;

/**
 * @generated from message nocloud.registry.namespaces.DeleteRequest
 */
export declare type DeleteRequest = Message<"nocloud.registry.namespaces.DeleteRequest"> & {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;
};

/**
 * Describes the message nocloud.registry.namespaces.DeleteRequest.
 * Use `create(DeleteRequestSchema)` to create a new message.
 */
export declare const DeleteRequestSchema: GenMessage<DeleteRequest>;

/**
 * @generated from message nocloud.registry.namespaces.DeleteResponse
 */
export declare type DeleteResponse = Message<"nocloud.registry.namespaces.DeleteResponse"> & {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;
};

/**
 * Describes the message nocloud.registry.namespaces.DeleteResponse.
 * Use `create(DeleteResponseSchema)` to create a new message.
 */
export declare const DeleteResponseSchema: GenMessage<DeleteResponse>;

/**
 * @generated from message nocloud.registry.namespaces.PatchRequest
 */
export declare type PatchRequest = Message<"nocloud.registry.namespaces.PatchRequest"> & {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;
};

/**
 * Describes the message nocloud.registry.namespaces.PatchRequest.
 * Use `create(PatchRequestSchema)` to create a new message.
 */
export declare const PatchRequestSchema: GenMessage<PatchRequest>;

/**
 * @generated from message nocloud.registry.namespaces.PatchResponse
 */
export declare type PatchResponse = Message<"nocloud.registry.namespaces.PatchResponse"> & {
  /**
   * @generated from field: bool result = 1;
   */
  result: boolean;
};

/**
 * Describes the message nocloud.registry.namespaces.PatchResponse.
 * Use `create(PatchResponseSchema)` to create a new message.
 */
export declare const PatchResponseSchema: GenMessage<PatchResponse>;

/**
 * @generated from message nocloud.registry.namespaces.GetRequest
 */
export declare type GetRequest = Message<"nocloud.registry.namespaces.GetRequest"> & {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;
};

/**
 * Describes the message nocloud.registry.namespaces.GetRequest.
 * Use `create(GetRequestSchema)` to create a new message.
 */
export declare const GetRequestSchema: GenMessage<GetRequest>;

