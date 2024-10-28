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
namespace Nocloud\Billing;

/**
 */
class DescriptionsServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Billing\Descriptions\Description $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Billing\Descriptions\Description $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.DescriptionsService/Create',
        $argument,
        ['\Nocloud\Billing\Descriptions\Description', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Descriptions\Description $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\Billing\Descriptions\Description $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.DescriptionsService/Update',
        $argument,
        ['\Nocloud\Billing\Descriptions\Description', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Descriptions\Description $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Billing\Descriptions\Description $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.DescriptionsService/Get',
        $argument,
        ['\Nocloud\Billing\Descriptions\Description', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Descriptions\ListDescriptionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Billing\Descriptions\ListDescriptionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.DescriptionsService/List',
        $argument,
        ['\Nocloud\Billing\Descriptions\ListDescriptionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Descriptions\CountDescriptionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Count(\Nocloud\Billing\Descriptions\CountDescriptionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.DescriptionsService/Count',
        $argument,
        ['\Nocloud\Billing\Descriptions\CountDescriptionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Descriptions\Description $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Billing\Descriptions\Description $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.DescriptionsService/Delete',
        $argument,
        ['\Nocloud\Billing\Descriptions\Description', 'decode'],
        $metadata, $options);
    }

}
