import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is up and running on the port ${PORT}`);
});