<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: dns/dns.proto

namespace Nocloud\Dns\GPBMetadata;

class Dns
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Google\Api\GPBMetadata\Annotations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
dns/dns.protonocloud.dns"�
Record#
a (2.nocloud.dns.Record.ARa,
aaaa (2.nocloud.dns.Record.AAAARaaaa/
cname (2.nocloud.dns.Record.CNAMERcname)
txt (2.nocloud.dns.Record.TXTRtxt%
A
ip (	Rip
ttl (Rttl(
AAAA
ip (	Rip
ttl (Rttl-
CNAME
host (	Rhost
ttl (Rttl+
TXT
text (	Rtext
ttl (Rttl"�
Zone
name (	Rname>
	locations (2 .nocloud.dns.Zone.LocationsEntryR	locationsQ
LocationsEntry
key (	Rkey)
value (2.nocloud.dns.RecordRvalue:8"
ListRequest"$
ListResponse
zones (	Rzones" 
Result
result (Rresult2�
DNS-
Get.nocloud.dns.Zone.nocloud.dns.Zone" =
List.nocloud.dns.ListRequest.nocloud.dns.ListResponse" /
Put.nocloud.dns.Zone.nocloud.dns.Result" 2
Delete.nocloud.dns.Zone.nocloud.dns.Result" Bh
com.nocloud.dnsBDnsProtoP�NDX�Nocloud.Dns�Nocloud\\Dns�Nocloud\\Dns\\GPBMetadata�Nocloud::Dnsbproto3'
        , true);

        static::$is_initialized = true;
    }
}

