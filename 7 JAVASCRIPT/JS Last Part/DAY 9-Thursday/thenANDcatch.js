//pro is object of promise class

var pro = new Promise ((resolve,reject)=>{
    let lotnum =5;
    let PrizeNum=Math.floor(Math.random()*10);
    if(lotnum==PrizeNum){
        resolve('You won the lottery')
    }
    else{
        reject('Better luck next tym')
    }
});

pro.then(msg=>console.log(msg))
.catch(err=>console.log(err));