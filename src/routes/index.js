const { Router } = require('express')

const routes = Router()

routes.get('/' , (req, res) => {
    res.send('Hola Mundo')
})


module.exports = routes