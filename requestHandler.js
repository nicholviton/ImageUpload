var exec = require("child_process").exec;
var server = require("./server");
var querystring = require("querystring");

function upload(response, postData) {
   console.log("uploading...");
   server.writetopage(response, "You have sent: " + querystring.parse(postData).text);
}

function start(response, postData) {
    console.log("call the start request handler");
    var body = '<html>'+ 
        '<head>'+ 
        '<meta http-equiv="Content-Type" content="text/html; '+ 
        'charset=UTF-8" />'+ 
        '</head>'+ 
        '<body>'+ 
        '<form action="/upload" method="post">'+ 
        '<textarea name="text" rows="20" cols="60"></textarea>'+ 
        '<input type="submit" value="Submit text" />'+ 
        '</form>'+
        '</body>'+
        '</html>';
    server.writehtml(response, body);
}


function empty(response, postData) {
    console.log("in the empty function");
    server.writetopage(response, "Hello World from Empty");
}

exports.start = start;
exports.upload = upload;
exports.empty = empty;