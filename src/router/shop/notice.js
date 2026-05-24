import { NoticeModel } from "../../models/shop/notice.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/notice', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await NoticeModel.find().sort({ sort: 1 })
  res.json({ code: 200, data: list })
})

router.post('/notice', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const now = new Date()
  const createTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const item = await NoticeModel.create({ ...req.body, createTime })
  res.json({ code: 201, data: item })
})

router.put('/notice/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await NoticeModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

router.delete('/notice/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await NoticeModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

export default router