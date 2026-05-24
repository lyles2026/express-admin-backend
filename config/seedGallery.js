import { GalleryModel } from "../models/shop/gallery.js";

const defaultImages = [
    { name: '商品图1.jpg', url: 'https://picsum.photos/seed/p1/150', size: '2.5MB', uploadTime: '2024-01-15' },
    { name: '商品图2.jpg', url: 'https://picsum.photos/seed/p2/150', size: '1.8MB', uploadTime: '2024-01-14' },
    { name: 'banner1.jpg', url: 'https://picsum.photos/seed/p3/150', size: '3.2MB', uploadTime: '2024-01-13' },
    { name: 'banner2.jpg', url: 'https://picsum.photos/seed/p4/150', size: '2.9MB', uploadTime: '2024-01-12' },
    { name: 'avatar1.jpg', url: 'https://picsum.photos/seed/p5/150', size: '0.5MB', uploadTime: '2024-01-11' },
]

export const seedGallery = async () => {
    await GalleryModel.deleteMany({})
    await GalleryModel.insertMany(defaultImages)
    console.log('✅ 默认图库数据已初始化')
}