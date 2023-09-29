const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
 
  let result = arr.reduce((sum,current)=> sum+current,0);
  return result 
	
};

const multiply = function(arr) {
 let result = arr.reduce((sum,current)=>sum*current,1);
 return result;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let answer=1;
  if (a===1||a===0){
    return answer;
  }
  else if(a>1){
    for (let i=a ;i>=1 ; i--){
      answer=answer*i;
    }
    return answer;
  }
	else {
    return "the number should be positive"
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
