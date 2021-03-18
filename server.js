const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // TODO 1
        // READ AND SEND DATA IN index.html
        fs.readFile("./index.html", "utf8", (err, data) => {
            res.end(data)

        })
    } else if (req.url === "/names" && req.method === "GET") {
        // TODO 2
        // READ AND SEND DATA IN names.json  
        fs.readFile("./names.json", "utf8", (err, data) => {
            let all_names = JSON.parse(data);
            res.end(JSON.stringify(all_names))
                // console.log('See Json body', data);
            if (err) {
                console.error(err.message)
            }
        })

    }
})

server.listen(3700, () => {
    console.log("Your application is listening on port 3700");
})