// var vehicle =["car","bus","jeep","bike","plane",200000,567000] ;//initilization


// //1 To fetch an item from an array


// console.log(vehicle[3]);//200000

// //2 To find the length of the array
// console.log(vehicle.length)

// // //3 Fetch every element of the array
// console.log(vehicle);

//meth2:for 1 by 1 print
// for(i of vehicle){
//     console.log(i);
// }

// //OR
// for (let i=0; i<vehicle.length;  i++){
//     console.log(vehicle[i]);
// }




//4 To insert a new element in an array
// console.log(vehicle.push("busss"));
// for(i of vehicle)
// console.log(i);



// //5  To get index position of values stored in an array
// for(let i of vechicle){
//     console.log();
// }





// ?6 Check whether the element(2) is present or not
// var arr=[10,24,5,43,50,17];

// for(let i of arr){
//    if(i==2){
//     console.log("2 is present");
//    }
// }
   
//     console.log(("2 is not prersent"));






///TASK///

//? Generate new array with values are subtracted from the total sum of the values
//input : var arr= [4,5,6]; (sum=15)
//output: var arr= [11,10,9]

// var arr=[4,5,6];
// var total=15;

// for (let i in arr){

//  arr[i]=total-arr[i];
    
// }
// console.log(arr);
    
 
 

//?? To hold an expenses , and 
var expenses = [12000,20000,34000,10000,28000,15000,50000];
// //Find total expense
// let total=0
// for(let i of expenses){
//     total+=i;//totoal=total+i
// } 
// console.log("total expense:" + total);

//Find maximum expense
// var max=0;
// for(let i of expenses){
    
//     if(max<i){
//         max=i;
// }
// }
// console.log("maximum expenses: " + max);


//Find minimum expense
// var min=expenses[0];
// for(let i of expenses){
//     if(i<min){
//         min=i;
//     }
// }
// console.log("minimum expense:" + min);
