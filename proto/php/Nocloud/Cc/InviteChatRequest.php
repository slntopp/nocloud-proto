<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: cc/chats.proto

namespace Nocloud\Cc;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.cc.InviteChatRequest</code>
 */
class InviteChatRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string chatUuid = 1 [json_name = "chatUuid"];</code>
     */
    protected $chatUuid = '';
    /**
     * Generated from protobuf field <code>string userUuid = 2 [json_name = "userUuid"];</code>
     */
    protected $userUuid = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $chatUuid
     *     @type string $userUuid
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Cc\GPBMetadata\Chats::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string chatUuid = 1 [json_name = "chatUuid"];</code>
     * @return string
     */
    public function getChatUuid()
    {
        return $this->chatUuid;
    }

    /**
     * Generated from protobuf field <code>string chatUuid = 1 [json_name = "chatUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setChatUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->chatUuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string userUuid = 2 [json_name = "userUuid"];</code>
     * @return string
     */
    public function getUserUuid()
    {
        return $this->userUuid;
    }

    /**
     * Generated from protobuf field <code>string userUuid = 2 [json_name = "userUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->userUuid = $var;

        return $this;
    }

}

