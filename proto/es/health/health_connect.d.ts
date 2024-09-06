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
// @generated from file health/health.proto (package nocloud.health, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ProbeRequest, ProbeResponse, RoutinesStatus, ServingStatus } from "./health_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service nocloud.health.HealthService
 */
export declare const HealthService: {
  readonly typeName: "nocloud.health.HealthService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.health.HealthService.Probe
     */
    readonly probe: {
      readonly name: "Probe",
      readonly I: typeof ProbeRequest,
      readonly O: typeof ProbeResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.health.InternalProbeService
 */
export declare const InternalProbeService: {
  readonly typeName: "nocloud.health.InternalProbeService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.health.InternalProbeService.Service
     */
    readonly service: {
      readonly name: "Service",
      readonly I: typeof ProbeRequest,
      readonly O: typeof ServingStatus,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.health.InternalProbeService.Routine
     */
    readonly routine: {
      readonly name: "Routine",
      readonly I: typeof ProbeRequest,
      readonly O: typeof RoutinesStatus,
      readonly kind: MethodKind.Unary,
    },
  }
};

