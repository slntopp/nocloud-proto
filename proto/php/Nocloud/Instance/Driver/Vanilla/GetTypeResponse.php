<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: drivers/instance/vanilla/driver.proto

namespace Nocloud\Instance\Driver\Vanilla;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instance.driver.vanilla.GetTypeResponse</code>
 */
class GetTypeResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string type = 1 [json_name = "type"];</code>
     */
    protected $type = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $type
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instance\Driver\Vanilla\GPBMetadata\Driver::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string type = 1 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Generated from protobuf field <code>string type = 1 [json_name = "type"];</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

        return $this;
    }

}

