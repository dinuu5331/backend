import dotenv from 'dotenv';
import connectDB from './db/index.js'
import express from 'express'; // Import express or define 'app' variable
const app = express();

dotenv.config({
    path: './env'
});

connectDB()

.then(() => {
       app.listen(process.env.PORT||5000,()=>{
        console.log(`Server running at port:${process.env.PORT}`);
       })
    })
.catch((err) => {
       console.log(`Mongodb connection faild`,err)
    });