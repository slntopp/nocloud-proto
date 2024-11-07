<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/promocodes/promocodes.proto

namespace Nocloud\Billing\Promocodes;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * billing_plan must be not empty string
 * If optional fields are not specified, then applied to ALL billing plan items.
 * If at least 1 optional item specified, then applied only to specified items
 *
 * Generated from protobuf message <code>nocloud.billing.promocodes.BillingPlanPromo</code>
 */
class BillingPlanPromo extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string billing_plan = 1 [json_name = "billingPlan"];</code>
     */
    protected $billing_plan = '';
    /**
     * Generated from protobuf field <code>optional string resource = 2 [json_name = "resource"];</code>
     */
    protected $resource = null;
    /**
     * Generated from protobuf field <code>optional string product = 3 [json_name = "product"];</code>
     */
    protected $product = null;
    /**
     * Generated from protobuf field <code>optional string addon = 4 [json_name = "addon"];</code>
     */
    protected $addon = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $billing_plan
     *     @type string $resource
     *     @type string $product
     *     @type string $addon
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\Promocodes\GPBMetadata\Promocodes::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string billing_plan = 1 [json_name = "billingPlan"];</code>
     * @return string
     */
    public function getBillingPlan()
    {
        return $this->billing_plan;
    }

    /**
     * Generated from protobuf field <code>string billing_plan = 1 [json_name = "billingPlan"];</code>
     * @param string $var
     * @return $this
     */
    public function setBillingPlan($var)
    {
        GPBUtil::checkString($var, True);
        $this->billing_plan = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string resource = 2 [json_name = "resource"];</code>
     * @return string
     */
    public function getResource()
    {
        return isset($this->resource) ? $this->resource : '';
    }

    public function hasResource()
    {
        return isset($this->resource);
    }

    public function clearResource()
    {
        unset($this->resource);
    }

    /**
     * Generated from protobuf field <code>optional string resource = 2 [json_name = "resource"];</code>
     * @param string $var
     * @return $this
     */
    public function setResource($var)
    {
        GPBUtil::checkString($var, True);
        $this->resource = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string product = 3 [json_name = "product"];</code>
     * @return string
     */
    public function getProduct()
    {
        return isset($this->product) ? $this->product : '';
    }

    public function hasProduct()
    {
        return isset($this->product);
    }

    public function clearProduct()
    {
        unset($this->product);
    }

    /**
     * Generated from protobuf field <code>optional string product = 3 [json_name = "product"];</code>
     * @param string $var
     * @return $this
     */
    public function setProduct($var)
    {
        GPBUtil::checkString($var, True);
        $this->product = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string addon = 4 [json_name = "addon"];</code>
     * @return string
     */
    public function getAddon()
    {
        return isset($this->addon) ? $this->addon : '';
    }

    public function hasAddon()
    {
        return isset($this->addon);
    }

    public function clearAddon()
    {
        unset($this->addon);
    }

    /**
     * Generated from protobuf field <code>optional string addon = 4 [json_name = "addon"];</code>
     * @param string $var
     * @return $this
     */
    public function setAddon($var)
    {
        GPBUtil::checkString($var, True);
        $this->addon = $var;

        return $this;
    }

}
