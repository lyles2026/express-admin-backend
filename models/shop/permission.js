import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
    name: String,
    code: String,
    type: { type: String, default: '菜单' },
    path: { type: String, default: '' },
    parent: { type: String, default: '' },
    icon: { type: String, default: '' },
    roles: { type: [String], default: ['admin'] },
}, { collection: 'permission' })

export const PermissionModel = mongoose.model('permission', PermissionSchema)