<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: billing/billing.proto

namespace Nocloud\Billing;

use UnexpectedValueException;

/**
 * Protobuf type <code>nocloud.billing.Rounding</code>
 */
class Rounding
{
    /**
     * Generated from protobuf enum <code>ROUND_HALF = 0;</code>
     */
    const ROUND_HALF = 0;
    /**
     * Generated from protobuf enum <code>ROUND_UP = 1;</code>
     */
    const ROUND_UP = 1;
    /**
     * Generated from protobuf enum <code>ROUND_DOWN = 2;</code>
     */
    const ROUND_DOWN = 2;

    private static $valueToName = [
        self::ROUND_HALF => 'ROUND_HALF',
        self::ROUND_UP => 'ROUND_UP',
        self::ROUND_DOWN => 'ROUND_DOWN',
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

