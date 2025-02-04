//create Bnk account


class Bankdetails{
    //method1
   constructor(acno,bankname,Mobno,balance){
     this.bankacno=acno,//12345
     this.bankname=bankname,//john
     this.bankMobno=Mobno,//1234
     this.bankbalance=balance//2000
     console.log("Bank detailes created")
   }
  
   //method2
   Depositamount(amount){//500
    this.bankbalance+=amount
    console.log("adding succefully..your balace is" + this.bankbalance);
   }
   //method3
   withdrawamount(amount){
  this.bankbalance>=amount? this.bankbalance=this.bankbalance-amount :console.log("withdrawal amount");
}

//method 4
balancenquiry(){
    console.log("balance is " + this.bankbalance);
}

}

Bank=new Bankdetails(12345,'john',1234,2000);
Bank.Depositamount(500);
Bank.withdrawamount(300)
Bank.balancenquiry()


