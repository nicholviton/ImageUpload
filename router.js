var requestHandler = require("./requestHandler");

function route(handler, pathname, response, request) {

   console.log("About to route a request for " + pathname);
   if (typeof(handler[pathname]) === 'function') {
      handler[pathname](response, request);
   }
   else {
      console.log("No request handler found for " + pathname);
      //"404 Not Found";
   }
}


exports.route = route;
