<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright © 2022 Nikita Ivanovski info@slnt-opp.xyz
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
class AnsibleServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Ansible\GetRunRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Ansible\GetRunRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.AnsibleService/Get',
        $argument,
        ['\Nocloud\Ansible\Run', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\DeleteRunRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Ansible\DeleteRunRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.AnsibleService/Delete',
        $argument,
        ['\Nocloud\Ansible\DeleteRunResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\Run $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Ansible\Run $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.ansible.AnsibleService/Create',
        $argument,
        ['\Nocloud\Ansible\Run', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\ExecRunRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function Exec(\Nocloud\Ansible\ExecRunRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/nocloud.ansible.AnsibleService/Exec',
        $argument,
        ['\Nocloud\Ansible\Run', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Ansible\WatchRunRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function Watch(\Nocloud\Ansible\WatchRunRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/nocloud.ansible.AnsibleService/Watch',
        $argument,
        ['\Nocloud\Ansible\Run', 'decode'],
        $metadata, $options);
    }

}
