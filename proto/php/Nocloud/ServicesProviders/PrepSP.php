<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: services_providers/services_providers.proto

namespace Nocloud\ServicesProviders;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>nocloud.services_providers.PrepSP</code>
 */
class PrepSP extends \Google\Protobuf\Internal\Message
{
    /**
     * SP Base config
     *
     * Generated from protobuf field <code>.nocloud.services_providers.ServicesProvider sp = 1 [json_name = "sp"];</code>
     */
    protected $sp = null;
    /**
     * Extra Params not related to SP or method or alike
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> extra = 2 [json_name = "extra"];</code>
     */
    private $extra;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Nocloud\ServicesProviders\ServicesProvider $sp
     *           SP Base config
     *     @type array|\Google\Protobuf\Internal\MapField $extra
     *           Extra Params not related to SP or method or alike
     * }
     */
    public function __construct($data = NULL) {
        \Nocloud\ServicesProviders\GPBMetadata\ServicesProviders::initOnce();
        parent::__construct($data);
    }

    /**
     * SP Base config
     *
     * Generated from protobuf field <code>.nocloud.services_providers.ServicesProvider sp = 1 [json_name = "sp"];</code>
     * @return \Nocloud\ServicesProviders\ServicesProvider|null
     */
    public function getSp()
    {
        return $this->sp;
    }

    public function hasSp()
    {
        return isset($this->sp);
    }

    public function clearSp()
    {
        unset($this->sp);
    }

    /**
     * SP Base config
     *
     * Generated from protobuf field <code>.nocloud.services_providers.ServicesProvider sp = 1 [json_name = "sp"];</code>
     * @param \Nocloud\ServicesProviders\ServicesProvider $var
     * @return $this
     */
    public function setSp($var)
    {
        GPBUtil::checkMessage($var, \Nocloud\ServicesProviders\ServicesProvider::class);
        $this->sp = $var;

        return $this;
    }

    /**
     * Extra Params not related to SP or method or alike
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> extra = 2 [json_name = "extra"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getExtra()
    {
        return $this->extra;
    }

    /**
     * Extra Params not related to SP or method or alike
     *
     * Generated from protobuf field <code>map<string, .google.protobuf.Value> extra = 2 [json_name = "extra"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setExtra($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::MESSAGE, \Google\Protobuf\Value::class);
        $this->extra = $arr;

        return $this;
    }

}

