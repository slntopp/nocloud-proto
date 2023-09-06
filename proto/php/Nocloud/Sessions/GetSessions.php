<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: sessions/sessions.proto

namespace Nocloud\Sessions;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.sessions.GetSessions</code>
 */
class GetSessions extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional string user_id = 1 [json_name = "userId"];</code>
     */
    protected $user_id = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $user_id
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Sessions\GPBMetadata\Sessions::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional string user_id = 1 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return isset($this->user_id) ? $this->user_id : '';
    }

    public function hasUserId()
    {
        return isset($this->user_id);
    }

    public function clearUserId()
    {
        unset($this->user_id);
    }

    /**
     * Generated from protobuf field <code>optional string user_id = 1 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

}

