const express = require('express')
const calculos = require('./src/calculos')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/suma-cosikas.html')
})

app.get('/suma', calculos.suma)

app.listen(port, () => {
    console.log(`Chuflando cosikas en http://localhost:${port}`)
})
