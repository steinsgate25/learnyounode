var fs = require('fs');
var path = require('path');
var pathDir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(pathDir, function (err, files) {
  if (err) return console.log(err)
  files.forEach(function (file){
    if (path.extname(file) === ext) {
      console.log(file);
    };
  });
});
