<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: events/events.proto

namespace Nocloud\Events;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.events.Event</code>
 */
class Event extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string type = 1 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * Entity uuid e.g. Account, Instance
     *
     * Generated from protobuf field <code>string uuid = 2 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Event id
     *
     * Generated from protobuf field <code>string id = 3 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string key = 4 [json_name = "key"];</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 5 [json_name = "data"];</code>
     */
    private $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $type
     *     @type string $uuid
     *           Entity uuid e.g. Account, Instance
     *     @type string $id
     *           Event id
     *     @type string $key
     *     @type array|\Google\Protobuf\Internal\MapField $data
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Events\GPBMetadata\Events::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string type = 1 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Generated from protobuf field <code>string type = 1 [json_name = "type"];</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

        return $this;
    }

    /**
     * Entity uuid e.g. Account, Instance
     *
     * Generated from protobuf field <code>string uuid = 2 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Entity uuid e.g. Account, Instance
     *
     * Generated from protobuf field <code>string uuid = 2 [json_name = "uuid"];</code>
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
     * Event id
     *
     * Generated from protobuf field <code>string id = 3 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Event id
     *
     * Generated from protobuf field <code>string id = 3 [json_name = "id"];</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string key = 4 [json_name = "key"];</code>
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Generated from protobuf field <code>string key = 4 [json_name = "key"];</code>
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
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 5 [json_name = "data"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 5 [json_name = "data"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->data = $arr;

        return $this;
    }

}

