<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
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
            '
�
settings/settings.protonocloud.settingsgoogle/api/annotations.proto" 

GetRequest
keys (	Rkeys"�

PutRequest
key (	Rkey
value (	Rvalue%
description (	H Rdescription�
public (HRpublic�B
_descriptionB	
_public"
PutResponse
key (	Rkey"
KeysRequest"�
KeysResponse6
pool (2".nocloud.settings.KeysResponse.KeyRpoolQ
Key
key (	Rkey 
description (	Rdescription
public (Rpublic"!
DeleteRequest
key (	Rkey""
DeleteResponse
key (	Rkey2�
SettingsServiceR
Get.nocloud.settings.GetRequest.google.protobuf.Struct"���"	/settings:*^
Put.nocloud.settings.PutRequest.nocloud.settings.PutResponse"���/settings/{key}:*X
Keys.nocloud.settings.KeysRequest.nocloud.settings.KeysResponse"���	/settingsd
Delete.nocloud.settings.DeleteRequest .nocloud.settings.DeleteResponse"���*/settings/{key}B�
com.nocloud.settingsBSettingsProtoP�NSX�Nocloud.Settings�Nocloud\\Settings�Nocloud\\Settings\\GPBMetadata�Nocloud::Settingsbproto3'
        , true);

        static::$is_initialized = true;
    }
}

