<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/promocodes/promocodes.proto

namespace Nocloud\Billing\Promocodes;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * If no optional fields are specified, then applied to ALL billing items
 *
 * Generated from protobuf message <code>nocloud.billing.promocodes.PromoItem</code>
 */
class PromoItem extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.billing.promocodes.PromoSchema schema = 1 [json_name = "schema"];</code>
     */
    protected $schema = null;
    /**
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.BillingPlanPromo plan_promo = 2 [json_name = "planPromo"];</code>
     */
    protected $plan_promo = null;
    /**
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.AddonPromo addon_promo = 3 [json_name = "addonPromo"];</code>
     */
    protected $addon_promo = null;
    /**
     * If specified, then applied to all showcase billing plans
     *
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.ShowcasePromo showcase_promo = 4 [json_name = "showcasePromo"];</code>
     */
    protected $showcase_promo = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Nocloud\Billing\Promocodes\PromoSchema $schema
     *     @type \Nocloud\Billing\Promocodes\BillingPlanPromo $plan_promo
     *     @type \Nocloud\Billing\Promocodes\AddonPromo $addon_promo
     *     @type \Nocloud\Billing\Promocodes\ShowcasePromo $showcase_promo
     *           If specified, then applied to all showcase billing plans
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\Promocodes\GPBMetadata\Promocodes::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.promocodes.PromoSchema schema = 1 [json_name = "schema"];</code>
     * @return \Nocloud\Billing\Promocodes\PromoSchema|null
     */
    public function getSchema()
    {
        return $this->schema;
    }

    public function hasSchema()
    {
        return isset($this->schema);
    }

    public function clearSchema()
    {
        unset($this->schema);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.promocodes.PromoSchema schema = 1 [json_name = "schema"];</code>
     * @param \Nocloud\Billing\Promocodes\PromoSchema $var
     * @return $this
     */
    public function setSchema($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Promocodes\PromoSchema::class);
        $this->schema = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.BillingPlanPromo plan_promo = 2 [json_name = "planPromo"];</code>
     * @return \Nocloud\Billing\Promocodes\BillingPlanPromo|null
     */
    public function getPlanPromo()
    {
        return $this->plan_promo;
    }

    public function hasPlanPromo()
    {
        return isset($this->plan_promo);
    }

    public function clearPlanPromo()
    {
        unset($this->plan_promo);
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.BillingPlanPromo plan_promo = 2 [json_name = "planPromo"];</code>
     * @param \Nocloud\Billing\Promocodes\BillingPlanPromo $var
     * @return $this
     */
    public function setPlanPromo($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Promocodes\BillingPlanPromo::class);
        $this->plan_promo = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.AddonPromo addon_promo = 3 [json_name = "addonPromo"];</code>
     * @return \Nocloud\Billing\Promocodes\AddonPromo|null
     */
    public function getAddonPromo()
    {
        return $this->addon_promo;
    }

    public function hasAddonPromo()
    {
        return isset($this->addon_promo);
    }

    public function clearAddonPromo()
    {
        unset($this->addon_promo);
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.AddonPromo addon_promo = 3 [json_name = "addonPromo"];</code>
     * @param \Nocloud\Billing\Promocodes\AddonPromo $var
     * @return $this
     */
    public function setAddonPromo($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Promocodes\AddonPromo::class);
        $this->addon_promo = $var;

        return $this;
    }

    /**
     * If specified, then applied to all showcase billing plans
     *
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.ShowcasePromo showcase_promo = 4 [json_name = "showcasePromo"];</code>
     * @return \Nocloud\Billing\Promocodes\ShowcasePromo|null
     */
    public function getShowcasePromo()
    {
        return $this->showcase_promo;
    }

    public function hasShowcasePromo()
    {
        return isset($this->showcase_promo);
    }

    public function clearShowcasePromo()
    {
        unset($this->showcase_promo);
    }

    /**
     * If specified, then applied to all showcase billing plans
     *
     * Generated from protobuf field <code>optional .nocloud.billing.promocodes.ShowcasePromo showcase_promo = 4 [json_name = "showcasePromo"];</code>
     * @param \Nocloud\Billing\Promocodes\ShowcasePromo $var
     * @return $this
     */
    public function setShowcasePromo($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Promocodes\ShowcasePromo::class);
        $this->showcase_promo = $var;

        return $this;
    }

}

