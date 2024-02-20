import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is up and running on the port ${PORT}`);
});