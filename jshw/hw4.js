'use strict';


//---------------------------------------------------------------------------
//Test_2 

// Створіть веб-програму, в якій користувач вводить ширину та символ. 
// Вивести в консоль лінію заданої ширини заданим символом


function paintFigure() {
    const askWidth = +prompt('Width');
    const askSymbol = prompt('Symbol');

    if (isNaN(askWidth)) {
        +prompt('Uncorrect value of width. Try again');
    }
    
    let finalPaint = '';
    for (let i = 0; i < askWidth; i++) {
        finalPaint += `${askSymbol}`;
    }
    console.log(finalPaint);
}
paintFigure();

//---------------------------------------------------------------------------
//Test_3 

function dnaFunc(code) {
    let a = code.split('');// ['A', 'T', 'T', 'C', 'G']

    for (let i = 0; i < code.length; i++) {
        switch(a[i]) {
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
    return a;
}
console.log(dnaFunc('ATTCG'));

