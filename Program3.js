//Write a JavaScript function to get the last element of an array.
//Passing a parameter 'n' will return the last 'n' elements of the array

function lastElemArray(arr,n){
    if(arr == null) return 0;
    if(n== null) return arr[arr.length-1];
    return arr.slice(Math.max(arr.length-n,0));
}
console.log(lastElemArray([7,9,0,-2]));
console.log(lastElemArray([7, 9, 0, -2],3));
console.log(lastElemArray([7, 9, 0, -2],6));