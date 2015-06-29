exports.verse = verse
exports.sing = sing

var zero_bottles = "No more bottles of beer on the wall, no more bottles of beer.\n" +
                   "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
var one_bottles =  "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                   "Take it down and pass it around, no more bottles of beer on the wall.\n";
var two_bottles =  "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                   "Take one down and pass it around, 1 bottle of beer on the wall.\n";

var simpleAnswer = {0 : zero_bottles, 1: one_bottles, 2: two_bottles};

var endAnswer =  "No more bottles of beer on the wall, no more bottles of beer.\n" +
                "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

function several_bottles(num) {
  return num + " bottles of beer on the wall, " + num +
               " bottles of beer.\nTake one down and pass it around, " + (num - 1) +
               " bottles of beer on the wall.\n";
}

function verse(number) {

  if(simpleAnswer[number] != undefined)
    return simpleAnswer[number];
  else {
    return several_bottles(number);
  }
}

function sing(start, end) {

  end = end || 1;
  var stop = start-end;

  var returnStatement = "";
  for(var i = 0; i < stop+1; i++) {
    returnStatement += several_bottles(start-i);

    if(start-i == 3)
      return returnStatement + '\n' +  simpleAnswer[2] + '\n' +  simpleAnswer[1] + '\n' + endAnswer;
    if(i != stop)
      returnStatement += '\n';
  }

  return returnStatement;
}
