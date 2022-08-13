var nums=[1,8,13,4,5,6,7,8,0,21,15,11,9]


//map()
var cube=nums.map(n=>n**3)
console.log(cube)

//filter()
var even=nums.filter(n=>n%2==0)
console.log(even)

//sort
nums.sort((n1,n2)=>n1-n2) //n1<n2? n1must come befor n2  :n2 must come befor n1
console.log(nums)

//push
nums.push(111)

//includes   --to check an element id in array
console.log(nums.includes(55))


