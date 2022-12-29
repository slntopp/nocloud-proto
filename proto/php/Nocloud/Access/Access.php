<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: access/access.proto

namespace Nocloud\Access;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.access.Access</code>
 */
class Access extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.access.Level level = 1 [json_name = "level"];</code>
     */
    protected $level = 0;
    /**
     * Generated from protobuf field <code>string role = 2 [json_name = "role"];</code>
     */
    protected $role = '';
    /**
     * Generated from protobuf field <code>optional string namespace = 3 [json_name = "namespace"];</code>
     */
    protected $namespace = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $level
     *     @type string $role
     *     @type string $namespace
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Access\GPBMetadata\Access::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.access.Level level = 1 [json_name = "level"];</code>
     * @return int
     */
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * Generated from protobuf field <code>.nocloud.access.Level level = 1 [json_name = "level"];</code>
     * @param int $var
     * @return $this
     */
    public function setLevel($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Access\Level::class);
        $this->level = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string role = 2 [json_name = "role"];</code>
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Generated from protobuf field <code>string role = 2 [json_name = "role"];</code>
     * @param string $var
     * @return $this
     */
    public function setRole($var)
    {
        GPBUtil::checkString($var, True);
        $this->role = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string namespace = 3 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return isset($this->namespace) ? $this->namespace : '';
    }

    public function hasNamespace()
    {
        return isset($this->namespace);
    }

    public function clearNamespace()
    {
        unset($this->namespace);
    }

    /**
     * Generated from protobuf field <code>optional string namespace = 3 [json_name = "namespace"];</code>
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
