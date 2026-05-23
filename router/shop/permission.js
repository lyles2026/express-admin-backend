import { PermissionModel } from "../../models/shop/permission.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/permission', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await PermissionModel.find()
  res.json({ code: 200, data: list })
})

router.post('/permission', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await PermissionModel.create(req.body)
  res.json({ code: 201, data: item })
})

router.put('/permission/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await PermissionModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

router.delete('/permission/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await PermissionModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

export default router