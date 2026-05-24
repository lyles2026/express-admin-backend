import { CouponModel } from "../../models/shop/coupon.js";
import { verifyToken } from "../../jwt/auth.js";
import { Router } from "express";

const router = Router()

router.get('/coupon', async (req, res) => {
    const coupon = await CouponModel.find()
    res.json({
        code: 200,
        data: coupon
    })
})

router.post('/coupon', verifyToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ code: 403, message: '无权限' })
    }
    const coupon = await CouponModel.create(req.body)
    res.json({ code: 201, data: coupon })
})

router.put('/coupon/:id', verifyToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ code: 403, message: '无权限' })
    }
    const coupon = await CouponModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ code: 200, data: coupon })
})

router.delete('/coupon/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  await CouponModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})


export default router


