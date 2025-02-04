// class-creation
// syntax : class class_name{}




class Employee{
    //instant=ce initialization
setEmployee(id,name,salary,designation){ //function
    this.empid=id, //1000//reference - initilize the object with
    this.empname=name,// this.name(address)
    this.empsalary=salary,
    this.empdesignation=designation, 
    console.log("employee detailes created")
}


printEmployee(){
    console.log(this.empid,this.empname,this.empsalary.this.empdesigntion);
}
}
// // to be execute a class then we need to create object 
// // object _name =name class_name()

emp=new Employee();

//object 1
emp.setEmployee(1000,'manoj',50000,'Develepor');//employee details created
emp.printEmployee(); //1000 manoj 50000 developer






