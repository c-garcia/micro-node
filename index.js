const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('tiny'))
app.get('/status', (req, res) => res.json({
    status: "ok",
    time: new Date()
    
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
