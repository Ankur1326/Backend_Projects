const dotenv = require("dotenv")
dotenv.config();

import { Express } from "express";
import { cors } from "module";

const app = Express()

const port = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors())

