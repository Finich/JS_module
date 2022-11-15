// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectArea(a, b) {
    return console.log(a * b);
}

rectArea(4, 5)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return console.log(Math.PI * (r * r))
}

circleArea(2.5)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h, r) => {
    return console.log(2 * Math.PI * r * (h + r))
}
cylinderArea(4, 2);


// - створити функцію яка приймає масив та виводить кожен його елемент
let myArray = [1, null, true, 'some Name',];

function displayItemOfArray(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

displayItemOfArray(myArray);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('Hello my Friend');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlWith3Li(liText) {
    document.write(`<ul>`)
    document.write(`<li>${liText}`)
    document.write(`<li>${liText}`)
    document.write(`<li>${liText}`)
    document.write(`</ul>`)

}

createUlWith3Li('my list');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlWith3LiTwo(liText, liNumber) {
    document.write(`<ul>`)
    for (let i = 0; i < liNumber; i++) {
        document.write(`<li>${liText}`);
    }
    document.write(`</ul>`)

}

createUlWith3LiTwo('new list', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let newArr = [true, 'something', 42, false, 'ablabla', 3.52]

function createListFromArrayElements(array) {
    document.write(`<ul>`)
    for (const arrayKey of array) {
        document.write(`<li>${arrayKey}`)
    }
    document.write(`</ul>`)
}

createListFromArrayElements(newArr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let ArrayOfObjects = [
    {
        id: 1,
        name: 'somename',
        age: 21
    },
    {
        id: 2,
        name: 'twoname',
        age: 31
    },
    {
        id: 3,
        name: 'threename',
        age: 18
    },
    {
        id: 4,
        name: 'fourname',
        age: 45
    },
]


function returnObjectsFromArray(array) {
    for (let arrayObj of array) {
        document.write(`<div>

           ID: ${arrayObj.id} - Name: ${arrayObj.name} - Age: ${arrayObj.age}
            </div>`)
    }
}

returnObjectsFromArray(ArrayOfObjects);



// - створити функцію яка повертає найменьше число з масиву
let arrayOfNumb = [32, 23, 10, 6, 143, 20];

function returnSmallestValue(array) {
    let minimum = array[0];
    for (const minimumElement of array) {
        if (minimumElement < minimum) {
            minimum = minimumElement;
        }
    }
    return console.log(minimum);
}

returnSmallestValue(arrayOfNumb);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
function sumOfArray(array) {
    let count = 0;
    for (const arrayElement of array) {
        count += arrayElement;
    }
    console.log(count);
}

sumOfArray(arrayOfNumb);