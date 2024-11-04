<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright © 2021-2023 Nikita Ivanovski info@slnt-opp.xyz
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
namespace Nocloud\EventsLogging;

/**
 */
class EventsLoggingServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\EventsLogging\GetEventsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetEvents(\Nocloud\EventsLogging\GetEventsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.events_logging.EventsLoggingService/GetEvents',
        $argument,
        ['\Nocloud\EventsLogging\Events', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\EventsLogging\GetEventsCountRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetCount(\Nocloud\EventsLogging\GetEventsCountRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.events_logging.EventsLoggingService/GetCount',
        $argument,
        ['\Nocloud\EventsLogging\GetEventsCountResponse', 'decode'],
        $metadata, $options);
    }

}
