import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name: String,
    code: String,
    description: { type: String, default: '' },
    permissions: { type: [String], default: [] },
}, { collection: 'role' })

export const RoleModel = mongoose.model('role', RoleSchema)