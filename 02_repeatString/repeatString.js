const repeatString = function(string , num) {
    if (num<0) return "ERROR";
    let word="";
    for (let i=0; i<num;i++){
        word += string
  }
    return word;
}
repeatString("hey",10)

// Do not edit below this line
module.exports = repeatString;
