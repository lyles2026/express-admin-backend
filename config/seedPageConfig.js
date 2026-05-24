import { PageConfigModel } from "../models/shop/pageConfig.js";

const configs = [
  {
    page: 'admin',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'username', label: '用户名' },
      { prop: 'nickname', label: '昵称' },
      { prop: 'phone', label: '手机号' },
      { prop: 'email', label: '邮箱' },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'createdAt', label: '创建时间' },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: [
      { name: 'username', label: '用户名' },
      { name: 'password', label: '密码' },
      { name: 'nickname', label: '昵称' },
      { name: 'phone', label: '手机号' },
      { name: 'email', label: '邮箱' },
      { id: 2, name: 'status', label: '状态' }
    ]
  },
  {
    page: 'user',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'username', label: '用户名' },
      { prop: 'nickname', label: '昵称' },
      { prop: 'phone', label: '手机号' },
      { prop: 'email', label: '邮箱' },
      { prop: 'level', label: '会员等级' },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'createTime', label: '注册时间' },
      { type: 'actions', label: '操作', width: 200 }
    ],
    formFields: [
      { name: 'nickname', label: '昵称' },
      { name: 'phone', label: '手机号' },
      { name: 'email', label: '邮箱' },
      { id: 1, name: 'level', label: '会员等级' },
      { id: 2, name: 'status', label: '状态' },
    ]
  },
  {
    page: 'permission',
    columns: [
      { prop: 'name', label: '权限名称' },
      { prop: 'code', label: '权限标识' },
      { prop: 'type', label: '类型', width: 100 },
      { prop: 'path', label: '路径' },
      { prop: 'parent', label: '父级' },
      { prop: 'roles', label: '授权角色', width: 180 },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: []
  },
  {
    page: 'role',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'name', label: '角色名称' },
      { prop: 'code', label: '角色标识' },
      { prop: 'description', label: '描述' },
      { prop: 'permissions', label: '权限数', width: 100 },
      { type: 'actions', label: '操作', width: 200 }
    ],
    formFields: [
      { name: 'name', label: '角色名称' },
      { name: 'code', label: '角色标识' },
      { name: 'description', label: '描述' }
    ]
  },
  {
    page: 'coupon',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'name', label: '优惠券名称' },
      { prop: 'type', label: '类型', width: 100 },
      { prop: 'value', label: '优惠内容', width: 120 },
      { prop: 'startTime', label: '开始时间', width: 120 },
      { prop: 'endTime', label: '结束时间', width: 120 },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'receiveCount', label: '领取人数', width: 100 },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: [
      { name: 'name', label: '优惠券名称' },
      { name: 'type', label: '类型' },
      { name: 'value', label: '优惠内容' },
      { id: 4, name: 'validity', label: '有效期' }
    ]
  },
  {
    page: 'size',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'name', label: '规格名称' },
      { prop: 'values', label: '规格值' },
      { prop: 'goodsCount', label: '使用商品数', width: 120 },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: [
      { name: 'name', label: '规格名称' },
      { name: 'values', label: '规格值(用逗号分隔)' }
    ]
  },
  {
    page: 'vip',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'name', label: '等级名称' },
      { prop: 'level', label: '等级', width: 80 },
      { prop: 'discount', label: '折扣', width: 100 },
      { prop: 'amountRange', label: '消费金额区间' },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: [
      { name: 'name', label: '等级名称' },
      { name: 'level', label: '等级' },
      { name: 'discount', label: '折扣' },
      { name: 'minAmount', label: '最低消费' },
      { name: 'maxAmount', label: '最高消费' }
    ]
  },
  {
    page: 'notice',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'title', label: '标题' },
      { prop: 'type', label: '类型', width: 100 },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'sort', label: '排序', width: 80 },
      { prop: 'createTime', label: '创建时间' },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: []
  },
  {
    page: 'order',
    columns: [
      { prop: 'orderNo', label: '订单号', width: 180 },
      { prop: 'user', label: '买家' },
      { prop: 'phone', label: '手机号' },
      { prop: 'amount', label: '订单金额' },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'payTime', label: '支付时间' },
      { type: 'actions', label: '操作', width: 220 }
    ],
    formFields: []
  },
  {
    page: 'afterSale',
    columns: [
      { prop: 'id', label: '售后单号', width: 100 },
      { prop: 'orderNo', label: '订单号' },
      { prop: 'user', label: '买家' },
      { prop: 'type', label: '售后类型', width: 100 },
      { prop: 'reason', label: '售后原因' },
      { prop: 'amount', label: '金额' },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'createTime', label: '申请时间' },
      { type: 'actions', label: '操作', width: 180 }
    ],
    formFields: []
  },
  {
    page: 'distOrder',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'orderNo', label: '订单号' },
      { prop: 'buyer', label: '买家' },
      { prop: 'distributor', label: '分销员' },
      { prop: 'commission', label: '佣金' },
      { prop: 'level', label: '分销层级' },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'createTime', label: '创建时间' }
    ],
    formFields: []
  },
  {
    page: 'distributor',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'name', label: '姓名' },
      { prop: 'phone', label: '手机号' },
      { prop: 'level', label: '分销等级' },
      { prop: 'totalCommission', label: '累计佣金' },
      { prop: 'settledCommission', label: '已结算' },
      { prop: 'pendingCommission', label: '待结算' },
      { prop: 'status', label: '状态', width: 100 },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: []
  },
  {
    page: 'shop',
    columns: [
      { prop: 'id', label: 'ID', width: 80 },
      { prop: 'name', label: '商品名称' },
      { prop: 'category', label: '分类' },
      { prop: 'price', label: '价格' },
      { prop: 'stock', label: '库存' },
      { prop: 'status', label: '状态', width: 100 },
      { prop: 'createTime', label: '创建时间' },
      { type: 'actions', label: '操作', width: 150 }
    ],
    formFields: []
  },
]

export const seedPageConfigs = async () => {
  const count = await PageConfigModel.countDocuments()
  if (count === 0) {
    await PageConfigModel.insertMany(configs)
    console.log('✅ 页面配置数据已初始化')
  }
}