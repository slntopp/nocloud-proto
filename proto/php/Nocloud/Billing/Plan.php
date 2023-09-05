<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.Plan</code>
 */
class Plan extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     */
    protected $title = '';
    /**
     * Instance / InstanceGroup type supported by this plan
     *
     * Generated from protobuf field <code>string type = 3 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * if true, then this plan is available for all users
     *
     * Generated from protobuf field <code>bool public = 4 [json_name = "public"];</code>
     */
    protected $public = false;
    /**
     * dynamic(based on resources) or static(based on products)
     *
     * Generated from protobuf field <code>.nocloud.billing.PlanKind kind = 5 [json_name = "kind"];</code>
     */
    protected $kind = 0;
    /**
     * Resources confs to make plan dynamic
     *
     * Generated from protobuf field <code>repeated .nocloud.billing.ResourceConf resources = 6 [json_name = "resources"];</code>
     */
    private $resources;
    /**
     * Products to make plan pre defined(map key is product key like sm, lg
     *
     * Generated from protobuf field <code>map<string, .nocloud.billing.Product> products = 7 [json_name = "products"];</code>
     */
    private $products;
    /**
     * or whatever)
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 8 [json_name = "meta"];</code>
     */
    private $meta;
    /**
     * Generated from protobuf field <code>.nocloud.billing.Fee fee = 9 [json_name = "fee"];</code>
     */
    protected $fee = null;
    /**
     * Generated from protobuf field <code>repeated .nocloud.ansible.Software software = 10 [json_name = "software"];</code>
     */
    private $software;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $title
     *     @type string $type
     *           Instance / InstanceGroup type supported by this plan
     *     @type bool $public
     *           if true, then this plan is available for all users
     *     @type int $kind
     *           dynamic(based on resources) or static(based on products)
     *     @type array<\Nocloud\Billing\ResourceConf>|\Google\Protobuf\Internal\RepeatedField $resources
     *           Resources confs to make plan dynamic
     *     @type array|\Google\Protobuf\Internal\MapField $products
     *           Products to make plan pre defined(map key is product key like sm, lg
     *     @type array|\Google\Protobuf\Internal\MapField $meta
     *           or whatever)
     *     @type \Nocloud\Billing\Fee $fee
     *     @type array<\Nocloud\Ansible\Software>|\Google\Protobuf\Internal\RepeatedField $software
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
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
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Generated from protobuf field <code>string title = 2 [json_name = "title"];</code>
     * @param string $var
     * @return $this
     */
    public function setTitle($var)
    {
        GPBUtil::checkString($var, True);
        $this->title = $var;

        return $this;
    }

    /**
     * Instance / InstanceGroup type supported by this plan
     *
     * Generated from protobuf field <code>string type = 3 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Instance / InstanceGroup type supported by this plan
     *
     * Generated from protobuf field <code>string type = 3 [json_name = "type"];</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

        return $this;
    }

    /**
     * if true, then this plan is available for all users
     *
     * Generated from protobuf field <code>bool public = 4 [json_name = "public"];</code>
     * @return bool
     */
    public function getPublic()
    {
        return $this->public;
    }

    /**
     * if true, then this plan is available for all users
     *
     * Generated from protobuf field <code>bool public = 4 [json_name = "public"];</code>
     * @param bool $var
     * @return $this
     */
    public function setPublic($var)
    {
        GPBUtil::checkBool($var);
        $this->public = $var;

        return $this;
    }

    /**
     * dynamic(based on resources) or static(based on products)
     *
     * Generated from protobuf field <code>.nocloud.billing.PlanKind kind = 5 [json_name = "kind"];</code>
     * @return int
     */
    public function getKind()
    {
        return $this->kind;
    }

    /**
     * dynamic(based on resources) or static(based on products)
     *
     * Generated from protobuf field <code>.nocloud.billing.PlanKind kind = 5 [json_name = "kind"];</code>
     * @param int $var
     * @return $this
     */
    public function setKind($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Billing\PlanKind::class);
        $this->kind = $var;

        return $this;
    }

    /**
     * Resources confs to make plan dynamic
     *
     * Generated from protobuf field <code>repeated .nocloud.billing.ResourceConf resources = 6 [json_name = "resources"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getResources()
    {
        return $this->resources;
    }

    /**
     * Resources confs to make plan dynamic
     *
     * Generated from protobuf field <code>repeated .nocloud.billing.ResourceConf resources = 6 [json_name = "resources"];</code>
     * @param array<\Nocloud\Billing\ResourceConf>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setResources($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Billing\ResourceConf::class);
        $this->resources = $arr;

        return $this;
    }

    /**
     * Products to make plan pre defined(map key is product key like sm, lg
     *
     * Generated from protobuf field <code>map<string, .nocloud.billing.Product> products = 7 [json_name = "products"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getProducts()
    {
        return $this->products;
    }

    /**
     * Products to make plan pre defined(map key is product key like sm, lg
     *
     * Generated from protobuf field <code>map<string, .nocloud.billing.Product> products = 7 [json_name = "products"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setProducts($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Billing\Product::class);
        $this->products = $arr;

        return $this;
    }

    /**
     * or whatever)
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 8 [json_name = "meta"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * or whatever)
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> meta = 8 [json_name = "meta"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setMeta($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->meta = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Fee fee = 9 [json_name = "fee"];</code>
     * @return \Nocloud\Billing\Fee|null
     */
    public function getFee()
    {
        return $this->fee;
    }

    public function hasFee()
    {
        return isset($this->fee);
    }

    public function clearFee()
    {
        unset($this->fee);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Fee fee = 9 [json_name = "fee"];</code>
     * @param \Nocloud\Billing\Fee $var
     * @return $this
     */
    public function setFee($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Fee::class);
        $this->fee = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.ansible.Software software = 10 [json_name = "software"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSoftware()
    {
        return $this->software;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.ansible.Software software = 10 [json_name = "software"];</code>
     * @param array<\Nocloud\Ansible\Software>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSoftware($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Ansible\Software::class);
        $this->software = $arr;

        return $this;
    }

}

