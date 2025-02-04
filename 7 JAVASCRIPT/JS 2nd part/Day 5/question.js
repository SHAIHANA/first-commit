/* Q) Create a class MovieTicket with the following specifications:

      1) A constructor that initializes the movie name, the theater name, the number of seats, and the price per ticket.
      2) A method bookTickets that decreases the number of available seats by the number of tickets requested and returns the total cost.
      3) A method printDetails that prints the movie name, the theater name, the number of available seats, and the price per ticket.
      4) A method isAvailable that returns true if the requested number of seats are available, otherwise returns false.
      5) Add a method cancelTickets that increases the number of available seats by the number of tickets canceled and returns the refund amount.
      6) Add a method applyDiscount that applies a discount to the price per ticket for a promotional offer.

*/
//1
class Theater{
      constructor(moviename,theatername,numberofseats, priceperticket){
            this.mname=moviename,
            this.tname=theatername,
            this.seatnumber=numberofseats,
            this.pticketprice=priceperticket
            console.log("Theatre details created");

      }
//2
Booktickets(tickets){
       this.seatnumber-=tickets;// this
       return `the total cost ${tickets} Tickets : ${tickets*this.pticketprice}\n`
}
//3
movieDetails(){
      console.log(`Movie Name :${this.moviename}`);
      console.log(`Theatre Name : ${this.tname}`);
      console.log(`Availabe Seats : ${this.this.seatnumber}`);
      console.log(`Price Per Ticket : ${this.pticketprice}`);
}

//4
isAvailable(ticket)
{
  if(ticket<=this.seatnumber)
       {
         console.log("true");
       }
  else
     {
      console.log("false");
     }
}

}

