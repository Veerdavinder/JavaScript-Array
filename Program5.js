//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

function insertDash(num){
const str = num.toString();
const result=[str[0]];

for(let x=1;x<str.length;x++){
    if((str[x-1]%2 ===0) &&(str[x]%2 === 0)){
        result.push('-',str[x]);
    }
    else{
        result.push(str[x]);
    }
}
return result.join('');
}
console.log(insertDash(4235689))