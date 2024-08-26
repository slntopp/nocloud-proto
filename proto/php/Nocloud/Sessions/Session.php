<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: sessions/sessions.proto

namespace Nocloud\Sessions;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.sessions.Session</code>
 */
class Session extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string client = 2 [json_name = "client"];</code>
     */
    protected $client = '';
    /**
     * Generated from protobuf field <code>optional .google.protobuf.Timestamp expires = 3 [json_name = "expires"];</code>
     */
    protected $expires = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created = 4 [json_name = "created"];</code>
     */
    protected $created = null;
    /**
     * Generated from protobuf field <code>optional bool current = 5 [json_name = "current"];</code>
     */
    protected $current = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $client
     *     @type \Google\Protobuf\Timestamp $expires
     *     @type \Google\Protobuf\Timestamp $created
     *     @type bool $current
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Sessions\GPBMetadata\Sessions::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string client = 2 [json_name = "client"];</code>
     * @return string
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * Generated from protobuf field <code>string client = 2 [json_name = "client"];</code>
     * @param string $var
     * @return $this
     */
    public function setClient($var)
    {
        GPBUtil::checkString($var, True);
        $this->client = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .google.protobuf.Timestamp expires = 3 [json_name = "expires"];</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getExpires()
    {
        return $this->expires;
    }

    public function hasExpires()
    {
        return isset($this->expires);
    }

    public function clearExpires()
    {
        unset($this->expires);
    }

    /**
     * Generated from protobuf field <code>optional .google.protobuf.Timestamp expires = 3 [json_name = "expires"];</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setExpires($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->expires = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created = 4 [json_name = "created"];</code>
     * @return \Google\Protobuf\Timestamp|null
     */
    public function getCreated()
    {
        return $this->created;
    }

    public function hasCreated()
    {
        return isset($this->created);
    }

    public function clearCreated()
    {
        unset($this->created);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp created = 4 [json_name = "created"];</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setCreated($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->created = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool current = 5 [json_name = "current"];</code>
     * @return bool
     */
    public function getCurrent()
    {
        return isset($this->current) ? $this->current : false;
    }

    public function hasCurrent()
    {
        return isset($this->current);
    }

    public function clearCurrent()
    {
        unset($this->current);
    }

    /**
     * Generated from protobuf field <code>optional bool current = 5 [json_name = "current"];</code>
     * @param bool $var
     * @return $this
     */
    public function setCurrent($var)
    {
        GPBUtil::checkBool($var);
        $this->current = $var;

        return $this;
    }

}

