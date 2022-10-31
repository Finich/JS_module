//  ---------------TASK 1-----------------
//  Створити змінні. Присвоїти кожному з них значення: 'hello','owu',
//  'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let helloString = 'hello';
let bestCourses = 'owu';
let topLevelDomain = 'com';
let bestCountry = 'ua';
let firstNumber = 1;
let decadeNumber = 10;
let minusValue = -999;
let oneTwoThree = 123;

const PI = 3.14;
const MyBIRTHDAYDATE = 16;
const UKRAINEWINNER = true;
const FALSEBOOL = false;

console.log(`${helloString} ${bestCourses}.${topLevelDomain}.${bestCountry}!`);

console.log(helloString);
console.log(bestCourses);
console.log(topLevelDomain);
console.log(bestCountry);

console.log(helloString + ' ' + bestCourses + '.' + topLevelDomain + '.' + bestCountry)

console.log(firstNumber, decadeNumber, minusValue, oneTwoThree);

console.log('constants:', PI, MyBIRTHDAYDATE, UKRAINEWINNER, FALSEBOOL);


// ---------------TASK 2-----------------
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstname, middleName, lastName;
firstname = 'Eugene';
middleName = 'Romaniuk';
lastName = 'Evgeniyovych';

//let person = middleName + ' ' + firstname + ' ' + lastName;
console.log(person = middleName + ' ' + firstname + ' ' + lastName)


// ---------------TASK 3-----------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log((typeof a), a);
console.log((typeof b), b);
console.log((typeof c), c);

// ---------------TASK 4-----------------
// -------------ADDITIONAL---------------
//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let namePrompt = prompt('Please enter your name', '');
let lastNamePrompt = prompt('Please enter your last name', '');
let age = prompt('Please, enter your age', '');


console.log(`Welcome ${namePrompt} ${lastNamePrompt}. You are ${age} years old!!!`);


// some strange JS logic
null > 0 // false
null == 0 // false

null >= 0 //TRUEEEEEEEEEEEEEEEEEEEEEE WTFFFFF