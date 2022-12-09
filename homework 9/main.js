// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// for(const member of simpsons) {
//
//     let obj = document.createElement('div');
//     obj.classList.add('member')
//     document.body.appendChild(obj)
//
//     let info = document.createElement('div');
//     info.innerHTML = `${member.name} ${member.surname}, Age: ${member.age}`
//     obj.appendChild(info)
//
//     let photo = document.createElement(`img`)
//     photo.src = `${member.photo}`
//     obj.appendChild(photo)
//
//     let description = document.createElement('div')
//     description.innerHTML = `${member.info}`
//     obj.appendChild(description)
//
// }
//
// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// let wrap = document.createElement('div');
// wrap.classList.add('wrap')
// document.body.appendChild(wrap)
// let wrapElem = document.getElementsByClassName('wrap')[0]
//
// for (let item of coursesArray) {
//     let title = document.createElement('div')
//     title.classList.add('title')
//     wrapElem.appendChild(title)
//     title.innerHTML = `${item.title}`
//
//     let timeSpend = document.createElement('div',)
//     timeSpend.classList.add('coursesMAndH');
//     title.appendChild(timeSpend)
//     timeSpend.innerHTML = `Months: ${item.monthDuration}, Hours:${item.hourDuration}`
//
//     let modules = document.createElement('ul')
//     modules.classList.add('modList');
//     wrapElem.appendChild(modules)
//
//     for (const module of item.modules) {
//         let li = document.createElement('li')
//         modules.appendChild(li)
//         li.innerHTML = `${module}`
//     }
//
// }


// ------------------
//
//
//     - створити блок,
// let div = document.createElement('div');
// //     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'silver'
// div.style.color = 'red'
// // - додати цей блок в body.
// document.body.appendChild(div)
// div.innerHTML = 'Hello'
// - клонувати його повністю, та додати клон в body.
// let clone = div.cloneNode(true)
// document.body.appendChild(clone)

// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу
// масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// template1.html contains the resolution for this one


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let newDiv = document.createElement('div')
// document.body.appendChild(newDiv)
//
// for (const element of coursesAndDurationArray) {
//     let newLi = document.createElement('li')
//     newDiv.appendChild(newLi)
//     newLi.innerHTML = `${element.title} , ${element.monthDuration}`
// }


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.
// let divItem = document.createElement('div');
// divItem.classList.add('item')
// document.body.appendChild(divItem)
//
// for (const element of coursesAndDurationArray) {
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     divItem.appendChild(h1)
//     h1.innerHTML = `${element.title}`
//
//     let p = document.createElement('p')
//     p.classList.add('description')
//     divItem.appendChild(p)
//     p.innerHTML = `${element.monthDuration}`
// }


// -----------
//
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть
// так, щоб при натисканні на кнопку зникав елемент з id="text".
// let paragElem = document.createElement('p');
// paragElem.innerText = 'Some Text'
// paragElem.setAttribute('id', 'text')
//
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'Click here'
//
// buttonElement.onclick = () => {
//     paragElem.style.display = 'none'
// }
// document.body.append(paragElem, buttonElement)


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// document.body.appendChild(form)
//
// let input = document.createElement('input');
// form.append(input)
// input.setAttribute('placeholder', 'Enter your age')
//
// let button = document.createElement('button')
// button.innerText = 'Submit'
// form.appendChild(button)
//
// form.onsubmit = (e) => {
//     e.preventDefault()
//     if (input.value > 0 && input.value < 18 ) {
//         alert('baby')
//     } else if (input.value > 18) {
//         alert('Nice one')
//     } else {
//         console.log('incorrect input');
//     }
// }


//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий
// - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let firstInp = document.createElement('input');
// let secondInp = document.createElement('input');
// let thirdInp = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Calculate'
//
//
// document.body.append(firstInp, secondInp, thirdInp, button,)
//
// button.onclick = () => {
//     let row = firstInp.value
//     let column = secondInp.value
//     let content = thirdInp.value
//
//     let createTable = (rows, columns, text) => {
//         let table = document.createElement('table');
//         document.body.append(table)
//
//         for (let i = 0; i < rows; i++) {
//             let singRow = document.createElement('tr')
//             table.append(singRow)
//
//             for (let j = 0; j < columns; j++) {
//                 let singColumn = document.createElement('td')
//                 table.append(singColumn)
//                 singColumn.innerText = `${text}`
//                 singRow.append(singColumn)
//             }
//         }
//     }
//     createTable(row,column,content)
// }
