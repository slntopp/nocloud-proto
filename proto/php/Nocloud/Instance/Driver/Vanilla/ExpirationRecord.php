<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: drivers/instance/vanilla/driver.proto

namespace Nocloud\Instance\Driver\Vanilla;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instance.driver.vanilla.ExpirationRecord</code>
 */
class ExpirationRecord extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int64 expires = 1 [json_name = "expires"];</code>
     */
    protected $expires = 0;
    /**
     * Generated from protobuf field <code>string product = 2 [json_name = "product"];</code>
     */
    protected $product = '';
    /**
     * Generated from protobuf field <code>string resource = 3 [json_name = "resource"];</code>
     */
    protected $resource = '';
    /**
     * Generated from protobuf field <code>string addon = 4 [json_name = "addon"];</code>
     */
    protected $addon = '';
    /**
     * Generated from protobuf field <code>int64 period = 5 [json_name = "period"];</code>
     */
    protected $period = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int|string $expires
     *     @type string $product
     *     @type string $resource
     *     @type string $addon
     *     @type int|string $period
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instance\Driver\Vanilla\GPBMetadata\Driver::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int64 expires = 1 [json_name = "expires"];</code>
     * @return int|string
     */
    public function getExpires()
    {
        return $this->expires;
    }

    /**
     * Generated from protobuf field <code>int64 expires = 1 [json_name = "expires"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setExpires($var)
    {
        GPBUtil::checkInt64($var);
        $this->expires = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string product = 2 [json_name = "product"];</code>
     * @return string
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * Generated from protobuf field <code>string product = 2 [json_name = "product"];</code>
     * @param string $var
     * @return $this
     */
    public function setProduct($var)
    {
        GPBUtil::checkString($var, True);
        $this->product = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string resource = 3 [json_name = "resource"];</code>
     * @return string
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * Generated from protobuf field <code>string resource = 3 [json_name = "resource"];</code>
     * @param string $var
     * @return $this
     */
    public function setResource($var)
    {
        GPBUtil::checkString($var, True);
        $this->resource = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string addon = 4 [json_name = "addon"];</code>
     * @return string
     */
    public function getAddon()
    {
        return $this->addon;
    }

    /**
     * Generated from protobuf field <code>string addon = 4 [json_name = "addon"];</code>
     * @param string $var
     * @return $this
     */
    public function setAddon($var)
    {
        GPBUtil::checkString($var, True);
        $this->addon = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 period = 5 [json_name = "period"];</code>
     * @return int|string
     */
    public function getPeriod()
    {
        return $this->period;
    }

    /**
     * Generated from protobuf field <code>int64 period = 5 [json_name = "period"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setPeriod($var)
    {
        GPBUtil::checkInt64($var);
        $this->period = $var;

        return $this;
    }

}

