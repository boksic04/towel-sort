
module.exports = function towelSort (matrix) {
  let arr = new Array();
  
  if(typeof matrix == "undefined" || matrix.length == 0){
    return arr;
  }
  
  for(let i = 0; i < matrix.length; i++) {
    if(i%2 == 0) 
    for(let n = 0; n < matrix[i].length; n++) {
       arr.push(matrix[i][n]);
    } else {
      for(let n = (matrix[i].length-1); n >= 0; n--) {
        arr.push(matrix[i][n]);
    }  
  }
}
 return arr;
}
