import express from "express";
import { connectDB } from "./config/db.js";

import swaggerUi from "swagger-ui-express";
import specs from './config/swagger.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api-docs',  swaggerUi.serve, swaggerUi.setup(specs))

const startServer = async () => {
    await connectDB()

    app.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`)
    console.log(`📚 API 文档: http://localhost:${PORT}/api-docs`);
    
})
}

startServer()