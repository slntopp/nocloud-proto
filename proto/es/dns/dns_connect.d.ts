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
// @generated from file dns/dns.proto (package nocloud.dns, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListRequest, ListResponse, Result, Zone } from "./dns_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service nocloud.dns.DNS
 */
export declare const DNS: {
  readonly typeName: "nocloud.dns.DNS",
  readonly methods: {
    /**
     * @generated from rpc nocloud.dns.DNS.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Zone,
      readonly O: typeof Zone,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.dns.DNS.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListRequest,
      readonly O: typeof ListResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.dns.DNS.Put
     */
    readonly put: {
      readonly name: "Put",
      readonly I: typeof Zone,
      readonly O: typeof Result,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.dns.DNS.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Zone,
      readonly O: typeof Result,
      readonly kind: MethodKind.Unary,
    },
  }
};

