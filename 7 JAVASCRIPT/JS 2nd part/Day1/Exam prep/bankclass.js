class Bankdetails{
    setBanksetails(ano,bankname,Mobno,balance){
        this.bankaccountnumber=ano,
        this.bankname=bankname,
        this.mobilenumber=Mobno,
        this.bankbalance=balance
        console.log("bank details cereated");
        
    }
   Deposite(amount){
    this.bankbalance+=amount
    console.log("adding successfully is " + this.bankbalance);
    
   }

   withdrawl(amount){
    this.bankbalance>=amount? this.bankbalance= this.bankbalance-amount: console.log("Withdrawal amount" + this.bankbalance);
    
   }
   balanceenquiry(){
    console.log("balance is" + this.bankbalance);
    
   }
}
//Object creation
bank=new Bankdetails();
bank.setBanksetails(123,"Federal",12234,1000)
bank.Deposite(1000);
bank.withdrawl(500)
bank.balanceenquiry();