var fs = require('fs');

// fs.appendFile('3-read-from-file.txt', '', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

fs.readFile('3-read-from-file.txt', 'utf8', function(err, data){ 
      
  // Display the file content 
  console.log(data); 
}); 

for (let i = 0; i < 10000000000; i++);