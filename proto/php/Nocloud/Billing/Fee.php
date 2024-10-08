<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.Fee</code>
 */
class Fee extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int64 precision = 1 [json_name = "precision"];</code>
     */
    protected $precision = 0;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Round round = 2 [json_name = "round"];</code>
     */
    protected $round = 0;
    /**
     * Generated from protobuf field <code>double default = 3 [json_name = "default"];</code>
     */
    protected $default = 0.0;
    /**
     * Generated from protobuf field <code>repeated .nocloud.billing.FeeRange ranges = 4 [json_name = "ranges"];</code>
     */
    private $ranges;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int|string $precision
     *     @type int $round
     *     @type float $default
     *     @type array<\Nocloud\Billing\FeeRange>|\Google\Protobuf\Internal\RepeatedField $ranges
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int64 precision = 1 [json_name = "precision"];</code>
     * @return int|string
     */
    public function getPrecision()
    {
        return $this->precision;
    }

    /**
     * Generated from protobuf field <code>int64 precision = 1 [json_name = "precision"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setPrecision($var)
    {
        GPBUtil::checkInt64($var);
        $this->precision = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Round round = 2 [json_name = "round"];</code>
     * @return int
     */
    public function getRound()
    {
        return $this->round;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Round round = 2 [json_name = "round"];</code>
     * @param int $var
     * @return $this
     */
    public function setRound($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Round::class);
        $this->round = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double default = 3 [json_name = "default"];</code>
     * @return float
     */
    public function getDefault()
    {
        return $this->default;
    }

    /**
     * Generated from protobuf field <code>double default = 3 [json_name = "default"];</code>
     * @param float $var
     * @return $this
     */
    public function setDefault($var)
    {
        GPBUtil::checkDouble($var);
        $this->default = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.billing.FeeRange ranges = 4 [json_name = "ranges"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRanges()
    {
        return $this->ranges;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.billing.FeeRange ranges = 4 [json_name = "ranges"];</code>
     * @param array<\Nocloud\Billing\FeeRange>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRanges($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Billing\FeeRange::class);
        $this->ranges = $arr;

        return $this;
    }

}

