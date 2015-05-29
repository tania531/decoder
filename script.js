
// Create a function decodeStr()
// It will receive a string argument which has 2 parts, a stream of characters and a key,
// those 2 parts will be separated by the "|" sign in the message, example "sfGuisOthO12D|2 6 9 12"
// // The key is a space-separated list of integers, the decoded message will be the letters positioned on t
// hose integers in the original stream, so for "2 6 9 12", we want the letters on positions 2, 6, 9, and 12, 
// starting the count form 0

// assert_equal(decodeStr("sfGuisOthO12D|2 6 9 12"), "GOOD");
// assert_equal(decodeStr("01R34E6D|2 5 7"), "RED");
function decodeStr(str){
  var parts = str.split("|");
  var string = parts[0];
  var keys = parts[1];
  string = string.split(""); // now I can loop thru array
  keys = keys.split(" ");  // now I know individual array positions
  var decodedString = [];

  // pc: want to check the value at the key position and push to new decoded arr, then join back to returned string

    keys.forEach(function(k){

        decodedString.push(string[k]);
        console.log('decodedString: ', decodedString);
     
  });
  
  return decodedString.join('');
  console.log('decodedString: ', decodedString);
}
var result = decodeStr("sfGuisOthO12D|2 6 9 12");
console.log('result: ', result);