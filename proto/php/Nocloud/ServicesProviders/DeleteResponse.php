<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pkg/services_providers/proto/services_providers.proto

namespace Nocloud\ServicesProviders;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services_providers.DeleteResponse</code>
 */
class DeleteResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bool result = 1 [json_name = "result"];</code>
     */
    protected $result = false;
    /**
     * Generated from protobuf field <code>repeated string services = 2 [json_name = "services"];</code>
     */
    private $services;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $result
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $services
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\ServicesProviders\GPBMetadata\ServicesProviders::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bool result = 1 [json_name = "result"];</code>
     * @return bool
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Generated from protobuf field <code>bool result = 1 [json_name = "result"];</code>
     * @param bool $var
     * @return $this
     */
    public function setResult($var)
    {
        GPBUtil::checkBool($var);
        $this->result = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string services = 2 [json_name = "services"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getServices()
    {
        return $this->services;
    }

    /**
     * Generated from protobuf field <code>repeated string services = 2 [json_name = "services"];</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setServices($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->services = $arr;

        return $this;
    }

}

