<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: statuses/statuses.proto

namespace Nocloud\Statuses;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.statuses.Status</code>
 */
class Status extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.statuses.NoCloudStatus status = 1 [json_name = "status"];</code>
     */
    protected $status = 0;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 2 [json_name = "meta"];</code>
     */
    private $meta;
    /**
     * Generated from protobuf field <code>optional int64 ts = 3 [json_name = "ts"];</code>
     */
    protected $ts = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $status
     *     @type array|\Google\Protobuf\Internal\MapField $meta
     *     @type int|string $ts
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Statuses\GPBMetadata\Statuses::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.statuses.NoCloudStatus status = 1 [json_name = "status"];</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>.nocloud.statuses.NoCloudStatus status = 1 [json_name = "status"];</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Statuses\NoCloudStatus::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 2 [json_name = "meta"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 2 [json_name = "meta"];</code>
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
     * Generated from protobuf field <code>optional int64 ts = 3 [json_name = "ts"];</code>
     * @return int|string
     */
    public function getTs()
    {
        return isset($this->ts) ? $this->ts : 0;
    }

    public function hasTs()
    {
        return isset($this->ts);
    }

    public function clearTs()
    {
        unset($this->ts);
    }

    /**
     * Generated from protobuf field <code>optional int64 ts = 3 [json_name = "ts"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setTs($var)
    {
        GPBUtil::checkInt64($var);
        $this->ts = $var;

        return $this;
    }

}
