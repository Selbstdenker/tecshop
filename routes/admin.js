const express = require('express')
const router = express.Router()
var emailService = require('../services/mail')
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
    const data = {
        email: req.body.email, 
        subject: req.body.subject, 
        text: req.body.text
    }
    emailService.sendService(data.email, data.subject, data.text)
    // .then(()=>{
    //     req.flash('success_msg', "Email enviado com sucesso")
    //     res.redirect('/contato')
    //     console.log(data)
    // }).catch(()=>{
    //     req.flash('error_msg', "Falhar ao enviar")
    //     res.redirect('/contato')
    //     console.log('not sended')
    // })
    res.redirect('/')
})

module.exports = router