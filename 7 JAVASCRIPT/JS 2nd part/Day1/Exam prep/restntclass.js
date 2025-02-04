// let menu ={
//     name:CB,
//     cuisine:"southasia",
//     type:"non-veg",
//     available:true
// }



class Restaurant{
   
 menu={
    "chicken biriyani" :{name:"chicken biriyani",cuisine:"southasia",type :"non veg", available:true}
}
printavilablefood(){
    console.log(this.menu);
    
}
addfood(newfood)
{
    this.menu[newfood.name]=newfood
    console.log(this.menu);
    
}


}

const obj=new Restaurant();
// obj.printavilablefood()
newfood={name:"fried rice"}
obj.addfood(newfood)
 