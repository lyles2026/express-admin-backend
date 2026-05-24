import { DistOrderModel } from "../../models/shop/distOrder.js";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/dist-order', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await DistOrderModel.find()
  res.json({ code: 200, data: list })
})

export default router