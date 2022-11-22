// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hi = 'hello world';
let lor = 'lorem ipsum';
let jsCool = 'javascript is cool';

console.log(hi.length);
console.log(lor.length);
console.log(jsCool.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

hi = hi.toUpperCase(); // перезапис значення на аперкейс
console.log(hi);
// or //
let upLor = lor.toUpperCase() // переданий аперкейс в нову змінну
console.log(upLor);
// or //
console.log(jsCool.toUpperCase()); // вивести зразу аперкейс варіант в консоль


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
hi = hi.toLowerCase(); // перезапис значення на ловеркейс
console.log(hi);
// or //
let lorLow = lor.toLowerCase() // переданий ловеркейс в нову змінну
console.log(lorLow);
// or //
console.log(jsCool.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   '
let cleanStr = str1.trim();
console.log(cleanStr);


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let poem = 'Ревуть воли як ясла повні';
function stringToArray (str) {
    return str.split(' ')
}
console.log(stringToArray(poem));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numArr = [10,8,-7,55,987,-1011,0,1050,0];
let arrToString = numArr.map(function (value,) {
    return value.toString()
})
console.log(arrToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];

const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b)
    } else if (direction === 'descending'){
        return nums.sort((a, b) => b - a)
    }
}
console.log(sortNums(nums,'descending'));
console.log(sortNums(nums,'ascending'));


//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedByMonth = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration)
console.log(sortedByMonth);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesLonger5 = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(coursesLonger5);


//
// описати колоду карт
let allCardSuits = ['spade', 'diamond','heart', 'clubs']
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']
let colors = ['red','black']
let cards = [];

for (const itemSuit of allCardSuits) {
    for (const itemValue of values) {
        if (itemSuit === 'spade' && itemValue !== 'joker' ||  itemSuit === 'clubs' && itemValue !== 'joker') {
            let card = {cardSuit: itemSuit, value: itemValue, color: colors[1]};
            cards.push(card);
        } else if (itemSuit === 'diamond' && itemValue !== 'joker' ||  itemSuit === 'heart' && itemValue !== 'joker') {
            let card = {cardSuit: itemSuit, value: itemValue, color: colors[0]};
            cards.push(card);
        }
    }
}
cards.push({value: 'joker', color: colors[0]});
cards.push({value: 'joker', color: colors[1]});
console.log(cards);


// - знайти піковий туз
let spaceAce = cards.find(card => card.cardSuit === 'clubs' && card.value === 'ace')
console.log(spaceAce);

// - всі шістки
let allSix = cards.filter(card => card.value === '6')
console.log(allSix);

// - всі червоні карти
let allRedCards = cards.filter(card => card.color === 'red')
console.log(allRedCards);

// - всі буби
let allDiamonds = cards.filter(card => card.cardSuit === 'diamond')
console.log(allDiamonds);

// - всі трефи від 9 та більше
let allClubsFromNine = cards.filter(card => card.cardSuit === 'clubs' && (card.value > 8 || card.value.length > 2))
console.log(allClubsFromNine);

//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let packed = cards.reduce((accum, item) => {
    if (item.cardSuit === 'spade') {
         accum.spades.push(item)
    } else if (item.cardSuit === 'diamond') {
        accum.diamonds.push(item)
    } else if (item.cardSuit === 'heart') {
        accum.hearts.push(item)
    } else if (item.cardSuit === 'clubs') {
        accum.clubs.push(item)
    }
    return accum;
}, {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(packed);