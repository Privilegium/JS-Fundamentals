// Task 1

let num = prompt('What\'s your ticket number?')

function isLucky(num) {
    let str = normalNum(num)

    let sum1 = (+str[0]) + (+str[1]) + (+str[2])
    let sum2 = (+str[3]) + (+str[4]) + (+str[5])

    return sum1 === sum2
}

function normalNum(num) {

    if (num.length == 5) {
        num = '0' + num
    }
    if (num.length == 4) {
        num = '00' + num
    }
    return num
}

    if (isLucky(num)) {
        alert('Your ticket ' + num + ' is LUCKY!');
    } else {
        alert('Your ticket is\'t lucky(')
    }


//---------------------------------------------------------------------------

// Task 2


function askForTemp () {
    let temp = prompt('Write a Celsius temperature')
    temp = +temp

    return temp
}

function convertTemp(temp) {
    let result = askForTemp()

    if (isNaN(result)) {
        console.log('Error');
    } else {
        result = (result * 1.8) + 32
        console.log('It is ' + result + ' in Fahrenheit');
    }
}
convertTemp()


//---------------------------------------------------------------------------
// Task 4

let l = prompt('What is the length?') 
let w = prompt('What is the width?')
let h = prompt('What is the height?') 

function getArea () {  
    let officeArea = ((+l * +h) * 2) + ((+w * +h) * 2);
    return officeArea
}

function jarNum() {
    let jar = 16; 

    let result = getArea() / jar;
    console.log(result)
}
jarNum();