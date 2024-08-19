<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: health/health.proto

namespace Nocloud\Health;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.health.ServingStatus</code>
 */
class ServingStatus extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string service = 1 [json_name = "service"];</code>
     */
    protected $service = '';
    /**
     * Generated from protobuf field <code>.nocloud.health.Status status = 2 [json_name = "status"];</code>
     */
    protected $status = 0;
    /**
     * Generated from protobuf field <code>optional string error = 3 [json_name = "error"];</code>
     */
    protected $error = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $service
     *     @type int $status
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Health\GPBMetadata\Health::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string service = 1 [json_name = "service"];</code>
     * @return string
     */
    public function getService()
    {
        return $this->service;
    }

    /**
     * Generated from protobuf field <code>string service = 1 [json_name = "service"];</code>
     * @param string $var
     * @return $this
     */
    public function setService($var)
    {
        GPBUtil::checkString($var, True);
        $this->service = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.health.Status status = 2 [json_name = "status"];</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>.nocloud.health.Status status = 2 [json_name = "status"];</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Health\Status::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string error = 3 [json_name = "error"];</code>
     * @return string
     */
    public function getError()
    {
        return isset($this->error) ? $this->error : '';
    }

    public function hasError()
    {
        return isset($this->error);
    }

    public function clearError()
    {
        unset($this->error);
    }

    /**
     * Generated from protobuf field <code>optional string error = 3 [json_name = "error"];</code>
     * @param string $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkString($var, True);
        $this->error = $var;

        return $this;
    }

}

