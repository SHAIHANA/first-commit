// // A call back function,the name of the function could be any name
const callback=(n) =>{
    return n**2;
}

// //functions that takes another function as a callbak
function cube (callback,n){
    return callback(n) *n;
}
console.log(cube(callback,3));

