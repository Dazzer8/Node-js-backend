let http = require("http");

let server = http.createServer((req, res) => {

    if (req.url == "/users"){
    res.write("You are getting a user in response");
    res.end();
    }else if (req.url == "/products"){
        res.write("You are getting a user in response");
        res.end();   
    }else{
        res.statusCode = 404;
        res.write("Invalid URL");
        res.end();
    }
});

let port = 8080;

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});