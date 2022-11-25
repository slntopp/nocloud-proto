<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: services_providers/services_providers.proto

namespace Nocloud\ServicesProviders;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services_providers.UnbindPlanRequest</code>
 */
class UnbindPlanRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string plan_uuid = 2 [json_name = "planUuid"];</code>
     */
    protected $plan_uuid = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $plan_uuid
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
     * Generated from protobuf field <code>string plan_uuid = 2 [json_name = "planUuid"];</code>
     * @return string
     */
    public function getPlanUuid()
    {
        return $this->plan_uuid;
    }

    /**
     * Generated from protobuf field <code>string plan_uuid = 2 [json_name = "planUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setPlanUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->plan_uuid = $var;

        return $this;
    }

}

