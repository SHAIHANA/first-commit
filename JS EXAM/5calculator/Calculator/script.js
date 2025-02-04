



function displayNumber(num){//1 /2/3/4
    document.getElementById("number").value+=num;//.value=.value+num= click akunna  Buttenile number + again number add avan
} //num.value enn parayunath inputil namal kodkune value avum

// clear the text box
function Clear(){
   number.value= " "// input .id name+value empty input varanam(Ac)
}



// operations 
function operations(){
    number.value=eval(number.value)// eaval- method to perform operations
}


//last value backspace povan=> .slice (value kodkuka)
function backspace(){
    number.value=number.value.slice(0,-1)//
}
