<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: services_providers/services_providers.proto

namespace Nocloud\ServicesProviders;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services_providers.ProxyConf</code>
 */
class ProxyConf extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional string socket = 1 [json_name = "socket"];</code>
     */
    protected $socket = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $socket
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\ServicesProviders\GPBMetadata\ServicesProviders::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional string socket = 1 [json_name = "socket"];</code>
     * @return string
     */
    public function getSocket()
    {
        return isset($this->socket) ? $this->socket : '';
    }

    public function hasSocket()
    {
        return isset($this->socket);
    }

    public function clearSocket()
    {
        unset($this->socket);
    }

    /**
     * Generated from protobuf field <code>optional string socket = 1 [json_name = "socket"];</code>
     * @param string $var
     * @return $this
     */
    public function setSocket($var)
    {
        GPBUtil::checkString($var, True);
        $this->socket = $var;

        return $this;
    }

}

