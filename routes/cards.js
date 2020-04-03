const express = require('express')
const routes = express.Router()
const { data }= require('../data/flashcardData.json')
const {cards} = data;
 
 
routes.get('/cards/:id',(req,res)=>{
    res.render("card",{ 
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint
    });
})

module.exports = routes; 