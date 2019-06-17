import express from 'express'
import fs from 'fs'
import _ from 'lodash'

const app = express()

app.use(express.static('Views'))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/Views/index.html', error => {
//         res.status(500).send(error)
//     })
// })

// app.get('/home', (req, res) => {
//     fs.readFile('/Views/index.html', (err, buffer) => {
//         const html = buffer.toString()
//         res.setHeader('Content-Type', 'text/html')
//         res.send(html)
//     })
// })

app.post('/', (req, res) => {
    // console.log(req)
    res.json(req.body)
})

app.listen(3000, () => {

})