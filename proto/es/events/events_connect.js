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
// @generated from file events/events.proto (package nocloud.events, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CancelRequest, ConsumeRequest, Event, Events, Response } from "./events_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service nocloud.events.EventsService
 */
export const EventsService = {
  typeName: "nocloud.events.EventsService",
  methods: {
    /**
     * @generated from rpc nocloud.events.EventsService.Publish
     */
    publish: {
      name: "Publish",
      I: Event,
      O: Response,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.events.EventsService.Consume
     */
    consume: {
      name: "Consume",
      I: ConsumeRequest,
      O: Event,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc nocloud.events.EventsService.List
     */
    list: {
      name: "List",
      I: ConsumeRequest,
      O: Events,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.events.EventsService.Cancel
     */
    cancel: {
      name: "Cancel",
      I: CancelRequest,
      O: Response,
      kind: MethodKind.Unary,
    },
  }
};

