var arr=['c','java','python','php']

for(let i of arr){
    console.log(i)
}


//or


for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

var num=[1,2,0,0,4,6,0,7]
for(let n of num){
    if (n!=0){
        console.log(n)
    }
}