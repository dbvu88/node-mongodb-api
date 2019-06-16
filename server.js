import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Views/index.html', error => {
        res.status(500).send(error)
    })
})
app.listen(3000)