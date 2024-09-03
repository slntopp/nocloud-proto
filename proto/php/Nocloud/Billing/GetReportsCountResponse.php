<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.GetReportsCountResponse</code>
 */
class GetReportsCountResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int64 total = 1 [json_name = "total"];</code>
     */
    protected $total = 0;
    /**
     * Generated from protobuf field <code>.google.protobuf.Value unique = 2 [json_name = "unique"];</code>
     */
    protected $unique = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int|string $total
     *     @type \Google\Protobuf\Value $unique
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int64 total = 1 [json_name = "total"];</code>
     * @return int|string
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Generated from protobuf field <code>int64 total = 1 [json_name = "total"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setTotal($var)
    {
        GPBUtil::checkInt64($var);
        $this->total = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Value unique = 2 [json_name = "unique"];</code>
     * @return \Google\Protobuf\Value|null
     */
    public function getUnique()
    {
        return $this->unique;
    }

    public function hasUnique()
    {
        return isset($this->unique);
    }

    public function clearUnique()
    {
        unset($this->unique);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Value unique = 2 [json_name = "unique"];</code>
     * @param \Google\Protobuf\Value $var
     * @return $this
     */
    public function setUnique($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Value::class);
        $this->unique = $var;

        return $this;
    }

}

