<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: events_logging/events_logging.proto

namespace Nocloud\EventsLogging;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.events_logging.Event</code>
 */
class Event extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string entity = 2 [json_name = "entity"];</code>
     */
    protected $entity = '';
    /**
     * Generated from protobuf field <code>string uuid = 3 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string scope = 4 [json_name = "scope"];</code>
     */
    protected $scope = '';
    /**
     * Generated from protobuf field <code>string action = 5 [json_name = "action"];</code>
     */
    protected $action = '';
    /**
     * Generated from protobuf field <code>int32 rc = 6 [json_name = "rc"];</code>
     */
    protected $rc = 0;
    /**
     * Generated from protobuf field <code>string requestor = 7 [json_name = "requestor"];</code>
     */
    protected $requestor = '';
    /**
     * Generated from protobuf field <code>int64 ts = 8 [json_name = "ts"];</code>
     */
    protected $ts = 0;
    /**
     * Generated from protobuf field <code>optional .nocloud.events_logging.Snapshot snapshot = 9 [json_name = "snapshot"];</code>
     */
    protected $snapshot = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $entity
     *     @type string $uuid
     *     @type string $scope
     *     @type string $action
     *     @type int $rc
     *     @type string $requestor
     *     @type int|string $ts
     *     @type \Nocloud\EventsLogging\Snapshot $snapshot
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\EventsLogging\GPBMetadata\EventsLogging::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string entity = 2 [json_name = "entity"];</code>
     * @return string
     */
    public function getEntity()
    {
        return $this->entity;
    }

    /**
     * Generated from protobuf field <code>string entity = 2 [json_name = "entity"];</code>
     * @param string $var
     * @return $this
     */
    public function setEntity($var)
    {
        GPBUtil::checkString($var, True);
        $this->entity = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string uuid = 3 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Generated from protobuf field <code>string uuid = 3 [json_name = "uuid"];</code>
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
     * Generated from protobuf field <code>string scope = 4 [json_name = "scope"];</code>
     * @return string
     */
    public function getScope()
    {
        return $this->scope;
    }

    /**
     * Generated from protobuf field <code>string scope = 4 [json_name = "scope"];</code>
     * @param string $var
     * @return $this
     */
    public function setScope($var)
    {
        GPBUtil::checkString($var, True);
        $this->scope = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string action = 5 [json_name = "action"];</code>
     * @return string
     */
    public function getAction()
    {
        return $this->action;
    }

    /**
     * Generated from protobuf field <code>string action = 5 [json_name = "action"];</code>
     * @param string $var
     * @return $this
     */
    public function setAction($var)
    {
        GPBUtil::checkString($var, True);
        $this->action = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 rc = 6 [json_name = "rc"];</code>
     * @return int
     */
    public function getRc()
    {
        return $this->rc;
    }

    /**
     * Generated from protobuf field <code>int32 rc = 6 [json_name = "rc"];</code>
     * @param int $var
     * @return $this
     */
    public function setRc($var)
    {
        GPBUtil::checkInt32($var);
        $this->rc = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string requestor = 7 [json_name = "requestor"];</code>
     * @return string
     */
    public function getRequestor()
    {
        return $this->requestor;
    }

    /**
     * Generated from protobuf field <code>string requestor = 7 [json_name = "requestor"];</code>
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
     * Generated from protobuf field <code>int64 ts = 8 [json_name = "ts"];</code>
     * @return int|string
     */
    public function getTs()
    {
        return $this->ts;
    }

    /**
     * Generated from protobuf field <code>int64 ts = 8 [json_name = "ts"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setTs($var)
    {
        GPBUtil::checkInt64($var);
        $this->ts = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.events_logging.Snapshot snapshot = 9 [json_name = "snapshot"];</code>
     * @return \Nocloud\EventsLogging\Snapshot|null
     */
    public function getSnapshot()
    {
        return $this->snapshot;
    }

    public function hasSnapshot()
    {
        return isset($this->snapshot);
    }

    public function clearSnapshot()
    {
        unset($this->snapshot);
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.events_logging.Snapshot snapshot = 9 [json_name = "snapshot"];</code>
     * @param \Nocloud\EventsLogging\Snapshot $var
     * @return $this
     */
    public function setSnapshot($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\EventsLogging\Snapshot::class);
        $this->snapshot = $var;

        return $this;
    }

}

