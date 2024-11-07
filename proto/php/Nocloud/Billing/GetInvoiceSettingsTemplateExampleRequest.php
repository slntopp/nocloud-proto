<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.GetInvoiceSettingsTemplateExampleRequest</code>
 */
class GetInvoiceSettingsTemplateExampleRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string template = 1 [json_name = "template"];</code>
     */
    protected $template = '';
    /**
     * Generated from protobuf field <code>string new_template = 2 [json_name = "newTemplate"];</code>
     */
    protected $new_template = '';
    /**
     * Generated from protobuf field <code>int32 start_with_number = 3 [json_name = "startWithNumber"];</code>
     */
    protected $start_with_number = 0;
    /**
     * Generated from protobuf field <code>string reset_counter_mode = 4 [json_name = "resetCounterMode"];</code>
     */
    protected $reset_counter_mode = '';
    /**
     * Generated from protobuf field <code>double issue_renewal_invoice_after = 5 [json_name = "issueRenewalInvoiceAfter"];</code>
     */
    protected $issue_renewal_invoice_after = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $template
     *     @type string $new_template
     *     @type int $start_with_number
     *     @type string $reset_counter_mode
     *     @type float $issue_renewal_invoice_after
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string template = 1 [json_name = "template"];</code>
     * @return string
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * Generated from protobuf field <code>string template = 1 [json_name = "template"];</code>
     * @param string $var
     * @return $this
     */
    public function setTemplate($var)
    {
        GPBUtil::checkString($var, True);
        $this->template = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string new_template = 2 [json_name = "newTemplate"];</code>
     * @return string
     */
    public function getNewTemplate()
    {
        return $this->new_template;
    }

    /**
     * Generated from protobuf field <code>string new_template = 2 [json_name = "newTemplate"];</code>
     * @param string $var
     * @return $this
     */
    public function setNewTemplate($var)
    {
        GPBUtil::checkString($var, True);
        $this->new_template = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 start_with_number = 3 [json_name = "startWithNumber"];</code>
     * @return int
     */
    public function getStartWithNumber()
    {
        return $this->start_with_number;
    }

    /**
     * Generated from protobuf field <code>int32 start_with_number = 3 [json_name = "startWithNumber"];</code>
     * @param int $var
     * @return $this
     */
    public function setStartWithNumber($var)
    {
        GPBUtil::checkInt32($var);
        $this->start_with_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string reset_counter_mode = 4 [json_name = "resetCounterMode"];</code>
     * @return string
     */
    public function getResetCounterMode()
    {
        return $this->reset_counter_mode;
    }

    /**
     * Generated from protobuf field <code>string reset_counter_mode = 4 [json_name = "resetCounterMode"];</code>
     * @param string $var
     * @return $this
     */
    public function setResetCounterMode($var)
    {
        GPBUtil::checkString($var, True);
        $this->reset_counter_mode = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double issue_renewal_invoice_after = 5 [json_name = "issueRenewalInvoiceAfter"];</code>
     * @return float
     */
    public function getIssueRenewalInvoiceAfter()
    {
        return $this->issue_renewal_invoice_after;
    }

    /**
     * Generated from protobuf field <code>double issue_renewal_invoice_after = 5 [json_name = "issueRenewalInvoiceAfter"];</code>
     * @param float $var
     * @return $this
     */
    public function setIssueRenewalInvoiceAfter($var)
    {
        GPBUtil::checkDouble($var);
        $this->issue_renewal_invoice_after = $var;

        return $this;
    }

}
