// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123,
// 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// const PI = 3.14;
// let i = 16;
// let j = true;
// let k = false;
//
// console.log(a, b, c, d, e, f, g, h, PI, i, j, k);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// a = 'lol';
// b = 'kek';
// c = 'babma';
// d = 444444;
// e = false;
// f = true;
// // PI is const - can't be changed
//
// console.log(a, b, c, d, e, f);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let myName = prompt('What is your name?', '');
// let mySurName = prompt('What is your Surname?', '');
// let myLastName = prompt('What is your Lastname?', '');
// let myAge = +prompt('What is your age?', '');

// console.log(`Greetings ${myName} ${myLastName} ${mySurName}. You're ${myAge} years old`);
// alert(`Greetings ${myName} ${myLastName} ${mySurName}. You're ${myAge} years old`);


// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let contact = myName + mySurName + myLastName + myAge;
// console.log(contact);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let firstNumber = +prompt("first number")
// let secondNumber = +prompt('second number');
// let thirdNumber = +prompt('Third number');

// console.log(firstNumber, secondNumber, thirdNumber);


// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою parseInt.
// Додати їх всі мож собою і результат вивести в консоль.

// let aaa = prompt('number');
// console.log(parseInt(aaa));

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let bbb = parseFloat(prompt('float numb'));
// let ccc = parseFloat(prompt('float numb two'));
// console.log(bbb);
// console.log(ccc);
// let result = bbb + ccc;
// console.log(result);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
// Просумувати їх між собою. Результат вивести в консоль.

// let aa = prompt('fisrt');
// let bb = prompt('two');
// console.log(aa);
// console.log(bb);
// console.log(Math.round(aa) + Math.round(bb));


// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

// let first = Math.round(prompt('first Number'));
// let second = Math.round(prompt('second'));
// console.log(first);
// console.log(second);
//
// console.log(Math.pow(first, second));


//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;


// let ara = 100; let bra = '100'; let cra = true;
// console.log(typeof ara, typeof bra, typeof cra);


// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

// 5 ? 6 -> true // <
// 5 ? 6 -> false // >
// 5 ? 6 -> false // ==
// 5 ? 6 -> false // ===
// 10 ? 10 -> true // ==
// 10 ? 10 -> true == ///
// 10 ? 10 -> false // >
// 10 ? 10 -> false // <
// 10 ? 10 -> false // !==
// 123 ? '123' -> false // ===
// 123 ? '123' -> true // ==


// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); // true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); // false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); // true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false
//
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Hello';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str, str, typeof num, num, typeof flag, flag, typeof txt, txt);


// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

let a1, a2, a3;

a1 = 45 - 11;
console.log(a1);
a2 = 2 + (2 * 5);
console.log(a2);
a3 = 38 + (14 * 2);
console.log(a3);


// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 - 3;

console.log(a6, a7, a8, a9, a10);

//
// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

let height = 23;
let width = 10;

let s = height * width;
console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let PI = 3.141592;
let v = PI * dC * heightC;
console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать
// функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;

let k = Math.pow(n, 2) + Math.pow(m, 2);
console.log(Math.sqrt(k));


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью
// document.write, alert и console.log

// let helloWorld = 'Hello World';
// document.write(helloWorld);
// alert(helloWorld);
// console.log(helloWorld);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert('Романюк\n 21\n programming\n')

//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Who';
let str2 = 'are';
let str3 = 'you?';

let concatenation = `${str1} ${str2} ${str3}`;
document.write(concatenation)


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205 due to string + number concatenation
// document.write(str - a + "<br/>"); // 15 because string is converted to number during '-' operation
// document.write(str * "2" + "<br/>"); // 40 because you can't multiply string so it is converted to number
// document.write(str / 2 + "<br/>"); // 10 ( same situation as in previous example


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") // 3 because it is converted to number first and then due to 3.14 is float number - parseInt converting it to integer
//     parseInt("-7.875") // -7 - same situation
// parseInt("435") // 435
// parseInt("Вася") // NaN because string can't be converted to number in this case


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//--------//Answer//----------
let first1 = +prompt('Enter first one');
let second1 = +prompt('Enter second one');
let resultOfFirst1AndSecond1 = first1 + second1;
alert(resultOfFirst1AndSecond1)

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let name14 = prompt('Enter you name!');
let surname14 = prompt('Enter your surname');
let age14 = prompt('Enter you age');
let result14 = `Good evening ${name14} ${surname14}, my congratulation, you are ${age14}`;
alert(result14);


// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let one = +prompt("Enter first number to compare");
let two = +prompt('Enter second num to compare');
let three = +prompt('Enter third number to compare');

if (one < two && one < three) {
    if (two < three) {
        console.log(one, two, three)
    } else {
        console.log(one, three, two)
    }
} else if (two < one && two < three) {
    if (one < three) {
        console.log(two, one, three)
    } else {
        console.log(two, three, one)
    }
} else if (three < one && three < two) {
    if (one < two) {
        console.log(three, one, two)
    } else {
        console.log(three, two, one);
    }
}


// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

let light = prompt('traffic light?')

if (light === 'green') {
    console.log('go')
} else if (light === 'yellow') {
    console.log('Wait')
} else if (light === 'red') {
    console.log('Stop!')
} else {
    console.log('Do whatever you want!')
}


// 3.
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


let light2 = prompt('traffic light new?')
let isRoadClear = confirm('Is road clear')

if (light2 === 'green') {
    if (isRoadClear) {
        console.log('go')
    } else {
        console.log('You should wait till cars pass through')
    }
} else if (light2 === 'yellow') {
    if (isRoadClear) {
        console.log('Wait')
    } else {
        console.log('too soon, wait')
    }
} else if (light2 === 'red') {
    if (isRoadClear) {
        console.log('Anyway wait')
    } else {
        console.log('Stop and wait')
    }
} else {
    console.log('Do whatever you want!')
}