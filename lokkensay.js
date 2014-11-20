#!/usr/bin/env node

var lokkenisms = require('./lokkenisms.json');

function pickRandomLokkenism()
{
  var index = randomIndex(lokkenisms['2013']);
  return lokkenisms['2013'][index];
}

function randomIndex(array)
{
  return getRandomInt(0, array.length);
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(pickRandomLokkenism());
