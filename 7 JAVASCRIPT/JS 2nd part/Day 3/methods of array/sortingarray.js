// // // Sorting of an array

//1// case of digit (ingane aanu)

var arr=[44,170,56,100,34,64,150,23,11,12,1];

// console.log(arr.sort());

//ascending order--- small-big number order
// console.log(arr.sort((a,b)=>a-b));//ascending


//descending order--- big to small order
// console.log(arr.sort((a,b)=>b-a));//descending




// //2
//(string nte case)
var vehicle=["Bus", "car", "bike","Cycle"];//abc
// console.log(vehicle.sort());//uppercase to smaller case
// console.log(vehicle.reverse());//small letter priority
// console.log(vehicle.sort((a,b)=>a.localeCompare(b)));//small letter priority//small, capit ,small, capit
// console.log(vehicle.sort((a,b)=>b.localeCompare(a)));//capit,samll,capit,samll --reverse orderil vannu




// Given an array of numbers and perform sorting
var points = [40, 100, 1, 5, 25, 10];
// 1.ascending order the numbers 
// console.log(points.sort((a,b)=>a-b));

// // 2.descending order the numbers
// console.log(points.sort((a,b)=>b-a));

// // 3.find the lowest number
// points.sort((a,b)=>a-b);
// console.log("lowest number : " ,points[0]);
 
// // 4.find the highest number

//  console.log("Highest number is :",points[5]);