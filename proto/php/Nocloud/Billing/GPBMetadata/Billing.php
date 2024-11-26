<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
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
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        \Nocloud\Billing\Addons\GPBMetadata\Addons::initOnce();
        \Nocloud\Billing\Descriptions\GPBMetadata\Descriptions::initOnce();
        \Nocloud\Billing\Promocodes\GPBMetadata\Promocodes::initOnce();
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \Nocloud\States\GPBMetadata\States::initOnce();
        \Nocloud\Statuses\GPBMetadata\Statuses::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\x93\x96\x01\x0A\x15billing/billing.proto\x12\x0Fnocloud.billing\x1A\x1Bbilling/addons/addons.proto\x1A'billing/descriptions/descriptions.proto\x1A#billing/promocodes/promocodes.proto\x1A\x1Cgoogle/protobuf/struct.proto\x1A\x13states/states.proto\x1A\x17statuses/statuses.proto\"F\x0A\x08FeeRange\x12\x12\x0A\x04from\x18\x01 \x01(\x01R\x04from\x12\x0E\x0A\x02to\x18\x02 \x01(\x01R\x02to\x12\x16\x0A\x06factor\x18\x03 \x01(\x01R\x06factor\"\x9E\x01\x0A\x03Fee\x12\x1C\x0A\x09precision\x18\x01 \x01(\x03R\x09precision\x12,\x0A\x05round\x18\x02 \x01(\x0E2\x16.nocloud.billing.RoundR\x05round\x12\x18\x0A\x07default\x18\x03 \x01(\x01R\x07default\x121\x0A\x06ranges\x18\x04 \x03(\x0B2\x19.nocloud.billing.FeeRangeR\x06ranges\";\x0A\x0BCustomEvent\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12\x1A\x0A\x08override\x18\x02 \x01(\x09R\x08override\"\xD9\x05\x0A\x04Plan\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x14\x0A\x05title\x18\x02 \x01(\x09R\x05title\x12\x12\x0A\x04type\x18\x03 \x01(\x09R\x04type\x12\x16\x0A\x06public\x18\x04 \x01(\x08R\x06public\x12-\x0A\x04kind\x18\x05 \x01(\x0E2\x19.nocloud.billing.PlanKindR\x04kind\x12;\x0A\x09resources\x18\x06 \x03(\x0B2\x1D.nocloud.billing.ResourceConfR\x09resources\x12?\x0A\x08products\x18\x07 \x03(\x0B2#.nocloud.billing.Plan.ProductsEntryR\x08products\x123\x0A\x04meta\x18\x08 \x03(\x0B2\x1F.nocloud.billing.Plan.MetaEntryR\x04meta\x12&\x0A\x03fee\x18\x09 \x01(\x0B2\x14.nocloud.billing.FeeR\x03fee\x125\x0A\x08software\x18\x0A \x03(\x0B2\x19.nocloud.ansible.SoftwareR\x08software\x127\x0A\x06status\x18\x0B \x01(\x0E2\x1F.nocloud.statuses.NoCloudStatusR\x06status\x12\x16\x0A\x06addons\x18\x0C \x03(\x09R\x06addons\x12A\x0A\x0Dcustom_events\x18\x0D \x03(\x0B2\x1C.nocloud.billing.CustomEventR\x0CcustomEvents\x1AU\x0A\x0DProductsEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12.\x0A\x05value\x18\x02 \x01(\x0B2\x18.nocloud.billing.ProductR\x05value:\x028\x01\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"\xD9\x03\x0A\x0BListRequest\x12\x17\x0A\x07sp_uuid\x18\x01 \x01(\x09R\x06spUuid\x12 \x0A\x0Banonymously\x18\x02 \x01(\x08R\x0Banonymously\x12!\x0A\x0Cshow_deleted\x18\x03 \x01(\x08R\x0BshowDeleted\x12\x17\x0A\x04page\x18\x04 \x01(\x04H\x00R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x05 \x01(\x04H\x01R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x06 \x01(\x09H\x02R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x07 \x01(\x09H\x03R\x04sort\x88\x01\x01\x12\x17\x0A\x04uuid\x18\x08 \x01(\x09H\x04R\x04uuid\x88\x01\x01\x12C\x0A\x07filters\x18\x0A \x03(\x0B2).nocloud.billing.ListRequest.FiltersEntryR\x07filters\x12#\x0A\x0Dexclude_uuids\x18\x0B \x03(\x09R\x0CexcludeUuids\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sortB\x07\x0A\x05_uuid\"O\x0A\x0CListResponse\x12)\x0A\x04pool\x18\x01 \x03(\x0B2\x15.nocloud.billing.PlanR\x04pool\x12\x14\x0A\x05total\x18\x02 \x01(\x04R\x05total\"S\x0A\x19ListPlansInstancesRequest\x12 \x0A\x0Banonymously\x18\x01 \x01(\x08R\x0Banonymously\x12\x14\x0A\x05uuids\x18\x02 \x03(\x09R\x05uuids\"\xBC\x01\x0A\x1AListPlansInstancesResponse\x12L\x0A\x05plans\x18\x01 \x03(\x0B26.nocloud.billing.ListPlansInstancesResponse.PlansEntryR\x05plans\x1AP\x0A\x0APlansEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"\x92\x02\x0A\x12PlansUniqueRequest\x12\x17\x0A\x07sp_uuid\x18\x01 \x01(\x09R\x06spUuid\x12 \x0A\x0Banonymously\x18\x02 \x01(\x08R\x0Banonymously\x12!\x0A\x0Cshow_deleted\x18\x03 \x01(\x08R\x0BshowDeleted\x12J\x0A\x07filters\x18\x04 \x03(\x0B20.nocloud.billing.PlansUniqueRequest.FiltersEntryR\x07filters\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"[\x0A\x13PlansUniqueResponse\x12\x14\x0A\x05total\x18\x01 \x01(\x04R\x05total\x12.\x0A\x06unique\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x06unique\"\xE0\x04\x0A\x0CResourceConf\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12)\x0A\x04kind\x18\x02 \x01(\x0E2\x15.nocloud.billing.KindR\x04kind\x12\x14\x0A\x05price\x18\x03 \x01(\x01R\x05price\x12\x16\x0A\x06period\x18\x04 \x01(\x03R\x06period\x12\x16\x0A\x06except\x18\x05 \x01(\x08R\x06except\x12,\x0A\x02on\x18\x06 \x03(\x0E2\x1C.nocloud.states.NoCloudStateR\x02on\x12&\x0A\x03fee\x18\x07 \x01(\x0B2\x14.nocloud.billing.FeeR\x03fee\x12\x14\x0A\x05title\x18\x08 \x01(\x09R\x05title\x12;\x0A\x04meta\x18\x09 \x03(\x0B2'.nocloud.billing.ResourceConf.MetaEntryR\x04meta\x12\x16\x0A\x06public\x18\x0A \x01(\x08R\x06public\x12\x18\x0A\x07virtual\x18\x0B \x01(\x08R\x07virtual\x12\x15\x0A\x03min\x18\x0C \x01(\x05H\x00R\x03min\x88\x01\x01\x12\x15\x0A\x03max\x18\x0D \x01(\x05H\x01R\x03max\x88\x01\x01\x12<\x0A\x0Bperiod_kind\x18\x0E \x01(\x0E2\x1B.nocloud.billing.PeriodKindR\x0AperiodKind\x12%\x0A\x0Edescription_id\x18\x0F \x01(\x09R\x0DdescriptionId\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x06\x0A\x04_minB\x06\x0A\x04_max\"\xB6\x05\x0A\x07Product\x12)\x0A\x04kind\x18\x01 \x01(\x0E2\x15.nocloud.billing.KindR\x04kind\x12\x14\x0A\x05title\x18\x02 \x01(\x09R\x05title\x12\x14\x0A\x05price\x18\x03 \x01(\x01R\x05price\x12\x16\x0A\x06period\x18\x04 \x01(\x03R\x06period\x12E\x0A\x09resources\x18\x05 \x03(\x0B2'.nocloud.billing.Product.ResourcesEntryR\x09resources\x126\x0A\x04meta\x18\x06 \x03(\x0B2\".nocloud.billing.Product.MetaEntryR\x04meta\x12\x1B\x0A\x06sorter\x18\x07 \x01(\x05H\x00R\x06sorter\x88\x01\x01\x12.\x0A\x10installation_fee\x18\x08 \x01(\x01H\x01R\x0FinstallationFee\x88\x01\x01\x12\x16\x0A\x06public\x18\x09 \x01(\x08R\x06public\x12\x14\x0A\x05group\x18\x0A \x01(\x09R\x05group\x12<\x0A\x0Bperiod_kind\x18\x0B \x01(\x0E2\x1B.nocloud.billing.PeriodKindR\x0AperiodKind\x12%\x0A\x0Edescription_id\x18\x0C \x01(\x09R\x0DdescriptionId\x12\x16\x0A\x06addons\x18\x0D \x03(\x09R\x06addons\x1AT\x0A\x0EResourcesEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x09\x0A\x07_sorterB\x13\x0A\x11_installation_fee\"\xB0\x04\x0A\x0BTransaction\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x12\x0A\x04exec\x18\x02 \x01(\x03R\x04exec\x12\x12\x0A\x04proc\x18\x03 \x01(\x03R\x04proc\x12\x1C\x0A\x09processed\x18\x04 \x01(\x08R\x09processed\x125\x0A\x08priority\x18\x05 \x01(\x0E2\x19.nocloud.billing.PriorityR\x08priority\x12\x18\x0A\x07account\x18\x06 \x01(\x09R\x07account\x12\x18\x0A\x07service\x18\x07 \x01(\x09R\x07service\x12\x18\x0A\x07records\x18\x08 \x03(\x09R\x07records\x12\x14\x0A\x05total\x18\x09 \x01(\x01R\x05total\x12:\x0A\x04meta\x18\x0A \x03(\x0B2&.nocloud.billing.Transaction.MetaEntryR\x04meta\x125\x0A\x08currency\x18\x0B \x01(\x0B2\x19.nocloud.billing.CurrencyR\x08currency\x12\x18\x0A\x07created\x18\x0C \x01(\x03R\x07created\x12\x17\x0A\x04base\x18\x0D \x01(\x09H\x00R\x04base\x88\x01\x01\x12\x1F\x0A\x08previous\x18\x0E \x01(\x09H\x01R\x08previous\x88\x01\x01\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x07\x0A\x05_baseB\x0B\x0A\x09_previous\"\x86\x01\x0A\x04Item\x12\x16\x0A\x06amount\x18\x01 \x01(\x05R\x06amount\x12\x12\x0A\x04unit\x18\x02 \x01(\x09R\x04unit\x12\x14\x0A\x05price\x18\x03 \x01(\x01R\x05price\x12\x1A\x0A\x08instance\x18\x04 \x01(\x09R\x08instance\x12 \x0A\x0Bdescription\x18\x05 \x01(\x09R\x0Bdescription\"\xE9\x04\x0A\x07Invoice\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x18\x0A\x07payment\x18\x02 \x01(\x03R\x07payment\x12\x1C\x0A\x09processed\x18\x03 \x01(\x03R\x09processed\x12\x1A\x0A\x08returned\x18\x04 \x01(\x03R\x08returned\x12\x1A\x0A\x08deadline\x18\x05 \x01(\x03R\x08deadline\x126\x0A\x06status\x18\x06 \x01(\x0E2\x1E.nocloud.billing.BillingStatusR\x06status\x12\x18\x0A\x07account\x18\x07 \x01(\x09R\x07account\x12\"\x0A\x0Ctransactions\x18\x08 \x03(\x09R\x0Ctransactions\x12\x14\x0A\x05total\x18\x09 \x01(\x01R\x05total\x126\x0A\x04meta\x18\x0A \x03(\x0B2\".nocloud.billing.Invoice.MetaEntryR\x04meta\x125\x0A\x08currency\x18\x0B \x01(\x0B2\x19.nocloud.billing.CurrencyR\x08currency\x12\x18\x0A\x07created\x18\x0C \x01(\x03R\x07created\x12+\x0A\x05items\x18\x0D \x03(\x0B2\x15.nocloud.billing.ItemR\x05items\x12/\x0A\x04type\x18\x0E \x01(\x0E2\x1B.nocloud.billing.ActionTypeR\x04type\x12\x16\x0A\x06number\x18\x0F \x01(\x09R\x06number\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"8\x0A\x08Invoices\x12,\x0A\x04pool\x18\x01 \x03(\x0B2\x18.nocloud.billing.InvoiceR\x04pool\"@\x0A\x0CTransactions\x120\x0A\x04pool\x18\x01 \x03(\x0B2\x1C.nocloud.billing.TransactionR\x04pool\"\xB6\x05\x0A\x06Record\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x14\x0A\x05start\x18\x02 \x01(\x03R\x05start\x12\x10\x0A\x03end\x18\x03 \x01(\x03R\x03end\x12\x12\x0A\x04exec\x18\x04 \x01(\x03R\x04exec\x12\x1C\x0A\x09processed\x18\x05 \x01(\x08R\x09processed\x125\x0A\x08priority\x18\x06 \x01(\x0E2\x19.nocloud.billing.PriorityR\x08priority\x12\x1A\x0A\x08instance\x18\x07 \x01(\x09R\x08instance\x122\x0A\x05state\x18\x08 \x01(\x0E2\x1C.nocloud.states.NoCloudStateR\x05state\x12\x1A\x0A\x08resource\x18\x09 \x01(\x09R\x08resource\x12\x18\x0A\x07product\x18\x0A \x01(\x09R\x07product\x12\x14\x0A\x05total\x18\x0B \x01(\x01R\x05total\x125\x0A\x04meta\x18\x0C \x03(\x0B2!.nocloud.billing.Record.MetaEntryR\x04meta\x125\x0A\x08currency\x18\x0D \x01(\x0B2\x19.nocloud.billing.CurrencyR\x08currency\x12\x18\x0A\x07service\x18\x0E \x01(\x09R\x07service\x12\x18\x0A\x07account\x18\x0F \x01(\x09R\x07account\x12\x17\x0A\x04base\x18\x10 \x01(\x09H\x00R\x04base\x88\x01\x01\x12\x1F\x0A\x08previous\x18\x11 \x01(\x09H\x01R\x08previous\x88\x01\x01\x12\x12\x0A\x04cost\x18\x12 \x01(\x01R\x04cost\x12\x14\x0A\x05addon\x18\x13 \x01(\x09R\x05addon\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x07\x0A\x05_baseB\x0B\x0A\x09_previous\"6\x0A\x07Records\x12+\x0A\x04pool\x18\x01 \x03(\x0B2\x17.nocloud.billing.RecordR\x04pool\"&\x0A\x10GetActiveRequest\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\"\xC0\x02\x0A\x16GetTransactionsRequest\x12\x1D\x0A\x07account\x18\x01 \x01(\x09H\x00R\x07account\x88\x01\x01\x12\x1D\x0A\x07service\x18\x02 \x01(\x09H\x01R\x07service\x88\x01\x01\x12\x17\x0A\x04page\x18\x03 \x01(\x04H\x02R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x04 \x01(\x04H\x03R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x05 \x01(\x09H\x04R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x06 \x01(\x09H\x05R\x04sort\x88\x01\x01\x12\x17\x0A\x04uuid\x18\x07 \x01(\x09H\x06R\x04uuid\x88\x01\x01\x12\x17\x0A\x04type\x18\x08 \x01(\x09H\x07R\x04type\x88\x01\x01B\x0A\x0A\x08_accountB\x0A\x0A\x08_serviceB\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sortB\x07\x0A\x05_uuidB\x07\x0A\x05_type\"8\x0A\x1CReprocessTransactionsRequest\x12\x18\x0A\x07account\x18\x01 \x01(\x09R\x07account\"\x95\x01\x0A\x1BGetTransactionsCountRequest\x12\x1D\x0A\x07account\x18\x01 \x01(\x09H\x00R\x07account\x88\x01\x01\x12\x1D\x0A\x07service\x18\x02 \x01(\x09H\x01R\x07service\x88\x01\x01\x12\x17\x0A\x04type\x18\x03 \x01(\x09H\x02R\x04type\x88\x01\x01B\x0A\x0A\x08_accountB\x0A\x0A\x08_serviceB\x07\x0A\x05_type\"4\x0A\x1CGetTransactionsCountResponse\x12\x14\x0A\x05total\x18\x01 \x01(\x04R\x05total\"B\x0A\x18UpdateTransactionRequest\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x12\x0A\x04exec\x18\x02 \x01(\x03R\x04exec\"n\x0A\x14CreateInvoiceRequest\x122\x0A\x07invoice\x18\x01 \x01(\x0B2\x18.nocloud.billing.InvoiceR\x07invoice\x12\"\x0A\x0Dis_send_email\x18\x02 \x01(\x08R\x0BisSendEmail\"n\x0A\x14UpdateInvoiceRequest\x122\x0A\x07invoice\x18\x01 \x01(\x0B2\x18.nocloud.billing.InvoiceR\x07invoice\x12\"\x0A\x0Dis_send_email\x18\x02 \x01(\x08R\x0BisSendEmail\"\x85\x02\x0A\x1AUpdateInvoiceStatusRequest\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x126\x0A\x06status\x18\x02 \x01(\x0E2\x1E.nocloud.billing.BillingStatusR\x06status\x12J\x0A\x06params\x18\x03 \x01(\x0B22.nocloud.billing.UpdateInvoiceStatusRequest.ParamsR\x06params\x1AO\x0A\x06Params\x12!\x0A\x0Cpayment_date\x18\x01 \x01(\x03R\x0BpaymentDate\x12\"\x0A\x0Dis_send_email\x18\x02 \x01(\x08R\x0BisSendEmail\"\xDC\x02\x0A\x17GetInvoicesCountRequest\x12\x1D\x0A\x07account\x18\x01 \x01(\x09H\x00R\x07account\x88\x01\x01\x12\x1D\x0A\x07service\x18\x02 \x01(\x09H\x01R\x07service\x88\x01\x01\x12;\x0A\x06status\x18\x03 \x01(\x0E2\x1E.nocloud.billing.BillingStatusH\x02R\x06status\x88\x01\x01\x12O\x0A\x07filters\x18\x04 \x03(\x0B25.nocloud.billing.GetInvoicesCountRequest.FiltersEntryR\x07filters\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x0A\x0A\x08_accountB\x0A\x0A\x08_serviceB\x09\x0A\x07_status\"\x82\x04\x0A\x12GetInvoicesRequest\x12\x1D\x0A\x07account\x18\x01 \x01(\x09H\x00R\x07account\x88\x01\x01\x12\x1D\x0A\x07service\x18\x02 \x01(\x09H\x01R\x07service\x88\x01\x01\x12\x17\x0A\x04page\x18\x03 \x01(\x04H\x02R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x04 \x01(\x04H\x03R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x05 \x01(\x09H\x04R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x06 \x01(\x09H\x05R\x04sort\x88\x01\x01\x12\x17\x0A\x04uuid\x18\x07 \x01(\x09H\x06R\x04uuid\x88\x01\x01\x12;\x0A\x06status\x18\x08 \x01(\x0E2\x1E.nocloud.billing.BillingStatusH\x07R\x06status\x88\x01\x01\x12J\x0A\x07filters\x18\x09 \x03(\x0B20.nocloud.billing.GetInvoicesRequest.FiltersEntryR\x07filters\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x0A\x0A\x08_accountB\x0A\x0A\x08_serviceB\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sortB\x07\x0A\x05_uuidB\x09\x0A\x07_status\"0\x0A\x18GetInvoicesCountResponse\x12\x14\x0A\x05total\x18\x01 \x01(\x04R\x05total\"3\x0A\x19UpdateTransactionResponse\x12\x16\x0A\x06result\x18\x01 \x01(\x08R\x06result\"+\x0A\x0APayRequest\x12\x1D\x0A\x0Ainvoice_id\x18\x01 \x01(\x09R\x09invoiceId\"0\x0A\x0BPayResponse\x12!\x0A\x0Cpayment_link\x18\x01 \x01(\x09R\x0BpaymentLink\"\xCC\x01\x0A\x0ECostEstimation\x12L\x0A\x09resources\x18\x01 \x03(\x0B2..nocloud.billing.CostEstimation.ResourcesEntryR\x09resources\x12\x18\x0A\x07product\x18\x02 \x01(\x01R\x07product\x12\x14\x0A\x05total\x18\x03 \x01(\x01R\x05total\x1A<\x0A\x0EResourcesEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12\x14\x0A\x05value\x18\x02 \x01(\x01R\x05value:\x028\x01\"\xE7\x01\x0A\x19GetInstancesReportRequest\x12\x17\x0A\x04from\x18\x01 \x01(\x03H\x00R\x04from\x88\x01\x01\x12\x13\x0A\x02to\x18\x02 \x01(\x03H\x01R\x02to\x88\x01\x01\x12\x17\x0A\x04page\x18\x03 \x01(\x03H\x02R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x04 \x01(\x03H\x03R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x05 \x01(\x09H\x04R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x06 \x01(\x09H\x05R\x04sort\x88\x01\x01B\x07\x0A\x05_fromB\x05\x0A\x03_toB\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sort\"q\x0A\x0EInstanceReport\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x14\x0A\x05total\x18\x02 \x01(\x01R\x05total\x125\x0A\x08currency\x18\x03 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x08currency\"W\x0A\x1AGetInstancesReportResponse\x129\x0A\x07reports\x18\x01 \x03(\x0B2\x1F.nocloud.billing.InstanceReportR\x07reports\"\xA4\x03\x0A\x18GetRecordsReportsRequest\x12\x17\x0A\x04page\x18\x01 \x01(\x03H\x00R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x02 \x01(\x03H\x01R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x03 \x01(\x09H\x02R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x04 \x01(\x09H\x03R\x04sort\x88\x01\x01\x12P\x0A\x07filters\x18\x05 \x03(\x0B26.nocloud.billing.GetRecordsReportsRequest.FiltersEntryR\x07filters\x12\x1D\x0A\x07account\x18\x06 \x01(\x09H\x04R\x07account\x88\x01\x01\x12\x1D\x0A\x07service\x18\x07 \x01(\x09H\x05R\x07service\x88\x01\x01\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sortB\x0A\x0A\x08_accountB\x0A\x0A\x08_service\"z\x0A\x19GetRecordsReportsResponse\x121\x0A\x07records\x18\x01 \x03(\x0B2\x17.nocloud.billing.RecordR\x07records\x12\x14\x0A\x05total\x18\x02 \x01(\x01R\x05total\x12\x14\x0A\x05count\x18\x03 \x01(\x03R\x05count\"!\x0A\x1FGetInstancesReportsCountRequest\"\xA0\x02\x0A\x1DGetRecordsReportsCountRequest\x12U\x0A\x07filters\x18\x01 \x03(\x0B2;.nocloud.billing.GetRecordsReportsCountRequest.FiltersEntryR\x07filters\x12\x1D\x0A\x07account\x18\x02 \x01(\x09H\x00R\x07account\x88\x01\x01\x12\x1D\x0A\x07service\x18\x03 \x01(\x09H\x01R\x07service\x88\x01\x01\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x0A\x0A\x08_accountB\x0A\x0A\x08_service\"_\x0A\x17GetReportsCountResponse\x12\x14\x0A\x05total\x18\x01 \x01(\x03R\x05total\x12.\x0A\x06unique\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x06unique\"\x82\x02\x0A(GetInvoiceSettingsTemplateExampleRequest\x12\x1A\x0A\x08template\x18\x01 \x01(\x09R\x08template\x12!\x0A\x0Cnew_template\x18\x02 \x01(\x09R\x0BnewTemplate\x12*\x0A\x11start_with_number\x18\x03 \x01(\x05R\x0FstartWithNumber\x12,\x0A\x12reset_counter_mode\x18\x04 \x01(\x09R\x10resetCounterMode\x12=\x0A\x1Bissue_renewal_invoice_after\x18\x05 \x01(\x01R\x18issueRenewalInvoiceAfter\"\xD6\x01\x0A)GetInvoiceSettingsTemplateExampleResponse\x12)\x0A\x10template_example\x18\x01 \x01(\x09R\x0FtemplateExample\x120\x0A\x14new_template_example\x18\x02 \x01(\x09R\x12newTemplateExample\x12L\x0A#issue_renewal_invoice_after_example\x18\x03 \x01(\x09R\x1FissueRenewalInvoiceAfterExample\"4\x0A CreateTopUpBalanceInvoiceRequest\x12\x10\x0A\x03sum\x18\x01 \x01(\x01R\x03sum\"9\x0A\x1BCreateRenewalInvoiceRequest\x12\x1A\x0A\x08instance\x18\x01 \x01(\x09R\x08instance\"U\x0A\x15PayWithBalanceRequest\x12!\x0A\x0Cinvoice_uuid\x18\x01 \x01(\x09R\x0BinvoiceUuid\x12\x19\x0A\x08whmcs_id\x18\x02 \x01(\x03R\x07whmcsId\"2\x0A\x16PayWithBalanceResponse\x12\x18\x0A\x07success\x18\x01 \x01(\x08R\x07success\"\x18\x0A\x16RunDailyCronJobRequest\"\x19\x0A\x17RunDailyCronJobResponse\"\xC9\x01\x0A\x08Currency\x12\x0E\x0A\x02id\x18\x01 \x01(\x05R\x02id\x12\x14\x0A\x05title\x18\x02 \x01(\x09R\x05title\x12\x16\x0A\x06public\x18\x03 \x01(\x08R\x06public\x12\x1C\x0A\x09precision\x18\x04 \x01(\x05R\x09precision\x125\x0A\x08rounding\x18\x05 \x01(\x0E2\x19.nocloud.billing.RoundingR\x08rounding\x12\x16\x0A\x06format\x18\x06 \x01(\x09R\x06format\x12\x12\x0A\x04code\x18\x07 \x01(\x09R\x04code\"N\x0A\x15CreateCurrencyRequest\x125\x0A\x08currency\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x08currency\"\x18\x0A\x16CreateCurrencyResponse\"N\x0A\x15UpdateCurrencyRequest\x125\x0A\x08currency\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x08currency\"\x18\x0A\x16UpdateCurrencyResponse\"\xA9\x01\x0A\x19CreateExchangeRateRequest\x12-\x0A\x04from\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x04from\x12)\x0A\x02to\x18\x02 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x02to\x12\x12\x0A\x04rate\x18\x03 \x01(\x01R\x04rate\x12\x1E\x0A\x0Acommission\x18\x04 \x01(\x01R\x0Acommission\"\x1C\x0A\x1ACreateExchangeRateResponse\"\xA9\x01\x0A\x19UpdateExchangeRateRequest\x12-\x0A\x04from\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x04from\x12)\x0A\x02to\x18\x02 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x02to\x12\x12\x0A\x04rate\x18\x03 \x01(\x01R\x04rate\x12\x1E\x0A\x0Acommission\x18\x04 \x01(\x01R\x0Acommission\"\x1C\x0A\x1AUpdateExchangeRateResponse\"u\x0A\x19DeleteExchangeRateRequest\x12-\x0A\x04from\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x04from\x12)\x0A\x02to\x18\x02 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x02to\"\x1C\x0A\x1ADeleteExchangeRateResponse\"\x16\x0A\x14GetCurrenciesRequest\"R\x0A\x15GetCurrenciesResponse\x129\x0A\x0Acurrencies\x18\x01 \x03(\x0B2\x19.nocloud.billing.CurrencyR\x0Acurrencies\"r\x0A\x16GetExchangeRateRequest\x12-\x0A\x04from\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x04from\x12)\x0A\x02to\x18\x02 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x02to\"\x19\x0A\x17GetExchangeRatesRequest\"\xA7\x01\x0A\x17GetExchangeRateResponse\x12-\x0A\x04from\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x04from\x12)\x0A\x02to\x18\x02 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x02to\x12\x12\x0A\x04rate\x18\x03 \x01(\x01R\x04rate\x12\x1E\x0A\x0Acommission\x18\x04 \x01(\x01R\x0Acommission\"Z\x0A\x18GetExchangeRatesResponse\x12>\x0A\x05rates\x18\x01 \x03(\x0B2(.nocloud.billing.GetExchangeRateResponseR\x05rates\"\x85\x01\x0A\x11ConversionRequest\x12-\x0A\x04from\x18\x01 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x04from\x12)\x0A\x02to\x18\x02 \x01(\x0B2\x19.nocloud.billing.CurrencyR\x02to\x12\x16\x0A\x06amount\x18\x03 \x01(\x01R\x06amount\",\x0A\x12ConversionResponse\x12\x16\x0A\x06amount\x18\x01 \x01(\x01R\x06amount*0\x0A\x08PlanKind\x12\x0B\x0A\x07UNKNOWN\x10\x00\x12\x0B\x0A\x07DYNAMIC\x10\x01\x12\x0A\x0A\x06STATIC\x10\x02*1\x0A\x05Round\x12\x08\x0A\x04NONE\x10\x00\x12\x09\x0A\x05FLOOR\x10\x01\x12\x09\x0A\x05ROUND\x10\x02\x12\x08\x0A\x04CEIL\x10\x03*2\x0A\x04Kind\x12\x0F\x0A\x0BUNSPECIFIED\x10\x00\x12\x0C\x0A\x08POSTPAID\x10\x01\x12\x0B\x0A\x07PREPAID\x10\x02*n\x0A\x0APeriodKind\x12\x0B\x0A\x07DEFAULT\x10\x00\x12\x12\x0A\x0ECALENDAR_MONTH\x10\x01\x12\x11\x0A\x0DCALENDAR_YEAR\x10\x02\x12\x14\x0A\x10CALENDAR_QUARTER\x10\x03\x12\x16\x0A\x12CALENDAR_HALF_YEAR\x10\x04*2\x0A\x08Priority\x12\x0A\x0A\x06NORMAL\x10\x00\x12\x0A\x0A\x06URGENT\x10\x01\x12\x0E\x0A\x0AADDITIONAL\x10\x02*x\x0A\x0DBillingStatus\x12\x1A\x0A\x16BILLING_STATUS_UNKNOWN\x10\x00\x12\x08\x0A\x04PAID\x10\x01\x12\x0A\x0A\x06UNPAID\x10\x02\x12\x0C\x0A\x08CANCELED\x10\x03\x12\x0E\x0A\x0ATERMINATED\x10\x04\x12\x09\x0A\x05DRAFT\x10\x05\x12\x0C\x0A\x08RETURNED\x10\x06*~\x0A\x0AActionType\x12\x17\x0A\x13ACTION_TYPE_UNKNOWN\x10\x00\x12\x0D\x0A\x09NO_ACTION\x10\x01\x12\x12\x0A\x0EINSTANCE_START\x10\x02\x12\x14\x0A\x10INSTANCE_RENEWAL\x10\x03\x12\x0B\x0A\x07BALANCE\x10\x04\x12\x11\x0A\x0DWHMCS_INVOICE\x10\x05*8\x0A\x08Rounding\x12\x0E\x0A\x0AROUND_HALF\x10\x00\x12\x0C\x0A\x08ROUND_UP\x10\x01\x12\x0E\x0A\x0AROUND_DOWN\x10\x022\xD6\x01\x0A\x0ERecordsService\x12H\x0A\x09GetActive\x12!.nocloud.billing.GetActiveRequest\x1A\x18.nocloud.billing.Records\x12<\x0A\x06Create\x12\x18.nocloud.billing.Records\x1A\x18.nocloud.billing.Records\x12<\x0A\x06Update\x12\x18.nocloud.billing.Records\x1A\x18.nocloud.billing.Records2\xA1\x15\x0A\x0EBillingService\x12<\x0A\x0ACreatePlan\x12\x15.nocloud.billing.Plan\x1A\x15.nocloud.billing.Plan\"\x00\x12<\x0A\x0AUpdatePlan\x12\x15.nocloud.billing.Plan\x1A\x15.nocloud.billing.Plan\"\x00\x129\x0A\x07GetPlan\x12\x15.nocloud.billing.Plan\x1A\x15.nocloud.billing.Plan\"\x00\x12J\x0A\x09ListPlans\x12\x1C.nocloud.billing.ListRequest\x1A\x1D.nocloud.billing.ListResponse\"\x00\x12o\x0A\x12ListPlansInstances\x12*.nocloud.billing.ListPlansInstancesRequest\x1A+.nocloud.billing.ListPlansInstancesResponse\"\x00\x12Z\x0A\x0BPlansUnique\x12#.nocloud.billing.PlansUniqueRequest\x1A\$.nocloud.billing.PlansUniqueResponse\"\x00\x12<\x0A\x0ADeletePlan\x12\x15.nocloud.billing.Plan\x1A\x15.nocloud.billing.Plan\"\x00\x12Q\x0A\x11CreateTransaction\x12\x1C.nocloud.billing.Transaction\x1A\x1C.nocloud.billing.Transaction\"\x00\x12[\x0A\x0FGetTransactions\x12'.nocloud.billing.GetTransactionsRequest\x1A\x1D.nocloud.billing.Transactions\"\x00\x12u\x0A\x14GetTransactionsCount\x12,.nocloud.billing.GetTransactionsCountRequest\x1A-.nocloud.billing.GetTransactionsCountResponse\"\x00\x12_\x0A\x11UpdateTransaction\x12\x1C.nocloud.billing.Transaction\x1A*.nocloud.billing.UpdateTransactionResponse\"\x00\x12F\x0A\x0AGetRecords\x12\x1C.nocloud.billing.Transaction\x1A\x18.nocloud.billing.Records\"\x00\x12p\x0A\x13GetInstancesReports\x12*.nocloud.billing.GetInstancesReportRequest\x1A+.nocloud.billing.GetInstancesReportResponse\"\x00\x12x\x0A\x18GetInstancesReportsCount\x120.nocloud.billing.GetInstancesReportsCountRequest\x1A(.nocloud.billing.GetReportsCountResponse\"\x00\x12l\x0A\x11GetRecordsReports\x12).nocloud.billing.GetRecordsReportsRequest\x1A*.nocloud.billing.GetRecordsReportsResponse\"\x00\x12t\x0A\x16GetRecordsReportsCount\x12..nocloud.billing.GetRecordsReportsCountRequest\x1A(.nocloud.billing.GetReportsCountResponse\"\x00\x12[\x0A\x09Reprocess\x12-.nocloud.billing.ReprocessTransactionsRequest\x1A\x1D.nocloud.billing.Transactions\"\x00\x12R\x0A\x0DCreateInvoice\x12%.nocloud.billing.CreateInvoiceRequest\x1A\x18.nocloud.billing.Invoice\"\x00\x12B\x0A\x0AGetInvoice\x12\x18.nocloud.billing.Invoice\x1A\x18.nocloud.billing.Invoice\"\x00\x12O\x0A\x0BGetInvoices\x12#.nocloud.billing.GetInvoicesRequest\x1A\x19.nocloud.billing.Invoices\"\x00\x12i\x0A\x10GetInvoicesCount\x12(.nocloud.billing.GetInvoicesCountRequest\x1A).nocloud.billing.GetInvoicesCountResponse\"\x00\x12R\x0A\x0DUpdateInvoice\x12%.nocloud.billing.UpdateInvoiceRequest\x1A\x18.nocloud.billing.Invoice\"\x00\x12B\x0A\x03Pay\x12\x1B.nocloud.billing.PayRequest\x1A\x1C.nocloud.billing.PayResponse\"\x00\x12^\x0A\x13UpdateInvoiceStatus\x12+.nocloud.billing.UpdateInvoiceStatusRequest\x1A\x18.nocloud.billing.Invoice\"\x00\x12j\x0A\x19CreateTopUpBalanceInvoice\x121.nocloud.billing.CreateTopUpBalanceInvoiceRequest\x1A\x18.nocloud.billing.Invoice\"\x00\x12`\x0A\x14CreateRenewalInvoice\x12,.nocloud.billing.CreateRenewalInvoiceRequest\x1A\x18.nocloud.billing.Invoice\"\x00\x12c\x0A\x0EPayWithBalance\x12&.nocloud.billing.PayWithBalanceRequest\x1A'.nocloud.billing.PayWithBalanceResponse\"\x00\x12\x9C\x01\x0A!GetInvoiceSettingsTemplateExample\x129.nocloud.billing.GetInvoiceSettingsTemplateExampleRequest\x1A:.nocloud.billing.GetInvoiceSettingsTemplateExampleResponse\"\x00\x12f\x0A\x0FRunDailyCronJob\x12'.nocloud.billing.RunDailyCronJobRequest\x1A(.nocloud.billing.RunDailyCronJobResponse\"\x002\xB9\x07\x0A\x0FCurrencyService\x12c\x0A\x0ECreateCurrency\x12&.nocloud.billing.CreateCurrencyRequest\x1A'.nocloud.billing.CreateCurrencyResponse\"\x00\x12c\x0A\x0EUpdateCurrency\x12&.nocloud.billing.UpdateCurrencyRequest\x1A'.nocloud.billing.UpdateCurrencyResponse\"\x00\x12`\x0A\x0DGetCurrencies\x12%.nocloud.billing.GetCurrenciesRequest\x1A&.nocloud.billing.GetCurrenciesResponse\"\x00\x12f\x0A\x0FGetExchangeRate\x12'.nocloud.billing.GetExchangeRateRequest\x1A(.nocloud.billing.GetExchangeRateResponse\"\x00\x12i\x0A\x10GetExchangeRates\x12(.nocloud.billing.GetExchangeRatesRequest\x1A).nocloud.billing.GetExchangeRatesResponse\"\x00\x12o\x0A\x12CreateExchangeRate\x12*.nocloud.billing.CreateExchangeRateRequest\x1A+.nocloud.billing.CreateExchangeRateResponse\"\x00\x12o\x0A\x12UpdateExchangeRate\x12*.nocloud.billing.UpdateExchangeRateRequest\x1A+.nocloud.billing.UpdateExchangeRateResponse\"\x00\x12o\x0A\x12DeleteExchangeRate\x12*.nocloud.billing.DeleteExchangeRateRequest\x1A+.nocloud.billing.DeleteExchangeRateResponse\"\x00\x12T\x0A\x07Convert\x12\".nocloud.billing.ConversionRequest\x1A#.nocloud.billing.ConversionResponse\"\x002\xA9\x05\x0A\x0DAddonsService\x12H\x0A\x06Create\x12\x1D.nocloud.billing.addons.Addon\x1A\x1D.nocloud.billing.addons.Addon\"\x00\x12V\x0A\x0ACreateBulk\x12\".nocloud.billing.addons.BulkAddons\x1A\".nocloud.billing.addons.BulkAddons\"\x00\x12H\x0A\x06Update\x12\x1D.nocloud.billing.addons.Addon\x1A\x1D.nocloud.billing.addons.Addon\"\x00\x12V\x0A\x0AUpdateBulk\x12\".nocloud.billing.addons.BulkAddons\x1A\".nocloud.billing.addons.BulkAddons\"\x00\x12E\x0A\x03Get\x12\x1D.nocloud.billing.addons.Addon\x1A\x1D.nocloud.billing.addons.Addon\"\x00\x12_\x0A\x04List\x12).nocloud.billing.addons.ListAddonsRequest\x1A*.nocloud.billing.addons.ListAddonsResponse\"\x00\x12b\x0A\x05Count\x12*.nocloud.billing.addons.CountAddonsRequest\x1A+.nocloud.billing.addons.CountAddonsResponse\"\x00\x12H\x0A\x06Delete\x12\x1D.nocloud.billing.addons.Addon\x1A\x1D.nocloud.billing.addons.Addon\"\x002\x8F\x05\x0A\x13DescriptionsService\x12`\x0A\x06Create\x12).nocloud.billing.descriptions.Description\x1A).nocloud.billing.descriptions.Description\"\x00\x12`\x0A\x06Update\x12).nocloud.billing.descriptions.Description\x1A).nocloud.billing.descriptions.Description\"\x00\x12]\x0A\x03Get\x12).nocloud.billing.descriptions.Description\x1A).nocloud.billing.descriptions.Description\"\x00\x12w\x0A\x04List\x125.nocloud.billing.descriptions.ListDescriptionsRequest\x1A6.nocloud.billing.descriptions.ListDescriptionsResponse\"\x00\x12z\x0A\x05Count\x126.nocloud.billing.descriptions.CountDescriptionsRequest\x1A7.nocloud.billing.descriptions.CountDescriptionsResponse\"\x00\x12`\x0A\x06Delete\x12).nocloud.billing.descriptions.Description\x1A).nocloud.billing.descriptions.Description\"\x002\xB1\x07\x0A\x11PromocodesService\x12X\x0A\x06Create\x12%.nocloud.billing.promocodes.Promocode\x1A%.nocloud.billing.promocodes.Promocode\"\x00\x12X\x0A\x06Update\x12%.nocloud.billing.promocodes.Promocode\x1A%.nocloud.billing.promocodes.Promocode\"\x00\x12U\x0A\x03Get\x12%.nocloud.billing.promocodes.Promocode\x1A%.nocloud.billing.promocodes.Promocode\"\x00\x12k\x0A\x09GetByCode\x125.nocloud.billing.promocodes.GetPromocodeByCodeRequest\x1A%.nocloud.billing.promocodes.Promocode\"\x00\x12o\x0A\x04List\x121.nocloud.billing.promocodes.ListPromocodesRequest\x1A2.nocloud.billing.promocodes.ListPromocodesResponse\"\x00\x12r\x0A\x05Count\x122.nocloud.billing.promocodes.CountPromocodesRequest\x1A3.nocloud.billing.promocodes.CountPromocodesResponse\"\x00\x12X\x0A\x06Delete\x12%.nocloud.billing.promocodes.Promocode\x1A%.nocloud.billing.promocodes.Promocode\"\x00\x12p\x0A\x05Apply\x121.nocloud.billing.promocodes.ApplyPromocodeRequest\x1A2.nocloud.billing.promocodes.ApplyPromocodeResponse\"\x00\x12s\x0A\x06Detach\x122.nocloud.billing.promocodes.DetachPromocodeRequest\x1A3.nocloud.billing.promocodes.DetachPromocodeResponse\"\x00B\x80\x01\x0A\x13com.nocloud.billingB\x0CBillingProtoP\x01\xA2\x02\x03NBX\xAA\x02\x0FNocloud.Billing\xCA\x02\x0FNocloud\\Billing\xE2\x02\x1BNocloud\\Billing\\GPBMetadata\xEA\x02\x10Nocloud::Billingb\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

