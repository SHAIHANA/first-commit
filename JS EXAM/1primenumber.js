

function isprime(num){
    if(num<=1)
        return num+"is not prime"

    for(let i=2; i<num; i++){
        if(num%i===0){
            return num+ " is not prime"
        }
    }
    return num+ " is prime"
}
console.log(isprime(2));
console.log(isprime(1));

