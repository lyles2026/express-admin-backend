import { AfterSaleModel } from "../../models/shop/afterSale.js";
import { verifyToken } from "../../jwt/auth.js";
import { Router } from "express";

const router = Router()

router.get('/after-sale', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await AfterSaleModel.find().sort({ createTime: -1 })
  res.json({ code: 200, data: list })
})

router.put('/after-sale/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const item = await AfterSaleModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json({ code: 200, data: item })
})

router.delete('/after-sale/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await AfterSaleModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

export default router