<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: health/health.proto

namespace Nocloud\Health\GPBMetadata;

class Health
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            "\x0A\x91\x09\x0A\x13health/health.proto\x12\x0Enocloud.health\"G\x0A\x0CProbeRequest\x12\x1D\x0A\x0Aprobe_type\x18\x01 \x01(\x09R\x09probeType\x12\x18\x0A\x07payload\x18\x02 \x01(\x09R\x07payload\"\xCF\x01\x0A\x0DProbeResponse\x12\x1A\x0A\x08response\x18\x01 \x01(\x09R\x08response\x12.\x0A\x06status\x18\x02 \x01(\x0E2\x16.nocloud.health.StatusR\x06status\x127\x0A\x07serving\x18\x03 \x03(\x0B2\x1D.nocloud.health.ServingStatusR\x07serving\x129\x0A\x08routines\x18\x04 \x03(\x0B2\x1D.nocloud.health.RoutineStatusR\x08routines\"~\x0A\x0DServingStatus\x12\x18\x0A\x07service\x18\x01 \x01(\x09R\x07service\x12.\x0A\x06status\x18\x02 \x01(\x0E2\x16.nocloud.health.StatusR\x06status\x12\x19\x0A\x05error\x18\x03 \x01(\x09H\x00R\x05error\x88\x01\x01B\x08\x0A\x06_error\"\x87\x01\x0A\x0DRoutineStatus\x12\x18\x0A\x07routine\x18\x01 \x01(\x09R\x07routine\x125\x0A\x06status\x18\x02 \x01(\x0B2\x1D.nocloud.health.ServingStatusR\x06status\x12%\x0A\x0Elast_execution\x18\x03 \x01(\x09R\x0DlastExecution\"K\x0A\x0ERoutinesStatus\x129\x0A\x08routines\x18\x01 \x03(\x0B2\x1D.nocloud.health.RoutineStatusR\x08routines*q\x0A\x06Status\x12\x0B\x0A\x07UNKNOWN\x10\x00\x12\x0B\x0A\x07SERVING\x10\x01\x12\x0B\x0A\x07OFFLINE\x10\x02\x12\x0B\x0A\x07RUNNING\x10\x03\x12\x0B\x0A\x07STOPPED\x10\x04\x12\x0C\x0A\x08INTERNAL\x10\x05\x12\x0B\x0A\x07HASERRS\x10\x06\x12\x0B\x0A\x07NOEXIST\x10\x072W\x0A\x0DHealthService\x12F\x0A\x05Probe\x12\x1C.nocloud.health.ProbeRequest\x1A\x1D.nocloud.health.ProbeResponse\"\x002\xA7\x01\x0A\x14InternalProbeService\x12F\x0A\x07Service\x12\x1C.nocloud.health.ProbeRequest\x1A\x1D.nocloud.health.ServingStatus\x12G\x0A\x07Routine\x12\x1C.nocloud.health.ProbeRequest\x1A\x1E.nocloud.health.RoutinesStatusBz\x0A\x12com.nocloud.healthB\x0BHealthProtoP\x01\xA2\x02\x03NHX\xAA\x02\x0ENocloud.Health\xCA\x02\x0ENocloud\\Health\xE2\x02\x1ANocloud\\Health\\GPBMetadata\xEA\x02\x0FNocloud::Healthb\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

