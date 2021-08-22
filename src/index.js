module.exports = function check(str, bracketsConfig) {  
	let openB = [];
  for(let i of bracketsConfig) {
  	openB.push(i[0]);
  }
  let closB = {};
  for(let i of bracketsConfig) {
  	closB[i[1]] = i[0];
  }
  
  str = str.split('');
  let curB, lastB;
  let stack = [];
  
  
  for(let i = 0; i < str.length; i++) {
  	curB = str[i];
    
    if(openB.includes(curB)) {
    	if(curB === closB[curB] && curB === stack[stack.length-1]) {
      	stack.pop();
      } else {
    	stack.push(curB);
      }
    } else {
    	if(stack === 0) return false;
      lastB = stack[stack.length - 1];
      if(closB[curB] === lastB) {
      	stack.pop();
      } else {
      	return false;
      }
    }
  }
  
  return stack < 1;
}
