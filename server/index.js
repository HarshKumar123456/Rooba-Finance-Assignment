import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import logTheRoute from "./middlewares/logTheRoute.js";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();


// Middlewares

// For Cross Origin Resource Sharing
app.use(cors());

// To log the route details
app.use(logTheRoute);

// To access req.body
app.use(express.json());

app.use("/users",usersRouter);

app.get("*",(req,res) => {
    res.status(200).json({message: "Welcome To The SERVER...."});
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on the port ${PORT}`);
});