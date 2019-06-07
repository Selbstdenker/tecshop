const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res)=>{
    res.send('Olá, mundo!')
})

const PORT = 8088
app.listen(PORT, ()=>{
    console.log("Olá. O Servidor está funcionando na porta " + PORT)
})