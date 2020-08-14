const logger = require('./logger');


module.exports = authValidator = function(req, res, next) {
    const apiKey = process.env.AUTH_KEY
    const authToken = req.get('auth')
    if (authToken !== apiKey) {
        logger.error(`Unauthorized request to path: ${req.path}`)
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    next()
  }
