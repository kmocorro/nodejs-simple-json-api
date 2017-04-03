//dealing with API endpoint, json and webserver

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'application/json'});
    //js object
        var obj = {
            firstname:'Xtranghero',
            lastname:'Vin'
        };
    //get object back to JSON
    res.end(JSON.stringify(obj));
//listen
}).listen(3306,'127.0.0.1');