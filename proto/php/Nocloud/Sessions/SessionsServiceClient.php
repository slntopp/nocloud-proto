<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Nocloud\Sessions;

/**
 */
class SessionsServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Sessions\GetSessions $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Get(\Nocloud\Sessions\GetSessions $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.sessions.SessionsService/Get',
        $argument,
        ['\Nocloud\Sessions\Sessions', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Sessions\Session $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Revoke(\Nocloud\Sessions\Session $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.sessions.SessionsService/Revoke',
        $argument,
        ['\Nocloud\Sessions\DeleteResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Sessions\GetActivityRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetActivity(\Nocloud\Sessions\GetActivityRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.sessions.SessionsService/GetActivity',
        $argument,
        ['\Nocloud\Sessions\Activity', 'decode'],
        $metadata, $options);
    }

}
