import dotenv from "dotenv";
dotenv.config()

// import nodemailer from 'nodemailer';

import express from "express";
import cors from 'cors'
import connectDB from './config/connectdb.js'
// import { defaultMaxListeners } from "nodemailer/lib/xoauth2";

const app = express();
const port = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL;

// CORS policy
app.use(cors())

// Database connect
// connectDB(DATABASE_URL)

// JSON
app.use(express.json())

app.listen(port, () => {
    console.log(`Server listenging at http://localhost:${port}`);
})