<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.FeeRange</code>
 */
class FeeRange extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>double from = 1 [json_name = "from"];</code>
     */
    protected $from = 0.0;
    /**
     * Generated from protobuf field <code>double to = 2 [json_name = "to"];</code>
     */
    protected $to = 0.0;
    /**
     * Generated from protobuf field <code>double factor = 3 [json_name = "factor"];</code>
     */
    protected $factor = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type float $from
     *     @type float $to
     *     @type float $factor
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>double from = 1 [json_name = "from"];</code>
     * @return float
     */
    public function getFrom()
    {
        return $this->from;
    }

    /**
     * Generated from protobuf field <code>double from = 1 [json_name = "from"];</code>
     * @param float $var
     * @return $this
     */
    public function setFrom($var)
    {
        GPBUtil::checkDouble($var);
        $this->from = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double to = 2 [json_name = "to"];</code>
     * @return float
     */
    public function getTo()
    {
        return $this->to;
    }

    /**
     * Generated from protobuf field <code>double to = 2 [json_name = "to"];</code>
     * @param float $var
     * @return $this
     */
    public function setTo($var)
    {
        GPBUtil::checkDouble($var);
        $this->to = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double factor = 3 [json_name = "factor"];</code>
     * @return float
     */
    public function getFactor()
    {
        return $this->factor;
    }

    /**
     * Generated from protobuf field <code>double factor = 3 [json_name = "factor"];</code>
     * @param float $var
     * @return $this
     */
    public function setFactor($var)
    {
        GPBUtil::checkDouble($var);
        $this->factor = $var;

        return $this;
    }

}

