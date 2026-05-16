import { Router } from "express";
import jwt from 'jsonwebtoken';
import { verifyToken } from "../jwt/auth.js";
import { userModel } from "../models/user.js";

const router = Router()



/**
 * @swagger
 * /login:
 *   post:
 *     summary: 用户登录
 *     tags: ["用户管理"]
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
 *       200:
 *         description: 登录成功
 *       401:
 *         description: 用户名或密码错误
 *
 */


router.post('/login', async (req, res) => {

    const { username, password } = req.body

    const user = await userModel.findOne({
        username,
        password
    })

    if (!user) {
        return res.status(401).json({
            code: 401,
            data: null,
            message: "用户名或密码错误",
        })
    }

    const token = jwt.sign(
        { username: user.username, role: user.role },
        '111111',
        { expiresIn: '7d' }
    )

    res.json({
        code: 200,
        data: {
            username: user.username,
            role: user.role,
            token,
        },
        message: "登录成功",
    })

})

export default router