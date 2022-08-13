var djangoProjectPromise=new Promise((res,rej)=>{
    let isPromise=true
    if(isPromise){
        res("projct prsntd")
    }
})

djangoProjectPromise.then(res=>console.log("lets start angular"))


var myPromise=new Promise((res,rej)=>{
    let task=3
    if(task>3){
        res("very good")
    }
})

myPromise.then(res=>console.log("almost completed"))