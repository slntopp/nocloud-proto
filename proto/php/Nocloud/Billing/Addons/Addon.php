<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/addons/addons.proto

namespace Nocloud\Billing\Addons;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.addons.Addon</code>
 */
class Addon extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     */
    protected $title = '';
    /**
     * Generated from protobuf field <code>bool public = 3 [json_name = "public"];</code>
     */
    protected $public = false;
    /**
     * Generated from protobuf field <code>string group = 4 [json_name = "group"];</code>
     */
    protected $group = '';
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 5 [json_name = "meta"];</code>
     */
    private $meta;
    /**
     * Generated from protobuf field <code>string description_id = 6 [json_name = "descriptionId"];</code>
     */
    protected $description_id = '';
    /**
     * Generated from protobuf field <code>map<int64, double> periods = 7 [json_name = "periods"];</code>
     */
    private $periods;
    /**
     * Generated from protobuf field <code>int64 created = 8 [json_name = "created"];</code>
     */
    protected $created = 0;
    /**
     * Generated from protobuf field <code>bool system = 9 [json_name = "system"];</code>
     */
    protected $system = false;
    /**
     * Generated from protobuf field <code>.nocloud.billing.addons.Kind kind = 10 [json_name = "kind"];</code>
     */
    protected $kind = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $title
     *     @type bool $public
     *     @type string $group
     *     @type array|\Google\Protobuf\Internal\MapField $meta
     *     @type string $description_id
     *     @type array|\Google\Protobuf\Internal\MapField $periods
     *     @type int|string $created
     *     @type bool $system
     *     @type int $kind
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\Addons\GPBMetadata\Addons::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
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
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
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
     * Generated from protobuf field <code>bool public = 3 [json_name = "public"];</code>
     * @return bool
     */
    public function getPublic()
    {
        return $this->public;
    }

    /**
     * Generated from protobuf field <code>bool public = 3 [json_name = "public"];</code>
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
     * Generated from protobuf field <code>string group = 4 [json_name = "group"];</code>
     * @return string
     */
    public function getGroup()
    {
        return $this->group;
    }

    /**
     * Generated from protobuf field <code>string group = 4 [json_name = "group"];</code>
     * @param string $var
     * @return $this
     */
    public function setGroup($var)
    {
        GPBUtil::checkString($var, True);
        $this->group = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 5 [json_name = "meta"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 5 [json_name = "meta"];</code>
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
     * Generated from protobuf field <code>string description_id = 6 [json_name = "descriptionId"];</code>
     * @return string
     */
    public function getDescriptionId()
    {
        return $this->description_id;
    }

    /**
     * Generated from protobuf field <code>string description_id = 6 [json_name = "descriptionId"];</code>
     * @param string $var
     * @return $this
     */
    public function setDescriptionId($var)
    {
        GPBUtil::checkString($var, True);
        $this->description_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<int64, double> periods = 7 [json_name = "periods"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getPeriods()
    {
        return $this->periods;
    }

    /**
     * Generated from protobuf field <code>map<int64, double> periods = 7 [json_name = "periods"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setPeriods($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::INT64, \Google\Protobuf\Internal\GPBType::DOUBLE);
        $this->periods = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 created = 8 [json_name = "created"];</code>
     * @return int|string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Generated from protobuf field <code>int64 created = 8 [json_name = "created"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setCreated($var)
    {
        GPBUtil::checkInt64($var);
        $this->created = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool system = 9 [json_name = "system"];</code>
     * @return bool
     */
    public function getSystem()
    {
        return $this->system;
    }

    /**
     * Generated from protobuf field <code>bool system = 9 [json_name = "system"];</code>
     * @param bool $var
     * @return $this
     */
    public function setSystem($var)
    {
        GPBUtil::checkBool($var);
        $this->system = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.addons.Kind kind = 10 [json_name = "kind"];</code>
     * @return int
     */
    public function getKind()
    {
        return $this->kind;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.addons.Kind kind = 10 [json_name = "kind"];</code>
     * @param int $var
     * @return $this
     */
    public function setKind($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\Addons\Kind::class);
        $this->kind = $var;

        return $this;
    }

}

