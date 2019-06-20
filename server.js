// import 'dotenv/config'
// import express from 'express'
// import fs from 'fs'
// import _ from 'lodash'
// import routes from './Routes'
// import morgan from 'morgan'

require('dotenv/config') 
const express = require('express') 
const fs = require('fs')
const _ = require('lodash')
const api = require('./api')
const useMiddleware = require('./useMiddleware')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/puppies')
const todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema)
todo.create({
    name: 'cleanup',
    completed: false
}).then()

const app = express()
useMiddleware(app)

app.get('/error', (req, res, next) => {
    next(new Error('oh no'))
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/Views/form.html', error => {
        res.status(500).send(error)
    })
})



app.use('/api/', api)

// app.get('/home', (req, res) => {
//     fs.readFile('/Views/index.html', (err, buffer) => {
//         const html = buffer.toString()
//         res.setHeader('Content-Type', 'text/html')
//         res.send(html)
//     })
// })

// global error handler
app.use((err, req, res, next) => {
    console.log(err)
    if (err) {
        console.log(err)
        res.status(500).json(err)
    } else {
        next()
    }
})



// export default app

module.exports = app