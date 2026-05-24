import { PermissionModel } from "../models/shop/permission.js";

const defaultPermissions = [
    { name: '商品管理', code: 'goods:manage', type: '菜单', path: '/goods', icon: 'Goods', roles: ['admin'] },
    { name: '商品新增', code: 'goods:create', type: '按钮', parent: '商品管理', roles: ['admin'] },
    { name: '商品编辑', code: 'goods:update', type: '按钮', parent: '商品管理', roles: ['admin'] },
    { name: '商品删除', code: 'goods:delete', type: '按钮', parent: '商品管理', roles: ['admin'] },
    { name: '订单管理', code: 'order:manage', type: '菜单', path: '/order', icon: 'Document', roles: ['admin'] },
    { name: '订单查看', code: 'order:view', type: '按钮', parent: '订单管理', roles: ['admin', 'user'] },
    { name: '订单发货', code: 'order:ship', type: '按钮', parent: '订单管理', roles: ['admin'] },
    { name: '用户管理', code: 'user:manage', type: '菜单', path: '/users', icon: 'User', roles: ['admin', 'user'] },
]

export const seedPermissions = async () => {
    const count = await PermissionModel.countDocuments()
    if (count === 0) {
        await PermissionModel.insertMany(defaultPermissions)
        console.log('✅ 默认权限数据已初始化')
    }
}