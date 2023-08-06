import mongoose from 'mongoose'

const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "geekshop"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("Connected Successfully...");
    } catch (error) {
        console.log(error);
    }
}