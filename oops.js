class Person{
    setPerson(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    printPerson(){
        console.log(this.name,this.age,this.gender)
    }
}
var p1= new Person()
p1.setPerson('manu',23,'male')
p1.printPerson()