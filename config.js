const config = {
    env: process.env.NODE_ENV || 'development',
    logging: false,

    secrets: {
        jwtSecret: process.env.JWT_SECRET
    }
}

const envConfig = require('./' + config.env)

module.exports = _.assign(config, envConfig || {})