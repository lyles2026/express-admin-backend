import express from "express";
import { connectDB } from "./config/db.js";
import cors from 'cors'
import swaggerUi from "swagger-ui-express";
import specs from './config/swagger.js'
import loginRouter from './router/common/login.js'
import registerRouter from './router/common/register.js'
import menuRouter from './router/static/menuConfig.js'
import shopRouter from './router/static/shopConfig.js'
import goodsRouter from './router/shop/shop.js'
import categoryRouter from './router/shop/category.js'
import sizeRouter from './router/shop/size.js'
import couponRouter from './router/shop/coupon.js'
import vipRouter from './router/shop/vip.js'
import adminUserRouter from './router/common/adminUser.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(loginRouter)
app.use(registerRouter)
app.use(menuRouter)
app.use(shopRouter)
app.use(goodsRouter)
app.use(categoryRouter)
app.use(sizeRouter)
app.use(couponRouter)
app.use(vipRouter)
app.use(adminUserRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))



const startServer = async () => {
    await connectDB()

    app.listen(PORT, () => {
        console.log(`🚀 服务器运行在 http://localhost:${PORT}`)
        console.log(`📚 API 文档: http://localhost:${PORT}/docs`);

    })
}

startServer()