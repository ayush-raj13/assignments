var fs = require('fs');

fs.readFile('1-file-cleaner.txt', 'utf8', function(err, data){ 
      
  // Display the file content 
  const newData = data.replace(/\s+/g, ' ').trim();
  fs.writeFile('1-file-cleaner.txt', newData, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}); 