const cars= [
    {id:1, make: "Toyota", model:"Camry", price:24425, instock:'yes',Featurs:
        {engine:"2.5L 4-cylinder",horsepower: 203,}
    },

    {id:2, make: "Ford", model:"Mustang", price:27470, instock:'No',Featurs:
        {engine:"2.3L turbo 4-cylinder",horsepower: 310,}
    },

    {id:3, make: "Chevrolet", model:"Tahoe", price:49900, instock:'yes',Featurs:
        {engine:"5.3L V8",horsepower: 355,}
    },

    {id:4, make: "Tesla", model:"3", price:39990, instock:'yes',Featurs:
        {engine:"electric",horsepower: 283}
    },

    {id:5, make: "BMW", model:"3 series", price:414450, instock:'No',Featurs:
        {engine:"2.0L turbo 4-cylinder",horsepower: 255,}
    }
]

//1 all car Name
console.log(cars.filter(item=>item.make));

//2
console.log(cars.filter(item=>item.price>30000));


//3
console.log(cars.filter(item=>item.instock=='No'));

//4
console.log(cars.filter(item=>item.Featurs.horsepower>300));

//5
result=cars.reduce((item1,item2)=>item1 + item2.price);






















//1 Print all employee name 
// console.log(employee.map((names)=>names[1]));

//2 Print total number of employee
// let count =0;
// employee.forEach(p => count++)
// console.log(count);

//3 Print developer employee details
// console.log(employee.filter((dev) => dev[2]=='Developer'));

//4 Print all employee details whose salary > 30000
// console.log(employee.filter(value =>value[4]>30000));

//5 Print details of employee Laisha
// console.log(employee.find(name => name[1]=='Laisha'));

// //6 Sort employee based on descending order of salary
// console.log(employee.sort((a,b)=> b[4]-a[4]));

//7 sort employee based on ascending order of experience
// console.log(employee.sort((a,b)=>a[5]-b[5]));


//QESTIONS//

//1 What is the purpose of the Array.prototype.filter() method in JavaScript?
//2 How does the filter() method work? Can you explain the basic idea behind its functionality?
// //3 Can you demonstrate how to use the filter() method to create a new array of even numbers from an existing array of integers?
// var n=[1,2,3,4,5,6,7,8,9,10]
// //print even numbers
// console.log(n.filter(num => num%2==0));

//4 How does the filter() method differ from the find() method in terms of functionality and returned values?
//5 What is the purpose of the Array.prototype.map() method in JavaScript?

//6 Can you provide an example of using the map() method to double each element in an array of numbers?
// var x=[10,23,30,42,]
// console.log(x.map(num =>num*2));

//7 Can you explain the difference between the map() method and the forEach() method?

//8 Can you demonstrate how to use the map() method to extract specific properties from an array of objects?
 
// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Eve', age: 28 }
//   ];
//   console.log(people.map(value => value.name));