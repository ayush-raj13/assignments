var fs = require('fs');

fs.appendFile('4-write-to-file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});