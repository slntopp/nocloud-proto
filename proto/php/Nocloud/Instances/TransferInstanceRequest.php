<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: instances/instances.proto

namespace Nocloud\Instances;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instances.TransferInstanceRequest</code>
 */
class TransferInstanceRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Destination IG
     *
     * Generated from protobuf field <code>optional string ig = 2 [json_name = "ig"];</code>
     */
    protected $ig = null;
    /**
     * Destination account
     *
     * Generated from protobuf field <code>optional string account = 3 [json_name = "account"];</code>
     */
    protected $account = null;
    /**
     * By default invoices are transferred
     *
     * Generated from protobuf field <code>bool do_not_transfer_invoices = 4 [json_name = "doNotTransferInvoices"];</code>
     */
    protected $do_not_transfer_invoices = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $ig
     *           Destination IG
     *     @type string $account
     *           Destination account
     *     @type bool $do_not_transfer_invoices
     *           By default invoices are transferred
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instances\GPBMetadata\Instances::initOnce();
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
     * Destination IG
     *
     * Generated from protobuf field <code>optional string ig = 2 [json_name = "ig"];</code>
     * @return string
     */
    public function getIg()
    {
        return isset($this->ig) ? $this->ig : '';
    }

    public function hasIg()
    {
        return isset($this->ig);
    }

    public function clearIg()
    {
        unset($this->ig);
    }

    /**
     * Destination IG
     *
     * Generated from protobuf field <code>optional string ig = 2 [json_name = "ig"];</code>
     * @param string $var
     * @return $this
     */
    public function setIg($var)
    {
        GPBUtil::checkString($var, True);
        $this->ig = $var;

        return $this;
    }

    /**
     * Destination account
     *
     * Generated from protobuf field <code>optional string account = 3 [json_name = "account"];</code>
     * @return string
     */
    public function getAccount()
    {
        return isset($this->account) ? $this->account : '';
    }

    public function hasAccount()
    {
        return isset($this->account);
    }

    public function clearAccount()
    {
        unset($this->account);
    }

    /**
     * Destination account
     *
     * Generated from protobuf field <code>optional string account = 3 [json_name = "account"];</code>
     * @param string $var
     * @return $this
     */
    public function setAccount($var)
    {
        GPBUtil::checkString($var, True);
        $this->account = $var;

        return $this;
    }

    /**
     * By default invoices are transferred
     *
     * Generated from protobuf field <code>bool do_not_transfer_invoices = 4 [json_name = "doNotTransferInvoices"];</code>
     * @return bool
     */
    public function getDoNotTransferInvoices()
    {
        return $this->do_not_transfer_invoices;
    }

    /**
     * By default invoices are transferred
     *
     * Generated from protobuf field <code>bool do_not_transfer_invoices = 4 [json_name = "doNotTransferInvoices"];</code>
     * @param bool $var
     * @return $this
     */
    public function setDoNotTransferInvoices($var)
    {
        GPBUtil::checkBool($var);
        $this->do_not_transfer_invoices = $var;

        return $this;
    }

}

