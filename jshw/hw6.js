"use strict";


//TASK_1
function decodeMorse(str) {
  const morseCodeTable = {
    "-.-.--": "!",
    ".-..-.": '"',
    "...-..-": "$",
    ".-...": "&",
    ".----.": "'",
    "-.--.": "(",
    "-.--.-": ")",
    ".-.-.": "+",
    "--..--": ",",
    "-....-": "-",
    ".-.-.-": ".",
    "-..-.": "/",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    "..--..": "?",
    ".--.-.": "@",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "..--.-": "_",
    "...---...": "SOS",
  };

  let finalSentence = "";

  str.split("   ").forEach((code) => {
    const letters = code.split(" "); //[[.-..], [---], [...-], [.]], [[-..], [..], [.-], [-.], [.-]]
    finalSentence += " ";

    letters.forEach((letter) => {
      for (let string in morseCodeTable) {
        if (string == letter) {
          finalSentence += morseCodeTable[string];
        }
      }
    });
  });

  return finalSentence.trim();
}

const sentence = ".-.. --- ...- .   -.. .. .- -. .-";

console.log(decodeMorse(sentence));


//TASK_2

const clickerObj = {
    incClick: document.querySelector('.button-inc'),
    decrClick: document.querySelector('.button-decr'),
    result: document.querySelector('.result')
};

clickerObj.incClick.addEventListener('click', clickerInc);
clickerObj.decrClick.addEventListener('click', clickerDecr);

let resultClick = 0;

function clickerInc() {
    resultClick++;
    clickerObj.result.innerHTML = resultClick;
}

function clickerDecr() {
    resultClick--;
    clickerObj.result.innerHTML = resultClick;
}
