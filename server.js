const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});

    if(req.url === '/produto')
    {
        res.end(JSON.stringify({
            myProduct: 'NodeJs Program'
        }));
    } else if(req.url === '/usuario'){
        res.end(JSON.stringify({
            name: 'Jonatas Pirene Rodrigues'
        }));
    } else
    {
        res.end(JSON.stringify({
            data: 'Qualquer Outra Rota'
        }));
    }

}).listen(4001,()=>console.log("Servidor está rodando na porta 4001"));