<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: instances/instances.proto

namespace Nocloud\Instances;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instances.GetUniqueRequest</code>
 */
class GetUniqueRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 5 [json_name = "filters"];</code>
     */
    private $filters;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array|\Google\Protobuf\Internal\MapField $filters
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instances\GPBMetadata\Instances::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 5 [json_name = "filters"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getFilters()
    {
        return $this->filters;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 5 [json_name = "filters"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setFilters($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->filters = $arr;

        return $this;
    }

}

