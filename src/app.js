const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')


const pathfile = path.join(__dirname , '../public')

// console.log(pathfile);

app.use(express.static(pathfile))
const paths = path.join(__dirname,'../views')
console.log(paths);


// app.set('views' , paths)
// app.set('view engine' , 'hbs')

app.get('/' , (req , res)=>{
    res.render('index')
})

app.get('/about' , (req , res)=>{
    res.render('about')
})

app.get('/weather' , (req , res)=>{
    res.send('weather');
})

app.get('*' , (req , res)=>{
    res.send('404 - error')
})

app.listen(3300 , ()=>{
    console.log("listen on port - 3300");
})