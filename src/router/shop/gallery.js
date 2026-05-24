import { GalleryModel } from "../../models/shop/gallery.js";
import { verifyToken } from "../../jwt/auth.js";
import { Router } from "express";

const router = Router()

router.get('/gallery', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const list = await GalleryModel.find()
  res.json({ code: 200, data: list })
})

router.post('/gallery', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const now = new Date()
  const uploadTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  const item = await GalleryModel.create({ ...req.body, uploadTime })
  res.json({ code: 201, data: item })
})

router.delete('/gallery/:id', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  await GalleryModel.findByIdAndDelete(req.params.id)
  res.json({ code: 200, message: '删除成功' })
})

router.delete('/gallery/batch', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const { ids } = req.body
  await GalleryModel.deleteMany({ _id: { $in: ids } })
  res.json({ code: 200, message: '批量删除成功' })
})

export default router