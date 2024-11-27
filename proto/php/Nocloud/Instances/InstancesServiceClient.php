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
namespace Nocloud\Instances;

/**
 */
class InstancesServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Instances\InvokeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Invoke(\Nocloud\Instances\InvokeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Invoke',
        $argument,
        ['\Nocloud\Instances\InvokeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\DeleteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Instances\DeleteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Delete',
        $argument,
        ['\Nocloud\Instances\DeleteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Notes\AddNoteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function AddNote(\Nocloud\Notes\AddNoteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/AddNote',
        $argument,
        ['\Nocloud\Notes\NoteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Notes\PatchNoteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PatchNote(\Nocloud\Notes\PatchNoteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/PatchNote',
        $argument,
        ['\Nocloud\Notes\NoteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Notes\RemoveNoteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RemoveNote(\Nocloud\Notes\RemoveNoteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/RemoveNote',
        $argument,
        ['\Nocloud\Notes\NoteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\DeleteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Detach(\Nocloud\Instances\DeleteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Detach',
        $argument,
        ['\Nocloud\Instances\DeleteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\DeleteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Attach(\Nocloud\Instances\DeleteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Attach',
        $argument,
        ['\Nocloud\Instances\DeleteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\ListInstancesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Instances\ListInstancesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/List',
        $argument,
        ['\Nocloud\Instances\ListInstancesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\Instance $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Instances\Instance $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Get',
        $argument,
        ['\Nocloud\Instances\ResponseInstance', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\CreateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Instances\CreateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Create',
        $argument,
        ['\Nocloud\Instances\CreateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\UpdateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\Instances\UpdateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/Update',
        $argument,
        ['\Nocloud\Instances\UpdateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\GetUniqueRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUnique(\Nocloud\Instances\GetUniqueRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/GetUnique',
        $argument,
        ['\Nocloud\Instances\GetUniqueResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\TransferIGRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function TransferIG(\Nocloud\Instances\TransferIGRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/TransferIG',
        $argument,
        ['\Nocloud\Instances\TransferIGResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Instances\TransferInstanceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function TransferInstance(\Nocloud\Instances\TransferInstanceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.instances.InstancesService/TransferInstance',
        $argument,
        ['\Nocloud\Instances\TransferInstanceResponse', 'decode'],
        $metadata, $options);
    }

}
