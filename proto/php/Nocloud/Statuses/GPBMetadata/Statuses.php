<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: statuses/statuses.proto

namespace Nocloud\Statuses\GPBMetadata;

class Statuses
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\xF1\x04\x0A\x17statuses/statuses.proto\x12\x10nocloud.statuses\"\xE6\x01\x0A\x06Status\x127\x0A\x06status\x18\x01 \x01(\x0E2\x1F.nocloud.statuses.NoCloudStatusR\x06status\x126\x0A\x04meta\x18\x02 \x03(\x0B2\".nocloud.statuses.Status.MetaEntryR\x04meta\x12\x13\x0A\x02ts\x18\x03 \x01(\x03H\x00R\x02ts\x88\x01\x01\x1AO\x0A\x09MetaEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01B\x05\x0A\x03_ts\"T\x0A\x0CObjectStatus\x12\x12\x0A\x04uuid\x18\x01 \x01(\x09R\x04uuid\x120\x0A\x06status\x18\x02 \x01(\x0B2\x18.nocloud.statuses.StatusR\x06status*t\x0A\x0DNoCloudStatus\x12\x0F\x0A\x0BUNSPECIFIED\x10\x00\x12\x08\x0A\x04INIT\x10\x01\x12\x0C\x0A\x08MODIFIED\x10\x02\x12\x06\x0A\x02UP\x10\x03\x12\x08\x0A\x04DOWN\x10\x04\x12\x07\x0A\x03DEL\x10\x05\x12\x08\x0A\x04PROC\x10\x06\x12\x07\x0A\x03SUS\x10\x07\x12\x0C\x0A\x08DETACHED\x10\x08B\x86\x01\x0A\x14com.nocloud.statusesB\x0DStatusesProtoP\x01\xA2\x02\x03NSX\xAA\x02\x10Nocloud.Statuses\xCA\x02\x10Nocloud\\Statuses\xE2\x02\x1CNocloud\\Statuses\\GPBMetadata\xEA\x02\x11Nocloud::Statusesb\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

