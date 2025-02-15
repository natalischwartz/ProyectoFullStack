import express from "express";
import cors from 'cors';
import db from './database/db.js'
import PostRouter from './routes/PostRouter.js'

const app = express();


const port = 8000;

app.use(cors())
app.use(express.json())

//Routes
app.use("/posts",PostRouter)


//chequeo conexion base de datos

const conexionDB = async () =>{
    try {
        await db.authenticate()
        console.log("conexion exitosa a la DB");
        console.log(`servidor corriendo en http://localhost:${port}`)
    } catch (error) {
        console.log(`conexion fallida error ${error}`);
        
    }
}

app.listen(port,conexionDB)

// conexionDB();

// app.listen(port, () =>{
//     console.log(`servidor corriendo en http://localhost:${port}`)
// })
