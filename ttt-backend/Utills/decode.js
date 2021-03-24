const decode = function(string){
    let res = "";
    for(let i=0;i<string.length;){
      let char = string[i];
      let count = 0;
      i++;
      while(i<string.length && parseInt(string[i])>=1 && parseInt(string[i])<=9){
        count = parseInt(count * 10) + parseInt(string[i]);
        i++;
      }
      while(count>0){
        res+= char;
        count--;
      }
    }
    return res;
} 

export default decode;