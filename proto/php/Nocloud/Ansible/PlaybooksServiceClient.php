<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// 
// Copyright © 2023 Nikita Ivanovski info@slnt-opp.xyz
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
namespace Nocloud\Ansible;

/**
 */
class PlaybooksServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Ansible\GetPlaybookRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Ansible\GetPlaybookRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.PlaybooksService/Get',
        $argument,
        ['\Nocloud\Ansible\GetPlaybookResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\ListPlaybooksRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Ansible\ListPlaybooksRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.PlaybooksService/List',
        $argument,
        ['\Nocloud\Ansible\ListPlaybooksResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\CreatePlaybookRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Ansible\CreatePlaybookRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.PlaybooksService/Create',
        $argument,
        ['\Nocloud\Ansible\CreatePlaybookResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\UpdatePlaybookRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\Ansible\UpdatePlaybookRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.PlaybooksService/Update',
        $argument,
        ['\Nocloud\Ansible\UpdatePlaybookResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\DeletePlaybookRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Ansible\DeletePlaybookRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.PlaybooksService/Delete',
        $argument,
        ['\Nocloud\Ansible\DeletePlaybookResponse', 'decode'],
        $metadata, $options);
    }

}
