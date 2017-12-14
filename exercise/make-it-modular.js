var myModule = require('./myModule.js');
var pathDir = process.argv[2];
var ext = process.argv[3];

myModule (pathDir, ext, function (err, list) {
  if (err) {
    return console.error('There was an error', err);
  }
  list.forEach(function (file) {
    console.log(file);
  })
})
