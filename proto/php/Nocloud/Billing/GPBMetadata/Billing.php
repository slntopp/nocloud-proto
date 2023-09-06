<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/billing.proto

namespace Nocloud\Billing\GPBMetadata;

class Billing
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Nocloud\States\GPBMetadata\States::initOnce();
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        $pool->internalAddGeneratedFile(
            '
�J
billing/billing.protonocloud.billingansible/ansible.protogoogle/protobuf/struct.proto"F
FeeRange
from (Rfrom
to (Rto
factor (Rfactor"�
Fee
	precision (R	precision,
round (2.nocloud.billing.RoundRround
default (Rdefault1
ranges (2.nocloud.billing.FeeRangeRranges"�
Plan
uuid (	Ruuid
title (	Rtitle
type (	Rtype
public (Rpublic-
kind (2.nocloud.billing.PlanKindRkind;
	resources (2.nocloud.billing.ResourceConfR	resources?
products (2#.nocloud.billing.Plan.ProductsEntryRproducts3
meta (2.nocloud.billing.Plan.MetaEntryRmeta&
fee	 (2.nocloud.billing.FeeRfee5
software
 (2.nocloud.ansible.SoftwareRsoftwareU
ProductsEntry
key (	Rkey.
value (2.nocloud.billing.ProductRvalue:8O
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"H
ListRequest
sp_uuid (	RspUuid 
anonymously (Ranonymously"9
ListResponse)
pool (2.nocloud.billing.PlanRpool"=
ListPlansInstancesRequest 
anonymously (Ranonymously"�
ListPlansInstancesResponseL
plans (26.nocloud.billing.ListPlansInstancesResponse.PlansEntryRplansP

PlansEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
ResourceConf
key (	Rkey)
kind (2.nocloud.billing.KindRkind
price (Rprice
period (Rperiod
except (Rexcept,
on (2.nocloud.states.NoCloudStateRon&
fee (2.nocloud.billing.FeeRfee
title (	Rtitle"�
Product)
kind (2.nocloud.billing.KindRkind
title (	Rtitle
price (Rprice
period (RperiodE
	resources (2\'.nocloud.billing.Product.ResourcesEntryR	resources6
meta (2".nocloud.billing.Product.MetaEntryRmeta
sorter (H Rsorter�.
installation_fee (HRinstallationFee�
public	 (RpublicT
ResourcesEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8O
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8B	
_sorterB
_installation_fee"�
Transaction
uuid (	Ruuid
exec (Rexec
proc (Rproc
	processed (R	processed5
priority (2.nocloud.billing.PriorityRpriority
account (	Raccount
service (	Rservice
records (	Rrecords
total	 (Rtotal:
meta
 (2&.nocloud.billing.Transaction.MetaEntryRmeta5
currency (2.nocloud.billing.CurrencyRcurrencyO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"@
Transactions0
pool (2.nocloud.billing.TransactionRpool"�
Record
uuid (	Ruuid
start (Rstart
end (Rend
exec (Rexec
	processed (R	processed5
priority (2.nocloud.billing.PriorityRpriority
instance (	Rinstance2
state (2.nocloud.states.NoCloudStateRstate
resource	 (	Rresource
product
 (	Rproduct
total (Rtotal5
meta (2!.nocloud.billing.Record.MetaEntryRmeta5
currency (2.nocloud.billing.CurrencyRcurrency
service (	Rservice
account (	RaccountO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"6
Records+
pool (2.nocloud.billing.RecordRpool"&
GetActiveRequest
uuid (	Ruuid"�
GetTransactionsRequest
account (	H Raccount�
service (	HRservice�
page (HRpage�
limit (HRlimit�
field (	HRfield�
sort (	HRsort�
uuid (	HRuuid�
type (	HRtype�B

_accountB

_serviceB
_pageB
_limitB
_fieldB
_sortB
_uuidB
_type"8
ReprocessTransactionsRequest
account (	Raccount"�
GetTransactionsCountRequest
account (	H Raccount�
service (	HRservice�
type (	HRtype�B

_accountB

_serviceB
_type"4
GetTransactionsCountResponse
total (Rtotal"B
UpdateTransactionRequest
uuid (	Ruuid
exec (Rexec"3
UpdateTransactionResponse
result (Rresult"�
CostEstimationL
	resources (2..nocloud.billing.CostEstimation.ResourcesEntryR	resources
product (Rproduct
total (Rtotal<
ResourcesEntry
key (	Rkey
value (Rvalue:8"�
GetInstancesReportRequest
from (H Rfrom�
to (HRto�
page (HRpage�
limit (HRlimit�
field (	HRfield�
sort (	HRsort�B
_fromB
_toB
_pageB
_limitB
_fieldB
_sort"q
InstanceReport
uuid (	Ruuid
total (Rtotal5
currency (2.nocloud.billing.CurrencyRcurrency"W
GetInstancesReportResponse9
reports (2.nocloud.billing.InstanceReportRreports"�
GetRecordsReportsRequest
from (H Rfrom�
to (HRto�
page (HRpage�
limit (HRlimit�
field (	HRfield�
sort (	HRsort�P
filters (26.nocloud.billing.GetRecordsReportsRequest.FiltersEntryRfiltersR
FiltersEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8B
_fromB
_toB
_pageB
_limitB
_fieldB
_sort"z
GetRecordsReportsResponse1
records (2.nocloud.billing.RecordRrecords
total (Rtotal
count (Rcount"!
GetInstancesReportsCountRequest"�
GetRecordsReportsCountRequest
from (H Rfrom�
to (HRto�U
filters (2;.nocloud.billing.GetRecordsReportsCountRequest.FiltersEntryRfiltersR
FiltersEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8B
_fromB
_to"/
GetReportsCountResponse
total (Rtotal"�
CreateExchangeRateRequest-
from (2.nocloud.billing.CurrencyRfrom)
to (2.nocloud.billing.CurrencyRto
rate (Rrate"
CreateExchangeRateResponse"�
UpdateExchangeRateRequest-
from (2.nocloud.billing.CurrencyRfrom)
to (2.nocloud.billing.CurrencyRto
rate (Rrate"
UpdateExchangeRateResponse"u
DeleteExchangeRateRequest-
from (2.nocloud.billing.CurrencyRfrom)
to (2.nocloud.billing.CurrencyRto"
DeleteExchangeRateResponse"
GetCurrenciesRequest"R
GetCurrenciesResponse9

currencies (2.nocloud.billing.CurrencyR
currencies"r
GetExchangeRateRequest-
from (2.nocloud.billing.CurrencyRfrom)
to (2.nocloud.billing.CurrencyRto"
GetExchangeRatesRequest"�
GetExchangeRateResponse-
from (2.nocloud.billing.CurrencyRfrom)
to (2.nocloud.billing.CurrencyRto
rate (Rrate"Z
GetExchangeRatesResponse>
rates (2(.nocloud.billing.GetExchangeRateResponseRrates"�
ConversionRequest-
from (2.nocloud.billing.CurrencyRfrom)
to (2.nocloud.billing.CurrencyRto
amount (Ramount",
ConversionResponse
amount (Ramount*0
PlanKind
UNKNOWN 
DYNAMIC

STATIC*1
Round
NONE 	
FLOOR	
ROUND
CEIL*2
Kind
UNSPECIFIED 
POSTPAID
PREPAID*2
Priority

NORMAL 

URGENT

ADDITIONAL*7
Currency
NCU 
USD
EUR
BYN
PLN2�
RecordsServiceH
	GetActive!.nocloud.billing.GetActiveRequest.nocloud.billing.Records<
Create.nocloud.billing.Records.nocloud.billing.Records<
Update.nocloud.billing.Records.nocloud.billing.Records2�
BillingService<

CreatePlan.nocloud.billing.Plan.nocloud.billing.Plan" <

UpdatePlan.nocloud.billing.Plan.nocloud.billing.Plan" 9
GetPlan.nocloud.billing.Plan.nocloud.billing.Plan" J
	ListPlans.nocloud.billing.ListRequest.nocloud.billing.ListResponse" o
ListPlansInstances*.nocloud.billing.ListPlansInstancesRequest+.nocloud.billing.ListPlansInstancesResponse" <

DeletePlan.nocloud.billing.Plan.nocloud.billing.Plan" Q
CreateTransaction.nocloud.billing.Transaction.nocloud.billing.Transaction" [
GetTransactions\'.nocloud.billing.GetTransactionsRequest.nocloud.billing.Transactions" u
GetTransactionsCount,.nocloud.billing.GetTransactionsCountRequest-.nocloud.billing.GetTransactionsCountResponse" _
UpdateTransaction.nocloud.billing.Transaction*.nocloud.billing.UpdateTransactionResponse" F

GetRecords.nocloud.billing.Transaction.nocloud.billing.Records" p
GetInstancesReports*.nocloud.billing.GetInstancesReportRequest+.nocloud.billing.GetInstancesReportResponse" x
GetInstancesReportsCount0.nocloud.billing.GetInstancesReportsCountRequest(.nocloud.billing.GetReportsCountResponse" l
GetRecordsReports).nocloud.billing.GetRecordsReportsRequest*.nocloud.billing.GetRecordsReportsResponse" t
GetRecordsReportsCount..nocloud.billing.GetRecordsReportsCountRequest(.nocloud.billing.GetReportsCountResponse" [
	Reprocess-.nocloud.billing.ReprocessTransactionsRequest.nocloud.billing.Transactions" 2�
CurrencyService`
GetCurrencies%.nocloud.billing.GetCurrenciesRequest&.nocloud.billing.GetCurrenciesResponse" f
GetExchangeRate\'.nocloud.billing.GetExchangeRateRequest(.nocloud.billing.GetExchangeRateResponse" i
GetExchangeRates(.nocloud.billing.GetExchangeRatesRequest).nocloud.billing.GetExchangeRatesResponse" o
CreateExchangeRate*.nocloud.billing.CreateExchangeRateRequest+.nocloud.billing.CreateExchangeRateResponse" o
UpdateExchangeRate*.nocloud.billing.UpdateExchangeRateRequest+.nocloud.billing.UpdateExchangeRateResponse" o
DeleteExchangeRate*.nocloud.billing.DeleteExchangeRateRequest+.nocloud.billing.DeleteExchangeRateResponse" T
Convert".nocloud.billing.ConversionRequest#.nocloud.billing.ConversionResponse" B�
com.nocloud.billingBBillingProtoP�NBX�Nocloud.Billing�Nocloud\\Billing�Nocloud\\Billing\\GPBMetadata�Nocloud::Billingbproto3'
        , true);

        static::$is_initialized = true;
    }
}

