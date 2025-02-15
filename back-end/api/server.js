/**
 * REQUISIÇÕES: POST, GET , PUT, DELETE (CRUD - CREATE, READ, UPDATE, DELETE)
 * ENPOINT : UMA ROTA QUE PODE SER ACESSADO DENTRO DE API
 */

import express from 'express';
import cors from "cors";
import { database } from './connect.js';

const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(cors());

// ENDPOINTS

app.get('/', (request, response) => {
    response.send("Holmes")
})
app.get('/artists', async (request, response) => {
    response.send(await database.collection('artists').find({}).toArray())
})
app.get('/songs', async (request, response) => {
    response.send(await database.collection('songs').find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})