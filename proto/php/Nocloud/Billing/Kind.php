<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pkg/billing/proto/billing.proto

namespace Nocloud\Billing;

use UnexpectedValueException;

/**
 * Protobuf type <code>nocloud.billing.Kind</code>
 */
class Kind
{
    /**
     * Shall never be used, requests will be rejected
     *
     * Generated from protobuf enum <code>UNSPECIFIED = 0;</code>
     */
    const UNSPECIFIED = 0;
    /**
     * Transaction must be processed based on End time
     *
     * Generated from protobuf enum <code>POSTPAID = 1;</code>
     */
    const POSTPAID = 1;
    /**
     * Transaction must be processed based on Start time
     *
     * Generated from protobuf enum <code>PREPAID = 2;</code>
     */
    const PREPAID = 2;

    private static $valueToName = [
        self::UNSPECIFIED => 'UNSPECIFIED',
        self::POSTPAID => 'POSTPAID',
        self::PREPAID => 'PREPAID',
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

