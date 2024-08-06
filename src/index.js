import dotenv from "dotenv";
import connectDB from './db/index.js'
import express from 'express'; // Import express or define 'app' variable
const app = express();

// import app from'./app.js'

dotenv.config({
    path: '../env'
});

app.post("/", (req, res) => {
    res.status(200).json("sever is live")
})


import userRouter from "./routers/user.router.js"

//router declaration

app.use("/api/v1/users",userRouter)
connectDB()

.then(() => {
       app.listen(5000,()=>{
        console.log(`Server running at port:5000`);
       })
    })
.catch((err) => {
       console.log(`Mongodb connection faild`,err)
    });