//split()---->
//string method
//split-split a string into substring using the specified separator and return them as an array.
// //it takes two argument - separator and limit

// //The split() method divides a string into an array of substrinfs using the provided delimiter.it searchs for occurence of the delimiter in the string and the breaks the string into parts accodingly...

// let str="luminar technolab"
// console.log(str.split());//['luminar technolab']

// console.log(str.split(''));//without space separated by letters
// console.log(str.split(' '));//using space separated by words
// console.log(str.split('m'));//using one character inside the string ,then it will be excluding that letter
// console.log(str.split(','));//using some other characters outside the string ,then it will be return same string
// console.log(str.split('',2));//(separator and limit)--stingile 2 letters varm 




//stringine array akan namal split use aki ath pole use akunna vere oru wy an 
//Array.from

//eg:-
//   convert and display text in capital letters

str="luminar"; //LUMINAR
//normally toUppercase() vech cheyyam
// console.log(str.toUpperCase());
// console.log(str.toUpperCase());
// // // 1 convert to array-Array.form()
//  console.log(Array.from(str));//stringine arraykk akath akI--['l','u','m','i','n','a','r']
// //or

// //araykk akath ellam uppercasel vannu--LUMINAR

console.log(Array.from(str).map(char=>char.toUpperCase())) ;//different methods use aki cheythu
// // // // array.from use aki arraykk akath aki
// // // map use aki ellathinm Uppercase kodthu
// // forEach use aki one by one ayi printum cheythu

//     console.log(Array.from(str).map(char=>char.toUpperCase()));
    
       //out put:
        // L
        // U
        // M   
        // I
        // N
        // A
        // R