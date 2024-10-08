<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: registry/accounts/accounts.proto

namespace Nocloud\Registry\Accounts;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.registry.accounts.ListResponse</code>
 */
class ListResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .nocloud.registry.accounts.Account pool = 1 [json_name = "pool"];</code>
     */
    private $pool;
    /**
     * Generated from protobuf field <code>int64 count = 2 [json_name = "count"];</code>
     */
    protected $count = 0;
    /**
     * Generated from protobuf field <code>int64 active = 3 [json_name = "active"];</code>
     */
    protected $active = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Nocloud\Registry\Accounts\Account>|\Google\Protobuf\Internal\RepeatedField $pool
     *     @type int|string $count
     *     @type int|string $active
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Registry\Accounts\GPBMetadata\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.registry.accounts.Account pool = 1 [json_name = "pool"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPool()
    {
        return $this->pool;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.registry.accounts.Account pool = 1 [json_name = "pool"];</code>
     * @param array<\Nocloud\Registry\Accounts\Account>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPool($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Registry\Accounts\Account::class);
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

    /**
     * Generated from protobuf field <code>int64 active = 3 [json_name = "active"];</code>
     * @return int|string
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Generated from protobuf field <code>int64 active = 3 [json_name = "active"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setActive($var)
    {
        GPBUtil::checkInt64($var);
        $this->active = $var;

        return $this;
    }

}

