<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
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
     * Generated from protobuf field <code>string playbook = 3 [json_name = "playbook"];</code>
     */
    protected $playbook = '';
    /**
     * Run name (must be valid filename)
     *
     * Generated from protobuf field <code>string title = 4 [json_name = "title"];</code>
     */
    protected $title = '';
    /**
     * Generated from protobuf field <code>map<string, string> jobs = 5 [json_name = "jobs"];</code>
     */
    private $jobs;
    /**
     * Generated from protobuf field <code>string status = 6 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>int64 rc = 7 [json_name = "rc"];</code>
     */
    protected $rc = 0;
    /**
     * Use custom Private Key for SSH (applied to all Instances, can be
     * overriden only with login/pass)
     *
     * Generated from protobuf field <code>optional string ssh_key = 8 [json_name = "sshKey"];</code>
     */
    protected $ssh_key = null;

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
     *     @type string $playbook
     *           Playbook to run
     *     @type string $title
     *           Run name (must be valid filename)
     *     @type array|\Google\Protobuf\Internal\MapField $jobs
     *     @type string $status
     *     @type int|string $rc
     *     @type string $ssh_key
     *           Use custom Private Key for SSH (applied to all Instances, can be
     *           overriden only with login/pass)
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
     * Generated from protobuf field <code>string playbook = 3 [json_name = "playbook"];</code>
     * @return string
     */
    public function getPlaybook()
    {
        return $this->playbook;
    }

    /**
     * Playbook to run
     *
     * Generated from protobuf field <code>string playbook = 3 [json_name = "playbook"];</code>
     * @param string $var
     * @return $this
     */
    public function setPlaybook($var)
    {
        GPBUtil::checkString($var, True);
        $this->playbook = $var;

        return $this;
    }

    /**
     * Run name (must be valid filename)
     *
     * Generated from protobuf field <code>string title = 4 [json_name = "title"];</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Run name (must be valid filename)
     *
     * Generated from protobuf field <code>string title = 4 [json_name = "title"];</code>
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
     * Generated from protobuf field <code>map<string, string> jobs = 5 [json_name = "jobs"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getJobs()
    {
        return $this->jobs;
    }

    /**
     * Generated from protobuf field <code>map<string, string> jobs = 5 [json_name = "jobs"];</code>
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
     * Generated from protobuf field <code>string status = 6 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 6 [json_name = "status"];</code>
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
     * Generated from protobuf field <code>int64 rc = 7 [json_name = "rc"];</code>
     * @return int|string
     */
    public function getRc()
    {
        return $this->rc;
    }

    /**
     * Generated from protobuf field <code>int64 rc = 7 [json_name = "rc"];</code>
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
     * Generated from protobuf field <code>optional string ssh_key = 8 [json_name = "sshKey"];</code>
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
     * Generated from protobuf field <code>optional string ssh_key = 8 [json_name = "sshKey"];</code>
     * @param string $var
     * @return $this
     */
    public function setSshKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->ssh_key = $var;

        return $this;
    }

}

