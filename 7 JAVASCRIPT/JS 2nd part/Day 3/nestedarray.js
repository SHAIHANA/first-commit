// ///print all elements,whose values are less than 10 in given array
// a=[
//     [1,2],
//     [10,22],
//     [14,21],
//     [3,6],
//     [5,9],
//     [19,28],
// ]
//normal for loop use cheythy
// for( let i of a){
//     for(let j of i){
//         if(j<10){
//         console.log(j);
//         }
//     }
// }




// var a=[2,3,2,4,5];

// for ( i of a){
//     if(i<5){
//         console.log(i);
//     }
    
   
// }

//print pairs whose sum=9
var arr=[2,3,4,5];//5+4=9 varum so ath print akanam
// let array=arr[2][3];

// for(i of arr){
//    for(j of arr ){
//     if(i+j==9){
//     //  console.log(`pairs are (${i},${j})`);
//     //or
//     //console.log(`paires are ${i},${j}`);
   
//     }
//    }
// }


//NB NB NB NB NB NB
// counter
 //ethra tyme lopp excute cheythu enn ariyan
 //1st count enn paranj oru value kodka
 //2nd eth loop execute cheymbo ano namk count kitande aah loopin thaze count increment kodukuka

//  counter=1;
//  for(let i of arr){
//     counter++;//COUNTER=COUNTER+1                                                  LLLLL
//   for(let j of arr){  
//     if(i+j==9){
//         console.log(`pairs are (${i},${j})`);
//       }
//     } 

//  }

//  console.log("itration count" , counter);







//[id,name,designation,location,salary,experience] 
employee=[
    [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1008,'Nihaan','Developer','Kochi',25000,3],

]

// //1 Print all employee name 
// for( emp of employee){
//     console.log(emp[1]);
// }

//2 Print total number of employee
// console.log(employee.length);

//3 Print developer employee details
// for( let emp of employee){
//    if(emp[2]=='Developer'){
//     console.log(emp);
//    }
// }

// //4 Print all employee details whose salary > 30000
// for (let emp of employee){
//     if(emp[4]=='30000'){
//         console.log(emp);
//     }
// // }
// //5 Print details of employee Laisha
// for(let emp of employee){
//     if(emp[1]=='Laisha'){
//     console.log(emp);    
//    }

// }

//6 Sort employee based on descending order of salary
// //sort enna methord use akanam
employee.sort((a,b)=> b[4]-a[4]);
console.log(employee);
// //7 sort employee based on ascending order of experience
// employee.sort((a,b)=> a[4]-b[4]);
// console.log(employee);