// // // print all vowels in the string
// str="hai hello"; //variable
// vowels=['a','e','i','o','u','A','E','I','O','U']; //ARRAY
// // console.log(Array.from(str));
Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));

// // // find the vowels in an array using array methods
const string =["Hello","how","are","you"]; // output :[2,1,2,2]
const vowels= string.map(str=>Array.from(str).filter(char=> 'aeiouAEIOU'.includes(char)).length);


