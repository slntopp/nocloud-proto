<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: registry/accounts/accounts.proto

namespace Nocloud\Registry\Accounts;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.registry.accounts.Account</code>
 */
class Account extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>.google.protobuf.Struct data = 3 [json_name = "data"];</code>
     */
    protected $data = null;
    /**
     * Generated from protobuf field <code>optional double balance = 4 [json_name = "balance"];</code>
     */
    protected $balance = null;
    /**
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 5 [json_name = "access"];</code>
     */
    protected $access = null;
    /**
     * Generated from protobuf field <code>optional .nocloud.registry.accounts.SuspendConf suspend_conf = 6 [json_name = "suspendConf"];</code>
     */
    protected $suspend_conf = null;
    /**
     * Generated from protobuf field <code>optional bool suspended = 7 [json_name = "suspended"];</code>
     */
    protected $suspended = null;
    /**
     * Account Balance Currency
     *
     * Generated from protobuf field <code>optional .nocloud.billing.Currency currency = 8 [json_name = "currency"];</code>
     */
    protected $currency = null;
    /**
     * Generated from protobuf field <code>.nocloud.registry.accounts.AccountStatus status = 9 [json_name = "status"];</code>
     */
    protected $status = 0;
    /**
     * Generated from protobuf field <code>repeated .nocloud.notes.AdminNote admin_notes = 10 [json_name = "adminNotes"];</code>
     */
    private $admin_notes;
    /**
     * Generated from protobuf field <code>bool active = 11 [json_name = "active"];</code>
     */
    protected $active = false;
    /**
     * List of UUID's of sub-accounts of this account
     *
     * Generated from protobuf field <code>repeated string subaccounts = 12 [json_name = "subaccounts"];</code>
     */
    private $subaccounts;
    /**
     * Mother account of this account. If != "" - then this account is subaccount
     *
     * Generated from protobuf field <code>string account_owner = 13 [json_name = "accountOwner"];</code>
     */
    protected $account_owner = '';
    /**
     * Generated from protobuf field <code>string paymentsGateway = 14 [json_name = "paymentsGateway"];</code>
     */
    protected $paymentsGateway = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $title
     *     @type \Google\Protobuf\Struct $data
     *     @type float $balance
     *     @type \Nocloud\Access\Access $access
     *     @type \Nocloud\Registry\Accounts\SuspendConf $suspend_conf
     *     @type bool $suspended
     *     @type \Nocloud\Billing\Currency $currency
     *           Account Balance Currency
     *     @type int $status
     *     @type array<\Nocloud\Notes\AdminNote>|\Google\Protobuf\Internal\RepeatedField $admin_notes
     *     @type bool $active
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $subaccounts
     *           List of UUID's of sub-accounts of this account
     *     @type string $account_owner
     *           Mother account of this account. If != "" - then this account is subaccount
     *     @type string $paymentsGateway
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Registry\Accounts\GPBMetadata\Accounts::initOnce();
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
     * Generated from protobuf field <code>.google.protobuf.Struct data = 3 [json_name = "data"];</code>
     * @return \Google\Protobuf\Struct|null
     */
    public function getData()
    {
        return $this->data;
    }

    public function hasData()
    {
        return isset($this->data);
    }

    public function clearData()
    {
        unset($this->data);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Struct data = 3 [json_name = "data"];</code>
     * @param \Google\Protobuf\Struct $var
     * @return $this
     */
    public function setData($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Struct::class);
        $this->data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional double balance = 4 [json_name = "balance"];</code>
     * @return float
     */
    public function getBalance()
    {
        return isset($this->balance) ? $this->balance : 0.0;
    }

    public function hasBalance()
    {
        return isset($this->balance);
    }

    public function clearBalance()
    {
        unset($this->balance);
    }

    /**
     * Generated from protobuf field <code>optional double balance = 4 [json_name = "balance"];</code>
     * @param float $var
     * @return $this
     */
    public function setBalance($var)
    {
        GPBUtil::checkDouble($var);
        $this->balance = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 5 [json_name = "access"];</code>
     * @return \Nocloud\Access\Access|null
     */
    public function getAccess()
    {
        return $this->access;
    }

    public function hasAccess()
    {
        return isset($this->access);
    }

    public function clearAccess()
    {
        unset($this->access);
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 5 [json_name = "access"];</code>
     * @param \Nocloud\Access\Access $var
     * @return $this
     */
    public function setAccess($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Access\Access::class);
        $this->access = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.registry.accounts.SuspendConf suspend_conf = 6 [json_name = "suspendConf"];</code>
     * @return \Nocloud\Registry\Accounts\SuspendConf|null
     */
    public function getSuspendConf()
    {
        return $this->suspend_conf;
    }

    public function hasSuspendConf()
    {
        return isset($this->suspend_conf);
    }

    public function clearSuspendConf()
    {
        unset($this->suspend_conf);
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.registry.accounts.SuspendConf suspend_conf = 6 [json_name = "suspendConf"];</code>
     * @param \Nocloud\Registry\Accounts\SuspendConf $var
     * @return $this
     */
    public function setSuspendConf($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Registry\Accounts\SuspendConf::class);
        $this->suspend_conf = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional bool suspended = 7 [json_name = "suspended"];</code>
     * @return bool
     */
    public function getSuspended()
    {
        return isset($this->suspended) ? $this->suspended : false;
    }

    public function hasSuspended()
    {
        return isset($this->suspended);
    }

    public function clearSuspended()
    {
        unset($this->suspended);
    }

    /**
     * Generated from protobuf field <code>optional bool suspended = 7 [json_name = "suspended"];</code>
     * @param bool $var
     * @return $this
     */
    public function setSuspended($var)
    {
        GPBUtil::checkBool($var);
        $this->suspended = $var;

        return $this;
    }

    /**
     * Account Balance Currency
     *
     * Generated from protobuf field <code>optional .nocloud.billing.Currency currency = 8 [json_name = "currency"];</code>
     * @return \Nocloud\Billing\Currency|null
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    public function hasCurrency()
    {
        return isset($this->currency);
    }

    public function clearCurrency()
    {
        unset($this->currency);
    }

    /**
     * Account Balance Currency
     *
     * Generated from protobuf field <code>optional .nocloud.billing.Currency currency = 8 [json_name = "currency"];</code>
     * @param \Nocloud\Billing\Currency $var
     * @return $this
     */
    public function setCurrency($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Currency::class);
        $this->currency = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.registry.accounts.AccountStatus status = 9 [json_name = "status"];</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>.nocloud.registry.accounts.AccountStatus status = 9 [json_name = "status"];</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Registry\Accounts\AccountStatus::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.notes.AdminNote admin_notes = 10 [json_name = "adminNotes"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAdminNotes()
    {
        return $this->admin_notes;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.notes.AdminNote admin_notes = 10 [json_name = "adminNotes"];</code>
     * @param array<\Nocloud\Notes\AdminNote>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAdminNotes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Notes\AdminNote::class);
        $this->admin_notes = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool active = 11 [json_name = "active"];</code>
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Generated from protobuf field <code>bool active = 11 [json_name = "active"];</code>
     * @param bool $var
     * @return $this
     */
    public function setActive($var)
    {
        GPBUtil::checkBool($var);
        $this->active = $var;

        return $this;
    }

    /**
     * List of UUID's of sub-accounts of this account
     *
     * Generated from protobuf field <code>repeated string subaccounts = 12 [json_name = "subaccounts"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSubaccounts()
    {
        return $this->subaccounts;
    }

    /**
     * List of UUID's of sub-accounts of this account
     *
     * Generated from protobuf field <code>repeated string subaccounts = 12 [json_name = "subaccounts"];</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSubaccounts($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->subaccounts = $arr;

        return $this;
    }

    /**
     * Mother account of this account. If != "" - then this account is subaccount
     *
     * Generated from protobuf field <code>string account_owner = 13 [json_name = "accountOwner"];</code>
     * @return string
     */
    public function getAccountOwner()
    {
        return $this->account_owner;
    }

    /**
     * Mother account of this account. If != "" - then this account is subaccount
     *
     * Generated from protobuf field <code>string account_owner = 13 [json_name = "accountOwner"];</code>
     * @param string $var
     * @return $this
     */
    public function setAccountOwner($var)
    {
        GPBUtil::checkString($var, True);
        $this->account_owner = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string paymentsGateway = 14 [json_name = "paymentsGateway"];</code>
     * @return string
     */
    public function getPaymentsGateway()
    {
        return $this->paymentsGateway;
    }

    /**
     * Generated from protobuf field <code>string paymentsGateway = 14 [json_name = "paymentsGateway"];</code>
     * @param string $var
     * @return $this
     */
    public function setPaymentsGateway($var)
    {
        GPBUtil::checkString($var, True);
        $this->paymentsGateway = $var;

        return $this;
    }

}

