const express = require("express")
const app = express()
const route = require("./router/router")

const port = 7_000


app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(route)

app.listen(port, console.log(`app is listening on port: http://127.0.0.1:${port}`))