class BloodBank{
    donor={
        "pavi":{name:"Pavi",bloodGroup:"O+ve",age:20,recentlyDonated:true},
        "sumesh":{name:"sumesh",bloodGroup:"B+ve",age:23,recentlyDonated:true}
    }

    displayDonor()
    {
       for(let key in this.donor)
       {
        console.log(this.donor[key]);
       }
    }
    addDoner(newDonor)
    {           
         this.donor[newDonor.name]=newDonor
         console.log(this.donor);
         
    }
    updateDonor(donorName,update)
    {
        let volunteerData=this.donor[donorName]
        volunteerData.recentlyDonated=update
        this.donor[donorName]=volunteerData
        console.log(this.donor
        )
        
    }
    removeDonor()
    {
        
        console.log(this.donor);
        
    }

}

const obj =new BloodBank;
// 1>
// obj.displayDonor();

// // 2>
// newDonor={
//     name:"remesh",
//     bloodGroup:"A+ve",
//     age:30,
//     recentlyDonated:true
// }
// obj.addDoner(newDonor)

// // 3>
// obj.updateDonor('sumesh',false)

// 4>
obj.removeDonor("pavi")