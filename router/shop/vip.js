import { VipModel } from "../../models/shop/vip.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/vip', async (req, res) => {
  const list = await VipModel.find()
  res.json({ code: 200, data: list })
})

router.post('/vip', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await VipModel.create(req.body)
  res.json({ code: 201, data: item })
})

router.put('/vip/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await VipModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

router.delete('/vip/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await VipModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

export default router