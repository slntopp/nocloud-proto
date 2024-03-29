<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: registry/accounts/accounts.proto

namespace Nocloud\Registry\Accounts\GPBMetadata;

class Accounts
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Nocloud\Access\GPBMetadata\Access::initOnce();
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \Nocloud\Notes\GPBMetadata\Notes::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
 registry/accounts/accounts.protonocloud.registry.accountsbilling/billing.protogoogle/protobuf/struct.protonotes/notes.proto"5
Credentials
type (	Rtype
data (	Rdata"�
CreateRequest
title (	Rtitle:
auth (2&.nocloud.registry.accounts.CredentialsRauth
	namespace (	R	namespace
access (H Raccess�5
currency (2.nocloud.billing.CurrencyRcurrency+
data (2.google.protobuf.StructRdataB	
_access"B
CreateResponse
uuid (	Ruuid
	namespace (	R	namespace"8

GetRequest
uuid (	Ruuid
public (Rpublic"Z
SuspendConf
immune (H Rimmune�
limit (HRlimit�B	
_immuneB
_limit"�
Account
uuid (	Ruuid
title (	Rtitle+
data (2.google.protobuf.StructRdata
balance (H Rbalance�3
access (2.nocloud.access.AccessHRaccess�N
suspend_conf (2&.nocloud.registry.accounts.SuspendConfHRsuspendConf�!
	suspended (HR	suspended�:
currency (2.nocloud.billing.CurrencyHRcurrency�@
status	 (2(.nocloud.registry.accounts.AccountStatusRstatus9
admin_notes
 (2.nocloud.notes.AdminNoteR
adminNotesB

_balanceB	
_accessB
_suspend_confB

_suspendedB
	_currency"(
UpdateResponse
result (Rresult"c
ListRequest!
	namespace (	H R	namespace�
depth (HRdepth�B

_namespaceB
_depth"F
ListResponse6
pool (2".nocloud.registry.accounts.AccountRpool"m
SetCredentialsRequest
account (	Raccount:
auth (2&.nocloud.registry.accounts.CredentialsRauth"0
SetCredentialsResponse
result (Rresult"�
TokenRequest:
auth (2&.nocloud.registry.accounts.CredentialsRauth
exp (Rexp

root_claim (R	rootClaim
sp_claim (	RspClaim%
instance_claim (	RinstanceClaim
uuid (	H Ruuid�B
_uuid"%
TokenResponse
token (	Rtoken"#
DeleteRequest
uuid (	Ruuid"(
DeleteResponse
result (Rresult"$
SuspendRequest
uuid (	Ruuid")
SuspendResponse
result (Rresult"&
UnsuspendRequest
uuid (	Ruuid"+
UnsuspendResponse
result (Rresult*9
AccountStatus

ACTIVE 
LOCK
PERMANENT_LOCKB�
com.nocloud.registry.accountsBAccountsProtoP�NRA�Nocloud.Registry.Accounts�Nocloud\\Registry\\Accounts�%Nocloud\\Registry\\Accounts\\GPBMetadata�Nocloud::Registry::Accountsbproto3'
        , true);

        static::$is_initialized = true;
    }
}

