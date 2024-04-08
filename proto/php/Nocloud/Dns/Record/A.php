<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: dns/dns.proto

namespace Nocloud\Dns\Record;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.dns.Record.A</code>
 */
class A extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string ip = 1 [json_name = "ip"];</code>
     */
    protected $ip = '';
    /**
     * Generated from protobuf field <code>int32 ttl = 2 [json_name = "ttl"];</code>
     */
    protected $ttl = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $ip
     *     @type int $ttl
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Dns\GPBMetadata\Dns::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string ip = 1 [json_name = "ip"];</code>
     * @return string
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * Generated from protobuf field <code>string ip = 1 [json_name = "ip"];</code>
     * @param string $var
     * @return $this
     */
    public function setIp($var)
    {
        GPBUtil::checkString($var, True);
        $this->ip = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 ttl = 2 [json_name = "ttl"];</code>
     * @return int
     */
    public function getTtl()
    {
        return $this->ttl;
    }

    /**
     * Generated from protobuf field <code>int32 ttl = 2 [json_name = "ttl"];</code>
     * @param int $var
     * @return $this
     */
    public function setTtl($var)
    {
        GPBUtil::checkInt32($var);
        $this->ttl = $var;

        return $this;
    }

}

