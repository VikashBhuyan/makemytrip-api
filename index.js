let array = [1,2,3,4];
let count= 0;
let obj = array.reduce((prev,curr)=>{
    prev[curr] = count;
    count++;
},{})
