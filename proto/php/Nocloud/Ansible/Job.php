<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ansible/ansible.proto

namespace Nocloud\Ansible;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.ansible.Job</code>
 */
class Job extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string run_uuid = 1 [json_name = "runUuid"];</code>
     */
    protected $run_uuid = '';
    /**
     * Generated from protobuf field <code>string job_uuid = 2 [json_name = "jobUuid"];</code>
     */
    protected $job_uuid = '';
    /**
     * Generated from protobuf field <code>string job = 3 [json_name = "job"];</code>
     */
    protected $job = '';
    /**
     * Generated from protobuf field <code>string status = 4 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>optional int64 rc = 5 [json_name = "rc"];</code>
     */
    protected $rc = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $run_uuid
     *     @type string $job_uuid
     *     @type string $job
     *     @type string $status
     *     @type int|string $rc
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string run_uuid = 1 [json_name = "runUuid"];</code>
     * @return string
     */
    public function getRunUuid()
    {
        return $this->run_uuid;
    }

    /**
     * Generated from protobuf field <code>string run_uuid = 1 [json_name = "runUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setRunUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->run_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string job_uuid = 2 [json_name = "jobUuid"];</code>
     * @return string
     */
    public function getJobUuid()
    {
        return $this->job_uuid;
    }

    /**
     * Generated from protobuf field <code>string job_uuid = 2 [json_name = "jobUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setJobUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->job_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string job = 3 [json_name = "job"];</code>
     * @return string
     */
    public function getJob()
    {
        return $this->job;
    }

    /**
     * Generated from protobuf field <code>string job = 3 [json_name = "job"];</code>
     * @param string $var
     * @return $this
     */
    public function setJob($var)
    {
        GPBUtil::checkString($var, True);
        $this->job = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 4 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 4 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional int64 rc = 5 [json_name = "rc"];</code>
     * @return int|string
     */
    public function getRc()
    {
        return isset($this->rc) ? $this->rc : 0;
    }

    public function hasRc()
    {
        return isset($this->rc);
    }

    public function clearRc()
    {
        unset($this->rc);
    }

    /**
     * Generated from protobuf field <code>optional int64 rc = 5 [json_name = "rc"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setRc($var)
    {
        GPBUtil::checkInt64($var);
        $this->rc = $var;

        return $this;
    }

}
