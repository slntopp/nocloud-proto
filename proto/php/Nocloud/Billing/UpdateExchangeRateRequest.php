<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.UpdateExchangeRateRequest</code>
 */
class UpdateExchangeRateRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency from = 1 [json_name = "from"];</code>
     */
    protected $from = null;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency to = 2 [json_name = "to"];</code>
     */
    protected $to = null;
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
     *     @type \Nocloud\Billing\Currency $from
     *     @type \Nocloud\Billing\Currency $to
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
     * @return \Nocloud\Billing\Currency|null
     */
    public function getFrom()
    {
        return $this->from;
    }

    public function hasFrom()
    {
        return isset($this->from);
    }

    public function clearFrom()
    {
        unset($this->from);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency from = 1 [json_name = "from"];</code>
     * @param \Nocloud\Billing\Currency $var
     * @return $this
     */
    public function setFrom($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Currency::class);
        $this->from = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency to = 2 [json_name = "to"];</code>
     * @return \Nocloud\Billing\Currency|null
     */
    public function getTo()
    {
        return $this->to;
    }

    public function hasTo()
    {
        return isset($this->to);
    }

    public function clearTo()
    {
        unset($this->to);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency to = 2 [json_name = "to"];</code>
     * @param \Nocloud\Billing\Currency $var
     * @return $this
     */
    public function setTo($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Currency::class);
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

