'use strict';

// // Task 1
// const lowerNumber = +prompt('Write a lower number of a range (from 10 to 99)');
// const upperNumber = +prompt('Write a upper number of a range (from 10 to 99)');

// let getRangeOfNumbers = function(lower, upper) {
//     let arr = [];
//     for (let i = 10; i < 100; i++) {
//         arr.push(i);
//     }
//     const index1 = arr.indexOf(lower);
//     const index2 = arr.indexOf(upper);

//     return arr.slice(index1, index2 + 1);
// };
// // getRangeOfNumbers(lowerNumber, upperNumber);

// function getExactNumber() {
//     getRangeOfNumbers(lowerNumber, upperNumber).forEach();

// }

//---------------------------------------------------------------------------
//Test_2 

// Створіть веб-програму, в якій користувач вводить ширину та символ. 
// Вивести в консоль лінію заданої ширини заданим символом


// function paintFigure() {
//     const askWidth = +prompt('Width');
//     const askSymbol = prompt('Symbol');

//     if (isNaN(askWidth)) {
//         +prompt('Uncorrect value of width. Try again');
//     }
    
//     let finalPaint = '';
//     for (let i = 0; i < askWidth; i++) {
//         finalPaint += `${askSymbol}`;
//     }
//     console.log(finalPaint);
// }
// paintFigure();

//---------------------------------------------------------------------------
//Test_2 

function dnaFunc(code) {
    let a = code.split('').map(change());// ['A', 'T', 'T', 'C', 'G']

    return a;
}
console.log(dnaFunc('ATTCG'));

function change(code) {
    for (let i = 0; i < code.length; i++) {
        switch(a) {
            case 'A':
                a[i] = 'T';
                break;
            case 'G':
                a[i] = 'C';
                break;
            case 'T':
                a[i] = 'A';
                break;
            case 'C':
                a[i] = 'G';
                break;
        }  
    }
}