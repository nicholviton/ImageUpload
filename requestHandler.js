var exec = require("child_process").exec;
var server = require("./server");
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function upload(response, request) {
   console.log("uploading...");
   var form = new formidable.IncomingForm();
   console.log("about to parse");
   form.parse(request, function(error, fields, files) {
       console.log("parsing done");

       fs.rename(files.upload.path, "/nv/temp/cat.png", function(error) { 
           if (error) { 
               fs.unlink("/nv/temp/cat.png");
               fs.rename(files.upload.path, "/nv/temp/cat.png");
            }
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();    
    })
}

function show(response) {
    console.log("request handler show was called");
    response.writeHead(200, {"Content.Type": "image/png"});
    fs.createReadStream("/nv/temp/cat.png").pipe(response);
}

function start(response) {
    console.log("call the start request handler");
    var body = '<html>'+ 
        '<head>'+ 
        '<meta http-equiv="Content-Type" content="text/html; '+ 
        'charset=UTF-8" />'+ 
        '</head>'+ 
        '<body>'+ 
        '<form action="/upload" enctype="multipart/form-data" method="post">'+ 
        '<input type="file" name="upload"><br>'+ 
        '<input type="submit" value="Upload file">'+ 
        '</form>'+
        '</body>'+
        '</html>';
    server.writehtml(response, body);
}


function empty(response) {
    console.log("in the empty function");
    server.writetopage(response, "Hello World from Empty");
}

exports.start = start;
exports.upload = upload;
exports.empty = empty;
exports.show = show;