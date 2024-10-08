<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.CreateExchangeRateRequest</code>
 */
class CreateExchangeRateRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency from = 1 [json_name = "from"];</code>
     */
    protected $from = 0;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency to = 2 [json_name = "to"];</code>
     */
    protected $to = 0;
    /**
     * Generated from protobuf field <code>double rate = 3 [json_name = "rate"];</code>
     */
    protected $rate = 0.0;
    /**
     * Generated from protobuf field <code>double commission = 4 [json_name = "commission"];</code>
     */
    protected $commission = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $from
     *     @type int $to
     *     @type float $rate
     *     @type float $commission
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency from = 1 [json_name = "from"];</code>
     * @return int
     */
    public function getFrom()
    {
        return $this->from;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency from = 1 [json_name = "from"];</code>
     * @param int $var
     * @return $this
     */
    public function setFrom($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Currency::class);
        $this->from = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency to = 2 [json_name = "to"];</code>
     * @return int
     */
    public function getTo()
    {
        return $this->to;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency to = 2 [json_name = "to"];</code>
     * @param int $var
     * @return $this
     */
    public function setTo($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Currency::class);
        $this->to = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double rate = 3 [json_name = "rate"];</code>
     * @return float
     */
    public function getRate()
    {
        return $this->rate;
    }

    /**
     * Generated from protobuf field <code>double rate = 3 [json_name = "rate"];</code>
     * @param float $var
     * @return $this
     */
    public function setRate($var)
    {
        GPBUtil::checkDouble($var);
        $this->rate = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double commission = 4 [json_name = "commission"];</code>
     * @return float
     */
    public function getCommission()
    {
        return $this->commission;
    }

    /**
     * Generated from protobuf field <code>double commission = 4 [json_name = "commission"];</code>
     * @param float $var
     * @return $this
     */
    public function setCommission($var)
    {
        GPBUtil::checkDouble($var);
        $this->commission = $var;

        return $this;
    }

}

