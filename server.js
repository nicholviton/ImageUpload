var http = require("http");
var url = require("url");

function start(route, handler) {
   function onrequest(request, response) {
      var postData = "";
      var pathname = url.parse(request.url).pathname;

      if (pathname != "/favicon.ico") {
        console.log("Request for " + pathname + " received");
        
        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received postdatachunk: '" + postDataChunk + "'.");

        })

        request.addListener("end", function() {
            route(handler, pathname, response, postData);
        })
      }
      else {
          response.end();
      }
   }

   http.createServer(onrequest).listen(8888);
   console.log("Server has started");
}

function writetopage(response, content) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(content);
    response.end();
}

function writehtml(response, content) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(content);
    response.end();
}

exports.writehtml = writehtml;
exports.writetopage = writetopage;
exports.start = start;