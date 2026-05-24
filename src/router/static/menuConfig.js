import { Router } from "express";
import { verifyToken } from "../../jwt/auth.js";
import { menuConfig } from "../../config/staticData.js";

const router = Router()

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: 获取菜单
 *     tags: [用户管理]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 成功
 */



router.get('/menu', verifyToken, (req, res) => {
  const role = req.user.role
  res.json({ code: 200, data: menuConfig[role] || [] })
})

export default router;