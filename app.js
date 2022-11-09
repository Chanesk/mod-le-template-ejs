const express= require('express')

const app= express()

let message = 'ceci est un message'

app.set('views', './views')

app.set('view engine','ejs')

app.get('/', (req, res) =>{
    res.render('home', {message})
})

app.get('/about', (req, res) =>{
    res.render('about', {message : "je suis la page about"})
})

app.listen(2500)