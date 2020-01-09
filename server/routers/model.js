const express = require('express')
const router = new express.Router()
const fs = require('fs')
const objectModel = require('../models/model')

router.post('/main',async (req,res)=>{
    console.log(req.body)
    try{
        fs.writeFileSync('objects.txt',JSON.stringify(req.body))
        res.send({message:"success"})
    }
    catch(e){
        res.status(500).send(e)
    }
})

router.get('/main',async (req,res)=>{

    const file = fs.readFileSync('objects.txt')
    console.log(JSON.parse(file))
    res.send(file)
    try{
}catch(e){
    res.status(500).send(e)
}
})

router.post('/create',async(req,res)=>{
    try{
        const user = new objectModel(req.body)
        user.save()
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports =router