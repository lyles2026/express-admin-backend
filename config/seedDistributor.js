import { DistributorModel } from "../models/shop/distributor.js";

const defaultDistributors = [
    { name: '张三', phone: '13800138000', level: '一级分销', totalCommission: 5000, settledCommission: 3000, pendingCommission: 2000, status: '正常' },
    { name: '李四', phone: '13800138001', level: '二级分销', totalCommission: 3000, settledCommission: 2000, pendingCommission: 1000, status: '正常' },
    { name: '王五', phone: '13800138002', level: '一级分销', totalCommission: 8000, settledCommission: 5000, pendingCommission: 3000, status: '禁用' },
]

export const seedDistributors = async () => {
    const count = await DistributorModel.countDocuments()
    if (count === 0) {
        await DistributorModel.insertMany(defaultDistributors)
        console.log('✅ 默认分销员数据已初始化')
    }
}