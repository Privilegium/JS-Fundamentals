"use strict";

//---------------------------------------------------------------------------
//Task_5


function sortNum(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let word of arr) {
    word.split("").forEach((letter) => {
      if (!isNaN(letter)) {
        newArr[letter - 1] = word;
      }
    });
  }
  return newArr;
}
console.log(sortNum("4of Fo1r pe6ople g3ood th5e the2"));


//---------------------------------------------------------------------------
//TASK_6 


const check = [
  {
    Назва: "Мівіна",
    Кількість: 3,
    Вартість: 10,
  },
  {
    Назва: "Йогурт",
    Кількість: 5,
    Вартість: 25,
  },
  {
    Назва: "Кокакола",
    Кількість: 2,
    Вартість: 15,
  },
];

function logCheck(arr) {
  let checkLog = `Ваші покупки:\n\n`;

  for (let object of arr) {
    for (let key in object) {
      switch (key) {
        case "Назва":
          checkLog += `${key}: ${object[key]}\n`;
          break;
        case "Кількість":
          checkLog += `${key}: ${object[key]} шт.\n`;
          break;
        case "Вартість":
          checkLog += `${key}: ${object[key]}грн. за шт.\n\n`;
          break;
      }
    }
  }

  return checkLog;
}

console.log(logCheck(check));

function checkSum(arr) {
  let cash = 0;

  arr.forEach((a) => {
    cash += a["Кількість"] * a["Вартість"];
  });

  return `Сумарна вартість покупки: ${cash} грн.`;
}

console.log(checkSum(check));

function showExp(arr) {
  let allSum = [];

  arr.forEach((a) => {
    allSum.push(a["Кількість"] * a["Вартість"]);
    allSum.sort((a, b) => a - b);
  }); //[30, 30, 125]

  let mostExp = ``;
  arr.forEach((a) => {
    const math = a["Кількість"] * a["Вартість"];
    if (math === allSum[allSum.length - 1]) {
      mostExp += `Найдорожча покупка в чеку - ${a["Назва"]}, сума  - ${math}`;
    }
  });
  return mostExp;
}

console.log(showExp(check));

function getAveragePrice(arr) {
  let sumAmount = 0;
  let sumPrice = 0;

  arr.forEach((a) => {
    sumPrice += a["Кількість"] * a["Вартість"];
    sumAmount += a["Кількість"];
  });

  let averagePrice = sumPrice / sumAmount;
  return `Середня ціна одного товару дорівнює ${Math.floor(
    averagePrice
  )} грн. та ${(averagePrice % 2) * 100} коп.`;
}
console.log(getAveragePrice(check));


//---------------------------------------------------------------------------
//TASK_7 


let defence = 1;

function howMuchHeads() {
    prompt('Write how much head have each dragon(with coma\'s and space)?').split(', ').forEach(a => defence *= a);
    return defence;
}

console.log(howMuchHeads());


//---------------------------------------------------------------------------
//TASK_3


// let board = [
//     [0, 0, 1],  // [-, -, X]
//     [0, 1, 2],  // [-, X, O]
//     [2, 1, 0]   // [O, X, -]
// ];

let a =  [[0, 0, 1], 
         [2, 2, 2],  
         [2, 1, 0]];

function checkBoard(arr) {
    const answers = {
        notfinished: -1,
        winX: 1,
        winO: 2,
        draw: 0
    };

    const verticalMatch = {
        b1: 0,
        b2: 0,
        b3: 0
    };

    for (let array of arr) { //! Ми беремо окремі array
        let sum = 0;
        for (let value of array) { //! Ми беремо окремі значення
            sum += value;

            if (sum === 6) {                        // todo Перевірка горизонтальна
                return answers.winO;                // todo Перевірка горизонтальна
            } else if (sum === 2 && value !== 1) {  // todo Перевірка горизонтальна
                break;                              // todo Перевірка горизонтальна
            } else if (sum === 3) {                 // todo Перевірка горизонтальна
                return answers.winX;                // todo Перевірка горизонтальна
            }
        }
                
        // for (let i = 0; i < 3; i++) {
        //     switch (i) {
        //         case 0:
        //             verticalMatch.b1 += array[i];
        //             break;
        //         case 1:
        //             verticalMatch.b2 += array[i];
        //             break;
        //         case 2:
        //             verticalMatch.b3 += array[i];
        //             break;
        //     }
        // }

        // for (let vertical in verticalMatch) {
        //     if (vertical === 6) {                   // todo Перевірка горизонтальна
        //         return answers.winO;                // todo Перевірка горизонтальна
        //     } else if (vertical === 2 && value !== 1) {  // todo Перевірка горизонтальна
        //         break;                              // todo Перевірка горизонтальна
        //     } else if (vertical === 3) {                 // todo Перевірка горизонтальна
        //         return answers.winX;                // todo Перевірка горизонтальна
        //     }
        // }
    }    
}

console.log(checkBoard(a));