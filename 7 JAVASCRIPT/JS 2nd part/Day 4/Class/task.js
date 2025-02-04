db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false


//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

//1
function ValidateAccountnum(accountnumber){
    return accountnumber in db

}

//2
function Authenticateuser(accountnumber,pass) {
    account=db[accountnumber]
    if(ValidateAccountnum(accountnumber) && account.password===pass){
        console.log('Access granted');
    }
    else{
        console.log('permission denied');
    }  
}
console.log(ValidateAccountnum(1000));
Authenticateuser(1000,1005)



// // // same

// function validateaccountnumber(accountnumber) {
//     return accountnumber in db
// }
// function authenticateuser(accountnumber,pass){
//     // account=db[accountnumber]
//     // if(validateaccountnumber(accountnumber)&& account.password===pass){
//        console.log('Acess granted');
//     }
//     else{
//         console.log('permission denied');
//     }
// }


// console.log(validateaccountnumber(1000));
// authenticateuser(1000,1002)
