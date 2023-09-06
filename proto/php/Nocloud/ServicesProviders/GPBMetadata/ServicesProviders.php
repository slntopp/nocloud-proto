<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: services_providers/services_providers.proto

namespace Nocloud\ServicesProviders\GPBMetadata;

class ServicesProviders
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \Nocloud\States\GPBMetadata\States::initOnce();
        \Nocloud\Access\GPBMetadata\Access::initOnce();
        $pool->internalAddGeneratedFile(
            '
�1
+services_providers/services_providers.protonocloud.services_providersstates/states.protoaccess/access.proto"�
Var@
value (2*.nocloud.services_providers.Var.ValueEntryRvalueP

ValueEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"3
	ProxyConf
socket (	H Rsocket�B	
_socket"�
LocationConf
x (Rx
y (Ry
id (	Rid
title (	RtitleI
extra (23.nocloud.services_providers.LocationConf.ExtraEntryRextra
type (	RtypeP

ExtraEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�	
ServicesProvider
uuid (	Ruuid
type (	Rtype
title (	RtitleS
secrets (29.nocloud.services_providers.ServicesProvider.SecretsEntryRsecretsJ
vars (26.nocloud.services_providers.ServicesProvider.VarsEntryRvars\\

extentions (2<.nocloud.services_providers.ServicesProvider.ExtentionsEntryR
extentions+
state (2.nocloud.states.StateRstate]
public_data (2<.nocloud.services_providers.ServicesProvider.PublicDataEntryR
publicData
public	 (Rpublic@
proxy
 (2%.nocloud.services_providers.ProxyConfH Rproxy�F
	locations (2(.nocloud.services_providers.LocationConfR	locations3
access (2.nocloud.access.AccessHRaccess�J
meta (26.nocloud.services_providers.ServicesProvider.MetaEntryRmetaR
SecretsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8X
	VarsEntry
key (	Rkey5
value (2.nocloud.services_providers.VarRvalue:8V
ExtentionsEntry
key (	Rkey-
value (2.google.protobuf.StructRvalue:8U
PublicDataEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8O
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8B
_proxyB	
_access"<
TestResponse
result (Rresult
error (	Rerror" 

GetRequest
uuid (	Ruuid"/
ListRequest 
anonymously (Ranonymously"P
ListResponse@
pool (2,.nocloud.services_providers.ServicesProviderRpool"#
DeleteRequest
uuid (	Ruuid"D
DeleteResponse
result (Rresult
services (	Rservices".
ListExtentionsResponse
types (	Rtypes";
BindPlanRequest
uuid (	Ruuid
plans (	Rplans"
BindPlanResponse"=
UnbindPlanRequest
uuid (	Ruuid
plans (	Rplans"
UnbindPlanResponse"�
InvokeRequest
uuid (	Ruuid
method (	RmethodM
params (25.nocloud.services_providers.InvokeRequest.ParamsEntryRparamsQ
ParamsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
InvokeResponse
result (RresultH
meta (24.nocloud.services_providers.InvokeResponse.MetaEntryRmetaO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
PrepSP<
sp (2,.nocloud.services_providers.ServicesProviderRspC
extra (2-.nocloud.services_providers.PrepSP.ExtraEntryRextraP

ExtraEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"
GetTypeRequest"%
GetTypeResponse
type (	Rtype"a
ServicesProvidersExtentionData
uuid (	Ruuid+
data (2.google.protobuf.StructRdata"?
GenericResponse
result (Rresult
error (	Rerror"{
ShowcaseItem
plan (	H Rplan�+
services_provider (	RservicesProvider
	locations (	R	locationsB
_plan"�
Showcase
uuid (	Ruuid
title (	Rtitle
icon (	Ricon>
items (2(.nocloud.services_providers.ShowcaseItemRitems,
promo (2.google.protobuf.ValueRpromo
primary (Rprimary
public (RpublicF
	locations (2(.nocloud.services_providers.LocationConfR	locations"O
	ShowcasesB
	showcases (2$.nocloud.services_providers.ShowcaseR	showcases"�
ObjectPublicData
uuid (	RuuidJ
data (26.nocloud.services_providers.ObjectPublicData.DataEntryRdataO
	DataEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:82�
ServicesProvidersService`
Test,.nocloud.services_providers.ServicesProvider(.nocloud.services_providers.TestResponse" f
Create,.nocloud.services_providers.ServicesProvider,.nocloud.services_providers.ServicesProvider" a
Delete).nocloud.services_providers.DeleteRequest*.nocloud.services_providers.DeleteResponse" f
Update,.nocloud.services_providers.ServicesProvider,.nocloud.services_providers.ServicesProvider" ]
Get&.nocloud.services_providers.GetRequest,.nocloud.services_providers.ServicesProvider" [
List\'.nocloud.services_providers.ListRequest(.nocloud.services_providers.ListResponse" a
Invoke).nocloud.services_providers.InvokeRequest*.nocloud.services_providers.InvokeResponse" P
Prep".nocloud.services_providers.PrepSP".nocloud.services_providers.PrepSP" o
ListExtentions\'.nocloud.services_providers.ListRequest2.nocloud.services_providers.ListExtentionsResponse" g
BindPlan+.nocloud.services_providers.BindPlanRequest,.nocloud.services_providers.BindPlanResponse" m

UnbindPlan-.nocloud.services_providers.UnbindPlanRequest..nocloud.services_providers.UnbindPlanResponse" 2�
"ServicesProvidersExtentionsServiceb
GetType*.nocloud.services_providers.GetTypeRequest+.nocloud.services_providers.GetTypeResponseo
Test:.nocloud.services_providers.ServicesProvidersExtentionData+.nocloud.services_providers.GenericResponses
Register:.nocloud.services_providers.ServicesProvidersExtentionData+.nocloud.services_providers.GenericResponseq
Update:.nocloud.services_providers.ServicesProvidersExtentionData+.nocloud.services_providers.GenericResponseu

Unregister:.nocloud.services_providers.ServicesProvidersExtentionData+.nocloud.services_providers.GenericResponse2�
ShowcasesServiceV
Create$.nocloud.services_providers.Showcase$.nocloud.services_providers.Showcase" a
Delete).nocloud.services_providers.DeleteRequest*.nocloud.services_providers.DeleteResponse" V
Update$.nocloud.services_providers.Showcase$.nocloud.services_providers.Showcase" U
Get&.nocloud.services_providers.GetRequest$.nocloud.services_providers.Showcase" X
List\'.nocloud.services_providers.ListRequest%.nocloud.services_providers.Showcases" B�
com.nocloud.services_providersBServicesProvidersProtoP�NSX�Nocloud.ServicesProviders�Nocloud\\ServicesProviders�%Nocloud\\ServicesProviders\\GPBMetadata�Nocloud::ServicesProvidersbproto3'
        , true);

        static::$is_initialized = true;
    }
}

