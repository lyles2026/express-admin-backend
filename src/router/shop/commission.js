import { CommissionModel } from "../../models/shop/commission.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/commission', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await CommissionModel.find()
  res.json({ code: 200, data: list })
})

router.put('/commission/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await CommissionModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

export default router