function upload(response) {
   console.log("uploading...");
   return "UPLOADING ...";
}

function start(response) {
   console.log("call the start request handler");
   return "STARTING ...";
}

function empty(response) {
   return "Hello World from Empty";
}

exports.start = start;
exports.upload = upload;
exports.empty = empty;