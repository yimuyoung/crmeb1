<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vod/business/vod_media.proto

namespace Volc\Service\Vod\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Vod.Models.Business.VodASRUtteranceWordForAudit</code>
 */
class VodASRUtteranceWordForAudit extends \Google\Protobuf\Internal\Message
{
    /**
     * 分段文本
     *
     * Generated from protobuf field <code>string Text = 1;</code>
     */
    protected $Text = '';
    /**
     * 起始时间(毫秒)
     *
     * Generated from protobuf field <code>double StartTimeMill = 2;</code>
     */
    protected $StartTimeMill = 0.0;
    /**
     * 结束时间(毫秒)
     *
     * Generated from protobuf field <code>double EndTimeMill = 3;</code>
     */
    protected $EndTimeMill = 0.0;
    /**
     * 空白时长(毫秒)
     *
     * Generated from protobuf field <code>double BlankDuration = 4;</code>
     */
    protected $BlankDuration = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $Text
     *           分段文本
     *     @type float $StartTimeMill
     *           起始时间(毫秒)
     *     @type float $EndTimeMill
     *           结束时间(毫秒)
     *     @type float $BlankDuration
     *           空白时长(毫秒)
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Vod\Models\GPBMetadata\VodMedia::initOnce();
        parent::__construct($data);
    }

    /**
     * 分段文本
     *
     * Generated from protobuf field <code>string Text = 1;</code>
     * @return string
     */
    public function getText()
    {
        return $this->Text;
    }

    /**
     * 分段文本
     *
     * Generated from protobuf field <code>string Text = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setText($var)
    {
        GPBUtil::checkString($var, True);
        $this->Text = $var;

        return $this;
    }

    /**
     * 起始时间(毫秒)
     *
     * Generated from protobuf field <code>double StartTimeMill = 2;</code>
     * @return float
     */
    public function getStartTimeMill()
    {
        return $this->StartTimeMill;
    }

    /**
     * 起始时间(毫秒)
     *
     * Generated from protobuf field <code>double StartTimeMill = 2;</code>
     * @param float $var
     * @return $this
     */
    public function setStartTimeMill($var)
    {
        GPBUtil::checkDouble($var);
        $this->StartTimeMill = $var;

        return $this;
    }

    /**
     * 结束时间(毫秒)
     *
     * Generated from protobuf field <code>double EndTimeMill = 3;</code>
     * @return float
     */
    public function getEndTimeMill()
    {
        return $this->EndTimeMill;
    }

    /**
     * 结束时间(毫秒)
     *
     * Generated from protobuf field <code>double EndTimeMill = 3;</code>
     * @param float $var
     * @return $this
     */
    public function setEndTimeMill($var)
    {
        GPBUtil::checkDouble($var);
        $this->EndTimeMill = $var;

        return $this;
    }

    /**
     * 空白时长(毫秒)
     *
     * Generated from protobuf field <code>double BlankDuration = 4;</code>
     * @return float
     */
    public function getBlankDuration()
    {
        return $this->BlankDuration;
    }

    /**
     * 空白时长(毫秒)
     *
     * Generated from protobuf field <code>double BlankDuration = 4;</code>
     * @param float $var
     * @return $this
     */
    public function setBlankDuration($var)
    {
        GPBUtil::checkDouble($var);
        $this->BlankDuration = $var;

        return $this;
    }

}

