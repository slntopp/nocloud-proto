<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: health/health.proto

namespace Nocloud\Health;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.health.RoutineStatus</code>
 */
class RoutineStatus extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string routine = 1 [json_name = "routine"];</code>
     */
    protected $routine = '';
    /**
     * Generated from protobuf field <code>.nocloud.health.ServingStatus status = 2 [json_name = "status"];</code>
     */
    protected $status = null;
    /**
     * Generated from protobuf field <code>string last_execution = 3 [json_name = "lastExecution"];</code>
     */
    protected $last_execution = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $routine
     *     @type \Nocloud\Health\ServingStatus $status
     *     @type string $last_execution
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Health\GPBMetadata\Health::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string routine = 1 [json_name = "routine"];</code>
     * @return string
     */
    public function getRoutine()
    {
        return $this->routine;
    }

    /**
     * Generated from protobuf field <code>string routine = 1 [json_name = "routine"];</code>
     * @param string $var
     * @return $this
     */
    public function setRoutine($var)
    {
        GPBUtil::checkString($var, True);
        $this->routine = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.health.ServingStatus status = 2 [json_name = "status"];</code>
     * @return \Nocloud\Health\ServingStatus|null
     */
    public function getStatus()
    {
        return $this->status;
    }

    public function hasStatus()
    {
        return isset($this->status);
    }

    public function clearStatus()
    {
        unset($this->status);
    }

    /**
     * Generated from protobuf field <code>.nocloud.health.ServingStatus status = 2 [json_name = "status"];</code>
     * @param \Nocloud\Health\ServingStatus $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Health\ServingStatus::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string last_execution = 3 [json_name = "lastExecution"];</code>
     * @return string
     */
    public function getLastExecution()
    {
        return $this->last_execution;
    }

    /**
     * Generated from protobuf field <code>string last_execution = 3 [json_name = "lastExecution"];</code>
     * @param string $var
     * @return $this
     */
    public function setLastExecution($var)
    {
        GPBUtil::checkString($var, True);
        $this->last_execution = $var;

        return $this;
    }

}

