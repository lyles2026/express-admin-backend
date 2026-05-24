import { DistributorModel } from "../../models/shop/distributor.js";
import { CommissionModel } from "../../models/shop/commission.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/distributor', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await DistributorModel.find()
  res.json({ code: 200, data: list })
})

// 分销统计数据：联动计算佣金
router.get('/distributor/stats', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const [distributors, commissions] = await Promise.all([
    DistributorModel.find(),
    CommissionModel.find()
  ])

  const data = distributors.map(d => {
    const distCommissions = commissions.filter(c => c.distributor === d.name)
    const totalCommission = distCommissions.reduce((s, c) => s + (c.commission || 0), 0)
    const settledCommission = distCommissions.filter(c => c.status === '已结算').reduce((s, c) => s + (c.commission || 0), 0)
    const pendingCommission = distCommissions.filter(c => c.status === '待结算').reduce((s, c) => s + (c.commission || 0), 0)
    return {
      ...d.toObject(),
      totalCommission,
      settledCommission,
      pendingCommission,
    }
  })

  res.json({ code: 200, data })
})

router.put('/distributor/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await DistributorModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

export default router