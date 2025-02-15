import { MongoClient } from "mongodb";

// URL DB

const URI = "mongodb+srv://thoor:123789@cluster0.i8sij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// CRIAÇÃO DO DB
const client = new MongoClient(URI);

export const database = client.db("musicfyAula");
// const songColletction = await database.collection('songs').find({}).toArray();

// console.log(songColletction)