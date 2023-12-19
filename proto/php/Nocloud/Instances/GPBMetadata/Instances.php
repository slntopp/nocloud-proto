<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: instances/instances.proto

namespace Nocloud\Instances\GPBMetadata;

class Instances
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Nocloud\Access\GPBMetadata\Access::initOnce();
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \Nocloud\Hasher\GPBMetadata\Hasher::initOnce();
        \Nocloud\Notes\GPBMetadata\Notes::initOnce();
        \Nocloud\ServicesProviders\GPBMetadata\ServicesProviders::initOnce();
        \Nocloud\States\GPBMetadata\States::initOnce();
        \Nocloud\Statuses\GPBMetadata\Statuses::initOnce();
        $pool->internalAddGeneratedFile(
            '
�\'
instances/instances.protonocloud.instancesansible/ansible.protobilling/billing.protogoogle/protobuf/struct.protohasher/hasherpb/hasher.protonotes/notes.proto+services_providers/services_providers.protostates/states.protostatuses/statuses.proto"�
Instance
uuid (	Ruuid
title (	Rtitle7
status (2.nocloud.statuses.NoCloudStatusRstatusE
config (2\'.nocloud.instances.Instance.ConfigEntryBеRconfigN
	resources (2*.nocloud.instances.Instance.ResourcesEntryBеR	resources9
data (2%.nocloud.instances.Instance.DataEntryRdata+
state (2.nocloud.states.StateRstate
hash (	B��Rhash>
billing_plan	 (2.nocloud.billing.PlanB��RbillingPlan
product
 (	H Rproduct�3
access (2.nocloud.access.AccessHRaccess�
created (Rcreated5
software (2.nocloud.ansible.SoftwareRsoftware9
admin_notes (2.nocloud.notes.AdminNoteR
adminNotesQ
ConfigEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8T
ResourcesEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8O
	DataEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8B

_productB	
_access"�
InstancesGroup
uuid (	Ruuid
type (	Rtype
title (	Rtitle7
status (2.nocloud.statuses.NoCloudStatusRstatusK
config (2-.nocloud.instances.InstancesGroup.ConfigEntryBеRconfig?
	instances (2.nocloud.instances.InstanceBеR	instancesT
	resources (20.nocloud.instances.InstancesGroup.ResourcesEntryBеR	resources?
data (2+.nocloud.instances.InstancesGroup.DataEntryRdata
hash	 (	B��Rhash
sp
 (	H Rsp�3
access (2.nocloud.access.AccessHRaccess�Q
ConfigEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8T
ResourcesEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8O
	DataEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8B
_spB	
_access"�
TestInstancesGroupConfigRequest7
group (2!.nocloud.instances.InstancesGroupRgroup<
sp (2,.nocloud.services_providers.ServicesProviderRsp-
estimate_instances (	RestimateInstances"Q
TestInstancesGroupConfigError
error (	Rerror
instance (	Rinstance"�
InstanceCostEstimationB
down_payment (2.nocloud.billing.CostEstimationRdownPayment9
general (2.nocloud.billing.CostEstimationRgeneral"�
 TestInstancesGroupConfigResponse
result (RresultH
errors (20.nocloud.instances.TestInstancesGroupConfigErrorRerrorsf
estimations (2D.nocloud.instances.TestInstancesGroupConfigResponse.EstimationsEntryRestimationsi
EstimationsEntry
key (	Rkey?
value (2).nocloud.instances.InstanceCostEstimationRvalue:8"�
InvokeRequest
uuid (	Ruuid
method (	RmethodD
params (2,.nocloud.instances.InvokeRequest.ParamsEntryRparamsQ
ParamsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
InvokeResponse
result (Rresult?
meta (2+.nocloud.instances.InvokeResponse.MetaEntryRmetaO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"#
DeleteRequest
uuid (	Ruuid"�
DeleteResponse
result (Rresult?
meta (2+.nocloud.instances.DeleteResponse.MetaEntryRmetaO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"A
TransferIGRequest
uuid (	Ruuid
service (	Rservice"�
TransferIGResponse
result (RresultC
meta (2/.nocloud.instances.TransferIGResponse.MetaEntryRmetaO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"=
TransferInstanceRequest
uuid (	Ruuid
ig (	Rig"�
TransferInstanceResponse
result (RresultI
meta (25.nocloud.instances.TransferInstanceResponse.MetaEntryRmetaO
	MetaEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�

ObjectData
uuid (	Ruuid;
data (2\'.nocloud.instances.ObjectData.DataEntryRdataO
	DataEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:82�
InstancesServiceO
Invoke .nocloud.instances.InvokeRequest!.nocloud.instances.InvokeResponse" O
Delete .nocloud.instances.DeleteRequest!.nocloud.instances.DeleteResponse" G
AddNote.nocloud.notes.AddNoteRequest.nocloud.notes.NoteResponse" K
	PatchNote.nocloud.notes.PatchNoteRequest.nocloud.notes.NoteResponse" M

RemoveNote .nocloud.notes.RemoveNoteRequest.nocloud.notes.NoteResponse" O
Detach .nocloud.instances.DeleteRequest!.nocloud.instances.DeleteResponse" O
Attach .nocloud.instances.DeleteRequest!.nocloud.instances.DeleteResponse" [

TransferIG$.nocloud.instances.TransferIGRequest%.nocloud.instances.TransferIGResponse" m
TransferInstance*.nocloud.instances.TransferInstanceRequest+.nocloud.instances.TransferInstanceResponse" B�
com.nocloud.instancesBInstancesProtoP�NIX�Nocloud.Instances�Nocloud\\Instances�Nocloud\\Instances\\GPBMetadata�Nocloud::Instancesbproto3'
        , true);

        static::$is_initialized = true;
    }
}

