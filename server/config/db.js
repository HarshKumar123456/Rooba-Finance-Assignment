import "dotenv/config";
import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("MongoDB is connected.");
    } catch (error) {
        console.log(error);
        console.log("MongoDB is not connected.");
    }
};

export default connectDB;