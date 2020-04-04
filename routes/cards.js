const express = require('express')
const routes = express.Router()
const { data }= require('../data/flashcardData.json')
const {cards} = data;
 
 
routes.get('/cards/:id',(req,res)=>{
    const side = req.query.side;
    const id = req.params.id;
    const text = cards[id][side]
    const hint = cards[id].hint;

    const templateData = {id,text}
    if (side == 'question'){
        templateData.hint  = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer'
    }
    else if(side == 'answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question'
    }
    res.render("card", templateData);
})

module.exports = routes; 