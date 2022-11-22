// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright © 2021-2022 Nikita Ivanovski info@slnt-opp.xyz
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
'use strict';
var grpc = require('@grpc/grpc-js');
var billing_billing_pb = require('../billing/billing_pb.js');
var states_states_pb = require('../states/states_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_nocloud_billing_ConversionRequest(arg) {
  if (!(arg instanceof billing_billing_pb.ConversionRequest)) {
    throw new Error('Expected argument of type nocloud.billing.ConversionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_ConversionRequest(buffer_arg) {
  return billing_billing_pb.ConversionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_ConversionResponse(arg) {
  if (!(arg instanceof billing_billing_pb.ConversionResponse)) {
    throw new Error('Expected argument of type nocloud.billing.ConversionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_ConversionResponse(buffer_arg) {
  return billing_billing_pb.ConversionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_CreateExchangeRateRequest(arg) {
  if (!(arg instanceof billing_billing_pb.CreateExchangeRateRequest)) {
    throw new Error('Expected argument of type nocloud.billing.CreateExchangeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_CreateExchangeRateRequest(buffer_arg) {
  return billing_billing_pb.CreateExchangeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_CreateExchangeRateResponse(arg) {
  if (!(arg instanceof billing_billing_pb.CreateExchangeRateResponse)) {
    throw new Error('Expected argument of type nocloud.billing.CreateExchangeRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_CreateExchangeRateResponse(buffer_arg) {
  return billing_billing_pb.CreateExchangeRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_GetActiveRequest(arg) {
  if (!(arg instanceof billing_billing_pb.GetActiveRequest)) {
    throw new Error('Expected argument of type nocloud.billing.GetActiveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_GetActiveRequest(buffer_arg) {
  return billing_billing_pb.GetActiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_GetCurrenciesRequest(arg) {
  if (!(arg instanceof billing_billing_pb.GetCurrenciesRequest)) {
    throw new Error('Expected argument of type nocloud.billing.GetCurrenciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_GetCurrenciesRequest(buffer_arg) {
  return billing_billing_pb.GetCurrenciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_GetCurrenciesResponse(arg) {
  if (!(arg instanceof billing_billing_pb.GetCurrenciesResponse)) {
    throw new Error('Expected argument of type nocloud.billing.GetCurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_GetCurrenciesResponse(buffer_arg) {
  return billing_billing_pb.GetCurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_GetExchangeRateRequest(arg) {
  if (!(arg instanceof billing_billing_pb.GetExchangeRateRequest)) {
    throw new Error('Expected argument of type nocloud.billing.GetExchangeRateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_GetExchangeRateRequest(buffer_arg) {
  return billing_billing_pb.GetExchangeRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_GetExchangeRateResponse(arg) {
  if (!(arg instanceof billing_billing_pb.GetExchangeRateResponse)) {
    throw new Error('Expected argument of type nocloud.billing.GetExchangeRateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_GetExchangeRateResponse(buffer_arg) {
  return billing_billing_pb.GetExchangeRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_GetTransactionsRequest(arg) {
  if (!(arg instanceof billing_billing_pb.GetTransactionsRequest)) {
    throw new Error('Expected argument of type nocloud.billing.GetTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_GetTransactionsRequest(buffer_arg) {
  return billing_billing_pb.GetTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_ListRequest(arg) {
  if (!(arg instanceof billing_billing_pb.ListRequest)) {
    throw new Error('Expected argument of type nocloud.billing.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_ListRequest(buffer_arg) {
  return billing_billing_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_ListResponse(arg) {
  if (!(arg instanceof billing_billing_pb.ListResponse)) {
    throw new Error('Expected argument of type nocloud.billing.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_ListResponse(buffer_arg) {
  return billing_billing_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_Plan(arg) {
  if (!(arg instanceof billing_billing_pb.Plan)) {
    throw new Error('Expected argument of type nocloud.billing.Plan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_Plan(buffer_arg) {
  return billing_billing_pb.Plan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_Records(arg) {
  if (!(arg instanceof billing_billing_pb.Records)) {
    throw new Error('Expected argument of type nocloud.billing.Records');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_Records(buffer_arg) {
  return billing_billing_pb.Records.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_ReprocessTransactionsRequest(arg) {
  if (!(arg instanceof billing_billing_pb.ReprocessTransactionsRequest)) {
    throw new Error('Expected argument of type nocloud.billing.ReprocessTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_ReprocessTransactionsRequest(buffer_arg) {
  return billing_billing_pb.ReprocessTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_Transaction(arg) {
  if (!(arg instanceof billing_billing_pb.Transaction)) {
    throw new Error('Expected argument of type nocloud.billing.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_Transaction(buffer_arg) {
  return billing_billing_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nocloud_billing_Transactions(arg) {
  if (!(arg instanceof billing_billing_pb.Transactions)) {
    throw new Error('Expected argument of type nocloud.billing.Transactions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nocloud_billing_Transactions(buffer_arg) {
  return billing_billing_pb.Transactions.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecordsServiceService = exports.RecordsServiceService = {
  getActive: {
    path: '/nocloud.billing.RecordsService/GetActive',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.GetActiveRequest,
    responseType: billing_billing_pb.Records,
    requestSerialize: serialize_nocloud_billing_GetActiveRequest,
    requestDeserialize: deserialize_nocloud_billing_GetActiveRequest,
    responseSerialize: serialize_nocloud_billing_Records,
    responseDeserialize: deserialize_nocloud_billing_Records,
  },
  create: {
    path: '/nocloud.billing.RecordsService/Create',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Records,
    responseType: billing_billing_pb.Records,
    requestSerialize: serialize_nocloud_billing_Records,
    requestDeserialize: deserialize_nocloud_billing_Records,
    responseSerialize: serialize_nocloud_billing_Records,
    responseDeserialize: deserialize_nocloud_billing_Records,
  },
  update: {
    path: '/nocloud.billing.RecordsService/Update',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Records,
    responseType: billing_billing_pb.Records,
    requestSerialize: serialize_nocloud_billing_Records,
    requestDeserialize: deserialize_nocloud_billing_Records,
    responseSerialize: serialize_nocloud_billing_Records,
    responseDeserialize: deserialize_nocloud_billing_Records,
  },
};

exports.RecordsServiceClient = grpc.makeGenericClientConstructor(RecordsServiceService);
var BillingServiceService = exports.BillingServiceService = {
  createPlan: {
    path: '/nocloud.billing.BillingService/CreatePlan',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Plan,
    responseType: billing_billing_pb.Plan,
    requestSerialize: serialize_nocloud_billing_Plan,
    requestDeserialize: deserialize_nocloud_billing_Plan,
    responseSerialize: serialize_nocloud_billing_Plan,
    responseDeserialize: deserialize_nocloud_billing_Plan,
  },
  updatePlan: {
    path: '/nocloud.billing.BillingService/UpdatePlan',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Plan,
    responseType: billing_billing_pb.Plan,
    requestSerialize: serialize_nocloud_billing_Plan,
    requestDeserialize: deserialize_nocloud_billing_Plan,
    responseSerialize: serialize_nocloud_billing_Plan,
    responseDeserialize: deserialize_nocloud_billing_Plan,
  },
  getPlan: {
    path: '/nocloud.billing.BillingService/GetPlan',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Plan,
    responseType: billing_billing_pb.Plan,
    requestSerialize: serialize_nocloud_billing_Plan,
    requestDeserialize: deserialize_nocloud_billing_Plan,
    responseSerialize: serialize_nocloud_billing_Plan,
    responseDeserialize: deserialize_nocloud_billing_Plan,
  },
  listPlans: {
    path: '/nocloud.billing.BillingService/ListPlans',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.ListRequest,
    responseType: billing_billing_pb.ListResponse,
    requestSerialize: serialize_nocloud_billing_ListRequest,
    requestDeserialize: deserialize_nocloud_billing_ListRequest,
    responseSerialize: serialize_nocloud_billing_ListResponse,
    responseDeserialize: deserialize_nocloud_billing_ListResponse,
  },
  deletePlan: {
    path: '/nocloud.billing.BillingService/DeletePlan',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Plan,
    responseType: billing_billing_pb.Plan,
    requestSerialize: serialize_nocloud_billing_Plan,
    requestDeserialize: deserialize_nocloud_billing_Plan,
    responseSerialize: serialize_nocloud_billing_Plan,
    responseDeserialize: deserialize_nocloud_billing_Plan,
  },
  createTransaction: {
    path: '/nocloud.billing.BillingService/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Transaction,
    responseType: billing_billing_pb.Transaction,
    requestSerialize: serialize_nocloud_billing_Transaction,
    requestDeserialize: deserialize_nocloud_billing_Transaction,
    responseSerialize: serialize_nocloud_billing_Transaction,
    responseDeserialize: deserialize_nocloud_billing_Transaction,
  },
  getTransactions: {
    path: '/nocloud.billing.BillingService/GetTransactions',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.GetTransactionsRequest,
    responseType: billing_billing_pb.Transactions,
    requestSerialize: serialize_nocloud_billing_GetTransactionsRequest,
    requestDeserialize: deserialize_nocloud_billing_GetTransactionsRequest,
    responseSerialize: serialize_nocloud_billing_Transactions,
    responseDeserialize: deserialize_nocloud_billing_Transactions,
  },
  getRecords: {
    path: '/nocloud.billing.BillingService/GetRecords',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.Transaction,
    responseType: billing_billing_pb.Records,
    requestSerialize: serialize_nocloud_billing_Transaction,
    requestDeserialize: deserialize_nocloud_billing_Transaction,
    responseSerialize: serialize_nocloud_billing_Records,
    responseDeserialize: deserialize_nocloud_billing_Records,
  },
  reprocess: {
    path: '/nocloud.billing.BillingService/Reprocess',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.ReprocessTransactionsRequest,
    responseType: billing_billing_pb.Transactions,
    requestSerialize: serialize_nocloud_billing_ReprocessTransactionsRequest,
    requestDeserialize: deserialize_nocloud_billing_ReprocessTransactionsRequest,
    responseSerialize: serialize_nocloud_billing_Transactions,
    responseDeserialize: deserialize_nocloud_billing_Transactions,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService);
var CurrencyServiceService = exports.CurrencyServiceService = {
  getCurrencies: {
    path: '/nocloud.billing.CurrencyService/GetCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.GetCurrenciesRequest,
    responseType: billing_billing_pb.GetCurrenciesResponse,
    requestSerialize: serialize_nocloud_billing_GetCurrenciesRequest,
    requestDeserialize: deserialize_nocloud_billing_GetCurrenciesRequest,
    responseSerialize: serialize_nocloud_billing_GetCurrenciesResponse,
    responseDeserialize: deserialize_nocloud_billing_GetCurrenciesResponse,
  },
  getExchangeRate: {
    path: '/nocloud.billing.CurrencyService/GetExchangeRate',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.GetExchangeRateRequest,
    responseType: billing_billing_pb.GetExchangeRateResponse,
    requestSerialize: serialize_nocloud_billing_GetExchangeRateRequest,
    requestDeserialize: deserialize_nocloud_billing_GetExchangeRateRequest,
    responseSerialize: serialize_nocloud_billing_GetExchangeRateResponse,
    responseDeserialize: deserialize_nocloud_billing_GetExchangeRateResponse,
  },
  createExchangeRate: {
    path: '/nocloud.billing.CurrencyService/CreateExchangeRate',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.CreateExchangeRateRequest,
    responseType: billing_billing_pb.CreateExchangeRateResponse,
    requestSerialize: serialize_nocloud_billing_CreateExchangeRateRequest,
    requestDeserialize: deserialize_nocloud_billing_CreateExchangeRateRequest,
    responseSerialize: serialize_nocloud_billing_CreateExchangeRateResponse,
    responseDeserialize: deserialize_nocloud_billing_CreateExchangeRateResponse,
  },
  updateExchangeRateRequest: {
    path: '/nocloud.billing.CurrencyService/UpdateExchangeRateRequest',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.CreateExchangeRateRequest,
    responseType: billing_billing_pb.CreateExchangeRateResponse,
    requestSerialize: serialize_nocloud_billing_CreateExchangeRateRequest,
    requestDeserialize: deserialize_nocloud_billing_CreateExchangeRateRequest,
    responseSerialize: serialize_nocloud_billing_CreateExchangeRateResponse,
    responseDeserialize: deserialize_nocloud_billing_CreateExchangeRateResponse,
  },
  deleteExchangeRateRequest: {
    path: '/nocloud.billing.CurrencyService/DeleteExchangeRateRequest',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.CreateExchangeRateRequest,
    responseType: billing_billing_pb.CreateExchangeRateResponse,
    requestSerialize: serialize_nocloud_billing_CreateExchangeRateRequest,
    requestDeserialize: deserialize_nocloud_billing_CreateExchangeRateRequest,
    responseSerialize: serialize_nocloud_billing_CreateExchangeRateResponse,
    responseDeserialize: deserialize_nocloud_billing_CreateExchangeRateResponse,
  },
  convert: {
    path: '/nocloud.billing.CurrencyService/Convert',
    requestStream: false,
    responseStream: false,
    requestType: billing_billing_pb.ConversionRequest,
    responseType: billing_billing_pb.ConversionResponse,
    requestSerialize: serialize_nocloud_billing_ConversionRequest,
    requestDeserialize: deserialize_nocloud_billing_ConversionRequest,
    responseSerialize: serialize_nocloud_billing_ConversionResponse,
    responseDeserialize: deserialize_nocloud_billing_ConversionResponse,
  },
};

exports.CurrencyServiceClient = grpc.makeGenericClientConstructor(CurrencyServiceService);
