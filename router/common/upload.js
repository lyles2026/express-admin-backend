import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { Router } from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const uploadDir = path.join(__dirname, '../../../uploads')

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

const upload = multer({ storage: multer.memoryStorage() })

const router = Router()

router.post('/upload', (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err) return res.status(500).json({ code: 500, message: '上传错误: ' + err.message })
    if (!req.file) return res.status(400).json({ code: 400, message: '请选择文件' })
    try {
      const ext = path.extname(req.file.originalname)
      const filename = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext
      const filepath = path.join(uploadDir, filename)
      fs.writeFileSync(filepath, req.file.buffer)
      const url = `http://localhost:3000/uploads/${filename}`
      res.json({ code: 200, data: { url, name: req.file.originalname, size: (req.file.size / 1024 / 1024).toFixed(1) + 'MB' } })
    } catch (e) {
      console.error('文件处理失败:', e)
      res.status(500).json({ code: 500, message: '文件处理失败: ' + e.message })
    }
  })
})

export default router