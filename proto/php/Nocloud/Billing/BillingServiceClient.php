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
class BillingServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Billing\Plan $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreatePlan(\Nocloud\Billing\Plan $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/CreatePlan',
        $argument,
        ['\Nocloud\Billing\Plan', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Plan $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdatePlan(\Nocloud\Billing\Plan $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/UpdatePlan',
        $argument,
        ['\Nocloud\Billing\Plan', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Plan $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetPlan(\Nocloud\Billing\Plan $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetPlan',
        $argument,
        ['\Nocloud\Billing\Plan', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\ListRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListPlans(\Nocloud\Billing\ListRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/ListPlans',
        $argument,
        ['\Nocloud\Billing\ListResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\ListPlansInstancesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListPlansInstances(\Nocloud\Billing\ListPlansInstancesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/ListPlansInstances',
        $argument,
        ['\Nocloud\Billing\ListPlansInstancesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\PlansUniqueRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PlansUnique(\Nocloud\Billing\PlansUniqueRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/PlansUnique',
        $argument,
        ['\Nocloud\Billing\PlansUniqueResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Plan $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeletePlan(\Nocloud\Billing\Plan $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/DeletePlan',
        $argument,
        ['\Nocloud\Billing\Plan', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Transaction $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateTransaction(\Nocloud\Billing\Transaction $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/CreateTransaction',
        $argument,
        ['\Nocloud\Billing\Transaction', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetTransactionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetTransactions(\Nocloud\Billing\GetTransactionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetTransactions',
        $argument,
        ['\Nocloud\Billing\Transactions', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetTransactionsCountRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetTransactionsCount(\Nocloud\Billing\GetTransactionsCountRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetTransactionsCount',
        $argument,
        ['\Nocloud\Billing\GetTransactionsCountResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Transaction $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateTransaction(\Nocloud\Billing\Transaction $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/UpdateTransaction',
        $argument,
        ['\Nocloud\Billing\UpdateTransactionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Transaction $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetRecords(\Nocloud\Billing\Transaction $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetRecords',
        $argument,
        ['\Nocloud\Billing\Records', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetInstancesReportRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInstancesReports(\Nocloud\Billing\GetInstancesReportRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetInstancesReports',
        $argument,
        ['\Nocloud\Billing\GetInstancesReportResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetInstancesReportsCountRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInstancesReportsCount(\Nocloud\Billing\GetInstancesReportsCountRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetInstancesReportsCount',
        $argument,
        ['\Nocloud\Billing\GetReportsCountResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetRecordsReportsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetRecordsReports(\Nocloud\Billing\GetRecordsReportsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetRecordsReports',
        $argument,
        ['\Nocloud\Billing\GetRecordsReportsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetRecordsReportsCountRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetRecordsReportsCount(\Nocloud\Billing\GetRecordsReportsCountRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetRecordsReportsCount',
        $argument,
        ['\Nocloud\Billing\GetReportsCountResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\ReprocessTransactionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Reprocess(\Nocloud\Billing\ReprocessTransactionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/Reprocess',
        $argument,
        ['\Nocloud\Billing\Transactions', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\CreateInvoiceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateInvoice(\Nocloud\Billing\CreateInvoiceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/CreateInvoice',
        $argument,
        ['\Nocloud\Billing\Invoice', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\Invoice $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInvoice(\Nocloud\Billing\Invoice $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetInvoice',
        $argument,
        ['\Nocloud\Billing\Invoice', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetInvoicesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInvoices(\Nocloud\Billing\GetInvoicesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetInvoices',
        $argument,
        ['\Nocloud\Billing\Invoices', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetInvoicesCountRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInvoicesCount(\Nocloud\Billing\GetInvoicesCountRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetInvoicesCount',
        $argument,
        ['\Nocloud\Billing\GetInvoicesCountResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\UpdateInvoiceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateInvoice(\Nocloud\Billing\UpdateInvoiceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/UpdateInvoice',
        $argument,
        ['\Nocloud\Billing\Invoice', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\PayRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Pay(\Nocloud\Billing\PayRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/Pay',
        $argument,
        ['\Nocloud\Billing\PayResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\UpdateInvoiceStatusRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateInvoiceStatus(\Nocloud\Billing\UpdateInvoiceStatusRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/UpdateInvoiceStatus',
        $argument,
        ['\Nocloud\Billing\Invoice', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\CreateTopUpBalanceInvoiceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateTopUpBalanceInvoice(\Nocloud\Billing\CreateTopUpBalanceInvoiceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/CreateTopUpBalanceInvoice',
        $argument,
        ['\Nocloud\Billing\Invoice', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\CreateRenewalInvoiceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateRenewalInvoice(\Nocloud\Billing\CreateRenewalInvoiceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/CreateRenewalInvoice',
        $argument,
        ['\Nocloud\Billing\Invoice', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\PayWithBalanceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PayWithBalance(\Nocloud\Billing\PayWithBalanceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/PayWithBalance',
        $argument,
        ['\Nocloud\Billing\PayWithBalanceResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\GetInvoiceSettingsTemplateExampleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInvoiceSettingsTemplateExample(\Nocloud\Billing\GetInvoiceSettingsTemplateExampleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/GetInvoiceSettingsTemplateExample',
        $argument,
        ['\Nocloud\Billing\GetInvoiceSettingsTemplateExampleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Billing\RunDailyCronJobRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function RunDailyCronJob(\Nocloud\Billing\RunDailyCronJobRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.billing.BillingService/RunDailyCronJob',
        $argument,
        ['\Nocloud\Billing\RunDailyCronJobResponse', 'decode'],
        $metadata, $options);
    }

}
