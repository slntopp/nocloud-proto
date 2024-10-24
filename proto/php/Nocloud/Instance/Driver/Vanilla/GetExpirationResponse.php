<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: drivers/instance/vanilla/driver.proto

namespace Nocloud\Instance\Driver\Vanilla;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.instance.driver.vanilla.GetExpirationResponse</code>
 */
class GetExpirationResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .nocloud.instance.driver.vanilla.ExpirationRecord records = 1 [json_name = "records"];</code>
     */
    private $records;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Nocloud\Instance\Driver\Vanilla\ExpirationRecord>|\Google\Protobuf\Internal\RepeatedField $records
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\Instance\Driver\Vanilla\GPBMetadata\Driver::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.instance.driver.vanilla.ExpirationRecord records = 1 [json_name = "records"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRecords()
    {
        return $this->records;
    }

    /**
     * Generated from protobuf field <code>repeated .nocloud.instance.driver.vanilla.ExpirationRecord records = 1 [json_name = "records"];</code>
     * @param array<\Nocloud\Instance\Driver\Vanilla\ExpirationRecord>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRecords($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Nocloud\Instance\Driver\Vanilla\ExpirationRecord::class);
        $this->records = $arr;

        return $this;
    }

}
