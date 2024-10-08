<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: states/states.proto

namespace Nocloud\States;

use UnexpectedValueException;

/**
 * Protobuf type <code>nocloud.states.InterfaceKind</code>
 */
class InterfaceKind
{
    /**
     * Generated from protobuf enum <code>UNSPECIFIED = 0;</code>
     */
    const UNSPECIFIED = 0;
    /**
     * Interface data must contain `host` and may contain `port` and `user`
     *
     * Generated from protobuf enum <code>SSH = 1;</code>
     */
    const SSH = 1;

    private static $valueToName = [
        self::UNSPECIFIED => 'UNSPECIFIED',
        self::SSH => 'SSH',
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

