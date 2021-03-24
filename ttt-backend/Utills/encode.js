const encode = function(string){
    let chars = string.split("");
    let res = "";
    for(let i=0;i<chars.length;i++){
        let count = 1;
        let char = chars[i];
        while(i<chars.length-1 && chars[i] == chars[i+1]){
          count++;
          i++;
        }
        if(count == 1){
          res += char
        }else{
          res += char + count;
        }
    }
    return res;
}


module.exports = encode