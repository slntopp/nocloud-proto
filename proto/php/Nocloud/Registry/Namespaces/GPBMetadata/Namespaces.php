<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: registry/namespaces/namespaces.proto

namespace Nocloud\Registry\Namespaces\GPBMetadata;

class Namespaces
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Nocloud\Access\GPBMetadata\Access::initOnce();
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        $pool->internalAddGeneratedFile(
            '
�	
$registry/namespaces/namespaces.protonocloud.registry.namespacesgoogle/protobuf/struct.proto"%
CreateRequest
title (	Rtitle"$
CreateResponse
uuid (	Ruuid"�
	Namespace
uuid (	Ruuid
title (	Rtitle3
access (2.nocloud.access.AccessH Raccess�
type (	HRtype�B	
_accessB
_type"m
JoinRequest
	namespace (	R	namespace
account (	Raccount
access (H Raccess�B	
_access"&
JoinResponse
result (Rresult"�
LinkRequest
	namespace (	R	namespace
account (	Raccount
access (H Raccess�
role (	HRrole�B	
_accessB
_role"&
LinkResponse
result (Rresult"2
ListRequest
depth (H Rdepth�B
_depth"J
ListResponse:
pool (2&.nocloud.registry.namespaces.NamespaceRpool"#
DeleteRequest
uuid (	Ruuid"(
DeleteResponse
result (Rresult"8
PatchRequest
uuid (	Ruuid
title (	Rtitle"\'
PatchResponse
result (RresultB�
com.nocloud.registry.namespacesBNamespacesProtoP�NRN�Nocloud.Registry.Namespaces�Nocloud\\Registry\\Namespaces�\'Nocloud\\Registry\\Namespaces\\GPBMetadata�Nocloud::Registry::Namespacesbproto3'
        , true);

        static::$is_initialized = true;
    }
}

