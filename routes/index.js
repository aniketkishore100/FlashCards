const express = require('express')
const routes = express.Router()


routes.get('/',(req,res)=>{    
    name = req.cookies.username;
    if(name){
        res.render('index',{name:name})
    }
    else{
        res.redirect('/hello');
    }
})

routes.get('/hello',(req,res)=>{
    const name = req.cookies.username;
    if(name){
        res.redirect('/');
    }
    else{
        res.render('hello');
    }
})

routes.post('/hello',(req,res)=>{
    res.cookie('username',req.body.username)
    res.redirect('/');
})

routes.get('/goodbye',(req,res)=>{
    res.clearCookie('username');
    res.redirect('/hello');
})


module.exports = routes;