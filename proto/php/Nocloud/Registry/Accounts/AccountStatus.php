<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: registry/accounts/accounts.proto

namespace Nocloud\Registry\Accounts;

use UnexpectedValueException;

/**
 * Protobuf type <code>nocloud.registry.accounts.AccountStatus</code>
 */
class AccountStatus
{
    /**
     * Generated from protobuf enum <code>ACTIVE = 0;</code>
     */
    const ACTIVE = 0;
    /**
     * Generated from protobuf enum <code>LOCK = 1;</code>
     */
    const LOCK = 1;
    /**
     * Generated from protobuf enum <code>PERMANENT_LOCK = 2;</code>
     */
    const PERMANENT_LOCK = 2;

    private static $valueToName = [
        self::ACTIVE => 'ACTIVE',
        self::LOCK => 'LOCK',
        self::PERMANENT_LOCK => 'PERMANENT_LOCK',
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

