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
namespace Nocloud\Registry;

/**
 */
class AccountGroupsServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Registry\Accounts\AccountGroup $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Registry\Accounts\AccountGroup $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.registry.AccountGroupsService/Create',
        $argument,
        ['\Nocloud\Registry\Accounts\AccountGroup', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Registry\Accounts\DeleteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Registry\Accounts\DeleteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.registry.AccountGroupsService/Delete',
        $argument,
        ['\Nocloud\Registry\Accounts\DeleteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Registry\Accounts\AccountGroup $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\Registry\Accounts\AccountGroup $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.registry.AccountGroupsService/Update',
        $argument,
        ['\Nocloud\Registry\Accounts\AccountGroup', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Registry\Accounts\GetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Registry\Accounts\GetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.registry.AccountGroupsService/Get',
        $argument,
        ['\Nocloud\Registry\Accounts\AccountGroup', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Registry\Accounts\ListRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Registry\Accounts\ListRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.registry.AccountGroupsService/List',
        $argument,
        ['\Nocloud\Registry\Accounts\AccountGroupsListResponse', 'decode'],
        $metadata, $options);
    }

}
