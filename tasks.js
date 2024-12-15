// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равны.
function comparison() {
    const num1 = parseInt(prompt("Enter any number: "), 10);
    const num2 = parseInt(prompt("Enter any number: "), 10);

    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    }
}

console.log(comparison());

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial() {
    const number = parseInt(prompt("Enter any number: "), 10);
    let result = 1;
    
    for (let num = 1; num <= number; num++) {
        result *= num;
    }
        
    return result
}
        
console.log(factorial());

// 3. Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.
function combineDigits(num1, num2, num3) {
    return parseInt(`${num1}${num2}${num3}`, 10);
}

const num1 = parseInt(prompt("Enter first number: "), 10);
const num2 = parseInt(prompt("Enter second number: "), 10);
const num3 = parseInt(prompt("Enter third number: "), 10);

console.log(combineDigits(num1, num2, num3));


// 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.
function calculateArea(height, width = null) {
    if (width === null) {
        return height ** 2;
    } else {
        return height * width;
    }
}

const height = parseInt(prompt("Enter height: "), 10);
const widthInput = prompt("Enter width (or leave empty for square): ").trim();

if (widthInput === "") {
    console.log(calculateArea(height));
} else {
    const width = parseInt(widthInput, 10);
    console.log(calculateArea(height, width));
}


// 5. Написать функцию, которая проверяет,
// является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
function perfectNumberCheck() {
    const number = parseInt(prompt("Enter any number: "), 10);
    const dividers = [];

    for (let num = 1; num < number; num++) {
        if (number % num === 0) {
            dividers.push(num);
        }
    }

    const sumOfDividers = dividers.reduce((sum, current) => sum + current, 0);
    if (number === sumOfDividers) {
        return "Great! Perfect number!";
    } else {
        return "Not a perfect number(";
    }
}

console.log(perfectNumberCheck());


// 6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.
function isPerfectNumber(number) {
    const dividers = [];
    for (let num = 1; num < number; num++) {
        if (number % num === 0) {
            dividers.push(num);
        }
    }
    return dividers.reduce((sum, current) => sum + current, 0) === number;
}

function perfectNumbersInRange(start, end) {
    const perfectNumbers = [];
    for (let num = start; num <= end; num++) {
        if (isPerfectNumber(num)) {
            perfectNumbers.push(num);
        }
    }
    return perfectNumbers;
}

const firstNumber = parseInt(prompt("Enter the minimum value: "), 10);
const secondNumber = parseInt(prompt("Enter the maximum value: "), 10);

console.log(perfectNumbersInRange(firstNumber, secondNumber));


// 7. Написать функцию, которая принимает время
// (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00.
function timeShow() {
    const hours = parseInt(prompt("Enter hours: "), 10);
    const minutes = parseInt(prompt("Enter minutes: "), 10);
    const seconds = parseInt(prompt("Enter seconds: "), 10);

    if (hours < 0 || hours >= 24) {
        return "Incorrect value for hours!";
    }
    if (minutes < 0 || minutes >= 60) {
        return "Incorrect value for minutes!";
    }
    if (seconds < 0 || seconds >= 60) {
        return "Incorrect value for seconds!";
    }

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
}

console.log(timeShow());


// 8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.
function secondsShow() {
    const hours = parseInt(prompt("Enter hours: "), 10);
    const minutes = parseInt(prompt("Enter minutes: "), 10);
    const seconds = parseInt(prompt("Enter seconds: "), 10);

    if (hours >= 24 || hours < 0) {
        return "Incorrect value for hours!";
    }
    if (minutes >= 60 || minutes < 0) {
        return "Incorrect value for minutes!";
    }
    if (seconds >= 60 || seconds < 0) {
        return "Incorrect value for seconds!";
    }

    const hoursInSeconds = hours * 60 * 60;
    const minutesInSeconds = minutes * 60;

    return `${String(hoursInSeconds).padStart(2, '0')}:${String(minutesInSeconds).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

console.log(secondsShow());


// 9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

console.log(formatTime(3665));


// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс».
function convertToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function dateDifference(h1, m1, s1, h2, m2, s2) {
    const time1InSeconds = convertToSeconds(h1, m1, s1);
    const time2InSeconds = convertToSeconds(h2, m2, s2);

    const differenceInSeconds = Math.abs(time1InSeconds - time2InSeconds);

    return formatTime(differenceInSeconds);
}

console.log(dateDifference(12, 30, 45, 14, 25, 15)); // "01:54:30"












