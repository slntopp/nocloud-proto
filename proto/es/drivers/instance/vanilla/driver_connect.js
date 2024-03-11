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
// @generated from file drivers/instance/vanilla/driver.proto (package nocloud.instance.driver.vanilla, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DownRequest, DownResponse, GetTypeRequest, GetTypeResponse, InvokeRequest, MonitoringRequest, MonitoringResponse, SpInvokeRequest, TestServiceProviderConfigRequest, UpRequest, UpResponse } from "./driver_pb.js";
import { InvokeResponse as InvokeResponse$1, PrepSP, TestResponse } from "../../../services_providers/services_providers_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { InvokeResponse, TestInstancesGroupConfigRequest, TestInstancesGroupConfigResponse } from "../../../instances/instances_pb.js";

/**
 * @generated from service nocloud.instance.driver.vanilla.DriverService
 */
export const DriverService = {
  typeName: "nocloud.instance.driver.vanilla.DriverService",
  methods: {
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.TestServiceProviderConfig
     */
    testServiceProviderConfig: {
      name: "TestServiceProviderConfig",
      I: TestServiceProviderConfigRequest,
      O: TestResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.TestInstancesGroupConfig
     */
    testInstancesGroupConfig: {
      name: "TestInstancesGroupConfig",
      I: TestInstancesGroupConfigRequest,
      O: TestInstancesGroupConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.GetType
     */
    getType: {
      name: "GetType",
      I: GetTypeRequest,
      O: GetTypeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.Up
     */
    up: {
      name: "Up",
      I: UpRequest,
      O: UpResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.Down
     */
    down: {
      name: "Down",
      I: DownRequest,
      O: DownResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.Monitoring
     */
    monitoring: {
      name: "Monitoring",
      I: MonitoringRequest,
      O: MonitoringResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.SuspendMonitoring
     */
    suspendMonitoring: {
      name: "SuspendMonitoring",
      I: MonitoringRequest,
      O: MonitoringResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.Invoke
     */
    invoke: {
      name: "Invoke",
      I: InvokeRequest,
      O: InvokeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.SpInvoke
     */
    spInvoke: {
      name: "SpInvoke",
      I: SpInvokeRequest,
      O: InvokeResponse$1,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.instance.driver.vanilla.DriverService.SpPrep
     */
    spPrep: {
      name: "SpPrep",
      I: PrepSP,
      O: PrepSP,
      kind: MethodKind.Unary,
    },
  }
};
