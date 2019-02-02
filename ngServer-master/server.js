var http = require('http');
var formidable = require('formidable');
var util = require('util');

var server = http.createServer(function (req,res){
    console.log("i am running");
    res.setHeader('Access-Control-Allow-Origin','*');  // headers added for connected to any server 
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');

    if(req.method.toLowerCase() == 'post'){
        processForm(req, res);
        return;
    }

    res.end();
});

function processForm(req, res){
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields){
        res.writeHead(200, {
            'content-type':'text/plain'
        });

        var data = JSON.stringify({
            fields: fields
        })
        res.end(data);
        // if we want to post data uing query , then we  can write database query here
        console.log(data); // potsed data into server
    });
}

var port = 3100;
server.listen(port);
console.log("server listen port "+3100)
