//Write a JavaScript function to clone an array.

//Test Data :
//console.log(array_Clone([1, 2, 4, 0]));
//console.log(array_Clone([1, 2, [4, 0]]));
//[1, 2, 4, 0]
//[1, 2, [4, 0]]

function cloneArray(arr){
return arr.slice(0);
}

console.log(cloneArray([1,2,4,0]));
console.log(cloneArray([1,2,[4,0]]))
