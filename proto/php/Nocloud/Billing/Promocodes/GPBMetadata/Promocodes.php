<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/promocodes/promocodes.proto

namespace Nocloud\Billing\Promocodes\GPBMetadata;

class Promocodes
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\xD5\x16\x0A#billing/promocodes/promocodes.proto\x12\x1Anocloud.billing.promocodes\"\x9F\x05\x0A\x09Promocode\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x14\x0A\x05title\x18\x02 \x01(\x09R\x05title\x12 \x0A\x0Bdescription\x18\x03 \x01(\x09R\x0Bdescription\x12\x12\x0A\x04code\x18\x04 \x01(\x09R\x04code\x12C\x0A\x06status\x18\x05 \x01(\x0E2+.nocloud.billing.promocodes.PromocodeStatusR\x06status\x12@\x0A\x05state\x18\x06 \x01(\x0E2*.nocloud.billing.promocodes.PromocodeStateR\x05state\x12\x19\x0A\x08due_date\x18\x07 \x01(\x03R\x07dueDate\x12\x14\x0A\x05limit\x18\x08 \x01(\x03R\x05limit\x12\"\x0A\x0Duses_per_user\x18\x09 \x01(\x03R\x0BusesPerUser\x12\x1F\x0A\x0Bactive_time\x18\x0A \x01(\x03R\x0AactiveTime\x12C\x0A\x04meta\x18\x0B \x03(\x0B2/.nocloud.billing.promocodes.Promocode.MetaEntryR\x04meta\x12\x18\x0A\x07created\x18\x0C \x01(\x03R\x07created\x12F\x0A\x0Bpromo_items\x18\x0D \x03(\x0B2%.nocloud.billing.promocodes.PromoItemR\x0ApromoItems\x12=\x0A\x04uses\x18\x0E \x03(\x0B2).nocloud.billing.promocodes.EntryResourceR\x04uses\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"\x8B\x02\x0A\x09PromoItem\x12?\x0A\x06schema\x18\x01 \x01(\x0B2'.nocloud.billing.promocodes.PromoSchemaR\x06schema\x12P\x0A\x0Aplan_promo\x18\x02 \x01(\x0B2,.nocloud.billing.promocodes.BillingPlanPromoH\x00R\x09planPromo\x88\x01\x01\x12L\x0A\x0Baddon_promo\x18\x03 \x01(\x0B2&.nocloud.billing.promocodes.AddonPromoH\x01R\x0AaddonPromo\x88\x01\x01B\x0D\x0A\x0B_plan_promoB\x0E\x0A\x0C_addon_promo\"\xCA\x01\x0A\x0BPromoSchema\x12.\x0A\x10discount_percent\x18\x01 \x01(\x01H\x00R\x0FdiscountPercent\x88\x01\x01\x12,\x0A\x0Fdiscount_amount\x18\x02 \x01(\x03H\x01R\x0EdiscountAmount\x88\x01\x01\x12\$\x0A\x0Bfixed_price\x18\x03 \x01(\x03H\x02R\x0AfixedPrice\x88\x01\x01B\x13\x0A\x11_discount_percentB\x12\x0A\x10_discount_amountB\x0E\x0A\x0C_fixed_price\"\xB3\x01\x0A\x10BillingPlanPromo\x12!\x0A\x0Cbilling_plan\x18\x01 \x01(\x09R\x0BbillingPlan\x12\x1F\x0A\x08resource\x18\x02 \x01(\x09H\x00R\x08resource\x88\x01\x01\x12\x1D\x0A\x07product\x18\x03 \x01(\x09H\x01R\x07product\x88\x01\x01\x12\x19\x0A\x05addon\x18\x04 \x01(\x09H\x02R\x05addon\x88\x01\x01B\x0B\x0A\x09_resourceB\x0A\x0A\x08_productB\x08\x0A\x06_addon\"\"\x0A\x0AAddonPromo\x12\x14\x0A\x05addon\x18\x01 \x01(\x09R\x05addon\"\x96\x01\x0A\x0DEntryResource\x12\x1D\x0A\x07invoice\x18\x01 \x01(\x09H\x00R\x07invoice\x88\x01\x01\x12\x1F\x0A\x08instance\x18\x02 \x01(\x09H\x01R\x08instance\x88\x01\x01\x12\x12\x0A\x04exec\x18\x03 \x01(\x03R\x04exec\x12\x18\x0A\x07account\x18\x04 \x01(\x09R\x07accountB\x0A\x0A\x08_invoiceB\x0B\x0A\x09_instance\"\xD3\x02\x0A\x15ListPromocodesRequest\x12\x17\x0A\x04page\x18\x01 \x01(\x04H\x00R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x02 \x01(\x04H\x01R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x03 \x01(\x09H\x02R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x04 \x01(\x09H\x03R\x04sort\x88\x01\x01\x12X\x0A\x07filters\x18\x05 \x03(\x0B2>.nocloud.billing.promocodes.ListPromocodesRequest.FiltersEntryR\x07filters\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sort\"\xC7\x01\x0A\x16CountPromocodesRequest\x12Y\x0A\x07filters\x18\x01 \x03(\x0B2?.nocloud.billing.promocodes.CountPromocodesRequest.FiltersEntryR\x07filters\x1AR\x0A\x0CFiltersEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"/\x0A\x19GetPromocodeByCodeRequest\x12\x12\x0A\x04code\x18\x01 \x01(\x09R\x04code\"G\x0A\x15ApplyPromocodeRequest\x12\x12\x0A\x04code\x18\x01 \x01(\x09R\x04code\x12\x1A\x0A\x08resource\x18\x02 \x01(\x09R\x08resource\"H\x0A\x16DetachPromocodeRequest\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x1A\x0A\x08resource\x18\x02 \x01(\x09R\x08resource\"/\x0A\x17CountPromocodesResponse\x12\x14\x0A\x05total\x18\x01 \x01(\x03R\x05total\"_\x0A\x16ListPromocodesResponse\x12E\x0A\x0Apromocodes\x18\x01 \x03(\x0B2%.nocloud.billing.promocodes.PromocodeR\x0Apromocodes\"2\x0A\x16ApplyPromocodeResponse\x12\x18\x0A\x07success\x18\x01 \x01(\x08R\x07success\"3\x0A\x17DetachPromocodeResponse\x12\x18\x0A\x07success\x18\x01 \x01(\x08R\x07success*9\x0A\x0FPromocodeStatus\x12\x0A\x0A\x06ACTIVE\x10\x00\x12\x0D\x0A\x09SUSPENDED\x10\x01\x12\x0B\x0A\x07DELETED\x10\x02*B\x0A\x0EPromocodeState\x12\x0A\x0A\x06USABLE\x10\x00\x12\x0B\x0A\x07EXPIRED\x10\x01\x12\x0D\x0A\x09ALL_TAKEN\x10\x02\x12\x08\x0A\x04USED\x10\x03B\xBB\x01\x0A\x1Ecom.nocloud.billing.promocodesB\x0FPromocodesProtoP\x01\xA2\x02\x03NBP\xAA\x02\x1ANocloud.Billing.Promocodes\xCA\x02\x1ANocloud\\Billing\\Promocodes\xE2\x02&Nocloud\\Billing\\Promocodes\\GPBMetadata\xEA\x02\x1CNocloud::Billing::Promocodesb\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

