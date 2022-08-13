fetch("https://jsonplaceholder.typicode.com/todos").
then(res=>res.json()).
then(data=>populatetodos(data))


function populatetodos(todosdata){

    let htmlData=``
    todosdata.forEach(todo=>{
        htmlData +=`<li><span>${todo.id} . </span>${todo.title}</li>`
    })
    
    document.getElementById("myUL").innerHTML=htmlData
   
}