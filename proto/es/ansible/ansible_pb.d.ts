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

// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file ansible/ansible.proto (package nocloud.ansible, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Access } from "../access/access_pb.js";

/**
 * Required for Billing Plans and Instances first run
 *
 * @generated from message nocloud.ansible.Software
 */
export declare class Software extends Message<Software> {
  /**
   * Playbook UUID
   *
   * @generated from field: string playbook = 1;
   */
  playbook: string;

  /**
   * Playbook Vars
   *
   * @generated from field: map<string, string> vars = 2;
   */
  vars: { [key: string]: string };

  /**
   * Automatically run Playbooks once Instance is RUNNING
   *
   * @generated from field: bool autorun = 3;
   */
  autorun: boolean;

  /**
   * Run UUID when created
   *
   * @generated from field: string run = 4;
   */
  run: string;

  /**
   * Is Playbook finished
   *
   * @generated from field: bool done = 5;
   */
  done: boolean;

  constructor(data?: PartialMessage<Software>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.Software";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Software;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Software;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Software;

  static equals(a: Software | PlainMessage<Software> | undefined, b: Software | PlainMessage<Software> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.Playbook
 */
export declare class Playbook extends Message<Playbook> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: string logo = 2;
   */
  logo: string;

  /**
   * Url to or Base64 encoded Image to be used as Playbook logo in the
   * Marketplace
   *
   * @generated from field: string title = 3;
   */
  title: string;

  /**
   * Filename for playbook yaml
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * (optionally Markdown) long description Marketplace like
   *
   * Ansible Playbook written in YAML
   *
   * @generated from field: string content = 5;
   */
  content: string;

  /**
   * List of supported platforms(OS) by this Playbook
   *
   * @generated from field: repeated string supported_os = 6;
   */
  supportedOs: string[];

  /**
   * Is this Playbook visible only for root or not
   *
   * @generated from field: bool private = 7;
   */
  private: boolean;

  constructor(data?: PartialMessage<Playbook>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.Playbook";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Playbook;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Playbook;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Playbook;

  static equals(a: Playbook | PlainMessage<Playbook> | undefined, b: Playbook | PlainMessage<Playbook> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.Run
 */
export declare class Run extends Message<Run> {
  /**
   * Run UUID generated by Ansible Runner
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * Instances to run Playbook at
   *
   * @generated from field: repeated nocloud.ansible.Instance instances = 2;
   */
  instances: Instance[];

  /**
   * Playbook to run
   *
   * @generated from field: string playbook_uuid = 3;
   */
  playbookUuid: string;

  /**
   * @generated from field: map<string, string> jobs = 4;
   */
  jobs: { [key: string]: string };

  /**
   * @generated from field: string status = 5;
   */
  status: string;

  /**
   * @generated from field: int64 rc = 6;
   */
  rc: bigint;

  /**
   * Use custom Private Key for SSH (applied to all Instances, can be
   * overriden only with login/pass)
   *
   * @generated from field: optional string ssh_key = 7;
   */
  sshKey?: string;

  /**
   * @generated from field: optional nocloud.access.Access access = 8;
   */
  access?: Access;

  /**
   * @generated from field: int64 create_time = 9;
   */
  createTime: bigint;

  /**
   * @generated from field: int64 exec_time = 10;
   */
  execTime: bigint;

  /**
   * @generated from field: map<string, string> vars = 11;
   */
  vars: { [key: string]: string };

  /**
   * @generated from field: optional nocloud.ansible.Instance hop = 12;
   */
  hop?: Instance;

  constructor(data?: PartialMessage<Run>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.Run";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Run;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Run;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Run;

  static equals(a: Run | PlainMessage<Run> | undefined, b: Run | PlainMessage<Run> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.Runs
 */
export declare class Runs extends Message<Runs> {
  /**
   * @generated from field: repeated nocloud.ansible.Run pool = 1;
   */
  pool: Run[];

  constructor(data?: PartialMessage<Runs>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.Runs";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Runs;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Runs;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Runs;

  static equals(a: Runs | PlainMessage<Runs> | undefined, b: Runs | PlainMessage<Runs> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.Job
 */
export declare class Job extends Message<Job> {
  /**
   * @generated from field: string run_uuid = 1;
   */
  runUuid: string;

  /**
   * @generated from field: string job_uuid = 2;
   */
  jobUuid: string;

  /**
   * @generated from field: string job = 3;
   */
  job: string;

  /**
   * @generated from field: string status = 4;
   */
  status: string;

  /**
   * @generated from field: optional int64 rc = 5;
   */
  rc?: bigint;

  constructor(data?: PartialMessage<Job>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.Job";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Job;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Job;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Job;

  static equals(a: Job | PlainMessage<Job> | undefined, b: Job | PlainMessage<Job> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.Instance
 */
export declare class Instance extends Message<Instance> {
  /**
   * NoCloud Instance UUID
   *
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * SSH Setup
   *
   * SSH accessible hostname(hostname, IP addr, domain name)
   *
   * @generated from field: string host = 2;
   */
  host: string;

  /**
   * SSH port
   *
   * @generated from field: optional string port = 3;
   */
  port?: string;

  /**
   * SSH User
   *
   * @generated from field: optional string user = 4;
   */
  user?: string;

  /**
   * SSH Password
   *
   * @generated from field: optional string pass = 5;
   */
  pass?: string;

  /**
   * Ansible Jump Host
   *
   * @generated from field: optional string ansible_host = 6;
   */
  ansibleHost?: string;

  /**
   * @generated from field: optional string python = 7;
   */
  python?: string;

  constructor(data?: PartialMessage<Instance>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.Instance";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Instance;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Instance;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Instance;

  static equals(a: Instance | PlainMessage<Instance> | undefined, b: Instance | PlainMessage<Instance> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.CreateRunRequest
 */
export declare class CreateRunRequest extends Message<CreateRunRequest> {
  /**
   * @generated from field: nocloud.ansible.Run run = 1;
   */
  run?: Run;

  /**
   * @generated from field: optional string namespace = 2;
   */
  namespace?: string;

  constructor(data?: PartialMessage<CreateRunRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.CreateRunRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRunRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRunRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRunRequest;

  static equals(a: CreateRunRequest | PlainMessage<CreateRunRequest> | undefined, b: CreateRunRequest | PlainMessage<CreateRunRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.GetRunRequest
 */
export declare class GetRunRequest extends Message<GetRunRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetRunRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.GetRunRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRunRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRunRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRunRequest;

  static equals(a: GetRunRequest | PlainMessage<GetRunRequest> | undefined, b: GetRunRequest | PlainMessage<GetRunRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ListRunsRequest
 */
export declare class ListRunsRequest extends Message<ListRunsRequest> {
  constructor(data?: PartialMessage<ListRunsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ListRunsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRunsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRunsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRunsRequest;

  static equals(a: ListRunsRequest | PlainMessage<ListRunsRequest> | undefined, b: ListRunsRequest | PlainMessage<ListRunsRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ExecRunRequest
 */
export declare class ExecRunRequest extends Message<ExecRunRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  /**
   * @generated from field: bool wait_finish = 2;
   */
  waitFinish: boolean;

  constructor(data?: PartialMessage<ExecRunRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ExecRunRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecRunRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecRunRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecRunRequest;

  static equals(a: ExecRunRequest | PlainMessage<ExecRunRequest> | undefined, b: ExecRunRequest | PlainMessage<ExecRunRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ResyncRunRequest
 */
export declare class ResyncRunRequest extends Message<ResyncRunRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<ResyncRunRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ResyncRunRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResyncRunRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResyncRunRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResyncRunRequest;

  static equals(a: ResyncRunRequest | PlainMessage<ResyncRunRequest> | undefined, b: ResyncRunRequest | PlainMessage<ResyncRunRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ExecRunResponse
 */
export declare class ExecRunResponse extends Message<ExecRunResponse> {
  /**
   * @generated from field: string status = 1;
   */
  status: string;

  /**
   * @generated from field: nocloud.ansible.ExecRunResponse.Error error = 2;
   */
  error?: ExecRunResponse_Error;

  constructor(data?: PartialMessage<ExecRunResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ExecRunResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecRunResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecRunResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecRunResponse;

  static equals(a: ExecRunResponse | PlainMessage<ExecRunResponse> | undefined, b: ExecRunResponse | PlainMessage<ExecRunResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ExecRunResponse.Error
 */
export declare class ExecRunResponse_Error extends Message<ExecRunResponse_Error> {
  /**
   * @generated from field: string host = 1;
   */
  host: string;

  /**
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<ExecRunResponse_Error>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ExecRunResponse.Error";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecRunResponse_Error;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecRunResponse_Error;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecRunResponse_Error;

  static equals(a: ExecRunResponse_Error | PlainMessage<ExecRunResponse_Error> | undefined, b: ExecRunResponse_Error | PlainMessage<ExecRunResponse_Error> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.WatchRunRequest
 */
export declare class WatchRunRequest extends Message<WatchRunRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<WatchRunRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.WatchRunRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WatchRunRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WatchRunRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WatchRunRequest;

  static equals(a: WatchRunRequest | PlainMessage<WatchRunRequest> | undefined, b: WatchRunRequest | PlainMessage<WatchRunRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.DeleteRunRequest
 */
export declare class DeleteRunRequest extends Message<DeleteRunRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeleteRunRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.DeleteRunRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRunRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRunRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRunRequest;

  static equals(a: DeleteRunRequest | PlainMessage<DeleteRunRequest> | undefined, b: DeleteRunRequest | PlainMessage<DeleteRunRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.DeleteRunResponse
 */
export declare class DeleteRunResponse extends Message<DeleteRunResponse> {
  constructor(data?: PartialMessage<DeleteRunResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.DeleteRunResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRunResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRunResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRunResponse;

  static equals(a: DeleteRunResponse | PlainMessage<DeleteRunResponse> | undefined, b: DeleteRunResponse | PlainMessage<DeleteRunResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ListPlaybooksRequest
 */
export declare class ListPlaybooksRequest extends Message<ListPlaybooksRequest> {
  constructor(data?: PartialMessage<ListPlaybooksRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ListPlaybooksRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPlaybooksRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPlaybooksRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPlaybooksRequest;

  static equals(a: ListPlaybooksRequest | PlainMessage<ListPlaybooksRequest> | undefined, b: ListPlaybooksRequest | PlainMessage<ListPlaybooksRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.ListPlaybooksResponse
 */
export declare class ListPlaybooksResponse extends Message<ListPlaybooksResponse> {
  /**
   * @generated from field: repeated nocloud.ansible.Playbook playbooks = 1;
   */
  playbooks: Playbook[];

  constructor(data?: PartialMessage<ListPlaybooksResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.ListPlaybooksResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPlaybooksResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPlaybooksResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPlaybooksResponse;

  static equals(a: ListPlaybooksResponse | PlainMessage<ListPlaybooksResponse> | undefined, b: ListPlaybooksResponse | PlainMessage<ListPlaybooksResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.GetPlaybookRequest
 */
export declare class GetPlaybookRequest extends Message<GetPlaybookRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<GetPlaybookRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.GetPlaybookRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPlaybookRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPlaybookRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPlaybookRequest;

  static equals(a: GetPlaybookRequest | PlainMessage<GetPlaybookRequest> | undefined, b: GetPlaybookRequest | PlainMessage<GetPlaybookRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.GetPlaybookResponse
 */
export declare class GetPlaybookResponse extends Message<GetPlaybookResponse> {
  /**
   * @generated from field: nocloud.ansible.Playbook playbook = 1;
   */
  playbook?: Playbook;

  constructor(data?: PartialMessage<GetPlaybookResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.GetPlaybookResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPlaybookResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPlaybookResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPlaybookResponse;

  static equals(a: GetPlaybookResponse | PlainMessage<GetPlaybookResponse> | undefined, b: GetPlaybookResponse | PlainMessage<GetPlaybookResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.DeletePlaybookRequest
 */
export declare class DeletePlaybookRequest extends Message<DeletePlaybookRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid: string;

  constructor(data?: PartialMessage<DeletePlaybookRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.DeletePlaybookRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePlaybookRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePlaybookRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePlaybookRequest;

  static equals(a: DeletePlaybookRequest | PlainMessage<DeletePlaybookRequest> | undefined, b: DeletePlaybookRequest | PlainMessage<DeletePlaybookRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.DeletePlaybookResponse
 */
export declare class DeletePlaybookResponse extends Message<DeletePlaybookResponse> {
  constructor(data?: PartialMessage<DeletePlaybookResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.DeletePlaybookResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePlaybookResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePlaybookResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePlaybookResponse;

  static equals(a: DeletePlaybookResponse | PlainMessage<DeletePlaybookResponse> | undefined, b: DeletePlaybookResponse | PlainMessage<DeletePlaybookResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.UpdatePlaybookRequest
 */
export declare class UpdatePlaybookRequest extends Message<UpdatePlaybookRequest> {
  /**
   * @generated from field: nocloud.ansible.Playbook playbook = 1;
   */
  playbook?: Playbook;

  constructor(data?: PartialMessage<UpdatePlaybookRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.UpdatePlaybookRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePlaybookRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePlaybookRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePlaybookRequest;

  static equals(a: UpdatePlaybookRequest | PlainMessage<UpdatePlaybookRequest> | undefined, b: UpdatePlaybookRequest | PlainMessage<UpdatePlaybookRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.UpdatePlaybookResponse
 */
export declare class UpdatePlaybookResponse extends Message<UpdatePlaybookResponse> {
  /**
   * @generated from field: nocloud.ansible.Playbook playbook = 1;
   */
  playbook?: Playbook;

  constructor(data?: PartialMessage<UpdatePlaybookResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.UpdatePlaybookResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePlaybookResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePlaybookResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePlaybookResponse;

  static equals(a: UpdatePlaybookResponse | PlainMessage<UpdatePlaybookResponse> | undefined, b: UpdatePlaybookResponse | PlainMessage<UpdatePlaybookResponse> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.CreatePlaybookRequest
 */
export declare class CreatePlaybookRequest extends Message<CreatePlaybookRequest> {
  /**
   * @generated from field: nocloud.ansible.Playbook playbook = 1;
   */
  playbook?: Playbook;

  constructor(data?: PartialMessage<CreatePlaybookRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.CreatePlaybookRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlaybookRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlaybookRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlaybookRequest;

  static equals(a: CreatePlaybookRequest | PlainMessage<CreatePlaybookRequest> | undefined, b: CreatePlaybookRequest | PlainMessage<CreatePlaybookRequest> | undefined): boolean;
}

/**
 * @generated from message nocloud.ansible.CreatePlaybookResponse
 */
export declare class CreatePlaybookResponse extends Message<CreatePlaybookResponse> {
  /**
   * @generated from field: nocloud.ansible.Playbook playbook = 1;
   */
  playbook?: Playbook;

  constructor(data?: PartialMessage<CreatePlaybookResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "nocloud.ansible.CreatePlaybookResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlaybookResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlaybookResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlaybookResponse;

  static equals(a: CreatePlaybookResponse | PlainMessage<CreatePlaybookResponse> | undefined, b: CreatePlaybookResponse | PlainMessage<CreatePlaybookResponse> | undefined): boolean;
}

