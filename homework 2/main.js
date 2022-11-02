// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 'test', true, -20, 'anotherString', 2.65, 3.14, false, 'nine', 10];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

console.log(array[1], array[2], array[3], array[4]);

for (let prop in array) {
    console.log(array[prop])
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let firstBook = {
    title: 'Harry Potter',
    pageCount: 700,
    genre: 'Fantasy'
}

let secondBook = {
    title: 'Lord of Rings',
    pageCount: 1200,
    genre: 'Adventure'
}

let thirdBook = {
    title: 'A brief History of Time',
    pageCount: 456,
    genre: 'Science'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age

let newFirstBook = {
    title: 'Tom Sawyer',
    pageCount: 834,
    genre: 'Adventure',
    authors: [
        {name: 'Lord Voldemort', age: 56, isAlive: false},
        {name: 'Angelina Jolly', age: 40},
    ]
}

// console.log(newFirstBook.authors);
// console.log(newFirstBook.authors[0].name)
// console.log(newFirstBook.authors[1].age)



let newSecondBook = {
    title: 'JS for dummies',
    pageCount: 1000,
    genre: 'Programing',
    authors: [
        {name: 'Steven Hoking', age: 76, isAlive: false},
        {name: 'Angelina Jolly', age: 40},
    ]
}

let newThirdBook = {
    title: 'Selfish Gene',
    pageCount: 964,
    genre: 'Biology',
    authors: [
        {name: 'Richard Dawkins', age: 56},
        {name: 'Sirius  Black', age: 40, isAlive: false},
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersInfo = [

    {name: 'Billy', username: 'nagibator228', password: 'password1234'},
    {name: 'Stacey', username: 'Stathem200', password: 'pGaSRuscc^!Usryx'},
    {name: 'Finn', username: 'Finlandiya', password: 'I*^%dEBq%LM6IIrU'},
    {name: 'Jasper', username: 'rikititita', password: 'gyJbNESw7Lgw9BRG'},
    {name: 'Oswald', username: 'OSwalder', password: '#JSas4J$y2BEr^DD'},
    {name: 'Kane', username: 'DungeonMaster', password: 'N#DRq)$CQIE%jTAp'},
    {name: 'Rone', username: 'validator', password: 'ak@cc%535xpySpbT'},
    {name: 'Tim', username: 'GodLovesYou', password: '@RqwLq5RVRDtSJ7c'},
    {name: 'Robert', username: 'Roberto', password: '2&I7!RI(GB8VuImK'},
    {name: 'Anna', username: 'Nogotochki_LV', password: '&G(r)pCQ9s)W&qUb'},

]

console.log(usersInfo[0].password);
console.log(usersInfo[1].password);
console.log(usersInfo[2].password);
console.log(usersInfo[3].password);
console.log(usersInfo[4].password, usersInfo[3].password); // inline
console.log(usersInfo[5].password);
console.log(usersInfo[6].password);
console.log(usersInfo[7].password);
console.log(usersInfo[8].password);
console.log(usersInfo[9].password);


// or

function extractValue(arr, prop) {

    return arr.map(item => item[prop]);

}

const extractedPasswords = extractValue(usersInfo, 'password');
console.log(extractedPasswords)

// or

for (let prop in usersInfo) {
    console.log(usersInfo[prop].password)
}