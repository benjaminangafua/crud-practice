const express = require("express")
const path = require("path")

const app = express()
const route = require("./router/router")
const dotenv = require("dotenv").config({debug:true})
const port =dotenv.parsed.PORT
console.log(dotenv)


// Open ejs files

app.set('view engine', 'ejs');

// Serve static files

app.use(express.static('public'))

// Get form data

app.use( express.urlencoded({ extended: true }))


app.use(route)
app.listen(port, console.log(`app is listening on port: http://127.0.0.1:${port}`))