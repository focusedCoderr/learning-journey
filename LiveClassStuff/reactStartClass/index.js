const http = require('http');
const server = http.createServer((req, res)=>{
    console.log("req aaya");
    res.end("mil gyi aapki request");
});

server.listen(8000, ()=>{
    console.log(`Server Started`);   
})