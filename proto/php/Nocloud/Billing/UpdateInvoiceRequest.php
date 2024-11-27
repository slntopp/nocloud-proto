<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.UpdateInvoiceRequest</code>
 */
class UpdateInvoiceRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.nocloud.billing.Invoice invoice = 1 [json_name = "invoice"];</code>
     */
    protected $invoice = null;
    /**
     * Generated from protobuf field <code>bool is_send_email = 2 [json_name = "isSendEmail"];</code>
     */
    protected $is_send_email = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Nocloud\Billing\Invoice $invoice
     *     @type bool $is_send_email
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Invoice invoice = 1 [json_name = "invoice"];</code>
     * @return \Nocloud\Billing\Invoice|null
     */
    public function getInvoice()
    {
        return $this->invoice;
    }

    public function hasInvoice()
    {
        return isset($this->invoice);
    }

    public function clearInvoice()
    {
        unset($this->invoice);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Invoice invoice = 1 [json_name = "invoice"];</code>
     * @param \Nocloud\Billing\Invoice $var
     * @return $this
     */
    public function setInvoice($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Invoice::class);
        $this->invoice = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_send_email = 2 [json_name = "isSendEmail"];</code>
     * @return bool
     */
    public function getIsSendEmail()
    {
        return $this->is_send_email;
    }

    /**
     * Generated from protobuf field <code>bool is_send_email = 2 [json_name = "isSendEmail"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsSendEmail($var)
    {
        GPBUtil::checkBool($var);
        $this->is_send_email = $var;

        return $this;
    }

}

