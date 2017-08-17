'use strict';

const fs = require('fs');

let inFile = process.argv[2];

// fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//   if (error) {
//     console.error(error);
//   }

//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']

//   let lines = content.split('\n');

//   // clean up the array by removing the empty line
//   lines.pop();

//   lines.forEach(function(line) {
//     console.log('Hello, ' + line + '!');
//   });
// });

var readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
      if(err) {
        reject(err);
      }
      resolve(content);
    })
});

readFilePromise
  .then(data => data.split('\n'));
  .then(lines => {
    lines.pop();
    lines.forEach(function(line) {
    console.log('Hello, ' + line + '!'); 
  });
});
