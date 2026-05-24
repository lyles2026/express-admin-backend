import { Router } from "express";
import { verifyToken } from "../../jwt/auth.js";
import { shopConfig } from "../../config/staticshopData.js";

const router = Router()

/**
 * @swagger
 * /shopConfig:
 *   get:
 *     summary: 获取商品配置
 *     tags: [商品管理]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 成功
 */



router.get('/shop', verifyToken, (req, res) => {
  const role = req.user.role
  res.json({ code: 200, data: shopConfig || [] })
})

export default router;