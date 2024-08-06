import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config(); // Load environment variables from .env file
const db = "mongodb://localhost:27017/DineshDB"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(db);
        console.log("Database connected successfully..!!");
    } catch (err) {
        console.error("Error while connecting to database..!!", err);
        process.exit(1);
    }
};

export default connectDB;
