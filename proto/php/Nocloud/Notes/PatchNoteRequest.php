<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: notes/notes.proto

namespace Nocloud\Notes;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.notes.PatchNoteRequest</code>
 */
class PatchNoteRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>uint64 index = 2 [json_name = "index"];</code>
     */
    protected $index = 0;
    /**
     * Generated from protobuf field <code>string msg = 3 [json_name = "msg"];</code>
     */
    protected $msg = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type int|string $index
     *     @type string $msg
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Notes\GPBMetadata\Notes::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint64 index = 2 [json_name = "index"];</code>
     * @return int|string
     */
    public function getIndex()
    {
        return $this->index;
    }

    /**
     * Generated from protobuf field <code>uint64 index = 2 [json_name = "index"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setIndex($var)
    {
        GPBUtil::checkUint64($var);
        $this->index = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string msg = 3 [json_name = "msg"];</code>
     * @return string
     */
    public function getMsg()
    {
        return $this->msg;
    }

    /**
     * Generated from protobuf field <code>string msg = 3 [json_name = "msg"];</code>
     * @param string $var
     * @return $this
     */
    public function setMsg($var)
    {
        GPBUtil::checkString($var, True);
        $this->msg = $var;

        return $this;
    }

}

