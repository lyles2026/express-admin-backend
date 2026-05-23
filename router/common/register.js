import { Router } from "express";
import { userModel } from '../../models/common/user.js'

const router = Router()

/**
 * @swagger
 * /register:
 *   post:
 *     summary: 用户注册
 *     tags: [用户管理]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 用户创建成功
 *
 */



router.post('/register', async (req, res) => {

    const { username, password, role: roleZh } = req.body
    // 前端传中文角色名，映射为英文（用于登录验证）
    const role = roleZh === '管理员' ? 'admin' : 'user'
    const now = new Date()
    const createdAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`

    const newUser = await userModel.create({
        username,
        password,
        nickname: username,
        phone: req.body.phone || '',
        email: req.body.email || '',
        role,
        createdAt
    })

    res.json({
        code: 201,
        data: newUser.toObject(),
        message: "用户创建成功",
    })
})

export default router