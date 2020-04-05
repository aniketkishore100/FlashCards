const express = require('express')
const routes = express.Router()
const { data }= require('../data/flashcardData.json')
const {cards} = data;
 
routes.get('/cards',(req,res)=>{
    const numberOfCards = cards.length;
    const randmCard = Math.floor(Math.random()*numberOfCards);
    res.redirect(`/cards/${randmCard}?side=question`)
}) 



routes.get('/cards/:id',(req,res)=>{
    const side = req.query.side;
    const id = req.params.id;
    if(!side){
        return res.redirect(`/cards/${id}?side=question`)
    }
        const text = cards[id][side]
        const hint = cards[id].hint;
        const name = req.cookies.username;

        const templateData = {id,text,name}
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