// Practice

// // Task 1

let circleArea = prompt('What is the area of the circle?', '');
alert(`The area of the circle is - ${circleArea}`); 

// // // Task 2 

let userPension = prompt('How old are you?', '');
let yearRemaining = 65 - userPension;
let pensionYear = 2022 + yearRemaining;

alert(yearRemaining + ', ' + String(pensionYear));

// // Task 3

let threeSymbNum = prompt('Write down a three-digit number', '');
console.log(threeSymbNum.split('').reverse().join(''));
