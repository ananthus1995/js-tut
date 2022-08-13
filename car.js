var baleno={
    brand:"maruthi",
    price:"6lac",
    colors:["red",'white','blue'],
    transmission:['manual','auto'],
    getPrice(){
        return this.price
    }
}

var glanza={
    brand:"toyota",
    price:"7lac",
    
}

glanza.__proto__=baleno
console.log(glanza.colors)

console.log(glanza.getPrice())