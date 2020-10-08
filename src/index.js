module.exports = function towelSort (matrix) {
  let n = [];
  if(matrix===undefined){
    return n
  }
  else {
    matrix.map((mat, i)=>{
     if( i % 2 !==0){
        n.push(matrix[i].reverse())
      }
      else {
        n.push(matrix[i])
      }
    })
  return n.flat();
  }
}