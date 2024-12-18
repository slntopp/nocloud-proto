<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ansible/ansible.proto

namespace Nocloud\Ansible;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.ansible.Instance</code>
 */
class Instance extends \Google\Protobuf\Internal\Message
{
    /**
     * NoCloud Instance UUID
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * SSH Setup
     *
     * Generated from protobuf field <code>string host = 2 [json_name = "host"];</code>
     */
    protected $host = '';
    /**
     * SSH port
     *
     * Generated from protobuf field <code>optional string port = 3 [json_name = "port"];</code>
     */
    protected $port = null;
    /**
     * SSH User
     *
     * Generated from protobuf field <code>optional string user = 4 [json_name = "user"];</code>
     */
    protected $user = null;
    /**
     * SSH Password
     *
     * Generated from protobuf field <code>optional string pass = 5 [json_name = "pass"];</code>
     */
    protected $pass = null;
    /**
     * Ansible Jump Host
     *
     * Generated from protobuf field <code>optional string ansible_host = 6 [json_name = "ansibleHost"];</code>
     */
    protected $ansible_host = null;
    /**
     * Generated from protobuf field <code>optional string python = 7 [json_name = "python"];</code>
     */
    protected $python = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *           NoCloud Instance UUID
     *     @type string $host
     *           SSH Setup
     *     @type string $port
     *           SSH port
     *     @type string $user
     *           SSH User
     *     @type string $pass
     *           SSH Password
     *     @type string $ansible_host
     *           Ansible Jump Host
     *     @type string $python
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        parent::__construct($data);
    }

    /**
     * NoCloud Instance UUID
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * NoCloud Instance UUID
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
     * SSH Setup
     *
     * Generated from protobuf field <code>string host = 2 [json_name = "host"];</code>
     * @return string
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * SSH Setup
     *
     * Generated from protobuf field <code>string host = 2 [json_name = "host"];</code>
     * @param string $var
     * @return $this
     */
    public function setHost($var)
    {
        GPBUtil::checkString($var, True);
        $this->host = $var;

        return $this;
    }

    /**
     * SSH port
     *
     * Generated from protobuf field <code>optional string port = 3 [json_name = "port"];</code>
     * @return string
     */
    public function getPort()
    {
        return isset($this->port) ? $this->port : '';
    }

    public function hasPort()
    {
        return isset($this->port);
    }

    public function clearPort()
    {
        unset($this->port);
    }

    /**
     * SSH port
     *
     * Generated from protobuf field <code>optional string port = 3 [json_name = "port"];</code>
     * @param string $var
     * @return $this
     */
    public function setPort($var)
    {
        GPBUtil::checkString($var, True);
        $this->port = $var;

        return $this;
    }

    /**
     * SSH User
     *
     * Generated from protobuf field <code>optional string user = 4 [json_name = "user"];</code>
     * @return string
     */
    public function getUser()
    {
        return isset($this->user) ? $this->user : '';
    }

    public function hasUser()
    {
        return isset($this->user);
    }

    public function clearUser()
    {
        unset($this->user);
    }

    /**
     * SSH User
     *
     * Generated from protobuf field <code>optional string user = 4 [json_name = "user"];</code>
     * @param string $var
     * @return $this
     */
    public function setUser($var)
    {
        GPBUtil::checkString($var, True);
        $this->user = $var;

        return $this;
    }

    /**
     * SSH Password
     *
     * Generated from protobuf field <code>optional string pass = 5 [json_name = "pass"];</code>
     * @return string
     */
    public function getPass()
    {
        return isset($this->pass) ? $this->pass : '';
    }

    public function hasPass()
    {
        return isset($this->pass);
    }

    public function clearPass()
    {
        unset($this->pass);
    }

    /**
     * SSH Password
     *
     * Generated from protobuf field <code>optional string pass = 5 [json_name = "pass"];</code>
     * @param string $var
     * @return $this
     */
    public function setPass($var)
    {
        GPBUtil::checkString($var, True);
        $this->pass = $var;

        return $this;
    }

    /**
     * Ansible Jump Host
     *
     * Generated from protobuf field <code>optional string ansible_host = 6 [json_name = "ansibleHost"];</code>
     * @return string
     */
    public function getAnsibleHost()
    {
        return isset($this->ansible_host) ? $this->ansible_host : '';
    }

    public function hasAnsibleHost()
    {
        return isset($this->ansible_host);
    }

    public function clearAnsibleHost()
    {
        unset($this->ansible_host);
    }

    /**
     * Ansible Jump Host
     *
     * Generated from protobuf field <code>optional string ansible_host = 6 [json_name = "ansibleHost"];</code>
     * @param string $var
     * @return $this
     */
    public function setAnsibleHost($var)
    {
        GPBUtil::checkString($var, True);
        $this->ansible_host = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string python = 7 [json_name = "python"];</code>
     * @return string
     */
    public function getPython()
    {
        return isset($this->python) ? $this->python : '';
    }

    public function hasPython()
    {
        return isset($this->python);
    }

    public function clearPython()
    {
        unset($this->python);
    }

    /**
     * Generated from protobuf field <code>optional string python = 7 [json_name = "python"];</code>
     * @param string $var
     * @return $this
     */
    public function setPython($var)
    {
        GPBUtil::checkString($var, True);
        $this->python = $var;

        return $this;
    }

}

