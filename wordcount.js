var text="hello hai hello hai hai world"
var wrdcount={}
// wrds=text.split(" ")
// for(let wrd of wrds){
//     if (wrd in wrdcount){
//         wrdcount[wrd]+=1
//     }
//     else{

//         wrdcount[wrd]=1
//     }
// }
// console.log(wrdcount)

//or   


text.split(" ").map(wrd=>wrd in wrdcount?wrdcount[wrd]+=1:wrdcount[wrd]=1)
console.log(wrdcount)


var nums=[7,6,3,8,9,11,0,32]
var strNums= nums.map(n=>String(n))
strNums.sort((n1,n2)=>String(n1)>String(n2)?-1:1)
// console.log(strNums)
console.log(strNums.reduce((n1,n2)=>n1+n2>n2+n1?n1+n2:n2+n1))
