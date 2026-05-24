import { CategoryModel } from "../../models/shop/category.js";
import { verifyToken } from "../../jwt/auth.js";
import { Router } from "express";

const router = Router()

router.get('/category', async (req, res) => {
  const category = await CategoryModel.find()
  res.json({
    code: 200,
    data: category
  })
})


router.post('/category', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  const category = await CategoryModel.create(req.body)
  res.json({ code: 201, data: category })
})

router.put('/category/swap-sort', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  const { id1, id2 } = req.body
  const cat1 = await CategoryModel.findById(id1)
  const cat2 = await CategoryModel.findById(id2)
  if (!cat1 || !cat2) {
    return res.status(404).json({ code: 404, message: '分类不存在' })
  }
  const tempSort = cat1.sort
  cat1.sort = cat2.sort
  cat2.sort = tempSort
  await cat1.save()
  await cat2.save()
  res.json({ code: 200, message: '排序交换成功' })
})

router.put('/category/reindex-sort', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  const categories = await CategoryModel.find().sort({ sort: 1 })
  for (let i = 0; i < categories.length; i++) {
    const newSort = i + 1
    if (categories[i].sort !== newSort) {
      await CategoryModel.findByIdAndUpdate(categories[i]._id, { sort: newSort })
    }
  }
  res.json({ code: 200, message: '排序重排成功' })
})

router.put('/category/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body)
  res.json({ code: 200, data: category })
})

router.delete('/category/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ code: 403, message: '无权限' })
  }
  await CategoryModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})


export default router
