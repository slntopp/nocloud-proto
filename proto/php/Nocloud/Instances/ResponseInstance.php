<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: instances/instances.proto

namespace Nocloud\Instances;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instances.ResponseInstance</code>
 */
class ResponseInstance extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.instances.Instance instance = 1 [json_name = "instance"];</code>
     */
    protected $instance = null;
    /**
     * Generated from protobuf field <code>string service = 2 [json_name = "service"];</code>
     */
    protected $service = '';
    /**
     * Generated from protobuf field <code>string sp = 3 [json_name = "sp"];</code>
     */
    protected $sp = '';
    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * Generated from protobuf field <code>string account = 5 [json_name = "account"];</code>
     */
    protected $account = '';
    /**
     * Generated from protobuf field <code>string namespace = 6 [json_name = "namespace"];</code>
     */
    protected $namespace = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Nocloud\Instances\Instance $instance
     *     @type string $service
     *     @type string $sp
     *     @type string $type
     *     @type string $account
     *     @type string $namespace
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instances\GPBMetadata\Instances::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.instances.Instance instance = 1 [json_name = "instance"];</code>
     * @return \Nocloud\Instances\Instance|null
     */
    public function getInstance()
    {
        return $this->instance;
    }

    public function hasInstance()
    {
        return isset($this->instance);
    }

    public function clearInstance()
    {
        unset($this->instance);
    }

    /**
     * Generated from protobuf field <code>.nocloud.instances.Instance instance = 1 [json_name = "instance"];</code>
     * @param \Nocloud\Instances\Instance $var
     * @return $this
     */
    public function setInstance($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Instances\Instance::class);
        $this->instance = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string service = 2 [json_name = "service"];</code>
     * @return string
     */
    public function getService()
    {
        return $this->service;
    }

    /**
     * Generated from protobuf field <code>string service = 2 [json_name = "service"];</code>
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
     * Generated from protobuf field <code>string sp = 3 [json_name = "sp"];</code>
     * @return string
     */
    public function getSp()
    {
        return $this->sp;
    }

    /**
     * Generated from protobuf field <code>string sp = 3 [json_name = "sp"];</code>
     * @param string $var
     * @return $this
     */
    public function setSp($var)
    {
        GPBUtil::checkString($var, True);
        $this->sp = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
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
     * Generated from protobuf field <code>string account = 5 [json_name = "account"];</code>
     * @return string
     */
    public function getAccount()
    {
        return $this->account;
    }

    /**
     * Generated from protobuf field <code>string account = 5 [json_name = "account"];</code>
     * @param string $var
     * @return $this
     */
    public function setAccount($var)
    {
        GPBUtil::checkString($var, True);
        $this->account = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string namespace = 6 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * Generated from protobuf field <code>string namespace = 6 [json_name = "namespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->namespace = $var;

        return $this;
    }

}

