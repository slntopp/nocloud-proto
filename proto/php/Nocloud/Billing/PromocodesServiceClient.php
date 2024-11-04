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
class PromocodesServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\Promocode $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Create(\Nocloud\Billing\Promocodes\Promocode $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Create',
        $argument,
        ['\Nocloud\Billing\Promocodes\Promocode', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\Promocode $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Update(\Nocloud\Billing\Promocodes\Promocode $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Update',
        $argument,
        ['\Nocloud\Billing\Promocodes\Promocode', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\Promocode $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Billing\Promocodes\Promocode $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Get',
        $argument,
        ['\Nocloud\Billing\Promocodes\Promocode', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\GetPromocodeByCodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetByCode(\Nocloud\Billing\Promocodes\GetPromocodeByCodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/GetByCode',
        $argument,
        ['\Nocloud\Billing\Promocodes\Promocode', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\ListPromocodesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function List(\Nocloud\Billing\Promocodes\ListPromocodesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/List',
        $argument,
        ['\Nocloud\Billing\Promocodes\ListPromocodesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\CountPromocodesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Count(\Nocloud\Billing\Promocodes\CountPromocodesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Count',
        $argument,
        ['\Nocloud\Billing\Promocodes\CountPromocodesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\Promocode $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Delete(\Nocloud\Billing\Promocodes\Promocode $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Delete',
        $argument,
        ['\Nocloud\Billing\Promocodes\Promocode', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\ApplyPromocodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Apply(\Nocloud\Billing\Promocodes\ApplyPromocodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Apply',
        $argument,
        ['\Nocloud\Billing\Promocodes\ApplyPromocodeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Promocodes\DetachPromocodeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Detach(\Nocloud\Billing\Promocodes\DetachPromocodeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.PromocodesService/Detach',
        $argument,
        ['\Nocloud\Billing\Promocodes\DetachPromocodeResponse', 'decode'],
        $metadata, $options);
    }

}
