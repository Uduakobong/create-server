//first create an http variable/module
const http = require('http');

//create a server withe the http variable
const server = http.createServer(function(req, res){
    //headers
    
    res.writeHead(200, {'content-Type':'application/json'});
   
    //send back response
    //res.end("welcome to zuri internship");
   res.end(`
        {
            "name":"Uduakobong Umoren",
            "College":"Anchor University",
            "Occupation":"Software Developer"
        }
    
    `);
});

//create a port
server.listen(4000, '127.0.0.1');

console.log("yes, you have created a server");

//res.writeHead(200, {'content-Type':'text/plain'});
//res.writeHead(200, {'content-Type':'text/html'});