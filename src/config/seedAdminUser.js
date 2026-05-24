import { userModel } from '../models/common/user.js'

export const seedAdminUser = async () => {
    const exist = await userModel.findOne({ username: 'admin' })
    if (exist) {
        console.log('ℹ️ 管理员账号已存在，跳过初始化');
        return
    }

    const now = new Date()
    const createdAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`

    await userModel.create({
        username: 'admin',
        password: 'admin123',
        nickname: '管理员',
        role: 'admin',
        createdAt
    })
    console.log('✅ 默认管理员账号已创建 (admin / admin123)');
}