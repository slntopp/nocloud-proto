<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.Record</code>
 */
class Record extends \Google\Protobuf\Internal\Message
{
    /**
     * Record UUID
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Timestamp of Record coverage frame start
     *
     * Generated from protobuf field <code>int64 start = 2 [json_name = "start"];</code>
     */
    protected $start = 0;
    /**
     * Timestamp of Record coverage frame end
     *
     * Generated from protobuf field <code>int64 end = 3 [json_name = "end"];</code>
     */
    protected $end = 0;
    /**
     * Time when Record must be processed
     *
     * Generated from protobuf field <code>int64 exec = 4 [json_name = "exec"];</code>
     */
    protected $exec = 0;
    /**
     * Wether Record has been processed(converted to Transaction)
     *
     * Generated from protobuf field <code>bool processed = 5 [json_name = "processed"];</code>
     */
    protected $processed = false;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Priority priority = 6 [json_name = "priority"];</code>
     */
    protected $priority = 0;
    /**
     * Instance UUID
     *
     * Generated from protobuf field <code>string instance = 7 [json_name = "instance"];</code>
     */
    protected $instance = '';
    /**
     * Instance state
     *
     * Generated from protobuf field <code>.nocloud.states.NoCloudState state = 8 [json_name = "state"];</code>
     */
    protected $state = 0;
    /**
     * Resource key
     *
     * Generated from protobuf field <code>string resource = 9 [json_name = "resource"];</code>
     */
    protected $resource = '';
    /**
     * Product key
     *
     * Generated from protobuf field <code>string product = 10 [json_name = "product"];</code>
     */
    protected $product = '';
    /**
     * Record total value in NCU
     *
     * Generated from protobuf field <code>double total = 11 [json_name = "total"];</code>
     */
    protected $total = 0.0;
    /**
     * Record meta data, like
     * meta: {
     * total: <number> // resource "quantity", e.g. CPU cores, RAM Mb, Drive
     * Mb, IP quantity price_atm: <number> // hourly price per quant of resouce at
     * the moment, e.g. 1 NCU [other keys]: <any> // for example Drive
     * Type(SSD/HDD/NVMe/etc)
     * }
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 12 [json_name = "meta"];</code>
     */
    private $meta;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency currency = 13 [json_name = "currency"];</code>
     */
    protected $currency = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *           Record UUID
     *     @type int|string $start
     *           Timestamp of Record coverage frame start
     *     @type int|string $end
     *           Timestamp of Record coverage frame end
     *     @type int|string $exec
     *           Time when Record must be processed
     *     @type bool $processed
     *           Wether Record has been processed(converted to Transaction)
     *     @type int $priority
     *     @type string $instance
     *           Instance UUID
     *     @type int $state
     *           Instance state
     *     @type string $resource
     *           Resource key
     *     @type string $product
     *           Product key
     *     @type float $total
     *           Record total value in NCU
     *     @type array|\Google\Protobuf\Internal\MapField $meta
     *           Record meta data, like
     *           meta: {
     *           total: <number> // resource "quantity", e.g. CPU cores, RAM Mb, Drive
     *           Mb, IP quantity price_atm: <number> // hourly price per quant of resouce at
     *           the moment, e.g. 1 NCU [other keys]: <any> // for example Drive
     *           Type(SSD/HDD/NVMe/etc)
     *           }
     *     @type int $currency
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Record UUID
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Record UUID
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uuid = $var;

        return $this;
    }

    /**
     * Timestamp of Record coverage frame start
     *
     * Generated from protobuf field <code>int64 start = 2 [json_name = "start"];</code>
     * @return int|string
     */
    public function getStart()
    {
        return $this->start;
    }

    /**
     * Timestamp of Record coverage frame start
     *
     * Generated from protobuf field <code>int64 start = 2 [json_name = "start"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setStart($var)
    {
        GPBUtil::checkInt64($var);
        $this->start = $var;

        return $this;
    }

    /**
     * Timestamp of Record coverage frame end
     *
     * Generated from protobuf field <code>int64 end = 3 [json_name = "end"];</code>
     * @return int|string
     */
    public function getEnd()
    {
        return $this->end;
    }

    /**
     * Timestamp of Record coverage frame end
     *
     * Generated from protobuf field <code>int64 end = 3 [json_name = "end"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setEnd($var)
    {
        GPBUtil::checkInt64($var);
        $this->end = $var;

        return $this;
    }

    /**
     * Time when Record must be processed
     *
     * Generated from protobuf field <code>int64 exec = 4 [json_name = "exec"];</code>
     * @return int|string
     */
    public function getExec()
    {
        return $this->exec;
    }

    /**
     * Time when Record must be processed
     *
     * Generated from protobuf field <code>int64 exec = 4 [json_name = "exec"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setExec($var)
    {
        GPBUtil::checkInt64($var);
        $this->exec = $var;

        return $this;
    }

    /**
     * Wether Record has been processed(converted to Transaction)
     *
     * Generated from protobuf field <code>bool processed = 5 [json_name = "processed"];</code>
     * @return bool
     */
    public function getProcessed()
    {
        return $this->processed;
    }

    /**
     * Wether Record has been processed(converted to Transaction)
     *
     * Generated from protobuf field <code>bool processed = 5 [json_name = "processed"];</code>
     * @param bool $var
     * @return $this
     */
    public function setProcessed($var)
    {
        GPBUtil::checkBool($var);
        $this->processed = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Priority priority = 6 [json_name = "priority"];</code>
     * @return int
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Priority priority = 6 [json_name = "priority"];</code>
     * @param int $var
     * @return $this
     */
    public function setPriority($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Priority::class);
        $this->priority = $var;

        return $this;
    }

    /**
     * Instance UUID
     *
     * Generated from protobuf field <code>string instance = 7 [json_name = "instance"];</code>
     * @return string
     */
    public function getInstance()
    {
        return $this->instance;
    }

    /**
     * Instance UUID
     *
     * Generated from protobuf field <code>string instance = 7 [json_name = "instance"];</code>
     * @param string $var
     * @return $this
     */
    public function setInstance($var)
    {
        GPBUtil::checkString($var, True);
        $this->instance = $var;

        return $this;
    }

    /**
     * Instance state
     *
     * Generated from protobuf field <code>.nocloud.states.NoCloudState state = 8 [json_name = "state"];</code>
     * @return int
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Instance state
     *
     * Generated from protobuf field <code>.nocloud.states.NoCloudState state = 8 [json_name = "state"];</code>
     * @param int $var
     * @return $this
     */
    public function setState($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\States\NoCloudState::class);
        $this->state = $var;

        return $this;
    }

    /**
     * Resource key
     *
     * Generated from protobuf field <code>string resource = 9 [json_name = "resource"];</code>
     * @return string
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * Resource key
     *
     * Generated from protobuf field <code>string resource = 9 [json_name = "resource"];</code>
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
     * Product key
     *
     * Generated from protobuf field <code>string product = 10 [json_name = "product"];</code>
     * @return string
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * Product key
     *
     * Generated from protobuf field <code>string product = 10 [json_name = "product"];</code>
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
     * Record total value in NCU
     *
     * Generated from protobuf field <code>double total = 11 [json_name = "total"];</code>
     * @return float
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Record total value in NCU
     *
     * Generated from protobuf field <code>double total = 11 [json_name = "total"];</code>
     * @param float $var
     * @return $this
     */
    public function setTotal($var)
    {
        GPBUtil::checkDouble($var);
        $this->total = $var;

        return $this;
    }

    /**
     * Record meta data, like
     * meta: {
     * total: <number> // resource "quantity", e.g. CPU cores, RAM Mb, Drive
     * Mb, IP quantity price_atm: <number> // hourly price per quant of resouce at
     * the moment, e.g. 1 NCU [other keys]: <any> // for example Drive
     * Type(SSD/HDD/NVMe/etc)
     * }
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 12 [json_name = "meta"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * Record meta data, like
     * meta: {
     * total: <number> // resource "quantity", e.g. CPU cores, RAM Mb, Drive
     * Mb, IP quantity price_atm: <number> // hourly price per quant of resouce at
     * the moment, e.g. 1 NCU [other keys]: <any> // for example Drive
     * Type(SSD/HDD/NVMe/etc)
     * }
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 12 [json_name = "meta"];</code>
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
     * Generated from protobuf field <code>.nocloud.billing.Currency currency = 13 [json_name = "currency"];</code>
     * @return int
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Currency currency = 13 [json_name = "currency"];</code>
     * @param int $var
     * @return $this
     */
    public function setCurrency($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Currency::class);
        $this->currency = $var;

        return $this;
    }

}

