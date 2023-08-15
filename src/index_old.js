// Criando um servidor de forma crua, apenas com node.js
const http = require("http")

const hostname = "localhost"
const port = 3333

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain")
    res.end("Hello world")
})

server.listen(port, hostname, () => {
    console.log("SERVIDOR RODANDO...")
})