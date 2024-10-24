<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/promocodes/promocodes.proto

namespace Nocloud\Billing\Promocodes;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.billing.promocodes.EntryResource</code>
 */
class EntryResource extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional string invoice = 1 [json_name = "invoice"];</code>
     */
    protected $invoice = null;
    /**
     * Generated from protobuf field <code>optional string instance = 2 [json_name = "instance"];</code>
     */
    protected $instance = null;
    /**
     * Time of promocode usage
     *
     * Generated from protobuf field <code>int64 exec = 3 [json_name = "exec"];</code>
     */
    protected $exec = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $invoice
     *     @type string $instance
     *     @type int|string $exec
     *           Time of promocode usage
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Billing\Promocodes\GPBMetadata\Promocodes::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional string invoice = 1 [json_name = "invoice"];</code>
     * @return string
     */
    public function getInvoice()
    {
        return isset($this->invoice) ? $this->invoice : '';
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
     * Generated from protobuf field <code>optional string invoice = 1 [json_name = "invoice"];</code>
     * @param string $var
     * @return $this
     */
    public function setInvoice($var)
    {
        GPBUtil::checkString($var, True);
        $this->invoice = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string instance = 2 [json_name = "instance"];</code>
     * @return string
     */
    public function getInstance()
    {
        return isset($this->instance) ? $this->instance : '';
    }

    public function hasInstance()
    {
        return isset($this->instance);
    }

    public function clearInstance()
    {
        unset($this->instance);
    }

    /**
     * Generated from protobuf field <code>optional string instance = 2 [json_name = "instance"];</code>
     * @param string $var
     * @return $this
     */
    public function setInstance($var)
    {
        GPBUtil::checkString($var, True);
        $this->instance = $var;

        return $this;
    }

    /**
     * Time of promocode usage
     *
     * Generated from protobuf field <code>int64 exec = 3 [json_name = "exec"];</code>
     * @return int|string
     */
    public function getExec()
    {
        return $this->exec;
    }

    /**
     * Time of promocode usage
     *
     * Generated from protobuf field <code>int64 exec = 3 [json_name = "exec"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setExec($var)
    {
        GPBUtil::checkInt64($var);
        $this->exec = $var;

        return $this;
    }

}
