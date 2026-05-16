import { Router } from "express";
import { userModel } from "../models/user";

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

    const { username, password } = req.body
    const adminUsers = process.env.ADMIN_USERS?.split(',') || []

    const role = adminUsers.includes(username) ? 'admin' : 'user'

    const newUser = await userModel.create({
        username,
        password,
        role
    })

    res.json({
        code: 201,
        data: newUser.toObject(),
        message: "用户创建成功",
    })
})

export default router