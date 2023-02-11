<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\model\user;

use app\model\agent\AgentLevel;
use app\model\order\StoreOrder;
use app\model\system\SystemUserLevel;
use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;
use think\facade\Db;

/**
 * Class User
 * @package app\model\user
 */
class User extends BaseModel
{
    use ModelTrait;

    /**
     * @var string
     */
    protected $pk = 'uid';

    protected $name = 'user_1';

    protected $insert = ['add_time', 'add_ip', 'last_time', 'last_ip'];

    protected $hidden = [
        'add_ip', 'account', 'clean_time', 'last_ip', 'pwd'
    ];

    /**
     * 自动转类型
     * @var string[]
     */
    protected $type = [
        'birthday' => 'int'
    ];
    public static function onBeforeInsert($user)
    {
        //重置表名
        $user->setTableName();
    }


    public static function onBeforeUpdate($user)
    {
        dump($user);die;
        //重置表名
        $user->setTableName();
    }
    protected $updateTime = false;

    public static $shareByNum = 2000000;//分表间隔、依据

    public function setTableName($uid=null){
        //获取表序号
        $user_lastest_num = Db::name('system_config')->where('menu_name','user_lastest_num')->find();
        $table_num = intval($user_lastest_num['value']);
        $table_prefix = explode('_',$this->name)[0];
        $this->checkTableNameExist($table_prefix.'_'.$table_num);
        //查最后一条数据
        $last = Db::name($table_prefix.'_'.$table_num)->order('uid desc')->find();
        $last_uid = $last?$last['uid']:0;
        if ($uid){
            $table_num = $this->getTableNumByUid($uid);
        }else{

            if ( $table_num * self::$shareByNum <= $last_uid){
                $table_num += 1;
                $this->checkTableNameExist($table_prefix.'_'.$table_num);
                Db::name('system_config')->where('menu_name','user_lastest_num')->update(['value'=>$table_num]);
            }
        }
        $this->name = $table_prefix.'_'.$table_num;
        return $last_uid;
    }

    public function setTabelNameByName($table_name = ''){
        if (!empty($table_name)){
            $this->name = $table_name;
        }
    }
    protected function getTableNumByUid($uid,$i = 1){
        if ($uid > self::$shareByNum * $i){
            $i++;
            return $this->getTableNumByUid($uid,$i);
        }
        return $i;
    }

    protected function checkTableNameExist($table_name){
        $res = Db::query('SHOW TABLES LIKE '."'eb_".$table_name."'");
        if (!$res){
            $sql = <<<EOT
                CREATE TABLE `eb_$table_name` (
                    `uid` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
                    `account` varchar(32) NOT NULL DEFAULT '' COMMENT '用户账号',
                    `pwd` varchar(32) NOT NULL DEFAULT '' COMMENT '用户密码',
                    `real_name` varchar(25) NOT NULL DEFAULT '' COMMENT '真实姓名',
                    `birthday` int(11) NOT NULL DEFAULT '0' COMMENT '生日',
                    `card_id` varchar(20) NOT NULL DEFAULT '' COMMENT '身份证号码',
                    `mark` varchar(255) NOT NULL DEFAULT '' COMMENT '用户备注',
                    `partner_id` int(11) NOT NULL DEFAULT '0' COMMENT '合伙人id',
                    `group_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户分组id',
                    `nickname` varchar(60) NOT NULL DEFAULT '' COMMENT '用户昵称',
                    `avatar` varchar(256) NOT NULL DEFAULT '' COMMENT '用户头像',
                    `phone` char(15) NOT NULL DEFAULT '' COMMENT '手机号码',
                    `add_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '添加时间',
                    `add_ip` varchar(16) NOT NULL DEFAULT '' COMMENT '添加ip',
                    `last_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '最后一次登录时间',
                    `last_ip` varchar(16) NOT NULL DEFAULT '' COMMENT '最后一次登录ip',
                    `now_money` decimal(8,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '用户余额',
                    `brokerage_price` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '佣金金额',
                    `integral` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户剩余积分',
                    `exp` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '会员经验',
                    `sign_num` int(11) NOT NULL DEFAULT '0' COMMENT '连续签到天数',
                    `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1为正常，0为禁止',
                    `level` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '等级',
                    `agent_level` int(10) NOT NULL DEFAULT '0' COMMENT '分销等级',
                    `spread_open` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否有推广资格',
                    `spread_uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '推广元id',
                    `spread_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '推广员关联时间',
                    `user_type` varchar(32) NOT NULL DEFAULT '' COMMENT '用户类型',
                    `is_promoter` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否为推广员',
                    `pay_count` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户购买次数',
                    `spread_count` int(11) NOT NULL DEFAULT '0' COMMENT '下级人数',
                    `clean_time` int(11) NOT NULL DEFAULT '0' COMMENT '清理会员时间',
                    `addres` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
                    `adminid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '管理员编号 ',
                    `login_type` varchar(36) NOT NULL DEFAULT '' COMMENT '用户登陆类型，h5,wechat,routine',
                    `record_phone` varchar(11) NOT NULL DEFAULT '0' COMMENT '记录临时电话',
                    `is_money_level` tinyint(1) NOT NULL DEFAULT '0' COMMENT '会员来源  0: 购买商品升级   1：花钱购买的会员2: 会员卡领取',
                    `is_ever_level` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否永久性会员  0: 非永久会员  1：永久会员',
                    `overdue_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '会员到期时间',
                    `uniqid` varchar(32) NOT NULL DEFAULT '' COMMENT '用户唯一值',
                    `division_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '代理类型：0普通，1事业部，2代理，3员工',
                    `division_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '代理状态',
                    `is_division` tinyint(1) NOT NULL DEFAULT '0' COMMENT '事业部状态',
                    `is_agent` tinyint(1) NOT NULL DEFAULT '0' COMMENT '代理状态',
                    `is_staff` tinyint(1) NOT NULL DEFAULT '0' COMMENT '员工状态',
                    `division_id` int(11) NOT NULL DEFAULT '0' COMMENT '事业部id',
                    `agent_id` int(11) NOT NULL DEFAULT '0' COMMENT '代理商id',
                    `staff_id` int(11) NOT NULL DEFAULT '0' COMMENT '员工id',
                    `division_percent` int(11) NOT NULL DEFAULT '0' COMMENT '分佣比例',
                    `division_change_time` int(11) NOT NULL DEFAULT '0' COMMENT '事业部/代理/员工修改时间',
                    `division_end_time` int(11) NOT NULL DEFAULT '0' COMMENT '事业部/代理/员工结束时间',
                    `division_invite` int(11) NOT NULL DEFAULT '0' COMMENT '代理商邀请码',
                    `is_del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否注销',
                    PRIMARY KEY (`uid`) USING BTREE,
                    KEY `account` (`account`) USING BTREE,
                    KEY `spreaduid` (`spread_uid`) USING BTREE,
                    KEY `level` (`level`) USING BTREE,
                    KEY `status` (`status`) USING BTREE,
                    KEY `is_promoter` (`is_promoter`) USING BTREE
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';
                EOT;
            Db::startTrans();
            try{
                Db::query($sql);
                Db::commit();
            }catch(\Exception $e){
                Db::rollback();
            }
        }
    }

    protected function setAddTimeAttr($value)
    {
        return time();
    }

    protected function setAddIpAttr($value)
    {
        return app('request')->ip();
    }

    protected function setLastTimeAttr($value)
    {
        return time();
    }

    protected function setLastIpAttr($value)
    {
        return app('request')->ip();
    }

    protected function getPhoneAttr($value)
    {
        return $value && app('request')->hasMacro('adminInfo') && app('request')->adminInfo()['level'] != 0 ? substr_replace($value, '****', 3, 4) : $value;
    }

    /**
     * 链接会员登陆设置表
     * @return \think\model\relation\HasOne
     */
    public function systemUserLevel()
    {
        return $this->hasOne(SystemUserLevel::class, 'id', 'level');
    }

    /**
     * 关联用户分组
     * @return \think\model\relation\HasOne
     */
    public function userGroup()
    {
        return $this->hasOne(UserGroup::class, 'id', 'group_id');
    }

    /**
     * 关联自己
     * @return \think\model\relation\HasOne
     */
    public function spreadUser()
    {
        return $this->hasOne(self::class, 'uid', 'spread_uid');
    }

    /**
     * 关联自己
     * @return \think\model\relation\HasOne
     */
    public function spreadCount()
    {
        return $this->hasMany(User::class, 'spread_uid', 'uid');
    }

    /**
     * 关联用户标签关系
     * @return \think\model\relation\HasMany
     */
    public function LabelRelation()
    {
        return $this->hasMany(UserLabelRelation::class, 'uid', 'uid');
    }

    /**
     * 关联用户标签
     * @return \think\model\relation\HasManyThrough
     */
    public function label()
    {
        return $this->hasManyThrough(UserLabel::class, UserLabelRelation::class, 'uid', 'id', 'uid', 'label_id');
    }

    /**
     * 关联用户地址
     * @return \think\model\relation\HasMany
     */
    public function address()
    {
        return $this->hasMany(UserAddress::class, 'uid', 'uid');
    }

    /**
     * 关联提现
     * @return \think\model\relation\HasMany
     */
    public function extract()
    {
        return $this->hasMany(UserExtract::class, 'uid', 'uid');
    }

    /**
     * 关联订单
     * @return User|\think\model\relation\HasMany
     */
    public function order()
    {
        return $this->hasMany(StoreOrder::class, 'uid', 'uid');
    }

    /**
     * 关联分销等级
     * @return \think\model\relation\HasOne
     */
    public function agentLevel()
    {
        return $this->hasOne(AgentLevel::class, 'id', 'agent_level')->where('is_del', 0)->where('status', 1);
    }

    /**
     * 关联佣金数据
     * @return \think\model\relation\HasMany
     */
    public function bill()
    {
        return $this->hasMany(UserBill::class, 'uid', 'uid');
    }

    /**
     * 用户uid
     * @param Model $query
     * @param $value
     */
    public function searchUidAttr($query, $value)
    {
        if (is_array($value))
            $query->whereIn('uid', $value);
        else
            $query->where('uid', $value);
    }

    /**
     * 账号搜索器
     * @param Model $query
     * @param $value
     */
    public function searchAccountAttr($query, $value)
    {
        $query->where('account', $value);
    }

    /**
     * 密码搜索器
     * @param Model $query
     * @param $value
     */
    public function searchPwdAttr($query, $value)
    {
        $query->where('pwd', $value);
    }

    /**
     * uid范围查询搜索器
     * @param Model $query
     * @param $value
     */
    public function searchUidsAttr($query, $value)
    {
        $query->whereIn('uid', $value);
    }

    /**
     * 模糊条件搜索器
     * @param Model $query
     * @param $value
     */
    public function searchLikeAttr($query, $value)
    {
        $query->where('account|nickname|phone|real_name|uid', 'LIKE', "%$value%");
    }

    /**
     * 手机号搜索器
     * @param Model $query
     * @param $value
     */
    public function searchPhoneAttr($query, $value)
    {
        $query->where('phone', $value);
    }

    /**
     * 分组搜索器
     * @param Model $query
     * @param $value
     */
    public function searchGroupIdAttr($query, $value)
    {
        $query->where('group_id', $value);
    }

    /**
     * 是否推广人搜索器
     * @param Model $query
     * @param $value
     */
    public function searchIsPromoterAttr($query, $value)
    {
        $query->where('is_promoter', $value);
    }

    /**
     * 状态搜索器
     * @param Model $query
     * @param $value
     */
    public function searchStatusAttr($query, $value)
    {
        $query->where('status', $value);
    }

    /**
     * 会员等级搜索器
     * @param Model $query
     * @param $value
     */
    public function searchLevelAttr($query, $value)
    {
        $query->where('level', $value);
    }

    /**
     * 推广人uid搜索器
     * @param Model $query
     * @param $value
     */
    public function searchSpreadUidAttr($query, $value)
    {
        $query->where('spread_uid', $value);
    }

    /**
     * 推广人uid不等于搜索器
     * @param Model $query
     * @param $value
     */
    public function searchNotSpreadUidAttr($query, $value)
    {
        $query->where('spread_uid', '<>', $value);
    }

    /**
     * 推广人时间搜索器
     * @param Model $query
     * @param $value
     */
    public function searchSpreadTimeAttr($query, $value)
    {
        if ($value) {
            if (is_array($value)) {
                if (count($value) == 2) $query->where('spread_time', $value[0], $value[1]);
            } else {
                $query->where('spread_time', $value);
            }
        }
    }

    /**
     * 用户类型搜索器
     * @param Model $query
     * @param $value
     */
    public function searchUserTypeAttr($query, $value)
    {
        if ($value != '') $query->where('user_type', $value);
    }

    /**
     * 购买次数搜索器
     * @param Model $query
     * @param $value
     */
    public function searchPayCountAttr($query, $value)
    {
        $query->where('pay_count', $value);
    }

    /**
     * 用户推广资格
     * @param Model $query
     * @param $value
     */
    public function searchSpreadOpenAttr($query, $value)
    {
        if ($value != '') $query->where('spread_open', $value);
    }

    /**
     * nickname搜索器
     * @param $query
     * @param $value
     */
    public function searchNicknameAttr($query, $value)
    {
        $query->where('nickname', "like", "%" . $value . "%");
    }

    /**
     * division_type搜索器
     * @param $query
     * @param $value
     */
    public function searchDivisionTypeAttr($query, $value)
    {
        if ($value !== '') $query->where('division_type', $value);
    }

    /**
     * division_id搜索器
     * @param $query
     * @param $value
     */
    public function searchDivisionIdAttr($query, $value)
    {
        if ((int)$value !== 0) $query->where('division_id', $value);
    }

    /**
     * agent_id搜索器
     * @param $query
     * @param $value
     */
    public function searchAgentIdAttr($query, $value)
    {
        if ($value !== '') $query->where('agent_id', $value);
    }

    /**
     * staff_id搜索器
     * @param $query
     * @param $value
     */
    public function searchStaffIdAttr($query, $value)
    {
        if ($value !== '') $query->where('staff_id', $value);
    }

    /**
     * is_division搜索器
     * @param $query
     * @param $value
     */
    public function searchIsDivisionAttr($query, $value)
    {
        if ($value !== '') $query->where('is_division', $value);
    }

    /**
     * is_agent搜索器
     * @param $query
     * @param $value
     */
    public function searchIsAgentAttr($query, $value)
    {
        if ($value !== '') $query->where('is_agent', $value);
    }

    /**
     * is_staff搜索器
     * @param $query
     * @param $value
     */
    public function searchIsStaffAttr($query, $value)
    {
        if ($value !== '') $query->where('is_staff', $value);
    }

    /**
     * @param $query
     * @param $value
     */
    public function searchKeywordAttr($query, $value)
    {
        if ($value !== '') $query->where('uid|nickname', 'like', '%' . $value . '%');
    }

    /**
     * 注销搜索器
     * @param $query
     * @param $value
     */
    public function searchIsDelAttr($query, $value)
    {
        if ($value !== '') $query->where('is_del', $value);
    }
}
