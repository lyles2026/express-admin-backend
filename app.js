import express from "express";
import { connectDB } from "./config/db";

const app = express()
const PORT = 3000

app.use(express.json())

const startServer = async () => {
    await connectDB()
    
    app.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`)
    
})
}

startServer()