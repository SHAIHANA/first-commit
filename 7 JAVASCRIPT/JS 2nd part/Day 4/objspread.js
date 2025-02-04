function  processArguments(...args){
    if(args.length ===0){
    // no arguments passed
    console.log('No arguments provided.');
     } 
     else if(args.length===1) {
    //single arguments passed
    console.log('One argument:', args[0]);
     }
     else {
        console.log('multiple arguments:', args);
     }

}
 //Usage examples
 processArguments(); //no arguments provided
 processArguments(10);
 processArguments('applle','orange','banana');