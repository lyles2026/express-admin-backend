import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    icon: String,
    status: String,
    sort: Number,
    goodsCount: Number,
}, { collection: 'category' })

export const CategoryModel = mongoose.model('category', CategorySchema)