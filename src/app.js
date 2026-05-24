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
import orderRouter from './router/shop/order.js'
import afterSaleRouter from './router/shop/afterSale.js'
import permissionRouter from './router/shop/permission.js'
import roleRouter from './router/shop/role.js'
import distributorRouter from './router/shop/distributor.js'
import distOrderRouter from './router/shop/distOrder.js'
import commissionRouter from './router/shop/commission.js'
import galleryRouter from './router/shop/gallery.js'
import noticeRouter from './router/shop/notice.js'
import pageConfigRouter from './router/shop/pageConfig.js'
import { seedPermissions } from './config/seedPermission.js'
import { seedRoles } from './config/seedRole.js'
import { seedDistributors } from './config/seedDistributor.js'
import { seedDistOrders } from './config/seedDistOrder.js'
import { seedCommissions } from './config/seedCommission.js'
import { seedGallery } from './config/seedGallery.js'
import { seedNotices } from './config/seedNotice.js'
import { seedPageConfigs } from './config/seedPageConfig.js'
import adminUserRouter from './router/common/adminUser.js'
import uploadRouter from './router/common/upload.js'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

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
app.use(orderRouter)
app.use(afterSaleRouter)
app.use(permissionRouter)
app.use(roleRouter)
app.use(distributorRouter)
app.use(distOrderRouter)
app.use(commissionRouter)
app.use(galleryRouter)
app.use(noticeRouter)
app.use(pageConfigRouter)
app.use(uploadRouter)
// 静态文件服务
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
app.use(adminUserRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))



const startServer = async () => {
    await connectDB()
    await seedPermissions()
    await seedRoles()
    await seedDistributors()
    await seedDistOrders()
    await seedCommissions()
    await seedGallery()
    await seedNotices()
    await seedPageConfigs()

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 服务器运行在 http://localhost:${PORT}`)
        console.log(`📚 API 文档: http://localhost:${PORT}/docs`);

    })
}

startServer()