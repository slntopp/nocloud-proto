<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: drivers/instance/vanilla/driver.proto

namespace Nocloud\Instance\Driver\Vanilla\GPBMetadata;

class Driver
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Nocloud\Billing\Addons\GPBMetadata\Addons::initOnce();
        \Nocloud\Services\GPBMetadata\Services::initOnce();
        \Nocloud\Instances\GPBMetadata\Instances::initOnce();
        \Nocloud\ServicesProviders\GPBMetadata\ServicesProviders::initOnce();
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\x9B\x1F\x0A%drivers/instance/vanilla/driver.proto\x12\x1Fnocloud.instance.driver.vanilla\x1A\x17services/services.proto\x1A\x19instances/instances.proto\x1A+services_providers/services_providers.proto\x1A\x1Cgoogle/protobuf/struct.proto\"\x9E\x01\x0A TestServiceProviderConfigRequest\x12Y\x0A\x11services_provider\x18\x01 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\x12\x1F\x0A\x0Bsyntax_only\x18\x02 \x01(\x08R\x0AsyntaxOnly\"\x10\x0A\x0EGetTypeRequest\"%\x0A\x0FGetTypeResponse\x12\x12\x0A\x04type\x18\x01 \x01(\x09R\x04type\"\x9F\x01\x0A\x09UpRequest\x127\x0A\x05group\x18\x01 \x01(\x0B2!.nocloud.instances.InstancesGroupR\x05group\x12Y\x0A\x11services_provider\x18\x02 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\"E\x0A\x0AUpResponse\x127\x0A\x05group\x18\x01 \x01(\x0B2!.nocloud.instances.InstancesGroupR\x05group\"\xA1\x01\x0A\x0BDownRequest\x127\x0A\x05group\x18\x01 \x01(\x0B2!.nocloud.instances.InstancesGroupR\x05group\x12Y\x0A\x11services_provider\x18\x02 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\"G\x0A\x0CDownResponse\x127\x0A\x05group\x18\x01 \x01(\x0B2!.nocloud.instances.InstancesGroupR\x05group\"\x90\x04\x0A\x11MonitoringRequest\x129\x0A\x06groups\x18\x01 \x03(\x0B2!.nocloud.instances.InstancesGroupR\x06groups\x12Y\x0A\x11services_provider\x18\x02 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\x12\x1C\x0A\x09scheduled\x18\x03 \x01(\x08R\x09scheduled\x12Y\x0A\x07balance\x18\x04 \x03(\x0B2?.nocloud.instance.driver.vanilla.MonitoringRequest.BalanceEntryR\x07balance\x12V\x0A\x06addons\x18\x05 \x03(\x0B2>.nocloud.instance.driver.vanilla.MonitoringRequest.AddonsEntryR\x06addons\x1A:\x0A\x0CBalanceEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12\x14\x0A\x05value\x18\x02 \x01(\x01R\x05value:\x028\x01\x1AX\x0A\x0BAddonsEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x123\x0A\x05value\x18\x02 \x01(\x0B2\x1D.nocloud.billing.addons.AddonR\x05value:\x028\x01\"\x14\x0A\x12MonitoringResponse\"\xE2\x02\x0A\x0DInvokeRequest\x127\x0A\x08instance\x18\x01 \x01(\x0B2\x1B.nocloud.instances.InstanceR\x08instance\x12Y\x0A\x11services_provider\x18\x02 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\x12\x16\x0A\x06method\x18\x03 \x01(\x09R\x06method\x12R\x0A\x06params\x18\x04 \x03(\x0B2:.nocloud.instance.driver.vanilla.InvokeRequest.ParamsEntryR\x06params\x1AQ\x0A\x0BParamsEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"\xAD\x02\x0A\x0FSpInvokeRequest\x12Y\x0A\x11services_provider\x18\x01 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\x12\x16\x0A\x06method\x18\x02 \x01(\x09R\x06method\x12T\x0A\x06params\x18\x03 \x03(\x0B2<.nocloud.instance.driver.vanilla.SpInvokeRequest.ParamsEntryR\x06params\x1AQ\x0A\x0BParamsEntry\x12\x10\x0A\x03key\x18\x01 \x01(\x09R\x03key\x12,\x0A\x05value\x18\x02 \x01(\x0B2\x16.google.protobuf.ValueR\x05value:\x028\x01\"\x90\x01\x0A\x10ExpirationRecord\x12\x18\x0A\x07expires\x18\x01 \x01(\x03R\x07expires\x12\x18\x0A\x07product\x18\x02 \x01(\x09R\x07product\x12\x1A\x0A\x08resource\x18\x03 \x01(\x09R\x08resource\x12\x14\x0A\x05addon\x18\x04 \x01(\x09R\x05addon\x12\x16\x0A\x06period\x18\x05 \x01(\x03R\x06period\"\xAA\x01\x0A\x14GetExpirationRequest\x127\x0A\x08instance\x18\x01 \x01(\x0B2\x1B.nocloud.instances.InstanceR\x08instance\x12Y\x0A\x11services_provider\x18\x02 \x01(\x0B2,.nocloud.services_providers.ServicesProviderR\x10servicesProvider\"d\x0A\x15GetExpirationResponse\x12K\x0A\x07records\x18\x01 \x03(\x0B21.nocloud.instance.driver.vanilla.ExpirationRecordR\x07records2\xE0\x09\x0A\x0DDriverService\x12\x88\x01\x0A\x19TestServiceProviderConfig\x12A.nocloud.instance.driver.vanilla.TestServiceProviderConfigRequest\x1A(.nocloud.services_providers.TestResponse\x12\x83\x01\x0A\x18TestInstancesGroupConfig\x122.nocloud.instances.TestInstancesGroupConfigRequest\x1A3.nocloud.instances.TestInstancesGroupConfigResponse\x12l\x0A\x07GetType\x12/.nocloud.instance.driver.vanilla.GetTypeRequest\x1A0.nocloud.instance.driver.vanilla.GetTypeResponse\x12]\x0A\x02Up\x12*.nocloud.instance.driver.vanilla.UpRequest\x1A+.nocloud.instance.driver.vanilla.UpResponse\x12c\x0A\x04Down\x12,.nocloud.instance.driver.vanilla.DownRequest\x1A-.nocloud.instance.driver.vanilla.DownResponse\x12u\x0A\x0AMonitoring\x122.nocloud.instance.driver.vanilla.MonitoringRequest\x1A3.nocloud.instance.driver.vanilla.MonitoringResponse\x12|\x0A\x11SuspendMonitoring\x122.nocloud.instance.driver.vanilla.MonitoringRequest\x1A3.nocloud.instance.driver.vanilla.MonitoringResponse\x12[\x0A\x06Invoke\x12..nocloud.instance.driver.vanilla.InvokeRequest\x1A!.nocloud.instances.InvokeResponse\x12h\x0A\x08SpInvoke\x120.nocloud.instance.driver.vanilla.SpInvokeRequest\x1A*.nocloud.services_providers.InvokeResponse\x12P\x0A\x06SpPrep\x12\".nocloud.services_providers.PrepSP\x1A\".nocloud.services_providers.PrepSP\x12~\x0A\x0DGetExpiration\x125.nocloud.instance.driver.vanilla.GetExpirationRequest\x1A6.nocloud.instance.driver.vanilla.GetExpirationResponseB\xD2\x01\x0A#com.nocloud.instance.driver.vanillaB\x0BDriverProtoP\x01\xA2\x02\x04NIDV\xAA\x02\x1FNocloud.Instance.Driver.Vanilla\xCA\x02\x1FNocloud\\Instance\\Driver\\Vanilla\xE2\x02+Nocloud\\Instance\\Driver\\Vanilla\\GPBMetadata\xEA\x02\"Nocloud::Instance::Driver::Vanillab\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

