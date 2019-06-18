import 'dotenv/config'
import express from 'express'
import fs from 'fs'
import _ from 'lodash'
import routes from './Routes'
import morgan from 'morgan'



const app = express()
app.use(express.json())
app.use(morgan())
app.use(express.static('Views'))

app.get('/error', (req, res, next) => {
    next(new Error('oh no'))
})

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



export default app