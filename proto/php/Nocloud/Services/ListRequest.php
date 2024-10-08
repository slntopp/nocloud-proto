<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: services/services.proto

namespace Nocloud\Services;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services.ListRequest</code>
 */
class ListRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional bool show_deleted = 1 [json_name = "showDeleted"];</code>
     */
    protected $show_deleted = null;
    /**
     * Generated from protobuf field <code>optional string namespace = 2 [json_name = "namespace"];</code>
     */
    protected $namespace = null;
    /**
     * Generated from protobuf field <code>optional int32 depth = 3 [json_name = "depth"];</code>
     */
    protected $depth = null;
    /**
     * Generated from protobuf field <code>optional uint64 page = 4 [json_name = "page"];</code>
     */
    protected $page = null;
    /**
     * Generated from protobuf field <code>optional uint64 limit = 5 [json_name = "limit"];</code>
     */
    protected $limit = null;
    /**
     * Generated from protobuf field <code>optional string field = 6 [json_name = "field"];</code>
     */
    protected $field = null;
    /**
     * Generated from protobuf field <code>optional string sort = 7 [json_name = "sort"];</code>
     */
    protected $sort = null;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 8 [json_name = "filters"];</code>
     */
    private $filters;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $show_deleted
     *     @type string $namespace
     *     @type int $depth
     *     @type int|string $page
     *     @type int|string $limit
     *     @type string $field
     *     @type string $sort
     *     @type array|\Google\Protobuf\Internal\MapField $filters
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Services\GPBMetadata\Services::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional bool show_deleted = 1 [json_name = "showDeleted"];</code>
     * @return bool
     */
    public function getShowDeleted()
    {
        return isset($this->show_deleted) ? $this->show_deleted : false;
    }

    public function hasShowDeleted()
    {
        return isset($this->show_deleted);
    }

    public function clearShowDeleted()
    {
        unset($this->show_deleted);
    }

    /**
     * Generated from protobuf field <code>optional bool show_deleted = 1 [json_name = "showDeleted"];</code>
     * @param bool $var
     * @return $this
     */
    public function setShowDeleted($var)
    {
        GPBUtil::checkBool($var);
        $this->show_deleted = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string namespace = 2 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return isset($this->namespace) ? $this->namespace : '';
    }

    public function hasNamespace()
    {
        return isset($this->namespace);
    }

    public function clearNamespace()
    {
        unset($this->namespace);
    }

    /**
     * Generated from protobuf field <code>optional string namespace = 2 [json_name = "namespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->namespace = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional int32 depth = 3 [json_name = "depth"];</code>
     * @return int
     */
    public function getDepth()
    {
        return isset($this->depth) ? $this->depth : 0;
    }

    public function hasDepth()
    {
        return isset($this->depth);
    }

    public function clearDepth()
    {
        unset($this->depth);
    }

    /**
     * Generated from protobuf field <code>optional int32 depth = 3 [json_name = "depth"];</code>
     * @param int $var
     * @return $this
     */
    public function setDepth($var)
    {
        GPBUtil::checkInt32($var);
        $this->depth = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional uint64 page = 4 [json_name = "page"];</code>
     * @return int|string
     */
    public function getPage()
    {
        return isset($this->page) ? $this->page : 0;
    }

    public function hasPage()
    {
        return isset($this->page);
    }

    public function clearPage()
    {
        unset($this->page);
    }

    /**
     * Generated from protobuf field <code>optional uint64 page = 4 [json_name = "page"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setPage($var)
    {
        GPBUtil::checkUint64($var);
        $this->page = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional uint64 limit = 5 [json_name = "limit"];</code>
     * @return int|string
     */
    public function getLimit()
    {
        return isset($this->limit) ? $this->limit : 0;
    }

    public function hasLimit()
    {
        return isset($this->limit);
    }

    public function clearLimit()
    {
        unset($this->limit);
    }

    /**
     * Generated from protobuf field <code>optional uint64 limit = 5 [json_name = "limit"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setLimit($var)
    {
        GPBUtil::checkUint64($var);
        $this->limit = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string field = 6 [json_name = "field"];</code>
     * @return string
     */
    public function getField()
    {
        return isset($this->field) ? $this->field : '';
    }

    public function hasField()
    {
        return isset($this->field);
    }

    public function clearField()
    {
        unset($this->field);
    }

    /**
     * Generated from protobuf field <code>optional string field = 6 [json_name = "field"];</code>
     * @param string $var
     * @return $this
     */
    public function setField($var)
    {
        GPBUtil::checkString($var, True);
        $this->field = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string sort = 7 [json_name = "sort"];</code>
     * @return string
     */
    public function getSort()
    {
        return isset($this->sort) ? $this->sort : '';
    }

    public function hasSort()
    {
        return isset($this->sort);
    }

    public function clearSort()
    {
        unset($this->sort);
    }

    /**
     * Generated from protobuf field <code>optional string sort = 7 [json_name = "sort"];</code>
     * @param string $var
     * @return $this
     */
    public function setSort($var)
    {
        GPBUtil::checkString($var, True);
        $this->sort = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 8 [json_name = "filters"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getFilters()
    {
        return $this->filters;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> filters = 8 [json_name = "filters"];</code>
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

