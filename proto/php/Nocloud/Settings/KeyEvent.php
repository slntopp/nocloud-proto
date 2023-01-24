<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: settings/settings.proto

namespace Nocloud\Settings;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.settings.KeyEvent</code>
 */
class KeyEvent extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>string event = 2 [json_name = "event"];</code>
     */
    protected $event = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $key
     *     @type string $event
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Settings\GPBMetadata\Settings::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Generated from protobuf field <code>string key = 1 [json_name = "key"];</code>
     * @param string $var
     * @return $this
     */
    public function setKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string event = 2 [json_name = "event"];</code>
     * @return string
     */
    public function getEvent()
    {
        return $this->event;
    }

    /**
     * Generated from protobuf field <code>string event = 2 [json_name = "event"];</code>
     * @param string $var
     * @return $this
     */
    public function setEvent($var)
    {
        GPBUtil::checkString($var, True);
        $this->event = $var;

        return $this;
    }

}

