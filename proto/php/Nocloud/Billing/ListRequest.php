<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.ListRequest</code>
 */
class ListRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string sp_uuid = 1 [json_name = "spUuid"];</code>
     */
    protected $sp_uuid = '';
    /**
     * Generated from protobuf field <code>bool anonymously = 2 [json_name = "anonymously"];</code>
     */
    protected $anonymously = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $sp_uuid
     *     @type bool $anonymously
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string sp_uuid = 1 [json_name = "spUuid"];</code>
     * @return string
     */
    public function getSpUuid()
    {
        return $this->sp_uuid;
    }

    /**
     * Generated from protobuf field <code>string sp_uuid = 1 [json_name = "spUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setSpUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->sp_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool anonymously = 2 [json_name = "anonymously"];</code>
     * @return bool
     */
    public function getAnonymously()
    {
        return $this->anonymously;
    }

    /**
     * Generated from protobuf field <code>bool anonymously = 2 [json_name = "anonymously"];</code>
     * @param bool $var
     * @return $this
     */
    public function setAnonymously($var)
    {
        GPBUtil::checkBool($var);
        $this->anonymously = $var;

        return $this;
    }

}

