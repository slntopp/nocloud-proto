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
namespace Nocloud\Dns;

/**
 */
class DNSClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Dns\Zone $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Dns\Zone $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.dns.DNS/Get',
        $argument,
        ['\Nocloud\Dns\Zone', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Dns\ListRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Dns\ListRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.dns.DNS/List',
        $argument,
        ['\Nocloud\Dns\ListResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Dns\Zone $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Put(\Nocloud\Dns\Zone $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.dns.DNS/Put',
        $argument,
        ['\Nocloud\Dns\Result', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Dns\Zone $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Dns\Zone $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.dns.DNS/Delete',
        $argument,
        ['\Nocloud\Dns\Result', 'decode'],
        $metadata, $options);
    }

}
