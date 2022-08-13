
function clearScreen(){
    document.getElementById("result").value=""
}

function display(value){
    document.getElementById("result").value +=value
}

function calculate(){

    let nums= document.getElementById("result").value
    let cal= eval(nums)
    document.getElementById("result").value=cal
}

function bkSpace(){
    let n= document.getElementById("result").value
    document.getElementById("result").value = n.substr(0, n.length - 1);
    
}