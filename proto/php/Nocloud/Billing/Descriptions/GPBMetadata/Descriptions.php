<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/descriptions/descriptions.proto

namespace Nocloud\Billing\Descriptions\GPBMetadata;

class Descriptions
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\xB4\x05\x0A'billing/descriptions/descriptions.proto\x12\x1Cnocloud.billing.descriptions\"5\x0A\x0BDescription\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x12\x12\x0A\x04text\x18\x02 \x01(\x09R\x04text\"\xA7\x01\x0A\x17ListDescriptionsRequest\x12\x17\x0A\x04page\x18\x01 \x01(\x04H\x00R\x04page\x88\x01\x01\x12\x19\x0A\x05limit\x18\x02 \x01(\x04H\x01R\x05limit\x88\x01\x01\x12\x19\x0A\x05field\x18\x03 \x01(\x09H\x02R\x05field\x88\x01\x01\x12\x17\x0A\x04sort\x18\x04 \x01(\x09H\x03R\x04sort\x88\x01\x01B\x07\x0A\x05_pageB\x08\x0A\x06_limitB\x08\x0A\x06_fieldB\x07\x0A\x05_sort\"\x1A\x0A\x18CountDescriptionsRequest\"1\x0A\x19CountDescriptionsResponse\x12\x14\x0A\x05total\x18\x01 \x01(\x03R\x05total\"i\x0A\x18ListDescriptionsResponse\x12M\x0A\x0Cdescriptions\x18\x01 \x03(\x0B2).nocloud.billing.descriptions.DescriptionR\x0CdescriptionsB\xC7\x01\x0A com.nocloud.billing.descriptionsB\x11DescriptionsProtoP\x01\xA2\x02\x03NBD\xAA\x02\x1CNocloud.Billing.Descriptions\xCA\x02\x1CNocloud\\Billing\\Descriptions\xE2\x02(Nocloud\\Billing\\Descriptions\\GPBMetadata\xEA\x02\x1ENocloud::Billing::Descriptionsb\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

