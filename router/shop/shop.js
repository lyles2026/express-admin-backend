import { GoodsModel } from "../../models/shop/good";
import { verifyToken } from "../../jwt/auth";
import { Router } from "express";

router.get('/', async (req, res) => {
    const goods = await GoodsModel.find()
    res.json({
        code: 200,
        data: goods
    })
})

router.get('/:id', async (req, res) => {
    const goods = await GoodsModel.findById(req.params.id)
     res.json({ code: 200, data: goods })
})


router.post('/', verifyToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ code: 403, message: '无权限' })
    }
    const goods = await GoodsModel.create(req.body)
    res.json({ code: 201, data: goods })
})

router.put('/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  const goods = await GoodsModel.findByIdAndUpdate(req.params.id, req.body)
  res.json({ code: 200, data: goods })
})

router.delete('/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  await GoodsModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})


export default router
