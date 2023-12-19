<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: instances/instances.proto

namespace Nocloud\Instances;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instances.Instance</code>
 */
class Instance extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>.nocloud.statuses.NoCloudStatus status = 3 [json_name = "status"];</code>
     */
    protected $status = 0;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> config = 4 [json_name = "config", (.nocloud.hasher.hashed) = true];</code>
     */
    private $config;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> resources = 5 [json_name = "resources", (.nocloud.hasher.hashed) = true];</code>
     */
    private $resources;
    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 6 [json_name = "data"];</code>
     */
    private $data;
    /**
     * Generated from protobuf field <code>.nocloud.states.State state = 7 [json_name = "state"];</code>
     */
    protected $state = null;
    /**
     * Generated from protobuf field <code>string hash = 8 [json_name = "hash", (.nocloud.hasher.hash) = true];</code>
     */
    protected $hash = '';
    /**
     * Generated from protobuf field <code>.nocloud.billing.Plan billing_plan = 9 [json_name = "billingPlan", (.nocloud.hasher.skipped) = true];</code>
     */
    protected $billing_plan = null;
    /**
     * Generated from protobuf field <code>optional string product = 10 [json_name = "product"];</code>
     */
    protected $product = null;
    /**
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 11 [json_name = "access"];</code>
     */
    protected $access = null;
    /**
     * Generated from protobuf field <code>int64 created = 12 [json_name = "created"];</code>
     */
    protected $created = 0;
    /**
     * Must match contain all the software from the Billing Plan
     *
     * Generated from protobuf field <code>repeated .nocloud.ansible.Software software = 13 [json_name = "software"];</code>
     */
    private $software;
    /**
     * Generated from protobuf field <code>repeated .nocloud.notes.AdminNote admin_notes = 14 [json_name = "adminNotes"];</code>
     */
    private $admin_notes;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *     @type string $title
     *     @type int $status
     *     @type array|\Google\Protobuf\Internal\MapField $config
     *     @type array|\Google\Protobuf\Internal\MapField $resources
     *     @type array|\Google\Protobuf\Internal\MapField $data
     *     @type \Nocloud\States\State $state
     *     @type string $hash
     *     @type \Nocloud\Billing\Plan $billing_plan
     *     @type string $product
     *     @type \Nocloud\Access\Access $access
     *     @type int|string $created
     *     @type array<\Nocloud\Ansible\Software>|\Google\Protobuf\Internal\RepeatedField $software
     *           Must match contain all the software from the Billing Plan
     *     @type array<\Nocloud\Notes\AdminNote>|\Google\Protobuf\Internal\RepeatedField $admin_notes
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
     * Generated from protobuf field <code>.nocloud.statuses.NoCloudStatus status = 3 [json_name = "status"];</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>.nocloud.statuses.NoCloudStatus status = 3 [json_name = "status"];</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkEnum($var, \Nocloud\Statuses\NoCloudStatus::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> config = 4 [json_name = "config", (.nocloud.hasher.hashed) = true];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> config = 4 [json_name = "config", (.nocloud.hasher.hashed) = true];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setConfig($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->config = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> resources = 5 [json_name = "resources", (.nocloud.hasher.hashed) = true];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getResources()
    {
        return $this->resources;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> resources = 5 [json_name = "resources", (.nocloud.hasher.hashed) = true];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setResources($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->resources = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 6 [json_name = "data"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> data = 6 [json_name = "data"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->data = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.states.State state = 7 [json_name = "state"];</code>
     * @return \Nocloud\States\State|null
     */
    public function getState()
    {
        return $this->state;
    }

    public function hasState()
    {
        return isset($this->state);
    }

    public function clearState()
    {
        unset($this->state);
    }

    /**
     * Generated from protobuf field <code>.nocloud.states.State state = 7 [json_name = "state"];</code>
     * @param \Nocloud\States\State $var
     * @return $this
     */
    public function setState($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\States\State::class);
        $this->state = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string hash = 8 [json_name = "hash", (.nocloud.hasher.hash) = true];</code>
     * @return string
     */
    public function getHash()
    {
        return $this->hash;
    }

    /**
     * Generated from protobuf field <code>string hash = 8 [json_name = "hash", (.nocloud.hasher.hash) = true];</code>
     * @param string $var
     * @return $this
     */
    public function setHash($var)
    {
        GPBUtil::checkString($var, True);
        $this->hash = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Plan billing_plan = 9 [json_name = "billingPlan", (.nocloud.hasher.skipped) = true];</code>
     * @return \Nocloud\Billing\Plan|null
     */
    public function getBillingPlan()
    {
        return $this->billing_plan;
    }

    public function hasBillingPlan()
    {
        return isset($this->billing_plan);
    }

    public function clearBillingPlan()
    {
        unset($this->billing_plan);
    }

    /**
     * Generated from protobuf field <code>.nocloud.billing.Plan billing_plan = 9 [json_name = "billingPlan", (.nocloud.hasher.skipped) = true];</code>
     * @param \Nocloud\Billing\Plan $var
     * @return $this
     */
    public function setBillingPlan($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Billing\Plan::class);
        $this->billing_plan = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional string product = 10 [json_name = "product"];</code>
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
     * Generated from protobuf field <code>optional string product = 10 [json_name = "product"];</code>
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
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 11 [json_name = "access"];</code>
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
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 11 [json_name = "access"];</code>
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
     * Generated from protobuf field <code>int64 created = 12 [json_name = "created"];</code>
     * @return int|string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Generated from protobuf field <code>int64 created = 12 [json_name = "created"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setCreated($var)
    {
        GPBUtil::checkInt64($var);
        $this->created = $var;

        return $this;
    }

    /**
     * Must match contain all the software from the Billing Plan
     *
     * Generated from protobuf field <code>repeated .nocloud.ansible.Software software = 13 [json_name = "software"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSoftware()
    {
        return $this->software;
    }

    /**
     * Must match contain all the software from the Billing Plan
     *
     * Generated from protobuf field <code>repeated .nocloud.ansible.Software software = 13 [json_name = "software"];</code>
     * @param array<\Nocloud\Ansible\Software>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSoftware($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Ansible\Software::class);
        $this->software = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.notes.AdminNote admin_notes = 14 [json_name = "adminNotes"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAdminNotes()
    {
        return $this->admin_notes;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.notes.AdminNote admin_notes = 14 [json_name = "adminNotes"];</code>
     * @param array<\Nocloud\Notes\AdminNote>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAdminNotes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Notes\AdminNote::class);
        $this->admin_notes = $arr;

        return $this;
    }

}

