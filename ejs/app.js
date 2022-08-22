const express = require("express")
const path = require("path")

const app = express()
const route = require("./router/router")
// require("dot.eve")process.env.PORT
const port =4_000


// Open ejs files
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'))

// Get form data
app.use( express.urlencoded({ extended: true }))


app.use(route)
app.listen(port, console.log(`app is listening on port: http://127.0.0.1:${port}`))