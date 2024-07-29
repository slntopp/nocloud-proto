<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ansible/ansible.proto

namespace Nocloud\Ansible;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.ansible.Run</code>
 */
class Run extends \Google\Protobuf\Internal\Message
{
    /**
     * Run UUID generated by Ansible Runner
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     */
    protected $uuid = '';
    /**
     * Instances to run Playbook at
     *
     * Generated from protobuf field <code>repeated .nocloud.ansible.Instance instances = 2 [json_name = "instances"];</code>
     */
    private $instances;
    /**
     * Playbook to run
     *
     * Generated from protobuf field <code>string playbook_uuid = 3 [json_name = "playbookUuid"];</code>
     */
    protected $playbook_uuid = '';
    /**
     * Generated from protobuf field <code>map<string, string> jobs = 4 [json_name = "jobs"];</code>
     */
    private $jobs;
    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>int64 rc = 6 [json_name = "rc"];</code>
     */
    protected $rc = 0;
    /**
     * Use custom Private Key for SSH (applied to all Instances, can be
     * overriden only with login/pass)
     *
     * Generated from protobuf field <code>optional string ssh_key = 7 [json_name = "sshKey"];</code>
     */
    protected $ssh_key = null;
    /**
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 8 [json_name = "access"];</code>
     */
    protected $access = null;
    /**
     * Generated from protobuf field <code>int64 create_time = 9 [json_name = "createTime"];</code>
     */
    protected $create_time = 0;
    /**
     * Generated from protobuf field <code>int64 exec_time = 10 [json_name = "execTime"];</code>
     */
    protected $exec_time = 0;
    /**
     * Generated from protobuf field <code>map<string, string> vars = 11 [json_name = "vars"];</code>
     */
    private $vars;
    /**
     * Generated from protobuf field <code>optional .nocloud.ansible.Instance hop = 12 [json_name = "hop"];</code>
     */
    protected $hop = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $uuid
     *           Run UUID generated by Ansible Runner
     *     @type array<\Nocloud\Ansible\Instance>|\Google\Protobuf\Internal\RepeatedField $instances
     *           Instances to run Playbook at
     *     @type string $playbook_uuid
     *           Playbook to run
     *     @type array|\Google\Protobuf\Internal\MapField $jobs
     *     @type string $status
     *     @type int|string $rc
     *     @type string $ssh_key
     *           Use custom Private Key for SSH (applied to all Instances, can be
     *           overriden only with login/pass)
     *     @type \Nocloud\Access\Access $access
     *     @type int|string $create_time
     *     @type int|string $exec_time
     *     @type array|\Google\Protobuf\Internal\MapField $vars
     *     @type \Nocloud\Ansible\Instance $hop
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        parent::__construct($data);
    }

    /**
     * Run UUID generated by Ansible Runner
     *
     * Generated from protobuf field <code>string uuid = 1 [json_name = "uuid"];</code>
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * Run UUID generated by Ansible Runner
     *
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
     * Instances to run Playbook at
     *
     * Generated from protobuf field <code>repeated .nocloud.ansible.Instance instances = 2 [json_name = "instances"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getInstances()
    {
        return $this->instances;
    }

    /**
     * Instances to run Playbook at
     *
     * Generated from protobuf field <code>repeated .nocloud.ansible.Instance instances = 2 [json_name = "instances"];</code>
     * @param array<\Nocloud\Ansible\Instance>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setInstances($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Ansible\Instance::class);
        $this->instances = $arr;

        return $this;
    }

    /**
     * Playbook to run
     *
     * Generated from protobuf field <code>string playbook_uuid = 3 [json_name = "playbookUuid"];</code>
     * @return string
     */
    public function getPlaybookUuid()
    {
        return $this->playbook_uuid;
    }

    /**
     * Playbook to run
     *
     * Generated from protobuf field <code>string playbook_uuid = 3 [json_name = "playbookUuid"];</code>
     * @param string $var
     * @return $this
     */
    public function setPlaybookUuid($var)
    {
        GPBUtil::checkString($var, True);
        $this->playbook_uuid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> jobs = 4 [json_name = "jobs"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getJobs()
    {
        return $this->jobs;
    }

    /**
     * Generated from protobuf field <code>map<string, string> jobs = 4 [json_name = "jobs"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setJobs($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->jobs = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 rc = 6 [json_name = "rc"];</code>
     * @return int|string
     */
    public function getRc()
    {
        return $this->rc;
    }

    /**
     * Generated from protobuf field <code>int64 rc = 6 [json_name = "rc"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setRc($var)
    {
        GPBUtil::checkInt64($var);
        $this->rc = $var;

        return $this;
    }

    /**
     * Use custom Private Key for SSH (applied to all Instances, can be
     * overriden only with login/pass)
     *
     * Generated from protobuf field <code>optional string ssh_key = 7 [json_name = "sshKey"];</code>
     * @return string
     */
    public function getSshKey()
    {
        return isset($this->ssh_key) ? $this->ssh_key : '';
    }

    public function hasSshKey()
    {
        return isset($this->ssh_key);
    }

    public function clearSshKey()
    {
        unset($this->ssh_key);
    }

    /**
     * Use custom Private Key for SSH (applied to all Instances, can be
     * overriden only with login/pass)
     *
     * Generated from protobuf field <code>optional string ssh_key = 7 [json_name = "sshKey"];</code>
     * @param string $var
     * @return $this
     */
    public function setSshKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->ssh_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 8 [json_name = "access"];</code>
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
     * Generated from protobuf field <code>optional .nocloud.access.Access access = 8 [json_name = "access"];</code>
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
     * Generated from protobuf field <code>int64 create_time = 9 [json_name = "createTime"];</code>
     * @return int|string
     */
    public function getCreateTime()
    {
        return $this->create_time;
    }

    /**
     * Generated from protobuf field <code>int64 create_time = 9 [json_name = "createTime"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setCreateTime($var)
    {
        GPBUtil::checkInt64($var);
        $this->create_time = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 exec_time = 10 [json_name = "execTime"];</code>
     * @return int|string
     */
    public function getExecTime()
    {
        return $this->exec_time;
    }

    /**
     * Generated from protobuf field <code>int64 exec_time = 10 [json_name = "execTime"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setExecTime($var)
    {
        GPBUtil::checkInt64($var);
        $this->exec_time = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> vars = 11 [json_name = "vars"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getVars()
    {
        return $this->vars;
    }

    /**
     * Generated from protobuf field <code>map<string, string> vars = 11 [json_name = "vars"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setVars($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->vars = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.ansible.Instance hop = 12 [json_name = "hop"];</code>
     * @return \Nocloud\Ansible\Instance|null
     */
    public function getHop()
    {
        return $this->hop;
    }

    public function hasHop()
    {
        return isset($this->hop);
    }

    public function clearHop()
    {
        unset($this->hop);
    }

    /**
     * Generated from protobuf field <code>optional .nocloud.ansible.Instance hop = 12 [json_name = "hop"];</code>
     * @param \Nocloud\Ansible\Instance $var
     * @return $this
     */
    public function setHop($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\Ansible\Instance::class);
        $this->hop = $var;

        return $this;
    }

}

