/**
 * REQUISIÇÕES: POST, GET , PUT, DELETE (CRUD - CREATE, READ, UPDATE, DELETE)
 * ENPOINT : UMA ROTA QUE PODE SER ACESSADO DENTRO DE API
 */

import express, { response } from 'express';
import cors from "cors";
import { database } from './connect.js';
import path from "path";


// console.log(__dirname)
const __dirname = path.resolve();
const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(cors());

// ENDPOINTS

app.get("/api/", (request, response) => {
    response.send("Holmes")
})
app.get("/api/artists", async (request, response) => {
    response.send(await database.collection('artists').find({}).toArray())
})
app.get("/api/songs", async (request, response) => {
    response.send(await database.collection('songs').find({}).toArray())
})

app.use(express.static(path.join(__dirname, "../front-end/dist")))
app.get("*", async (request, response) => {
    response.sendFile(path.join(__dirname, "../front-end/dist/index.html"))
});

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})