const express = require('express');
const router = express.Router();
const Char = require('../models/Char');

//Get back all chars
router.get('/', async (req, res) => {
    try{
        const chars = await Char.find();
        res.send(chars);
    } catch(err) {
        res.json({ message: err });
    }
});

//Submits char
router.post('/', async (req, res) => {
    const char = new Char({
        name: req.body.name,
        date_of_birth: req.body.date_of_birth,
        height: req.body.height,
        weight: req.body.weight,
        blood_type: req.body.blood_type,
        nationality: req.body.nationality,
        fighting_style: req.body.fighting_style,
        alignment: req.body.alignment
    });
    try{
        const savedChar = await char.save();
        res.json(savedChar);
    } catch(err) {
        res.json({ message: err });
    }
});

//Get back specific char
router.get('/char/:Id', async (req, res) => {
    try{
    const post = await Char.findById(req.params.charId);
    res.json(Char);
    } catch(err) {
        res.json({ message: err });
    }
});

//Delete a char
router.delete('/char/:Id', async (req, res) => {
    try{
    const removedChar = await Char.remove({_id: req.params.charId });
    res.json(removedChar);
    } catch(err) {
        res.json({ message: err });
    }
});

//Update char
router.patch('/char/:Id', async (req, res) => {
    try{
    const updatedChar = await Char.updateOne(
        { _id: req.params.charId },
        { $set: {title: req.body.title } }
    );
    res.json(updatedChar);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;