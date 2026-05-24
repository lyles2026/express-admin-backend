import { DistOrderModel } from "../models/shop/distOrder.js";

const defaultOrders = [
    { orderNo: '202401150001', buyer: '买家A', distributor: '张三', commission: 50, level: '一级', status: '已结算', createTime: '2024-01-15' },
    { orderNo: '202401150002', buyer: '买家B', distributor: '张三', commission: 30, level: '一级', status: '待结算', createTime: '2024-01-14' },
    { orderNo: '202401150003', buyer: '买家C', distributor: '李四', commission: 20, level: '二级', status: '已结算', createTime: '2024-01-13' },
]

export const seedDistOrders = async () => {
    const count = await DistOrderModel.countDocuments()
    if (count === 0) {
        await DistOrderModel.insertMany(defaultOrders)
        console.log('✅ 默认分销订单数据已初始化')
    }
}