// console.log("Welcome to Temparature Convertor")

// let temp = document.getElementById("tempValue").value
// console.log(temp)

// document.getElementById("submit").onclick = function() {

//     temp = document.getElementById("tempValue").value

    
//     if(!Boolean(temp)) {
//         document.getElementById("answer").innerHTML = "Please enter a value"
//     }

//     else if(document.getElementById("celsius").checked) {
//         document.getElementById("answer").innerHTML = "Celsius value is " + calculate(temp, "celsius")
//     }
//     else if(document.getElementById("far").checked) {
//         document.getElementById("answer").innerHTML = "Farenheit value is " + calculate(temp, "far")
//     }
//     else{
//         console.log("Select a type to convert the temp to")
//     }

// }

// function calculate(temparatureValue, typ) {

//     temparatureValue = Number(temparatureValue)
    
//     if(String(typ).match("celsius")) {
//        return (temparatureValue - 32) * (5/9)
//     }

//     else if(String(typ).match("far")) {
//         return temparatureValue * 9 / 5 + 32
//     }

// }

// diff(2,3, somethingDoes)

// function diff(x, y, funcitonOfSomething) {
//     funcitonOfSomething(x - y);
// }

// function somethingDoes(output) {
//     console.log(output)
// }

// //Callback functions

// //Array for each
// let numbersAdd = [1,3,5,10]


// function addFive(element, index, array) {
//    return  element + 5;
// }

// function print(element) {
//     console.log(element)
// }

// // numbersAdd.forEach(addFive)
// // numbersAdd.forEach(print)

// let addedFive = numbersAdd.map(addFive)

// console.log(numbersAdd, addedFive)

//Reduce

// let names = ["Abhijeet", "Kiran"]

// function fl(addedName, name) {
//     return name + String(addedName).charAt(0) + String(addedName).charAt(addedName.length - 1)
// }

// names[0].l

// console.log(names.reduce(fl))

//Array filter

// let num = [1,2,3,4,6,7,8]

// num.filter(element => element % 2 == 0).forEach(element => console.log(element))

//Map in js

// const sampleMap = new Map([])

// let someObject = {
//     model : "MyMOdel",
//     date : "2023-10-10",

//     printInfo : function() {
//         console.log(`THis is some object object and the model is ${this.model} and the date is ${this.date}`)
//     }
// }

// someObject.printInfo()

//Classes

class Player {
    score = 0

    constructor(score) {
        this.score = score
    }
    
    pause() {
        console.log("You paused the game")
    }

    exit() {
        console.log("You exited the game")
    }
}

let p = new Player()
console.log(p.pause())