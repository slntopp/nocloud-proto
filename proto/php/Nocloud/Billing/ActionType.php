<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use UnexpectedValueException;

/**
 * Protobuf type <code>nocloud.billing.ActionType</code>
 */
class ActionType
{
    /**
     * Dont use.
     *
     * Generated from protobuf enum <code>ACTION_TYPE_UNKNOWN = 0;</code>
     */
    const ACTION_TYPE_UNKNOWN = 0;
    /**
     * Generated from protobuf enum <code>NO_ACTION = 1;</code>
     */
    const NO_ACTION = 1;
    /**
     * Generated from protobuf enum <code>INSTANCE_START = 2;</code>
     */
    const INSTANCE_START = 2;
    /**
     * Generated from protobuf enum <code>INSTANCE_RENEWAL = 3;</code>
     */
    const INSTANCE_RENEWAL = 3;
    /**
     * Generated from protobuf enum <code>BALANCE = 4;</code>
     */
    const BALANCE = 4;
    /**
     * Same as NO_ACTION, but marks invoice that was originally created by WHMCS
     *
     * Generated from protobuf enum <code>WHMCS_INVOICE = 5;</code>
     */
    const WHMCS_INVOICE = 5;

    private static $valueToName = [
        self::ACTION_TYPE_UNKNOWN => 'ACTION_TYPE_UNKNOWN',
        self::NO_ACTION => 'NO_ACTION',
        self::INSTANCE_START => 'INSTANCE_START',
        self::INSTANCE_RENEWAL => 'INSTANCE_RENEWAL',
        self::BALANCE => 'BALANCE',
        self::WHMCS_INVOICE => 'WHMCS_INVOICE',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

