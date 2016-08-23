var requestHandler = require("./requestHandler");

function route(handler, pathname) {

   console.log("About to route a request for " + pathname);
   if (typeof(handler[pathname]) === 'function') {
      console.log("About to call: " + handler[pathname]);
      return handler[pathname]();
   }
   else {
      console.log("No request handler found for " + pathname);
      return "404 Not Found";
   }
}


exports.route = route;
