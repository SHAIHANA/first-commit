function login(){
    var username = UName.value //username ennulla variablelot kodthu value //getElementByid vechum alland directum .value kodth get cheyyikam
    console.log(username);
    localStorage.setItem("USERNAME",username)//key & value kodthu --value aa variable name aaanu //key enth venelm kodkam
    
    
    //REDIRECT TO HOME PAGE
window.location="Home.html"  //BOM property an window.location --oru pagenn vere pagelot povan




}