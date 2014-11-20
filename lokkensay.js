#!/usr/bin/env node

function lokkenSay()
{
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

  return function()
  {
    //console.log(pickRandomLokkenism());
    return pickRandomLokkenism();
  }
}


module.exports = lokkenSay();
