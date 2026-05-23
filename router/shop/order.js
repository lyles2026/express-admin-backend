import { OrderModel } from "../../models/shop/order.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/order', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await OrderModel.find().sort({ createTime: -1 })
  res.json({ code: 200, data: list })
})

// 生成唯一订单号: YYYYMMDD + 6位随机数
const generateOrderNo = () => {
  const now = new Date()
  const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const rand = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
  return dateStr + rand
}

router.post('/order', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const now = new Date()
  const createTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`

  // 确保订单号唯一，如果重复则重新生成
  let orderNo
  let exists = true
  while (exists) {
    orderNo = generateOrderNo()
    exists = await OrderModel.findOne({ orderNo })
  }

  const item = await OrderModel.create({ ...req.body, orderNo, createTime })
  res.json({ code: 201, data: item })
})

router.put('/order/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

router.delete('/order/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await OrderModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

// 订单统计
router.get('/order-stats', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const allOrders = await OrderModel.find()

  const now = new Date()
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

  const todayOrders = allOrders.filter(o => o.createTime?.startsWith(todayStr))
  const monthOrders = allOrders.filter(o => o.createTime?.startsWith(monthStr))

  // 今日/本月数据
  const topStats = [
    { title: '今日订单', value: todayOrders.length, subTitle: '', subValue: '', unit: '单' },
    { title: '今日销售额', value: todayOrders.reduce((s, o) => s + (o.amount || 0), 0), subTitle: '', subValue: '', unit: '元' },
    { title: '本月订单', value: monthOrders.length, subTitle: '', subValue: '', unit: '单' },
    { title: '本月销售额', value: monthOrders.reduce((s, o) => s + (o.amount || 0), 0), subTitle: '', subValue: '', unit: '元' },
  ]

  // 状态分布
  const statusList = ['待付款', '待发货', '已发货', '已完成']
  const orderStats = statusList.map(label => ({
    value: allOrders.filter(o => o.status === label).length,
    label,
    icon: '',
    path: '/Order/permissions'
  }))

  // 近7天趋势
  const days = []
  const orderData = []
  const amountData = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const dayStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    const dayOrders = allOrders.filter(o => o.createTime?.startsWith(dayStr))
    days.push(`${d.getMonth() + 1}/${d.getDate()}`)
    orderData.push(dayOrders.length)
    amountData.push(dayOrders.reduce((s, o) => s + (o.amount || 0), 0))
  }

  res.json({ code: 200, data: { topStats, orderStats, chart: { days, orderData, amountData } } })
})

export default router