const dictEncode = {
  'a' : "00000",
  'b' : "00001",
  'c' : "00010",
  'd' : "00011",
  'e' : "00100",
  'f' : "00101",
  'g' : "00110",
  'h' : "00111",
  'i' : "01000",
  'j' : "01001",
  'k' : "01010",
  'l' : "01011",
  'm' : "01100",
  'n' : "01101",
  'o' : "01110",
  'p' : "01111",
  'q' : "10000",
  'r' : "10001",
  's' : "10010",
  't' : "10011",
  'u' : "10100",
  'v' : "10101",
  'w' : "10110",
  'x' : "10111",
  'y' : "11000",
  'z' : "11001",
  ' ' : "11010"
};

const dictDecode = {
  '1' : 'A',
  '2' : 'B',
  '3' : 'C',
  '4' : 'D',
  '5' : 'E',
  '6' : 'F',
  '7' : 'G',
  '8' : 'H',
  '9' : 'I',
  '10' : 'J',
  '11' : 'K',
  '12' : 'L',
  '13' : 'M',
  '14' : 'N',
  '15' : 'O',
  '16' : 'P',
  '17' : 'Q',
  '18' : 'R',
  '19' : 'S',
  '20' : 'T',
  '21' : 'U',
  '22' : 'V',
  '23' : 'W',
  '23' : 'X',
  '25' : 'Y',
  '26' : 'Z',
  '27' : 'a',
  '28' : 'b',
  '29' : 'c',
  '30' : 'd',
  '31' : 'e',
  '32' : 'f',
  '33' : 'g',
  '34' : 'h',
  '35' : 'i',
  '36' : 'j',
  '37' : 'k',
  '38' : 'l',
  '39' : 'm',
  '40' : 'n',
  '41' : 'o',
  '42' : 'p',
  '43' : 'q',
  '44' : 'r',
  '45' : 's',
  '46' : 't',
  '47' : 'u',
  '48' : 'v',
  '49' : 'w',
  '50' : 'x',
  '51' : 'y',
  '52' : 'z',
  '53' : '0',
  '54' : '1',
  '55' : '2',
  '56' : '3',
  '57' : '4',
  '58' : '5',
  '59' : '6',
  '60' : '7',
  '61' : '8',
  '62' : '9',
  '63' : '@',
  '64' : '#',
}


const encode = function(string){

    var str = String(string);
    str = str.toLowerCase();
    // making binary string from string
    var hashStr = "";
    for(var i = 0 ; i < str.length ; i ++){
      hashStr += dictEncode[str[i]];
    }
    // making length multiple of 6

    var extraZeros = 0;
    if(hashStr.length % 6 !== 0){
      extraZeros = 6 - (hashStr.length % 6);
    }
    for(var i = 0 ; i < extraZeros; i++){
      hashStr += '0';
    }

    // converting hashStr to shorter string making char with 6 bits
    
    var resLen = parseInt(hashStr.length / 6); 
    var ResStr = ""
    
    for(var i = 0; i < resLen ; i ++){
      var curChar = "";
      for(var j = i*6 ; j < i*6 + 6 ; j++){
        curChar += hashStr[j];
      }
      var charDecodeValue = bin_to_dec(curChar) + 1;

      ResStr += dictDecode[String(charDecodeValue)];
    }
    return ResStr;
}

function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}


module.exports = encode

