//env
require('dotenv').config();

//express
const express = require('express');
const app = express();


//mongoose
const mongoose = require('mongoose');

//connecting application with database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Mongo DB Connected"))
    .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());


//listening port
app.listen(3000, () => console.log('Server Started'));
