<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: services_providers/services_providers.proto

namespace Nocloud\ServicesProviders;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services_providers.BindPlanRequest</code>
 */
class BindPlanRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>repeated string plans = 2 [json_name = "plans"];</code>
     */
    private $plans;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $plans
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\ServicesProviders\GPBMetadata\ServicesProviders::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string plans = 2 [json_name = "plans"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPlans()
    {
        return $this->plans;
    }

    /**
     * Generated from protobuf field <code>repeated string plans = 2 [json_name = "plans"];</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPlans($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->plans = $arr;

        return $this;
    }

}

