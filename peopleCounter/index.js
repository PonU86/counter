
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count +=  1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}



// Practice

/*
document.getElementById("count-el").innerText = 5

let count1 = 0 + 7

console.log(count1)

let myAge1 = 37

console.log(myAge1)



let firstBatch = 5
let secondBatch = 7

let count2 = firstBatch + secondBatch

console.log(count2)



let myAge = 37
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge)



let count3 = 5
count3 = count3 + 1

console.log(count3)



let bonusPoints = 50
bonusPoints = bonusPoints + 100

console.log(bonusPoints)

bonusPoints = bonusPoints - 25

console.log(bonusPoints)

bonusPoints = bonusPoints + 70

console.log(bonusPoints)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML o reflect the action

function increment1() {
    console.log("the button was clicked")
}






// Setting up the race

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)

// GO!

// Setting up the race

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()


// GO!


function number() {
    console.log(42)
}

number()


let lap1 = 34
let lap2 = 33
let lap3 = 36



function totalLap() {
    let total = lap1 + lap2 + lap3
    console.log(total);

    OR

    console.log(lap1 + lap2 + lap3)
}

totalLap()



let lapsCompleted = 0



function lapsIncreaseByOne() {
    lapsCompleted = lapsCompleted + 1
}

lapsIncreaseByOne()
lapsIncreaseByOne()
lapsIncreaseByOne()



console.log(lapsCompleted)




let countEl4 = document.getElementById("count-el")

let count4 = 0

function increment2() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
}


let username = "per"

let message = "You have three new notifications"


console.log(message + ", " + username)


let messageToUser = message + ", " + username

console.log(messageToUser)




let welcomeEl = document.getElementById("welcome-el")

let name = "Preston"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name



// ADD an emoji after the text is written

welcomeEl.innerText = welcomeEl.innerText + "emoji"
// OR and Better
welcomeEl.innerText += "emoji"



*/