import { RoleModel } from "../models/shop/role.js";
import { PermissionModel } from "../models/shop/permission.js";

const defaultRoles = [
    { name: '超级管理员', code: 'super_admin', description: '拥有所有权限' },
    { name: '运营管理员', code: 'operation', description: '负责商品、订单管理' },
    { name: '客服管理员', code: 'service', description: '负责售后、用户咨询' },
    { name: '财务管理员', code: 'finance', description: '负责财务报表、对账' },
]

export const seedRoles = async () => {
    const count = await RoleModel.countDocuments()
    if (count === 0) {
        // 超级管理员拥有所有权限
        const allPerms = await PermissionModel.find()
        const allCodes = allPerms.map(p => p.code)
        await RoleModel.create({
            ...defaultRoles[0],
            permissions: allCodes
        })
        // 其余角色暂无权限，后续在页面分配
        for (let i = 1; i < defaultRoles.length; i++) {
            await RoleModel.create(defaultRoles[i])
        }
        console.log('✅ 默认角色数据已初始化')
    }
}