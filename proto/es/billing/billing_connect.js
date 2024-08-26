//
//Copyright © 2021-2023 Nikita Ivanovski info@slnt-opp.xyz
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js+dts"
// @generated from file billing/billing.proto (package nocloud.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConversionRequest, ConversionResponse, CreateExchangeRateRequest, CreateExchangeRateResponse, DeleteExchangeRateRequest, DeleteExchangeRateResponse, GetActiveRequest, GetCurrenciesRequest, GetCurrenciesResponse, GetExchangeRateRequest, GetExchangeRateResponse, GetExchangeRatesRequest, GetExchangeRatesResponse, GetInstancesReportRequest, GetInstancesReportResponse, GetInstancesReportsCountRequest, GetRecordsReportsCountRequest, GetRecordsReportsRequest, GetRecordsReportsResponse, GetReportsCountResponse, GetTransactionsCountRequest, GetTransactionsCountResponse, GetTransactionsRequest, ListPlansInstancesRequest, ListPlansInstancesResponse, ListRequest, ListResponse, Plan, Records, ReprocessTransactionsRequest, Transaction, Transactions, UpdateExchangeRateRequest, UpdateExchangeRateResponse, UpdateTransactionResponse } from "./billing_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service nocloud.billing.RecordsService
 */
export const RecordsService = {
  typeName: "nocloud.billing.RecordsService",
  methods: {
    /**
     * @generated from rpc nocloud.billing.RecordsService.GetActive
     */
    getActive: {
      name: "GetActive",
      I: GetActiveRequest,
      O: Records,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.RecordsService.Create
     */
    create: {
      name: "Create",
      I: Records,
      O: Records,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.RecordsService.Update
     */
    update: {
      name: "Update",
      I: Records,
      O: Records,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.billing.BillingService
 */
export const BillingService = {
  typeName: "nocloud.billing.BillingService",
  methods: {
    /**
     * @generated from rpc nocloud.billing.BillingService.CreatePlan
     */
    createPlan: {
      name: "CreatePlan",
      I: Plan,
      O: Plan,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.UpdatePlan
     */
    updatePlan: {
      name: "UpdatePlan",
      I: Plan,
      O: Plan,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetPlan
     */
    getPlan: {
      name: "GetPlan",
      I: Plan,
      O: Plan,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.ListPlans
     */
    listPlans: {
      name: "ListPlans",
      I: ListRequest,
      O: ListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.ListPlansInstances
     */
    listPlansInstances: {
      name: "ListPlansInstances",
      I: ListPlansInstancesRequest,
      O: ListPlansInstancesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.DeletePlan
     */
    deletePlan: {
      name: "DeletePlan",
      I: Plan,
      O: Plan,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.CreateTransaction
     */
    createTransaction: {
      name: "CreateTransaction",
      I: Transaction,
      O: Transaction,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetTransactions
     */
    getTransactions: {
      name: "GetTransactions",
      I: GetTransactionsRequest,
      O: Transactions,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetTransactionsCount
     */
    getTransactionsCount: {
      name: "GetTransactionsCount",
      I: GetTransactionsCountRequest,
      O: GetTransactionsCountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.UpdateTransaction
     */
    updateTransaction: {
      name: "UpdateTransaction",
      I: Transaction,
      O: UpdateTransactionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetRecords
     */
    getRecords: {
      name: "GetRecords",
      I: Transaction,
      O: Records,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInstancesReports
     */
    getInstancesReports: {
      name: "GetInstancesReports",
      I: GetInstancesReportRequest,
      O: GetInstancesReportResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInstancesReportsCount
     */
    getInstancesReportsCount: {
      name: "GetInstancesReportsCount",
      I: GetInstancesReportsCountRequest,
      O: GetReportsCountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetRecordsReports
     */
    getRecordsReports: {
      name: "GetRecordsReports",
      I: GetRecordsReportsRequest,
      O: GetRecordsReportsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetRecordsReportsCount
     */
    getRecordsReportsCount: {
      name: "GetRecordsReportsCount",
      I: GetRecordsReportsCountRequest,
      O: GetReportsCountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.Reprocess
     */
    reprocess: {
      name: "Reprocess",
      I: ReprocessTransactionsRequest,
      O: Transactions,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.billing.CurrencyService
 */
export const CurrencyService = {
  typeName: "nocloud.billing.CurrencyService",
  methods: {
    /**
     * @generated from rpc nocloud.billing.CurrencyService.GetCurrencies
     */
    getCurrencies: {
      name: "GetCurrencies",
      I: GetCurrenciesRequest,
      O: GetCurrenciesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.GetExchangeRate
     */
    getExchangeRate: {
      name: "GetExchangeRate",
      I: GetExchangeRateRequest,
      O: GetExchangeRateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.GetExchangeRates
     */
    getExchangeRates: {
      name: "GetExchangeRates",
      I: GetExchangeRatesRequest,
      O: GetExchangeRatesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.CreateExchangeRate
     */
    createExchangeRate: {
      name: "CreateExchangeRate",
      I: CreateExchangeRateRequest,
      O: CreateExchangeRateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.UpdateExchangeRate
     */
    updateExchangeRate: {
      name: "UpdateExchangeRate",
      I: UpdateExchangeRateRequest,
      O: UpdateExchangeRateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.DeleteExchangeRate
     */
    deleteExchangeRate: {
      name: "DeleteExchangeRate",
      I: DeleteExchangeRateRequest,
      O: DeleteExchangeRateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.Convert
     */
    convert: {
      name: "Convert",
      I: ConversionRequest,
      O: ConversionResponse,
      kind: MethodKind.Unary,
    },
  }
};

