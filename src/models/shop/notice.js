import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    title: String,
    content: String,
    type: { type: String, default: '系统公告' },
    status: { type: String, default: '显示' },
    sort: { type: Number, default: 0 },
    createTime: { type: String, default: '' },
}, { collection: 'notice' })

export const NoticeModel = mongoose.model('notice', NoticeSchema)