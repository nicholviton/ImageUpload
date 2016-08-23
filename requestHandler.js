function upload() {
   console.log("uploading...");
   return "UPLOADING ...";
}

function start() {
   console.log("call the start request handler");
   return "STARTING ...";
}

function empty() {
    console.log("in the empty function");
   return "Hello World from Empty";
}

exports.start = start;
exports.upload = upload;
exports.empty = empty;