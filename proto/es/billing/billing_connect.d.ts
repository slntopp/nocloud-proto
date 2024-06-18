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

// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=js+dts"
// @generated from file billing/billing.proto (package nocloud.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConversionRequest, ConversionResponse, CreateCurrencyRequest, CreateCurrencyResponse, CreateExchangeRateRequest, CreateExchangeRateResponse, CreateInvoiceRequest, DeleteExchangeRateRequest, DeleteExchangeRateResponse, GetActiveRequest, GetCurrenciesRequest, GetCurrenciesResponse, GetExchangeRateRequest, GetExchangeRateResponse, GetExchangeRatesRequest, GetExchangeRatesResponse, GetInstancesReportRequest, GetInstancesReportResponse, GetInstancesReportsCountRequest, GetInvoicesCountRequest, GetInvoicesCountResponse, GetInvoicesRequest, GetRecordsReportsCountRequest, GetRecordsReportsRequest, GetRecordsReportsResponse, GetReportsCountResponse, GetTransactionsCountRequest, GetTransactionsCountResponse, GetTransactionsRequest, Invoice, Invoices, ListPlansInstancesRequest, ListPlansInstancesResponse, ListRequest, ListResponse, Plan, Records, ReprocessTransactionsRequest, Transaction, Transactions, UpdateExchangeRateRequest, UpdateExchangeRateResponse, UpdateInvoiceStatusRequest, UpdateTransactionResponse } from "./billing_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { Addon, BulkAddons, CountAddonsRequest, CountAddonsResponse, ListAddonsRequest, ListAddonsResponse } from "./addons/addons_pb.js";
import { CountDescriptionsRequest, CountDescriptionsResponse, Description, ListDescriptionsRequest, ListDescriptionsResponse } from "./descriptions/descriptions_pb.js";

/**
 * @generated from service nocloud.billing.RecordsService
 */
export declare const RecordsService: {
  readonly typeName: "nocloud.billing.RecordsService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.billing.RecordsService.GetActive
     */
    readonly getActive: {
      readonly name: "GetActive",
      readonly I: typeof GetActiveRequest,
      readonly O: typeof Records,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.RecordsService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof Records,
      readonly O: typeof Records,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.RecordsService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Records,
      readonly O: typeof Records,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.billing.BillingService
 */
export declare const BillingService: {
  readonly typeName: "nocloud.billing.BillingService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.billing.BillingService.CreatePlan
     */
    readonly createPlan: {
      readonly name: "CreatePlan",
      readonly I: typeof Plan,
      readonly O: typeof Plan,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.UpdatePlan
     */
    readonly updatePlan: {
      readonly name: "UpdatePlan",
      readonly I: typeof Plan,
      readonly O: typeof Plan,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetPlan
     */
    readonly getPlan: {
      readonly name: "GetPlan",
      readonly I: typeof Plan,
      readonly O: typeof Plan,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.ListPlans
     */
    readonly listPlans: {
      readonly name: "ListPlans",
      readonly I: typeof ListRequest,
      readonly O: typeof ListResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.ListPlansInstances
     */
    readonly listPlansInstances: {
      readonly name: "ListPlansInstances",
      readonly I: typeof ListPlansInstancesRequest,
      readonly O: typeof ListPlansInstancesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.DeletePlan
     */
    readonly deletePlan: {
      readonly name: "DeletePlan",
      readonly I: typeof Plan,
      readonly O: typeof Plan,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.CreateTransaction
     */
    readonly createTransaction: {
      readonly name: "CreateTransaction",
      readonly I: typeof Transaction,
      readonly O: typeof Transaction,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetTransactions
     */
    readonly getTransactions: {
      readonly name: "GetTransactions",
      readonly I: typeof GetTransactionsRequest,
      readonly O: typeof Transactions,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetTransactionsCount
     */
    readonly getTransactionsCount: {
      readonly name: "GetTransactionsCount",
      readonly I: typeof GetTransactionsCountRequest,
      readonly O: typeof GetTransactionsCountResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.UpdateTransaction
     */
    readonly updateTransaction: {
      readonly name: "UpdateTransaction",
      readonly I: typeof Transaction,
      readonly O: typeof UpdateTransactionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetRecords
     */
    readonly getRecords: {
      readonly name: "GetRecords",
      readonly I: typeof Transaction,
      readonly O: typeof Records,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInstancesReports
     */
    readonly getInstancesReports: {
      readonly name: "GetInstancesReports",
      readonly I: typeof GetInstancesReportRequest,
      readonly O: typeof GetInstancesReportResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInstancesReportsCount
     */
    readonly getInstancesReportsCount: {
      readonly name: "GetInstancesReportsCount",
      readonly I: typeof GetInstancesReportsCountRequest,
      readonly O: typeof GetReportsCountResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetRecordsReports
     */
    readonly getRecordsReports: {
      readonly name: "GetRecordsReports",
      readonly I: typeof GetRecordsReportsRequest,
      readonly O: typeof GetRecordsReportsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetRecordsReportsCount
     */
    readonly getRecordsReportsCount: {
      readonly name: "GetRecordsReportsCount",
      readonly I: typeof GetRecordsReportsCountRequest,
      readonly O: typeof GetReportsCountResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.Reprocess
     */
    readonly reprocess: {
      readonly name: "Reprocess",
      readonly I: typeof ReprocessTransactionsRequest,
      readonly O: typeof Transactions,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.CreateInvoice
     */
    readonly createInvoice: {
      readonly name: "CreateInvoice",
      readonly I: typeof CreateInvoiceRequest,
      readonly O: typeof Invoice,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInvoice
     */
    readonly getInvoice: {
      readonly name: "GetInvoice",
      readonly I: typeof Invoice,
      readonly O: typeof Invoice,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInvoices
     */
    readonly getInvoices: {
      readonly name: "GetInvoices",
      readonly I: typeof GetInvoicesRequest,
      readonly O: typeof Invoices,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.GetInvoicesCount
     */
    readonly getInvoicesCount: {
      readonly name: "GetInvoicesCount",
      readonly I: typeof GetInvoicesCountRequest,
      readonly O: typeof GetInvoicesCountResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.UpdateInvoice
     */
    readonly updateInvoice: {
      readonly name: "UpdateInvoice",
      readonly I: typeof Invoice,
      readonly O: typeof Invoice,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.BillingService.UpdateInvoiceStatus
     */
    readonly updateInvoiceStatus: {
      readonly name: "UpdateInvoiceStatus",
      readonly I: typeof UpdateInvoiceStatusRequest,
      readonly O: typeof Invoice,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.billing.CurrencyService
 */
export declare const CurrencyService: {
  readonly typeName: "nocloud.billing.CurrencyService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.billing.CurrencyService.CreateCurrency
     */
    readonly createCurrency: {
      readonly name: "CreateCurrency",
      readonly I: typeof CreateCurrencyRequest,
      readonly O: typeof CreateCurrencyResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.GetCurrencies
     */
    readonly getCurrencies: {
      readonly name: "GetCurrencies",
      readonly I: typeof GetCurrenciesRequest,
      readonly O: typeof GetCurrenciesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.GetExchangeRate
     */
    readonly getExchangeRate: {
      readonly name: "GetExchangeRate",
      readonly I: typeof GetExchangeRateRequest,
      readonly O: typeof GetExchangeRateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.GetExchangeRates
     */
    readonly getExchangeRates: {
      readonly name: "GetExchangeRates",
      readonly I: typeof GetExchangeRatesRequest,
      readonly O: typeof GetExchangeRatesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.CreateExchangeRate
     */
    readonly createExchangeRate: {
      readonly name: "CreateExchangeRate",
      readonly I: typeof CreateExchangeRateRequest,
      readonly O: typeof CreateExchangeRateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.UpdateExchangeRate
     */
    readonly updateExchangeRate: {
      readonly name: "UpdateExchangeRate",
      readonly I: typeof UpdateExchangeRateRequest,
      readonly O: typeof UpdateExchangeRateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.DeleteExchangeRate
     */
    readonly deleteExchangeRate: {
      readonly name: "DeleteExchangeRate",
      readonly I: typeof DeleteExchangeRateRequest,
      readonly O: typeof DeleteExchangeRateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.CurrencyService.Convert
     */
    readonly convert: {
      readonly name: "Convert",
      readonly I: typeof ConversionRequest,
      readonly O: typeof ConversionResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.billing.AddonsService
 */
export declare const AddonsService: {
  readonly typeName: "nocloud.billing.AddonsService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.billing.AddonsService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof Addon,
      readonly O: typeof Addon,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.CreateBulk
     */
    readonly createBulk: {
      readonly name: "CreateBulk",
      readonly I: typeof BulkAddons,
      readonly O: typeof BulkAddons,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Addon,
      readonly O: typeof Addon,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.UpdateBulk
     */
    readonly updateBulk: {
      readonly name: "UpdateBulk",
      readonly I: typeof BulkAddons,
      readonly O: typeof BulkAddons,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Addon,
      readonly O: typeof Addon,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListAddonsRequest,
      readonly O: typeof ListAddonsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.Count
     */
    readonly count: {
      readonly name: "Count",
      readonly I: typeof CountAddonsRequest,
      readonly O: typeof CountAddonsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.AddonsService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Addon,
      readonly O: typeof Addon,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service nocloud.billing.DescriptionsService
 */
export declare const DescriptionsService: {
  readonly typeName: "nocloud.billing.DescriptionsService",
  readonly methods: {
    /**
     * @generated from rpc nocloud.billing.DescriptionsService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof Description,
      readonly O: typeof Description,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.DescriptionsService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Description,
      readonly O: typeof Description,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.DescriptionsService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof Description,
      readonly O: typeof Description,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.DescriptionsService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListDescriptionsRequest,
      readonly O: typeof ListDescriptionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.DescriptionsService.Count
     */
    readonly count: {
      readonly name: "Count",
      readonly I: typeof CountDescriptionsRequest,
      readonly O: typeof CountDescriptionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc nocloud.billing.DescriptionsService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof Description,
      readonly O: typeof Description,
      readonly kind: MethodKind.Unary,
    },
  }
};

