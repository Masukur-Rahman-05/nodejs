

const http = require("http");
const fs = require("fs");
const url = require("url")

const server = http.createServer(function(req, res){
    const log = `New Request: ${req.url}\n`;
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile("./log.txt", log, (err) => {
        if (err) console.error(err)
        else res.end ("Server is Running...") 
    })

})

server.listen(3000, ()=>console.log("Server Has Started"))






// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function(req, res){
//     const log = `New Request: ${req.url}\n`;
//     fs.appendFile("./log.txt", log, (err) => {
//         if (err) console.error(err)
//         else res.end ("Server is Running...") 
//     })

// })

// server.listen(3000, ()=>console.log("Server Has Started"))























// const server = http.createServer(function (req, res) {
//     console.log('A new Request')
//     res.end("hello every One. I am Masuk")
// });

// server.listen(55555, () => {
//     console.log("server Started")
// })