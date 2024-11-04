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
namespace Nocloud\ServicesProviders;

/**
 */
class ShowcasesServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\ServicesProviders\Showcase $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\ServicesProviders\Showcase $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.services_providers.ShowcasesService/Create',
        $argument,
        ['\Nocloud\ServicesProviders\Showcase', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\ServicesProviders\DeleteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\ServicesProviders\DeleteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.services_providers.ShowcasesService/Delete',
        $argument,
        ['\Nocloud\ServicesProviders\DeleteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\ServicesProviders\Showcase $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\ServicesProviders\Showcase $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.services_providers.ShowcasesService/Update',
        $argument,
        ['\Nocloud\ServicesProviders\Showcase', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\ServicesProviders\GetRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\ServicesProviders\GetRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.services_providers.ShowcasesService/Get',
        $argument,
        ['\Nocloud\ServicesProviders\Showcase', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\ServicesProviders\ListRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\ServicesProviders\ListRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.services_providers.ShowcasesService/List',
        $argument,
        ['\Nocloud\ServicesProviders\Showcases', 'decode'],
        $metadata, $options);
    }

}
