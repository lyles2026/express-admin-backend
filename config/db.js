import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')
        console.log('MongoDB 连接成功!');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}