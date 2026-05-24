import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
    name: String,
    url: String,
    size: String,
    uploadTime: { type: String, default: '' },
}, { collection: 'gallery' })

export const GalleryModel = mongoose.model('gallery', GallerySchema)