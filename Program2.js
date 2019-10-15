//Write a JavaScript function to get the first element of an array. 
//Passing a parameter 'n' will return the first 'n' elements of the array.

function elemArray(arr,n){
    if(arr == null) return 0;
    if(n== null) return arr[0];
    if(n<0) return [];
    
    return arr.slice(0,n);
}

console.log(elemArray([7,9,0,-2]));
console.log(elemArray([],3));
console.log(elemArray([7, 9, 0, -2],3));
console.log(elemArray([7, 9, 0, -2],6));
console.log(elemArray([7, 9, 0, -2],-3));
