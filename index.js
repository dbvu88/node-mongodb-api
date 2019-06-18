// import app from './server'
// import request from 'supertest'

const app = require('./server')


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on ' + port)
})
