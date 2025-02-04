// //[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
covid_data=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]


//1. Find which district having highest +ve case?
// console.log("highest +ve case =" ,covid_data.reduce((a,b)=> a[2]>b[2]? a:b)[1]);//kozikod

// //2. Find which district having highest 1st dose vaccine?
// console.log(covid_data.reduce((a,b)=> a[5]>b[5]? a:b)[1]);

//3. Find which district having lowest death rate?
// console.log(covid_data.reduceRight((a,b)=> a[3]<b[3]? a:b[1]));

//4. Sort the data with +ve case in desending order
// console.log(covid_data.sort((a,b) => b[2]-a[2]));

//5. sort district with 1st dose vaccine
// console.log(covid_data.sort((a,b) => a[5]-b[5]));//jus printed sorting only

//6. print total number of curred cases
// console.log("total number of curred cases",covid_data.reduce((a,b) => a+b[4],0));
// covid_data.reduce((a,b)=>a+b[4],0);
//7. print total curred cases in Edukki
// covid_data.filter(c => c[1]=='Idukki').forEach(c=> console.log(c[4]));//

//8. Is any district having more than 27000 +ve cases -
// console.log(covid_data.some(c=> c[2]>27000));


// //[id,name,price,stock]
// products=[
//     [1,'Hide and seek',50,20],
//     [2,'lays',20,80],
//     [3,'oreo',40,100],
//     [4,'parleG',25,10],
//     [5,'tiger',20,0],
//     [6,'unibic',60,20],
//     [7,'good day',70,20]
// ]

//1. Display all products name
//products.forEach(name=>console.log(name[1]));//1 byy one aayit varum names
// or
//console.log(products.map(name=>name[1]));//arrayk akath varum


//2. Display list of products under 50rs 
// console.log(products.filter(p=>p[2]<=50));

//3. Print details of 'oreo' product
// console.log(products.find(oreo=>oreo[1]=='oreo'));

//4. Display most coslty product details
// console.log(products[6]);//good day details print avm
// or
// console.log(products.find(name=>name[1]=='good day'));
// or
// console.log(products.filter(p=>p[2]>60));


//5. Display out of stock product details
//console.log(products.find(name=>name[3]<=0));// tiger details print avm

//6. Display print details of 4th product 
console.log(products[3]);
// or
console.log(products.find(p=>p[0]==4));

//7. sort products details based on product availability stock by desending
// console.log(products.sort((a,b)=>b[3]-a[3]));//stock basel descending orderil varm(big to samll il varm)

// //8. Display products having maximum availabile stock
// console.log(products.reduce( (a,b) => a[3]>b[3]? a:b ));//oreo //reducesl biggest kanana edtha way ivdem edthu

//9. Display products having minimum availabile stock
// console.log(products.reduce((a,b) => a[3]<b[3]? a:b));//tiger// reduce small kanda waty ivdem edthu

//10. Sort the products based on rate by ascending order
// console.log(products.sort((a,b)=>a[2]-b[2]));// rate based ayt ascending orderil varm (small to big il varum)