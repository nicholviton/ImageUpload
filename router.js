var requestHandler = require("./requestHandler");

function route(handler, pathname, response) {

   console.log("About to route a request for " + pathname);
   if (typeof(handler[pathname]) === 'function') {
      handler[pathname](response);
   }
   else {
      console.log("No request handler found for " + pathname);
   }
}


exports.route = route;
