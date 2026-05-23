import { CommissionModel } from "../models/shop/commission.js";

const defaultCommissions = [
    { distributor: '张三', orderNo: '202401150001', amount: 100, commission: 10, rate: '10%', status: '已结算', settleTime: '2024-01-16' },
    { distributor: '张三', orderNo: '202401140002', amount: 200, commission: 20, rate: '10%', status: '已结算', settleTime: '2024-01-15' },
    { distributor: '李四', orderNo: '202401130003', amount: 150, commission: 15, rate: '10%', status: '待结算', settleTime: '-' },
    { distributor: '王五', orderNo: '202401120004', amount: 300, commission: 30, rate: '10%', status: '待结算', settleTime: '-' },
]

export const seedCommissions = async () => {
    const count = await CommissionModel.countDocuments()
    if (count === 0) {
        await CommissionModel.insertMany(defaultCommissions)
        console.log('✅ 默认佣金数据已初始化')
    }
}