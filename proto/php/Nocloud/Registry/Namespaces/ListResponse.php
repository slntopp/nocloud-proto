<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: registry/namespaces/namespaces.proto

namespace Nocloud\Registry\Namespaces;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.registry.namespaces.ListResponse</code>
 */
class ListResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .nocloud.registry.namespaces.Namespace pool = 1 [json_name = "pool"];</code>
     */
    private $pool;
    /**
     * Generated from protobuf field <code>int64 count = 2 [json_name = "count"];</code>
     */
    protected $count = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Nocloud\Registry\Namespaces\PBNamespace>|\Google\Protobuf\Internal\RepeatedField $pool
     *     @type int|string $count
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Registry\Namespaces\GPBMetadata\Namespaces::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.registry.namespaces.Namespace pool = 1 [json_name = "pool"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPool()
    {
        return $this->pool;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.registry.namespaces.Namespace pool = 1 [json_name = "pool"];</code>
     * @param array<\Nocloud\Registry\Namespaces\PBNamespace>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPool($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Registry\Namespaces\PBNamespace::class);
        $this->pool = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 count = 2 [json_name = "count"];</code>
     * @return int|string
     */
    public function getCount()
    {
        return $this->count;
    }

    /**
     * Generated from protobuf field <code>int64 count = 2 [json_name = "count"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setCount($var)
    {
        GPBUtil::checkInt64($var);
        $this->count = $var;

        return $this;
    }

}

