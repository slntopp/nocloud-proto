<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.GetInvoiceSettingsTemplateExampleResponse</code>
 */
class GetInvoiceSettingsTemplateExampleResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string template_example = 1 [json_name = "templateExample"];</code>
     */
    protected $template_example = '';
    /**
     * Generated from protobuf field <code>string new_template_example = 2 [json_name = "newTemplateExample"];</code>
     */
    protected $new_template_example = '';
    /**
     * Generated from protobuf field <code>string issue_renewal_invoice_after_example = 3 [json_name = "issueRenewalInvoiceAfterExample"];</code>
     */
    protected $issue_renewal_invoice_after_example = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $template_example
     *     @type string $new_template_example
     *     @type string $issue_renewal_invoice_after_example
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\GPBMetadata\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string template_example = 1 [json_name = "templateExample"];</code>
     * @return string
     */
    public function getTemplateExample()
    {
        return $this->template_example;
    }

    /**
     * Generated from protobuf field <code>string template_example = 1 [json_name = "templateExample"];</code>
     * @param string $var
     * @return $this
     */
    public function setTemplateExample($var)
    {
        GPBUtil::checkString($var, True);
        $this->template_example = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string new_template_example = 2 [json_name = "newTemplateExample"];</code>
     * @return string
     */
    public function getNewTemplateExample()
    {
        return $this->new_template_example;
    }

    /**
     * Generated from protobuf field <code>string new_template_example = 2 [json_name = "newTemplateExample"];</code>
     * @param string $var
     * @return $this
     */
    public function setNewTemplateExample($var)
    {
        GPBUtil::checkString($var, True);
        $this->new_template_example = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string issue_renewal_invoice_after_example = 3 [json_name = "issueRenewalInvoiceAfterExample"];</code>
     * @return string
     */
    public function getIssueRenewalInvoiceAfterExample()
    {
        return $this->issue_renewal_invoice_after_example;
    }

    /**
     * Generated from protobuf field <code>string issue_renewal_invoice_after_example = 3 [json_name = "issueRenewalInvoiceAfterExample"];</code>
     * @param string $var
     * @return $this
     */
    public function setIssueRenewalInvoiceAfterExample($var)
    {
        GPBUtil::checkString($var, True);
        $this->issue_renewal_invoice_after_example = $var;

        return $this;
    }

}
