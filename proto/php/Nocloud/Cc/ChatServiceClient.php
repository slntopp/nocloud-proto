<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Nocloud\Cc;

/**
 */
class ChatServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Nocloud\Cc\SendChatMessageRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SendChatMessage(\Nocloud\Cc\SendChatMessageRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/SendChatMessage',
        $argument,
        ['\Nocloud\Cc\ChatMessage', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\ListChatMessagesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListChatMessages(\Nocloud\Cc\ListChatMessagesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/ListChatMessages',
        $argument,
        ['\Nocloud\Cc\ListChatMessagesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\GetChatMessageRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetChatMessage(\Nocloud\Cc\GetChatMessageRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/GetChatMessage',
        $argument,
        ['\Nocloud\Cc\ChatMessage', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\DeleteChatMessageRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteChatMessage(\Nocloud\Cc\DeleteChatMessageRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/DeleteChatMessage',
        $argument,
        ['\Nocloud\Cc\Response', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\ChatMessage $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateChatMessage(\Nocloud\Cc\ChatMessage $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/UpdateChatMessage',
        $argument,
        ['\Nocloud\Cc\ChatMessage', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\GetChatRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetChat(\Nocloud\Cc\GetChatRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/GetChat',
        $argument,
        ['\Nocloud\Cc\Chat', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\InviteChatRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Invite(\Nocloud\Cc\InviteChatRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/Invite',
        $argument,
        ['\Nocloud\Cc\Response', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\CreateChatRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateChat(\Nocloud\Cc\CreateChatRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/CreateChat',
        $argument,
        ['\Nocloud\Cc\Chat', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\DeleteChatRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteChat(\Nocloud\Cc\DeleteChatRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/DeleteChat',
        $argument,
        ['\Nocloud\Cc\Response', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\Chat $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateChat(\Nocloud\Cc\Chat $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/nocloud.cc.ChatService/UpdateChat',
        $argument,
        ['\Nocloud\Cc\Chat', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Nocloud\Cc\ChatMessageStreamRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function Stream(\Nocloud\Cc\ChatMessageStreamRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/nocloud.cc.ChatService/Stream',
        $argument,
        ['\Nocloud\Cc\ChatMessage', 'decode'],
        $metadata, $options);
    }

}
