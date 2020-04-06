const express = require("express")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.set('view engine','pug');

const mainRoutes = require('./routes/index.js')
const cardRoute = require('./routes/cards.js')

app.use(mainRoutes)
app.use(cardRoute)

app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status= 404;
    next(err)
})

app.use((err,req,res,next)=>{
    res.locals.error = err
    res.status(err.status)
    res.render('error',{err:err});
});

app.listen(3000,()=>{
    console.log("Starting the Server");
})