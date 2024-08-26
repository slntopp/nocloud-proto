<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: dns/dns.proto

namespace Nocloud\Dns\Record;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.dns.Record.CNAME</code>
 */
class CNAME extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string host = 1 [json_name = "host"];</code>
     */
    protected $host = '';
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
     *     @type string $host
     *     @type int $ttl
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Dns\GPBMetadata\Dns::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string host = 1 [json_name = "host"];</code>
     * @return string
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * Generated from protobuf field <code>string host = 1 [json_name = "host"];</code>
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

