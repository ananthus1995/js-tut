setTimeout(()=>{
    console.log('line1');
},4000)

setTimeout(()=>{
    console.log('line2');
},0)


console.log('line3')

setTimeout(()=>{
    console.log('line4');
},2000)

console.log('line5')


//web api part -dom events,fetch,settimeout,setinterval etc..
//asynch -not keep order
//js is synchronous which behave like asych eith help of webapi
//webapi---- > call back queue--->call stack