//flat()---> it will flatten nested

a=[
    [10,50],
    [20,60],
    [15,25],
    [3,8],
    [100,500]
]
//1 print all numbers >10  //50,20,60,100,500

// console.log(a);//nested aayt thanne print avum
// console.log(a.flat()); //single arraykk akath print avum
// console.log(a.flat().filter(num=>num>10));





///depplyNested array  =>completelyFlattenedArrray will bw [1,2,3,4,5]
// const nestedArray=[1,[2,[3,[4,[5]]]]];


// console.log(nestedArray.flat(1));// output : [1,2,[3,[4,[5]]]]
// console.log(nestedArray.flat(2));// output : [1,2,3,[4,[5]]]
// console.log(nestedArray.flat(3));// output : [1,2,3,4,[5]]
//console.log(nestedArray.flat(Infinity));// output : [1,2,3,4,5]//use infinity for single array with elements




// // // // Can you provide an example of using the flat()method with an array that contains empty slots?
const arrayWithEmptySlots =[1, ,[2,3], ,[4,[5,6]]];
// ////////// falttenedArray will be [1,2,3,4[5,6]]
console.log(arrayWithEmptySlots.flat());


// The result is that the array is flattened one level deep,and  the empty slots are removed.


