import mongoose from "mongoose";

const PageConfigSchema = new mongoose.Schema({
    page: { type: String, unique: true },
    columns: Array,
    formFields: Array,
}, { collection: 'pageConfig' })

export const PageConfigModel = mongoose.model('pageConfig', PageConfigSchema)