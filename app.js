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
const charsRoute = require('./Routes/charsRoutes');
const Char = require('./models/Char');

app.use('/chars', charsRoute);

//Fetch All

app.get('/chars', (req, res) => {
    Char.find({}).select({ '_id': 0, '__v': 0}).then(
        items => res.json(items)
    ).catch(err => console.log(err))
});
        

//listening port
app.listen(PORT, () => console.log('Server Started'));
