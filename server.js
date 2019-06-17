import express from 'express'
import fs from 'fs'
import _ from 'lodash'
import routes from './Routes'


const app = express()
app.use(express.json())

app.use(express.static('Views'))

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/Views/form.html', error => {
        res.status(500).send(error)
    })
})

app.use('/api/users', routes.user)

// app.get('/home', (req, res) => {
//     fs.readFile('/Views/index.html', (err, buffer) => {
//         const html = buffer.toString()
//         res.setHeader('Content-Type', 'text/html')
//         res.send(html)
//     })
// })

// app.post('/', (req, res) => {
//     // console.log(req)
//     res.json(req.body)
// })

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on ' + port)
})