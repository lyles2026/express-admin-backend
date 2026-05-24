import { PageConfigModel } from "../../models/shop/pageConfig.js";
import { verifyToken } from "../../jwt/auth.js";
import { Router } from "express";

const router = Router()

router.get('/page-config/:page', verifyToken, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ code: 403, message: '无权限' })
  const config = await PageConfigModel.findOne({ page: req.params.page })
  if (!config) return res.status(404).json({ code: 404, message: '页面配置不存在' })
  res.json({ code: 200, data: config })
})

export default router