const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/public',express.static('public'))


app.listen(port, ()=>{
    console.log(`This is running on Port:${port}`)
})
