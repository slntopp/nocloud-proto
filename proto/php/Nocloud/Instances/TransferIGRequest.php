<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: instances/instances.proto

namespace Nocloud\Instances;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instances.TransferIGRequest</code>
 */
class TransferIGRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string service = 2 [json_name = "service"];</code>
     */
    protected $service = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $service
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instances\GPBMetadata\Instances::initOnce();
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
     * Generated from protobuf field <code>string service = 2 [json_name = "service"];</code>
     * @return string
     */
    public function getService()
    {
        return $this->service;
    }

    /**
     * Generated from protobuf field <code>string service = 2 [json_name = "service"];</code>
     * @param string $var
     * @return $this
     */
    public function setService($var)
    {
        GPBUtil::checkString($var, True);
        $this->service = $var;

        return $this;
    }

}

