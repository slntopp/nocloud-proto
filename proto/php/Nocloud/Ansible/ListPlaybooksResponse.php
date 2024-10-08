<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ansible/ansible.proto

namespace Nocloud\Ansible;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.ansible.ListPlaybooksResponse</code>
 */
class ListPlaybooksResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .nocloud.ansible.Playbook playbooks = 1 [json_name = "playbooks"];</code>
     */
    private $playbooks;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Nocloud\Ansible\Playbook>|\Google\Protobuf\Internal\RepeatedField $playbooks
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Ansible\GPBMetadata\Ansible::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.ansible.Playbook playbooks = 1 [json_name = "playbooks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPlaybooks()
    {
        return $this->playbooks;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.ansible.Playbook playbooks = 1 [json_name = "playbooks"];</code>
     * @param array<\Nocloud\Ansible\Playbook>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPlaybooks($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Ansible\Playbook::class);
        $this->playbooks = $arr;

        return $this;
    }

}

