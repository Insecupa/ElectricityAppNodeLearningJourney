const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    // res.send("this is a send sample")
    // res.send({message: "THis is a sort of message"})
    // res.json({message: "THis is a sort of message"})
    // res.sendStatus(404)
})


app.listen(port, () => console.log(`Currently NOT listening on port ${port}`))