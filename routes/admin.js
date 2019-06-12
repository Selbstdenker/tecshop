const express = require('express')
const router = express.Router()
const sendMail = require('../mail')
//const mongoose = require("mongoose")
//require("../game/Char")
//require("../game/sketch")
//const New_Adventure = mongoose.model("new_adventure")

router.get('/', (req, res)=>{
    res.render('main/home')
})
router.get('/produtos', (req, res)=>{
    res.render('main/produtos')
})
router.get('/orcamentos', (req, res)=>{
    res.render('main/orcamentos')
})
router.get('/comissoes', (req, res)=>{
    res.render('main/comissoes')
})
router.get('/localizacao', (req, res)=>{
    res.render('main/localizacao')
})
router.get('/sobre', (req, res)=>{
    res.render('main/sobre')
})
router.get('/contato', (req, res)=>{
    res.render('main/contato')
})
router.post('/email', (req, res)=>{
    const {subject, email, text} = req.body
    sendMail(email, subject, text, (err, data)=>{
        if(err){
            console.log('erro')
        }else{
            console.log('ok')
        }
    })
    res.redirect('/contato')
})

module.exports = router