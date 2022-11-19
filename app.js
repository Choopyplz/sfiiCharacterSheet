const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('Public'));

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

//Import Routes
const charsRoute = require('./Routes/chars');
const { response } = require('express');
const Char = require('./models/Char');

app.use('/chars', charsRoute);

//Fetch All

app.get('/fetchall', (req, res) => {

    Char.find((err,val) => {
        if(err)
        {
            console.log(err)
        } else {
            res.json(val)
        }
    })
});

//listening port
app.listen(3000, () => console.log('Server Started'));
