<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/deny_config.proto

namespace Volc\Service\Live\Models\GPBMetadata;

class DenyConfig
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
live/business/deny_config.protoVolcengine.Live.Models.Business"�
DenyConfigDetail
ProType (	
FmtType (	
	Continent (	
Country (	
Region (	
City (	
ISP (	
DenyList (	
	AllowList	 (	"b
DescribeDenyConfigResultF
DenyList (24.Volcengine.Live.Models.Business.VhostWithDenyConfig"�
VhostWithDenyConfig
Vhost (	
Domain (	
App (	E

DenyConfig (21.Volcengine.Live.Models.Business.DenyConfigDetailB�
*com.volcengine.service.live.model.businessB
DenyConfigPZBgithub.com/volcengine/volc-sdk-golang/service/live/models/business��� �!Volc\\Service\\Live\\Models\\Business�$Volc\\Service\\Live\\Models\\GPBMetadatabproto3'
        , true);

        static::$is_initialized = true;
    }
}

