// - Є змінна x, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при x, що дорівнює 1, 0, -3


let x = 1;

if (x !== 0) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 1;

if (time >= 0 && time <= 15) {
    console.log('First quoter')
} else if (time > 15 && time <= 30) {
    console.log('Second quoter')
} else if (time > 30 && time <= 45) {
    console.log('Third quoter')
} else if (time > 45 && time <= 59) {
    console.log('Fourth quoter')
} else {
    console.log('Incorrect time')
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;

day >= 0 && day <= 10 ? console.log('first decade') : day > 10 && day <= 20 ? console.log('second decade')
    : day > 20 && day <= 31 ? console.log('third decade') : console.log('incorrect date')

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt('What is the day of week?', '');

switch (dayOfWeek) {
    case 1:
        console.log('Okten lecture 8PM');
        break;
    case 2:
        console.log('Prepare for practice lesson');
        console.log('lesson 8 PM');
        break;
    case 3:
        console.log('Okten lecture Wednesday');
        break;
    case 4:
        console.log('Prepare for second practice lesson');
        console.log('Be ready at 8 PM');
        break;
    case 5:
        console.log('Consultation');
        break;
    case 6:
    case 7:
        console.log('chilling and vibing')
        break;
    default:
        console.log('Please enter valid number (1-7)')
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second Number');

firstNum > secondNum ? console.log(firstNum) : firstNum < secondNum ? console.log(secondNum) : console.log('Numbers are equal')


// - є змінна a, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної a являється falsy (хибноподыбне, тобто кастується до false)

let a = prompt('enter value for "a" variable') || 'default';
console.log(a);

// or

a === false ? a = 'default': a ;
console.log(a);
