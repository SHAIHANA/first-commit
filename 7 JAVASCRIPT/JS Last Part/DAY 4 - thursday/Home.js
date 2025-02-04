username =localStorage.getItem("USERNAME") //set cheytha value local storagel get cheythu ,oru variablelot assign cheythu
head1.innerHTML = `Welcome ${username}` //then aa variable ne innerHTML vech avide ulla contentmayi replace cheyya





function addemployee(){
    const employee = {
        id:empid.value,
        name :empname.valuem,
        address :empaddress.value,
        designation:empdesig.value,
        exp:empexp.value,
        salary:empsal.value,

    } //input boxile all Id vech oru object create cheythu
/// then locatal storagelekk set cheyanam
if(employee.id==""|| employee.name==""|| employee.address==""|| employee.designation==""|| employee.exp==""|| employee.salary==""){
    alert("Please fill the following fields")
}
else{

    if(employee.id in localStorage){
        alert("Employee already exists")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee added successfully")
    }
}

}


function search(){
    key = emp.value //1234
    if(key in localStorage){
        alert("Employee is found")

        employee = JASON.parse(localStorage.getItem(key))
        result.innerHTML = `<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Employee details</h5>
<p class="card-text"> 
    id : ${employee.id}
    <br>
    name : ${employee.name}
    id   : ${employee.id}
<p/>
  </div>
</div>`
    }
    else{
        console.log("Employee not found");
    }


}