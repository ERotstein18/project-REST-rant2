
const express = require('express')
const app = express()

app.use('/places', require ('./controllers/places.js'))

router.get('/', (req, res) => {
    res.send('GET /places')
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
