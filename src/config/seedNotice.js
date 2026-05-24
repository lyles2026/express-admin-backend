import { NoticeModel } from "../models/shop/notice.js";

const defaultNotices = [
    { title: '系统维护通知', content: '系统将于今晚12点进行维护', type: '系统公告', status: '显示', sort: 1, createTime: '2024-01-15' },
    { title: '春节放假安排', content: '春节期间物流安排通知', type: '活动公告', status: '显示', sort: 2, createTime: '2024-01-14' },
    { title: '新功能上线', content: '优惠券功能正式上线', type: '系统公告', status: '隐藏', sort: 3, createTime: '2024-01-13' },
]

export const seedNotices = async () => {
    const count = await NoticeModel.countDocuments()
    if (count === 0) {
        await NoticeModel.insertMany(defaultNotices)
        console.log('✅ 默认公告数据已初始化')
    }
}