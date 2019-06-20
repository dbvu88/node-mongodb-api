const routes = require('./Routes')
const Router = require('express').Router
const router = Router()

router.use('/users', routes.user)

module.exports = router