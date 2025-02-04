
class Student{
    setStudent(id,name,age){
        this.studid=id,
        this.studname=name,
        this.studage=age,
        console.log("student detailes created")
    }
    
    
    printStudent(){
        console.log(this.studid,this.studname,this.studage);
    }
    }
    
    //object
    stud=new Student();
    stud.setStudent(5,'john',23);
    stud.printStudent();
     
    
    //object2
    stud=new Student();
    stud.setStudent(8,'anil',28);
    stud.printStudent();



    //using constructor
    
class Student{
    constuctor(id,name,age){ //constructor kodthal thaze objectil stud=new Student ( ullil values kodkam)
        this.studid=id,
        this.studname=name,
        this.studage=age,
        console.log("student detailes created")
    }
    
    
    printStudent(){ //user defind function       
         console.log(this.studid,this.studname,this.studage);
    }
    }
    
    //object
    stud=new Student(5,'john',23);
   //constuctor ith vnda.pakaram muklil () il values kodkanam / stud.setStudent(5,'john',23); 
    stud.printStudent();
     

