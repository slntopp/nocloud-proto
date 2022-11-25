<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: registry/namespaces/namespaces.proto

namespace Nocloud\Registry\Namespaces;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.registry.namespaces.CreateRequest</code>
 */
class CreateRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string title = 1 [json_name = "title"];</code>
     */
    protected $title = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $title
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Registry\Namespaces\GPBMetadata\Namespaces::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string title = 1 [json_name = "title"];</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Generated from protobuf field <code>string title = 1 [json_name = "title"];</code>
     * @param string $var
     * @return $this
     */
    public function setTitle($var)
    {
        GPBUtil::checkString($var, True);
        $this->title = $var;

        return $this;
    }

}

