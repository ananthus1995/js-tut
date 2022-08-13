//  data types - number ,null,string,undefined,Boolean
//  == compare content 
//  === compare content&type
//  type coersion - to convert data type to another
function multi(n1,n2){
    return n1*n2
}
console.log(multi(12,3))


//arrow function 
var res=(num1,num2)=>num1+num2
console.log(res(15,1))

var x=num=>num%2==0?true:false
console.log(x(2))
