const express = require('express');
const router = express.Router();
const Char = require('../models/Char');

//Get back all chars
router.get('/', async (req, res) => {
    try{
        const chars = await Char.find();
        res.json(chars);
    } catch(err) {
        res.json({ message: err });
    }
});

//Submits char
router.post('/', async (req, res) => {
    const char = new Char({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedChar = await char.save();
        res.json(savedChar);
    } catch(err) {
        res.json({ message: err });
    }
});

//Get back specific char
router.get('/:charId', async (req, res) => {
    try{
    const post = await Char.findById(req.params.charId);
    res.json(char);
    } catch(err) {
        res.json({ message: err });
    }
});

//Delete a char
router.delete('/:charId', async (req, res) => {
    try{
    const removedChar = await Char.remove({_id: req.params.charId });
    res.json(removedChar);
    } catch(err) {
        res.json({ message: err });
    }
});

//Update char
router.patch('/:charId', async (req, res) => {
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