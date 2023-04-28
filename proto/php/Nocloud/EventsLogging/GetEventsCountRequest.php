<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: events_logging/events_logging.proto

namespace Nocloud\EventsLogging;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.events_logging.GetEventsCountRequest</code>
 */
class GetEventsCountRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional string requestor = 1 [json_name = "requestor"];</code>
     */
    protected $requestor = null;
    /**
     * Generated from protobuf field <code>optional string uuid = 2 [json_name = "uuid"];</code>
     */
    protected $uuid = null;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 7 [json_name = "filters"];</code>
     */
    private $filters;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $requestor
     *     @type string $uuid
     *     @type array|\Google\Protobuf\Internal\MapField $filters
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\EventsLogging\GPBMetadata\EventsLogging::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional string requestor = 1 [json_name = "requestor"];</code>
     * @return string
     */
    public function getRequestor()
    {
        return isset($this->requestor) ? $this->requestor : '';
    }

    public function hasRequestor()
    {
        return isset($this->requestor);
    }

    public function clearRequestor()
    {
        unset($this->requestor);
    }

    /**
     * Generated from protobuf field <code>optional string requestor = 1 [json_name = "requestor"];</code>
     * @param string $var
     * @return $this
     */
    public function setRequestor($var)
    {
        GPBUtil::checkString($var, True);
        $this->requestor = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string uuid = 2 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return isset($this->uuid) ? $this->uuid : '';
    }

    public function hasUuid()
    {
        return isset($this->uuid);
    }

    public function clearUuid()
    {
        unset($this->uuid);
    }

    /**
     * Generated from protobuf field <code>optional string uuid = 2 [json_name = "uuid"];</code>
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
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 7 [json_name = "filters"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getFilters()
    {
        return $this->filters;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 7 [json_name = "filters"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setFilters($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->filters = $arr;

        return $this;
    }

}

