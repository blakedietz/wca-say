#!/usr/bin/env node
var talkingHead              = require('./wcasay.js');
var randomLokkenismGenerator = require('./random-lokkenism.js');

// set up the stdin
//process.stdin.setEncoding('utf8');

// print stdin
//process.stdin.on('readable', function() {
//  var chunk = process.stdin.read();
//  if (chunk !== null)
//  {
//    process.stdout.write('data: ' + chunk);
//    process.stdout.write(giveHead());
//  }
//});

//process.stdin.on('end', function() {
//    process.stdout.write('end');
//});

var lokkenisms = require('./lokkenisms.json');
var randomLokkenisms = randomLokkenismGenerator().lokkenism(lokkenisms);

talkingHead(randomLokkenisms.lokkenism());
