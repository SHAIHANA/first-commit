//age:70
//age<18? "minor"
//age>=18 && age <=60 "eligible to work"
//age>60 "not eligble to work"

// nested statement(if else)  //

let age=70;
if(age>18)
    if((age>=18) && (age<=60)){
        console.log("eligible to work")
    }
   else{
       console.log("not eligible to work")
    }
    else{
        console.log("minor")
    }

