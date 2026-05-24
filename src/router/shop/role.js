import { RoleModel } from "../../models/shop/role.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/role', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await RoleModel.find()
  res.json({ code: 200, data: list })
})

router.post('/role', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await RoleModel.create(req.body)
  res.json({ code: 201, data: item })
})

router.put('/role/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await RoleModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

router.delete('/role/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await RoleModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

export default router