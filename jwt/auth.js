import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ code: 401, message: '未提供token' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, '111111')
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ code: 401, message: 'token 无效或过期'})
    }
}