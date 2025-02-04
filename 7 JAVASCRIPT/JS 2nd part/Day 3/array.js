// array - used to store more variables in a single variables


//array creation
// var vehicle=[]; //declaration

var vehicle =["car","bus","auto","bike","plane",200000,567000] ;//initilization
//1? To fetch every elemnt of the array
// console.log(vehicle)

//2? To find the length of the array
// console.log(vehicle.length)

// //3? Fetch one by one element of the array
for(let i of vehicle){
    console.log(i);
}


// //4 To insert a new element in an array
// console.log(vehicle.push("cycle"));
// console.log(vehicle);


// // // //5  To get index position of values stored in an array
// for( let i in vehicle)
// console.log(i);


// ///NBNBNBNBNBNB // // FOR LOOP vech INDEX VALUE Kanan
for (i=0; i<vehicle.length; i++){
    console.log(vehicle[i]);//index positionile values varm
}

// //  changing the position of an element
let numbers=[1,3,4,5];
numbers[3]=9
console.log(numbers);