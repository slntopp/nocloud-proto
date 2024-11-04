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
class AddonsServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Billing\Addons\Addon $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Billing\Addons\Addon $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/Create',
        $argument,
        ['\Nocloud\Billing\Addons\Addon', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\BulkAddons $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateBulk(\Nocloud\Billing\Addons\BulkAddons $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/CreateBulk',
        $argument,
        ['\Nocloud\Billing\Addons\BulkAddons', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\Addon $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\Billing\Addons\Addon $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/Update',
        $argument,
        ['\Nocloud\Billing\Addons\Addon', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\BulkAddons $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateBulk(\Nocloud\Billing\Addons\BulkAddons $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/UpdateBulk',
        $argument,
        ['\Nocloud\Billing\Addons\BulkAddons', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\Addon $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Billing\Addons\Addon $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/Get',
        $argument,
        ['\Nocloud\Billing\Addons\Addon', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\ListAddonsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Billing\Addons\ListAddonsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/List',
        $argument,
        ['\Nocloud\Billing\Addons\ListAddonsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\CountAddonsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Count(\Nocloud\Billing\Addons\CountAddonsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/Count',
        $argument,
        ['\Nocloud\Billing\Addons\CountAddonsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Addons\Addon $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Billing\Addons\Addon $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.AddonsService/Delete',
        $argument,
        ['\Nocloud\Billing\Addons\Addon', 'decode'],
        $metadata, $options);
    }

}
