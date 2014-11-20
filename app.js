#!/usr/bin/env node
var talkingHead = require('./wcasay.js');
var lokkenismGenerator = require('./lokkensay.js');

// talkingHead('foo bar doo car czar hardy har har bar mar far spar jardy jar mar par yar pardy mardy dardy dar');
talkingHead( lokkenismGenerator() );