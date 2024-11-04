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
class CurrencyServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Billing\CreateCurrencyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateCurrency(\Nocloud\Billing\CreateCurrencyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/CreateCurrency',
        $argument,
        ['\Nocloud\Billing\CreateCurrencyResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\UpdateCurrencyRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateCurrency(\Nocloud\Billing\UpdateCurrencyRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/UpdateCurrency',
        $argument,
        ['\Nocloud\Billing\UpdateCurrencyResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetCurrenciesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetCurrencies(\Nocloud\Billing\GetCurrenciesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/GetCurrencies',
        $argument,
        ['\Nocloud\Billing\GetCurrenciesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetExchangeRateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetExchangeRate(\Nocloud\Billing\GetExchangeRateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/GetExchangeRate',
        $argument,
        ['\Nocloud\Billing\GetExchangeRateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetExchangeRatesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetExchangeRates(\Nocloud\Billing\GetExchangeRatesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/GetExchangeRates',
        $argument,
        ['\Nocloud\Billing\GetExchangeRatesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\CreateExchangeRateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateExchangeRate(\Nocloud\Billing\CreateExchangeRateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/CreateExchangeRate',
        $argument,
        ['\Nocloud\Billing\CreateExchangeRateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\UpdateExchangeRateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateExchangeRate(\Nocloud\Billing\UpdateExchangeRateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/UpdateExchangeRate',
        $argument,
        ['\Nocloud\Billing\UpdateExchangeRateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\DeleteExchangeRateRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteExchangeRate(\Nocloud\Billing\DeleteExchangeRateRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/DeleteExchangeRate',
        $argument,
        ['\Nocloud\Billing\DeleteExchangeRateResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\ConversionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Convert(\Nocloud\Billing\ConversionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.CurrencyService/Convert',
        $argument,
        ['\Nocloud\Billing\ConversionResponse', 'decode'],
        $metadata, $options);
    }

}
