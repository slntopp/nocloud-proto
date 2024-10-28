<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: settings/settings.proto

namespace Nocloud\Settings\GPBMetadata;

class Settings
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \Google\Api\GPBMetadata\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\xBD\x09\x0A\x17settings/settings.proto\x12\x10nocloud.settings\x1A\x1Cgoogle/api/annotations.proto\" \x0A\x0AGetRequest\x12\x12\x0A\x04keys\x18\x01 \x03(\x09R\x04keys\"\x93\x01\x0A\x0APutRequest\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12\x14\x0A\x05value\x18\x02 \x01(\x09R\x05value\x12%\x0A\x0Bdescription\x18\x03 \x01(\x09H\x00R\x0Bdescription\x88\x01\x01\x12\x1B\x0A\x06public\x18\x04 \x01(\x08H\x01R\x06public\x88\x01\x01B\x0E\x0A\x0C_descriptionB\x09\x0A\x07_public\"\x1F\x0A\x0BPutResponse\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\"\x0D\x0A\x0BKeysRequest\"\x99\x01\x0A\x0CKeysResponse\x126\x0A\x04pool\x18\x01 \x03(\x0B2\".nocloud.settings.KeysResponse.KeyR\x04pool\x1AQ\x0A\x03Key\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12 \x0A\x0Bdescription\x18\x02 \x01(\x09R\x0Bdescription\x12\x16\x0A\x06public\x18\x03 \x01(\x08R\x06public\"!\x0A\x0DDeleteRequest\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\"\"\x0A\x0EDeleteResponse\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\"2\x0A\x08KeyEvent\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12\x14\x0A\x05event\x18\x02 \x01(\x09R\x05event2\xE1\x03\x0A\x0FSettingsService\x12R\x0A\x03Get\x12\x1C.nocloud.settings.GetRequest\x1A\x17.google.protobuf.Struct\"\x14\x82\xD3\xE4\x93\x02\x0E\"\x09/settings:\x01*\x12^\x0A\x03Put\x12\x1C.nocloud.settings.PutRequest\x1A\x1D.nocloud.settings.PutResponse\"\x1A\x82\xD3\xE4\x93\x02\x14\x1A\x0F/settings/{key}:\x01*\x12Z\x0A\x03Sub\x12\x1C.nocloud.settings.GetRequest\x1A\x1A.nocloud.settings.KeyEvent\"\x17\x82\xD3\xE4\x93\x02\x11\x12\x0F/settings/watch0\x01\x12X\x0A\x04Keys\x12\x1D.nocloud.settings.KeysRequest\x1A\x1E.nocloud.settings.KeysResponse\"\x11\x82\xD3\xE4\x93\x02\x0B\x12\x09/settings\x12d\x0A\x06Delete\x12\x1F.nocloud.settings.DeleteRequest\x1A .nocloud.settings.DeleteResponse\"\x17\x82\xD3\xE4\x93\x02\x11*\x0F/settings/{key}B\x86\x01\x0A\x14com.nocloud.settingsB\x0DSettingsProtoP\x01\xA2\x02\x03NSX\xAA\x02\x10Nocloud.Settings\xCA\x02\x10Nocloud\\Settings\xE2\x02\x1CNocloud\\Settings\\GPBMetadata\xEA\x02\x11Nocloud::Settingsb\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

