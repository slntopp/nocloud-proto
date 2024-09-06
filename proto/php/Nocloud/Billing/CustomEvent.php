<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.CustomEvent</code>
 */
class CustomEvent extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>string override = 2 [json_name = "override"];</code>
     */
    protected $override = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $key
     *     @type string $override
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     * @param string $var
     * @return $this
     */
    public function setKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string override = 2 [json_name = "override"];</code>
     * @return string
     */
    public function getOverride()
    {
        return $this->override;
    }

    /**
     * Generated from protobuf field <code>string override = 2 [json_name = "override"];</code>
     * @param string $var
     * @return $this
     */
    public function setOverride($var)
    {
        GPBUtil::checkString($var, True);
        $this->override = $var;

        return $this;
    }

}

