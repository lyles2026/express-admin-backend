import { SizeModel } from "../../models/shop/size";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

const router = Router()

router.get('/size', async (req, res) => {
    const size = await SizeModel.find()
    res.json({
        code: 200,
        data: size
    })
})

router.post('/size', verifyToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ code: 403, message: '无权限' })
    }
    const size = await SizeModel.create(req.body)
    res.json({ code: 201, data: size })
})

router.put('/size/:id', verifyToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ code: 403, message: '无权限' })
    }
    const size = await SizeModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ code: 200, data: size })
})

router.delete('/size/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  await SizeModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})


export default router


