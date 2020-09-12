import path from "path";
import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./config/db.js";
import router from "./routes/transactions.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/transactions", router);

connectDB();

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res)=> res.sendFile(path.resolve(__dirName, 'client', 'build', 'index.html')));
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running at port ${PORT}`.yellow.bold)
);
