var http = require("http");
var url = require("url");

function start(route, handler) {
   function onrequest(request, response) {
      var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received");
      response.writeHead(200, {"Content-Type": "text/plain"});
      var content = route(handler, pathname, response);
      response.write(content);
      response.end();
   }

   http.createServer(onrequest).listen(8888);
   console.log("Server has started");
}

exports.start = start;