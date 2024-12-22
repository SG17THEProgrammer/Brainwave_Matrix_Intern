require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToDb = require("./src/db/conn");
const routes = require('./src/Routes/route');
const app = express();

const corsOptions = {
    origin: process.env.Frontend_URL,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 


app.use(express.json()); // Parses JSON data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data with support for objects

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use(routes);

// app.get('/', (req,res)=>{
// res.send("Welcome to the Blog Website")
// })

const PORT =process.env.PORT 
connectToDb() // for connecting to mongodb

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
})