// Task 1

// let num = prompt('What\'s your ticket number?')

// function isLucky(num) {
//     let str = normalNum(num)

//     let sum1 = (+str[0]) + (+str[1]) + (+str[2])
//     let sum2 = (+str[3]) + (+str[4]) + (+str[5])

//     return sum1 === sum2
// }

// function normalNum(num) {

//     if (num.length == 5) {
//         num = '0' + num
//     }
//     if (num.length == 4) {
//         num = '00' + num
//     }
//     return num
// }

//     if (isLucky(num)) {
//         alert('Your ticket ' + num + ' is LUCKY!');
//     } else {
//         alert('Your ticket is\'t lucky(')
//     }

    // ----------------------------------------------------------------------
// Task 2


// function convertCelToFar (cels) {
//     return cels * 1.8 + 32;
// }

// function convertTemp() {
//     const cels = +prompt('Write a Celsius temperature');

    // if (typeof cels === 'number'){
    //     const result = convertCelToFar(cels);
    //     console.log(`It is ${ result } in Fahrenheit`);
    // } else{
    //     console.log('Error');
//     }  
// }
// convertTemp();


//---------------------------------------------------------------------------
// Task 4
    
// const l = +prompt('What is the length?'); 
// const w = +prompt('What is the width?');
// const h = +prompt('What is the height?'); 

// function getArea () {  
//     // let officeArea = ((+l * +h) * 2) + ((+w * +h) * 2);
//     const officeArea = 2 * (l + w) * h;
//     return officeArea;
// }

// function jarNum() {
//     const JAR = 16; 

//     const result = getArea() / JAR;
//     console.log(result);
// }
// jarNum();


// Task 5 

// const A1 = +prompt('First golden sand price');
// const A2 = +prompt('Second golden sand price');
// const A3 = +prompt('Third golden sand price');
// const B1 = +prompt('First box size');
// const B2 = +prompt('Second box size');
// const B3 = +prompt('Third box size');

// function firstBoxPrice () {
//     if (B1 < 100 && B1 > 0 && A1 < 100 && A1 > 0 ) {
//         return A1 * B1;
//     } 
//     return;
// }

// function secondBoxPrice () {
//     if (B2 < 100 && B2 > 0 && A2 < 100 && A2 > 0 ) {
//         return A2 * B2;
//     } 
//     return;
// }

// function thirdBoxPrice () {
//     if (B3 < 100 && B3 > 0 && A3 < 100 && A3 > 0 ) {
//         return A3 * B3;
//     } 
//     return;
// }

// function summaryBoxPrice () {
//     const sum1 = firstBoxPrice();
//     const sum2 = secondBoxPrice();
//     const sum3 = thirdBoxPrice();

//     if (isNaN(sum1) || isNaN(sum2) || isNaN(sum3)) {
//         console.log('Uncorrect value');
//     } else {
//     const sumAll = sum1 + sum2 + sum3;
//     console.log(sumAll);
//     }
// }

// summaryBoxPrice();