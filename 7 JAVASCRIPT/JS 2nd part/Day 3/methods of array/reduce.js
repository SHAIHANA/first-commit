//reduce()---->function apply to all array elements and returns a single value(it will last value)

a=[1,2,3,4,5,6,7,8,9,10]

//1 find the sum of elements
// console.log(a.reduce((n1,n2) => n1+n2));//sum+
// //02 find the highest elemenst
// console.log(a.reduce((n1,n2) => n1>n2? n1:n2));//highest
//3 find the lowest element
console.log(a.reduce((n1,n2)=> n1<n2? n1:n2));//lowest