#!/usr/bin/env node
var talkingHead = require('./wcasay.js');

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

var talkingHead = require('./wcasay.js');

var lokkenisms =
[
    {
        year   : "2014",
        quotes :
        [
            "All seriousness aside",
            "Everyone knows who's not carrying their end of the water",
            "We are so far behind, we need to be leapfragging traditional models.",
            "To put a blunt point on it",
            "Bark stuff down the chain",
            "Moving the piece of pie forward",
            "We could go raise 5 million dollars worth of money",
            "Squarely looking in the rear view mirror",
            "Running off half baked",
            "Muddling the waters (Greg Bernhardt)",
            "It's underunderstood",
            "When you show them this, light bulbs go off (Dr. Souza)",
            "Unlock the secret sauce",
            "Box yourself into a corner (Steve Pontello)",
            "There's no way you can boil all that data",
            "It was as bold as day",
            "Taking bread out of a baby's hands (Greg Bernhardt)",
            "Focus like a razor beam",
            "Stick me in a fork",
            "I feel you loud and clear (Will Foster)",
            "The only game plan on the road",
            "Every silver cloud had a lining!",
            "Feed more fuel into the beast (Dr. Swanson)",
            "It puts the onerous on them",
            "Being on a hamster (Celinda Snyder)",
            "7 by 24",
            "The most least understood",
            "Tackle some low hanging fruit (Craig Boobar)",
            "The short end of the lollipop (Greg Bernhardt)",
            "Let's get this rodeo on the road",
            "Blow people's drawers off",
            "Swingin' for the hills (Eric Evenson)",
            "It's simple, like 1 to Z (Keith Brown)",
            "(what we see) down the horizon",
            "not even in the same stratosphere",
            "Look at it with a fine toothed comb (Greg Bernhardt)",
            "Right in the sea of the storm",
            "Another chip in the armor  (Keith Brown)",
            "Tip the curve (Celinda Snyder)",
            "Low foottouch (Jody Terrill)"
        ]
    },
    {
        year   :  "2013",
        quotes : [
            "natty ass detail",
            "We need to work in parallel spheres here",
            "We slayed all the nayslayers in the first round",
            "He has a chokehold on that bottleneck",
            "Some of his people should be let out of the closet",
            "\"Draw jopping\" statistics (via Tena Lokken)",
            "Unleash a can of worms",
            "Back the truck up, take a different road, and get to the same town",
            "Kick it down the can",
            "Like two thoughts passing in the night",
            "You pissed in their cheerios a year ago?",
            "Straddling the French",
            "Waiting for that to happen is like watching syrup flow out of a tree in Vermont.",
            "It doesn't take a big coin to turn some gum machines on.",
            "From Boston to Bangalore, Maine (Bangalore is in India, Bangor is in Maine)",
            "You cannot peanut butter expensive resources all over the place.",
            "We've got to kick it out of the park.",
            "It's not reinventing cold fusion",
            "You can fudge the edges a little",
            "You danced around a couple loaded weapons",
            "Kill two squirrels with one nut (Greg Bernhardt)",
            "You can visually eyeball that (Greg Bernhardt)",
            "That's not a linear line.",
            "Do a 365 degree review (Will Foster)",
            "Caught in the cross-section",
            "We have not unlocked the key yet",
            "Cuttin' it down to the wire (Tim Ramey)"
        ]
    },
    {
        year   :  "2012",
        quotes :
        [
            "This is a baby, not a pie! (you can't cut it into 3 parts)",
            "Happy as a clam in shit",
            "We don't want to boil the ocean and melt the earth",
            "I thought I was out of the clear... (Alex)",
            "It's on the tip of my brain (Craig Boobar)",
            "We've got to stay on top of each of those people every week (Matt)",
            "If you're buying manure for your cows",
            "Look down the list, horizontally",
            "You've got to swallow the entire whale to get a sandwich",
            "Bosshole - Rachel Blum",
            "It's in the same boat that's going off the cliff"
        ]
    },
    {
        year   : "2011",
        quotes : [
            "Double edged whammy",
            "Den of inequity",
            "Do you do tops up or bottoms down?",
            "The rubbers got to meet in the middle.",
            "I want everyone to close their mind...",
            "they're looking for a paint by numbers recipe",
            "A little clumbersome",
            "they aren't the brightest bulbs in the deck",
            "that spear has two points.",
            "happenchance",
            "web faced interface",
            "bowling with a curtain down in front of the screen.",
            "we are going to get into a room and sausage it out.",
            "wellness prevention programs",
            "Sticky widget (Melissa)",
            "90 degree certainty (instead of 90% degree of certainty)",
            "Boiled that up (instead of down)",
            "Like \"dopey smurf\"",
            "a curveball out of left field",
            "rack stank (instead of stack rank)",
            "Hands on the ground (Celinda)",
            "Happystance (Celinda)",
            "Get some barebones on that (Celinda)",
            "When the pond hits the water",
            "Cover our ducks (asses)",
            "Wells and Bistles (Celinda trying to say \"Bells and Whistles\")",
            "Handfew (Celinda trying to say \"handful\")",
            "Actionalize (Jenni's first)",
            "Smelisms (Celindas version of colloquialism)",
            "Holding my cards close to the hips (Rachel getting confused with \"holding cards close to your chest\")",
            "Physicalize (taking a logical data model, and creating the physical tables - Rachel)",
            "I don't want to put words in your hands (Greg)",
            "Turn the crank on the playbook faster",
            "Early ones",
            "The old \"90/20 rule\".",
            "Start the engine and get the snowball rolling.",
            "One foot in each world.",
            "Nailed it right on the money (Patterson)",
            "Play on emotions to make progress...it's like when the Boyscouts go door to door to sell those cookies.",
            "Keep your eye on the grindstone",
            "Frothing at the bit (Dave Hardy)",
            "Risk adverse",
            "Re-useful",
            "The more you scratch it, the deeper the vein is...",
            "The door on that window of opportunity is closing.",
            "Self-flatulation",
            "Swearing like a pirate (i.e. Faaaarrck) (Bernhardt) - I think it's supposed to be like a \"sailor\"...",
            "Just talking out loud... (Rob)",
            "Get all the indians into a room.",
            "That nut didn't fall far from the tree",
            "like mother pie and apple",
            "keep our powder dry so we can blow their socks off",
            "You can talk about apples and pears that is fine. But when the chart starts adding you can not add apples to pears and compare to oranges.",
            "Lubriated - Bob, trying to say \"inebriated\" when he was lubed up",
            "if you think that's a good idea you're riding on the spaceship lollipop"
        ]
    },
    {
        year   :  "unknown",
        quotes :
        [
            "(Oh and my favorite, from Futurama...)\nIf we can hit that bulls-eye, the rest of the dominos will fall like a house of cards. Checkmate!"
        ]
    }
];

talkingHead('foo bar doo car czar hardy har har bar mar far spar jardy jar mar par yar pardy mardy dardy dar');
