import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import logTheRoute from "./middlewares/logTheRoute.js";

const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(logTheRoute);

app.get("*",(req,res) => {
    res.status(200).json({message: "Welcome To The SERVER...."});
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on the port ${PORT}`);
});