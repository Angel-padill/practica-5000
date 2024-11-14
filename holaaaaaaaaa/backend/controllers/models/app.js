import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from  "./backend/controllers/alumno.controller.js"


dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("funcina la base de datos")
})
.catch((error)=>{
    console.log("no funciona ya salio mal",error)
})

const app=express();
app.use(cors());
app.listen(4001, ()=>{
console.log("se escucha el servidor")
})
test()