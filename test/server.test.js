var test = require('tape');
var dir  = __dirname.split('/')[__dirname.split('/').length-1];
var file = dir + __filename.replace(__dirname, '') + " > ";
var start = require('../lib/start.js');
var index = require('../lib/index.js');
var home = require('../lib/home.js');


test(file + 'get request at homepage should return 200', function(t){
  var options = {
    method: "GET",
    url: "/"
  };
  start.inject(options, function(response) {
    console.log(response.result);
    t.equal(response.statusCode, 200, "Server is working.");
    setTimeout(function(){
      start.stop(t.end);
    }, 100);
  });
});
