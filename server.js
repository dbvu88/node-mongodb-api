import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import _ from 'lodash'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Views/index.html', error => {
        res.status(500).send(error)
    })
})

// app.get('/home', (req, res) => {
//     fs.readFile('/Views/index.html', (err, buffer) => {
//         const html = buffer.toString()
//         res.setHeader('Content-Type', 'text/html')
//         res.send(html)
//     })
// })

app.listen(3000, () => {

})