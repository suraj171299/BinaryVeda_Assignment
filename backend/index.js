import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 8080;



app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on PORT: ${PORT}`);
})