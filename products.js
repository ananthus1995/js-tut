var foods=[
    [100,"putt",8,100],
    [101,"chapathi",12,75],
    [102,"idly",5,150],
    [103,"dosa",10,0],
    [104,"gheeroast",40,0],
    [105,"porotta",10,500],
    [106,"cb",95,500],
    [107,"friderice",100,55]


]

//print all food names
foods.map(food=>food[1]).forEach(food=>console.log(food))
// console.log(FoodNames)

//print all available dishes
foods.filter(food=>food[3]!=0).forEach(food=>console.log(food))

//print gheeroast details

var gr= foods.find(food=>food[1]=="gheeroast")
console.log(gr)

//print costly dish
foods.sort((d1,d2)=>d1[2]-d2[2]).forEach(dish=>console.log(dish))

//or
//reduce method
console.log(foods.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2))


//is there any dish available in price range 50 to 100
var itms=foods.some(food=>food[2]>=50 || food[2<=100])
console.log(itms)


