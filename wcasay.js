#!/usr/bin/env node

// set up the stdin
process.stdin.setEncoding('utf8');

// print stdin
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) 
  {
    process.stdout.write('data: ' + chunk);
    process.stdout.write(giveHead());
  }
});

process.stdin.on('end', function() {
    process.stdout.write('end');
});

function giveHead ()
{
  var head =
    "         XXXXXXXX              \n"
   +"     XXXX       XXXX           \n"
   +"  XXX               XX         \n"
   +" XX  XX XX XXX       XXX       \n"
   +"XX  XX    XX XXXXX     XX      \n"
   +" XX           XX XX     X      \n"
   +"                  XX    XX     \n"
   +"                  X XX   X     \n"
   +"                     XX  X     \n"
   +"                     XX  XX    \n"
   +"XXXXXXXXXXXXXXXXXXXXXX    X    \n"
   +"XX                        XX   \n"
   +"XX                         XX  \n"
   +"XX                         XXX \n"
   +" XX                       X    \n"
   +"  XX                     XX    \n"
   +"   XXX                   X     \n"
   +"     XXXX                X     \n"
   +"        XXXXX           XX     \n"
   +"           XXXXXX      XX      \n"
   +"                 XXXXXXX       \n";
  return head;
}
