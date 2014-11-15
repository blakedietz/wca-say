#!/usr/bin/env node

// prints the argument array
console.log(process.argv);

// set up the stdin
process.stdin.setEncoding('utf8');

// print stdin
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});
