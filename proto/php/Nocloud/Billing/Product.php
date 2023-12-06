<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.Product</code>
 */
class Product extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.billing.Kind kind = 1 [json_name = "kind"];</code>
     */
    protected $kind = 0;
    /**
     * Product title
     *
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     */
    protected $title = '';
    /**
     * Product price in NCU per period
     *
     * Generated from protobuf field <code>double price = 3 [json_name = "price"];</code>
     */
    protected $price = 0.0;
    /**
     * Generated from protobuf field <code>int64 period = 4 [json_name = "period"];</code>
     */
    protected $period = 0;
    /**
     * Map of resources keys to fixed units amount
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> resources = 5 [json_name = "resources"];</code>
     */
    private $resources;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 6 [json_name = "meta"];</code>
     */
    private $meta;
    /**
     * Sorting order, might be needed in UIs
     *
     * Generated from protobuf field <code>optional int32 sorter = 7 [json_name = "sorter"];</code>
     */
    protected $sorter = null;
    /**
     * Generated from protobuf field <code>optional double installation_fee = 8 [json_name = "installationFee"];</code>
     */
    protected $installation_fee = null;
    /**
     * Generated from protobuf field <code>bool public = 9 [json_name = "public"];</code>
     */
    protected $public = false;
    /**
     * Generated from protobuf field <code>string group = 10 [json_name = "group"];</code>
     */
    protected $group = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $kind
     *     @type string $title
     *           Product title
     *     @type float $price
     *           Product price in NCU per period
     *     @type int|string $period
     *     @type array|\Google\Protobuf\Internal\MapField $resources
     *           Map of resources keys to fixed units amount
     *     @type array|\Google\Protobuf\Internal\MapField $meta
     *     @type int $sorter
     *           Sorting order, might be needed in UIs
     *     @type float $installation_fee
     *     @type bool $public
     *     @type string $group
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Kind kind = 1 [json_name = "kind"];</code>
     * @return int
     */
    public function getKind()
    {
        return $this->kind;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Kind kind = 1 [json_name = "kind"];</code>
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
     * Product title
     *
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Product title
     *
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
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
     * Product price in NCU per period
     *
     * Generated from protobuf field <code>double price = 3 [json_name = "price"];</code>
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Product price in NCU per period
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
     * Generated from protobuf field <code>int64 period = 4 [json_name = "period"];</code>
     * @return int|string
     */
    public function getPeriod()
    {
        return $this->period;
    }

    /**
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
     * Map of resources keys to fixed units amount
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> resources = 5 [json_name = "resources"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getResources()
    {
        return $this->resources;
    }

    /**
     * Map of resources keys to fixed units amount
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> resources = 5 [json_name = "resources"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setResources($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->resources = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 6 [json_name = "meta"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 6 [json_name = "meta"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setMeta($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->meta = $arr;

        return $this;
    }

    /**
     * Sorting order, might be needed in UIs
     *
     * Generated from protobuf field <code>optional int32 sorter = 7 [json_name = "sorter"];</code>
     * @return int
     */
    public function getSorter()
    {
        return isset($this->sorter) ? $this->sorter : 0;
    }

    public function hasSorter()
    {
        return isset($this->sorter);
    }

    public function clearSorter()
    {
        unset($this->sorter);
    }

    /**
     * Sorting order, might be needed in UIs
     *
     * Generated from protobuf field <code>optional int32 sorter = 7 [json_name = "sorter"];</code>
     * @param int $var
     * @return $this
     */
    public function setSorter($var)
    {
        GPBUtil::checkInt32($var);
        $this->sorter = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional double installation_fee = 8 [json_name = "installationFee"];</code>
     * @return float
     */
    public function getInstallationFee()
    {
        return isset($this->installation_fee) ? $this->installation_fee : 0.0;
    }

    public function hasInstallationFee()
    {
        return isset($this->installation_fee);
    }

    public function clearInstallationFee()
    {
        unset($this->installation_fee);
    }

    /**
     * Generated from protobuf field <code>optional double installation_fee = 8 [json_name = "installationFee"];</code>
     * @param float $var
     * @return $this
     */
    public function setInstallationFee($var)
    {
        GPBUtil::checkDouble($var);
        $this->installation_fee = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool public = 9 [json_name = "public"];</code>
     * @return bool
     */
    public function getPublic()
    {
        return $this->public;
    }

    /**
     * Generated from protobuf field <code>bool public = 9 [json_name = "public"];</code>
     * @param bool $var
     * @return $this
     */
    public function setPublic($var)
    {
        GPBUtil::checkBool($var);
        $this->public = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string group = 10 [json_name = "group"];</code>
     * @return string
     */
    public function getGroup()
    {
        return $this->group;
    }

    /**
     * Generated from protobuf field <code>string group = 10 [json_name = "group"];</code>
     * @param string $var
     * @return $this
     */
    public function setGroup($var)
    {
        GPBUtil::checkString($var, True);
        $this->group = $var;

        return $this;
    }

}

