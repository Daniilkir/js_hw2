let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log("Температура за Цельсієм: " + celsiusTemperature);
console.log("Температура за Фаренгейтом: " + fahrenheitTemperature);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Кількість годин у місяці: " + hoursInMonth);
console.log("Кількість хвилин у місяці: " + minutesInMonth);

let healthLvl = 100;
let energyLvl = 80;
healthLvl -= 20;
energyLvl -= 30;
console.log("Рівень здоров'я: " + healthLvl);
console.log("Рівень енергії: " + energyLvl);

let purchaseAmount = 1000;
let discount = 0.1;
let discountedAmount = purchaseAmount * (1 - discount);
console.log("Сума покупки: $" + purchaseAmount);
console.log("Знижка: " + (discount * 100) + "%");
console.log("Сума зі знижкою: $" + discountedAmount);

let floatingNumber = 3.75;
let roundedNumber = Math.floor(floatingNumber);
console.log("Округлене число: " + roundedNumber);

let numberString = "3.14";
let parsedNumber = parseFloat(numberString);
console.log("Рядок: " + numberString);
console.log("Число десяткове: " + parsedNumber);

let numberstring = "42";
let parsednumber = parseInt(numberString);
console.log("Рядок: " + numberstring);
console.log("Ціле число: " + parsednumber);

let number = 16; 
let square = Math.sqrt(number);
console.log("Число: " + number);
console.log("Квадратний корінь: " + square);

let integerValue = 42;
let stringNumber = "42";
let parsedInteger = parseInt(stringNumber);
let stringInteger = integerValue.toString();
console.log("Результат перетворення в число: " + parsedInteger);
console.log("Результат перетворення в стрінгу: " + stringInteger);