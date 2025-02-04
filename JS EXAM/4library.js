class Collection{
    Library={
        "ikigai": {title:"Ikigai", author: "Francesc Miralles and Hector Garcia", year:"2016", availability: true}
    }

    displayBooks()
    {
        for(let key in this.Library)
        {
            console.log(this.Library[key]);
            
        }
    }
    addbook(newbook)
    {
        this.Library[newbook.name]=newbook
        console.log(this.Library);   
    }

    updatebook(bookname,update)
    {
        let volunteerData=this.Library[bookname]
        volunteerData.recentlyupdated=update
        this.Library[bookname]=volunteerData
        console.log(this.Library
        )
        
    }
    removeBook()
    {
        
        console.log(this.Library);
        
    }

}

const obj =new Collection();
// 1>
 obj.displayBooks();

 // 2>
 newbook={
    "Burried Thoughts":{
        title:"Burried thoughts",
    author:"Joseph",
    Year:216,
    Availability:true
    }
}
obj.addbook(newbook)

// // 3>
obj.updatebook('Willpower',false)

// 4>
obj.removeBook("ikigai")




    


