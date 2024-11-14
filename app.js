import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.urldb)
.then(()=>{
    console.log("funciona la base")
})
.catch((error)=>{
    console.log("no jalo", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("se escucha el server")
})

test()
