const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");



// function myHandler(req, res) {
//     if (res.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
//     const myUrl = url.parse(req.url, true);

//     fs.appendFile("log.txt", log, (err, data) => {
//         // res.end("Hello from server");
//         switch (myUrl.pathname) {
//             case "/":
//                 if (req.method == 'GET') res.end("Home Page");
//                 break;
//             case "/about":
//                 const username = myUrl.query.myname;
//                 res.end(`hi, ${username}`)
//                 break;
//             case "/signup":
//                 if (req.method === 'GET') res.end("this is a signup form");
//                 break;
//             case "/search":
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your result for" + search);
//             default:
//                 res.end("404 error")
//         }
//     })
// }


const app = express();
app.get("/" ,(req, res)=>{
    return res.send("Hello from home")
});

app.get("/about", (req, res)=>{
    return res.send("Hello from about")
})


const myServer = http.createServer(app);

myServer.listen(3000, () => {
    console.log("server stated");

})