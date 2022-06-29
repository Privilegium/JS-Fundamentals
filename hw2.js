// Practice

// Task 1

// let num = prompt('What\'s your ticket number?')

// function isLucky(num) {
//     let str = normalNum(num)

//     let sum1 = (+str[0]) + (+str[1]) + (+str[2])
//     let sum2 = (+str[3]) + (+str[4]) + (+str[5])

//     return sum1 === sum2
// }

// function normalNum(num) {
//     let str = String(num) 

//     if (str.length == 5) {
//         str = '0' + str
//     }
//     if (str.length == 4) {
//         str = '00' + str
//     }
//     return str
// }

//     if (isLucky(num)) {
//         alert('Your ticket ' + num + ' is LUCKY!');
//     } else {
//         alert('Your ticket is\'t lucky(')
//     }


//---------------------------------------------------------------------------

// Task 2


function askForTemp () {
    let temp = prompt('Write a Celsius temperature')
    
    // if (temp == isNaN(temp)) {
    //     console.log('Error') 
    // } else {
        return temp
    // }
}

function convertTemp(temp) {
    let result = askForTemp()

    result = (result * 1.8) + 32
    console.log('It is ' + result + ' in Fahrenheit');
}

convertTemp()

