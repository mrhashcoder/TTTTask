const dictDecode = {
  '00000' : 'a',
  '00001' : 'b',
  '00010' : 'c',
  '00011' : 'd',
  '00100' : 'e',
  '00101' : 'f',
  '00110' : 'g',
  '00111' : 'h',
  '01000' : 'i',
  '01001' : 'j',
  '01010' : 'k',
  '01011' : 'l',
  '01100' : 'm',
  '01101' : 'n',
  '01110' : 'o',
  '01111' : 'p',
  '10000' : 'q',
  '10001' : 'r',
  '10010' : 's',
  '10011' : 't',
  '10100' : 'u',
  '10101' : 'v',
  '10110' : 'w',
  '10111' : 'x',
  '11000' : 'y',
  '11001' : 'z',
  '11010' : ' ',
  '11011' : '2',
  '11100' : '3',
  '11101' : '4',
  '11110' : '5',
  '11111' : '6',
}

const dictEncode = {
  'A' : 1,
  'B' : 2,
  'C' : 3,
  'D' : 4,
  'E' : 5,
  'F' : 6,
  'G' : 7,
  'H' : 8,
  'I' : 9,
  'J' : 10,
  'K' : 11,
  'L' : 12,
  'M' : 13,
  'N' : 14,
  'O' : 15,
  'P' : 16,
  'Q' : 17,
  'R' : 18,
  'S' : 19,
  'T' : 20,
  'U' : 21,
  'V' : 20,
  'W' : 23,
  'X' : 24,
  'Y' : 25,
  'Z' : 26,
  'a' : 27,
  'b' : 28,
  'c' : 29,
  'd' : 30,
  'e' : 31,
  'f' : 32,
  'g' : 33,
  'h' : 34,
  'i' : 35,
  'j' : 36,
  'k' : 37,
  'l' : 38,
  'm' : 39,
  'n' : 40,
  'o' : 41,
  'p' : 42,
  'q' : 43,
  'r' : 44,
  's' : 45,
  't' : 46,
  'u' : 47,
  'v' : 48,
  'w' : 49,
  'x' : 50,
  'y' : 51,
  'z' : 52,
  '0' : 53,
  '1' : 54,
  '2' : 55,
  '3' : 56,
  '4' : 57,
  '5' : 58,
  '6' : 59,
  '7' : 60,
  '8' : 61,
  '9' : 62,
  '@' : 63,
  '#' : 64,
}


const decode = function(string){
    var str = String(string);
    var hashStr = ""
    // Binary String 
    for (var i = 0 ; i < str.length ; i ++){
      var charCode = parseInt(dictEncode[str[i]])-1;
      var binStr = charCode.toString(2);
      var extroZeros = "";
      for(var j = 0 ; j < 6 - binStr.length ; j++){
        extroZeros += '0';
      }

      binStr = extroZeros + binStr ;
      hashStr += binStr
    }
    // Resulting String
    var resLen = parseInt(hashStr.length / 5);
    var ResStr = "";
    for(var i = 0 ; i < resLen ; i ++){
      var cur = "";
      for(var j = i*5 ; j < i*5 + 5 ; j++){
        cur += hashStr[j];
      }
      ResStr += dictDecode[cur];
    }

    return ResStr;
} 


module.exports = decode;