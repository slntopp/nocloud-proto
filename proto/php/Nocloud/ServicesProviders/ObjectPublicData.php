<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: services_providers/services_providers.proto

namespace Nocloud\ServicesProviders;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services_providers.ObjectPublicData</code>
 */
class ObjectPublicData extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 2 [json_name = "data"];</code>
     */
    private $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type array|\Google\Protobuf\Internal\MapField $data
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
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 2 [json_name = "data"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 2 [json_name = "data"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->data = $arr;

        return $this;
    }

}

