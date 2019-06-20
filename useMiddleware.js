const morgan = require('morgan')
const express = require('express') 

module.exports = app => {
    app.use(express.json())
    app.use(morgan())
    app.use(express.static('Views'))
}