<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pkg/drivers/instance/vanilla/driver.proto

namespace Nocloud\Instance\Driver\Vanilla;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instance.driver.vanilla.MonitoringRequest</code>
 */
class MonitoringRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .nocloud.instances.InstancesGroup groups = 1 [json_name = "groups"];</code>
     */
    private $groups;
    /**
     * Generated from protobuf field <code>.nocloud.services_providers.ServicesProvider services_provider = 2 [json_name = "servicesProvider"];</code>
     */
    protected $services_provider = null;
    /**
     * Generated from protobuf field <code>bool scheduled = 3 [json_name = "scheduled"];</code>
     */
    protected $scheduled = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Nocloud\Instances\InstancesGroup>|\Google\Protobuf\Internal\RepeatedField $groups
     *     @type \Nocloud\ServicesProviders\ServicesProvider $services_provider
     *     @type bool $scheduled
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instance\Driver\Vanilla\GPBMetadata\Driver::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.instances.InstancesGroup groups = 1 [json_name = "groups"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getGroups()
    {
        return $this->groups;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.instances.InstancesGroup groups = 1 [json_name = "groups"];</code>
     * @param array<\Nocloud\Instances\InstancesGroup>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setGroups($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Instances\InstancesGroup::class);
        $this->groups = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.services_providers.ServicesProvider services_provider = 2 [json_name = "servicesProvider"];</code>
     * @return \Nocloud\ServicesProviders\ServicesProvider|null
     */
    public function getServicesProvider()
    {
        return $this->services_provider;
    }

    public function hasServicesProvider()
    {
        return isset($this->services_provider);
    }

    public function clearServicesProvider()
    {
        unset($this->services_provider);
    }

    /**
     * Generated from protobuf field <code>.nocloud.services_providers.ServicesProvider services_provider = 2 [json_name = "servicesProvider"];</code>
     * @param \Nocloud\ServicesProviders\ServicesProvider $var
     * @return $this
     */
    public function setServicesProvider($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\ServicesProviders\ServicesProvider::class);
        $this->services_provider = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool scheduled = 3 [json_name = "scheduled"];</code>
     * @return bool
     */
    public function getScheduled()
    {
        return $this->scheduled;
    }

    /**
     * Generated from protobuf field <code>bool scheduled = 3 [json_name = "scheduled"];</code>
     * @param bool $var
     * @return $this
     */
    public function setScheduled($var)
    {
        GPBUtil::checkBool($var);
        $this->scheduled = $var;

        return $this;
    }

}

