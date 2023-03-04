import express from "express";
import cors from 'cors'
import router from '../src/router/router'
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/" , router )

// mongoose.connect("mongodb://localhost:27017/agendamento")

// app.listen("3030" , () =>{
//     console.log("Servidor rodando na porta 3003")
// })

export default app;