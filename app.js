#!/usr/bin/env node
var talkingHead              = require('./wcasay.js');
var randomLokkenismGenerator = require('./random-lokkenism.js');

var https   = require('https');
var options =
{
    host       : 'raw.githubusercontent.com',
    path       : '/wcahealth/mixed-metaphors/master/mixed-metaphors.json',
    method     : 'GET'
};

https.request(options, function( response )
{
    var responseString = '';

    response.on('data', function( chunk )
    {
        responseString += chunk;
    });

    response.on('end', function()
    {
        var lokkenisms = JSON.parse( responseString );
        var randomLokkenisms = randomLokkenismGenerator().lokkenism( lokkenisms );

        talkingHead(randomLokkenisms.lokkenism());
    });
})
.end();