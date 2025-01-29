import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import usuariosRutas from "./routes/usuariosRutas.js";
import { conectarBD } from "./db/db.js";
const app= express();
conectarBD();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use("/api",usuariosRutas);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost:${PORT}`);
});