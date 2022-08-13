console.log("heloo world")



//let, var, const for declaring variables
//declaring variables by using let for block level scope 
//var - global scope
//const - for constant variable

var name="manu"
var myName="akhil"
var greet="goodmornming"
var place="kochi"
console.log(`hello ${name} im ${myName} from ${place} and ${greet}`)

var num1=10
var num2=15
var num3=20
console.log(num1>num2?num1:num2)
console.log(num1%2==0? "is even": "is odd")

if ((num1>num2)&&(num1>num3)){
    console.log(num1)
}
else if((num2>num1)&&(num2>num3)){
    console.log(num2)
}
else{
    console.log(num3)
}

