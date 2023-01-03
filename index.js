//include the http package to the application => assign the package to http variable
const http = require('http')
//import a file system module ‘ fs ’ which helps to interact with files on the server
const fs = require('fs')
//readFileSync() from fs reads the content of each file and returns it
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
 const notFoundPage = fs.readFileSync('notfound.html')

//create and start a server with the createServer method
//req – request from browser
//res – response to give back to browser
const server = http.createServer((req, res) => {
    if(req.url === '/about') res.end(aboutPage) 
    else if(req.url === '/contact')
        res.end('The contact page') 
        else if(req.url === '/')
            res.end(homePage) 
            else {
                res.writeHead(404)
                res.end(notFoundPage) }
})

//start the server to start taking request
server.listen(3000)