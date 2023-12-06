<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.ResourceConf</code>
 */
class ResourceConf extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>.nocloud.billing.Kind kind = 2 [json_name = "kind"];</code>
     */
    protected $kind = 0;
    /**
     * Price in NCU per period
     *
     * Generated from protobuf field <code>double price = 3 [json_name = "price"];</code>
     */
    protected $price = 0.0;
    /**
     * if set to 0, then it's a one-time payment
     *
     * Generated from protobuf field <code>int64 period = 4 [json_name = "period"];</code>
     */
    protected $period = 0;
    /**
     * If except set to true then transaction will be created if Instance is in
     * one of the states listed in on If except set to false then transaction will
     * be created if Instance is NOT in one of the states listed in on
     *
     * Generated from protobuf field <code>bool except = 5 [json_name = "except"];</code>
     */
    protected $except = false;
    /**
     * Generated from protobuf field <code>repeated .nocloud.states.NoCloudState on = 6 [json_name = "on"];</code>
     */
    private $on;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Fee fee = 7 [json_name = "fee"];</code>
     */
    protected $fee = null;
    /**
     * Generated from protobuf field <code>string title = 8 [json_name = "title"];</code>
     */
    protected $title = '';
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 9 [json_name = "meta"];</code>
     */
    private $meta;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $key
     *     @type int $kind
     *     @type float $price
     *           Price in NCU per period
     *     @type int|string $period
     *           if set to 0, then it's a one-time payment
     *     @type bool $except
     *           If except set to true then transaction will be created if Instance is in
     *           one of the states listed in on If except set to false then transaction will
     *           be created if Instance is NOT in one of the states listed in on
     *     @type array<int>|\Google\Protobuf\Internal\RepeatedField $on
     *     @type \Nocloud\Billing\Fee $fee
     *     @type string $title
     *     @type array|\Google\Protobuf\Internal\MapField $meta
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
     * Generated from protobuf field <code>.nocloud.billing.Kind kind = 2 [json_name = "kind"];</code>
     * @return int
     */
    public function getKind()
    {
        return $this->kind;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Kind kind = 2 [json_name = "kind"];</code>
     * @param int $var
     * @return $this
     */
    public function setKind($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Kind::class);
        $this->kind = $var;

        return $this;
    }

    /**
     * Price in NCU per period
     *
     * Generated from protobuf field <code>double price = 3 [json_name = "price"];</code>
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Price in NCU per period
     *
     * Generated from protobuf field <code>double price = 3 [json_name = "price"];</code>
     * @param float $var
     * @return $this
     */
    public function setPrice($var)
    {
        GPBUtil::checkDouble($var);
        $this->price = $var;

        return $this;
    }

    /**
     * if set to 0, then it's a one-time payment
     *
     * Generated from protobuf field <code>int64 period = 4 [json_name = "period"];</code>
     * @return int|string
     */
    public function getPeriod()
    {
        return $this->period;
    }

    /**
     * if set to 0, then it's a one-time payment
     *
     * Generated from protobuf field <code>int64 period = 4 [json_name = "period"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setPeriod($var)
    {
        GPBUtil::checkInt64($var);
        $this->period = $var;

        return $this;
    }

    /**
     * If except set to true then transaction will be created if Instance is in
     * one of the states listed in on If except set to false then transaction will
     * be created if Instance is NOT in one of the states listed in on
     *
     * Generated from protobuf field <code>bool except = 5 [json_name = "except"];</code>
     * @return bool
     */
    public function getExcept()
    {
        return $this->except;
    }

    /**
     * If except set to true then transaction will be created if Instance is in
     * one of the states listed in on If except set to false then transaction will
     * be created if Instance is NOT in one of the states listed in on
     *
     * Generated from protobuf field <code>bool except = 5 [json_name = "except"];</code>
     * @param bool $var
     * @return $this
     */
    public function setExcept($var)
    {
        GPBUtil::checkBool($var);
        $this->except = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.states.NoCloudState on = 6 [json_name = "on"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getOn()
    {
        return $this->on;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.states.NoCloudState on = 6 [json_name = "on"];</code>
     * @param array<int>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setOn($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::ENUM, \Nocloud\States\NoCloudState::class);
        $this->on = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Fee fee = 7 [json_name = "fee"];</code>
     * @return \Nocloud\Billing\Fee|null
     */
    public function getFee()
    {
        return $this->fee;
    }

    public function hasFee()
    {
        return isset($this->fee);
    }

    public function clearFee()
    {
        unset($this->fee);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Fee fee = 7 [json_name = "fee"];</code>
     * @param \Nocloud\Billing\Fee $var
     * @return $this
     */
    public function setFee($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Fee::class);
        $this->fee = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string title = 8 [json_name = "title"];</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Generated from protobuf field <code>string title = 8 [json_name = "title"];</code>
     * @param string $var
     * @return $this
     */
    public function setTitle($var)
    {
        GPBUtil::checkString($var, True);
        $this->title = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 9 [json_name = "meta"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 9 [json_name = "meta"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setMeta($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->meta = $arr;

        return $this;
    }

}

