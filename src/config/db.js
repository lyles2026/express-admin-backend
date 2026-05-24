import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL || 'mongodb://localhost:27017/mydb'
        await mongoose.connect(mongoUri)
        console.log('MongoDB 连接成功!');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}