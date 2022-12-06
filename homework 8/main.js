// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let arr = [];
for (let i = 0; i < 10; i++) {
    let index = i + 1
    arr.push(new User(index, 'user' + index))
}
console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filtered = arr.filter((value) => {
    if (value.id % 2 === 0) {
        return value
    }
})
console.log(filtered);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sorted = arr.sort((a, b) => a.id - b.id) // зростання
// let sorted = arr.sort((a,b) => b.id - a.id) // спадання
console.log(sorted);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {

    constructor(id, name, surname, email, phone, orders) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.orders = orders
    }
}

let newArr = []

newArr.push(new Client(1, 'Vasya', 'Pupkin', 'Vasya@gmail.com', '099111111', ['meat', 'wheel', 'carrot', 'bread']))
newArr.push(new Client(2, 'Petya', 'Petkin', 'Petya@gmail.com', '099222222', ['potato', 'wheel', 'bread']))
newArr.push(new Client(3, 'Olya', 'Olkina', 'Olya@gmail.com', '0993333333', ['milk', 'cheese', 'bread', 'alcohol', 'present']))
newArr.push(new Client(4, 'Vlad', 'Vladkin', 'Vlad@gmail.com', '0994444444', ['steak', 'kitkat', 'bread', 'salt']))
newArr.push(new Client(5, 'Anna', 'Annina', 'Anna@gmail.com', '0995555555', ['generator', 'egs',]))
newArr.push(new Client(6, 'Serhiy', 'Serhiiv', 'Serhiy@gmail.com', '0996666666', ['sugar']))
newArr.push(new Client(7, 'Eugene', 'Euhenov', 'Eugene@gmail.com', '0997777777', ['candy', 'snaps', 'tikTak']))

console.log(newArr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedNew = newArr.sort((a, b) => {
    return a.orders.length - b.orders.length
})
console.log(sortedNew);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, vendor, releaseDate, maxSpeed, engineCap) {
    this.model = model
    this.vendor = vendor
    this.releaseDate = releaseDate
    this.maxSpeed = maxSpeed
    this.engineCap = engineCap

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} MPH`)
    }

    this.info = function () {
        console.log(`
        model: ${this.model}, 
        vendor: ${this.vendor},
        releaseDate: ${this.releaseDate},
        maxSpeed: ${this.maxSpeed},
        engineCap: ${this.engineCap}
`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.releaseDate = newValue
    }

    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let driver = {
    name: 'Gonshchik',
    age: 21
}


let car = new Car('6', 'Mazda', 2012, 320, 3.0)
console.log(car);
let car2 = new Car('x6', 'BMW', 2022, 300, 5.0)
console.log(car2);
car.drive();
car.info();
car.increaseMaxSpeed(200)
console.log(car);
car.changeYear(1999)
car.addDriver(driver)
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CrtCar {

    constructor(model, vendor, releaseDate, maxSpeed, engineCap) {
        this.model = model;
        this.vendor = vendor;
        this.releaseDate = releaseDate;
        this.maxSpeed = maxSpeed;
        this.engineCap = engineCap;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`
        model: ${this.model}, 
        vendor: ${this.vendor},
        releaseDate: ${this.releaseDate},
        maxSpeed: ${this.maxSpeed},
        engineCap: ${this.engineCap}
`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        if (typeof newValue === "number") {
            this.releaseDate = newValue
        }
    }

    addDriver(driver) {
        this.driver = driver
    }

}

let classCar = new CrtCar('Mustang', 'Ford', 2020, 550, 8.0)
classCar.drive()
classCar.info()
classCar.increaseMaxSpeed(23)
classCar.changeYear(2019)
classCar.addDriver(driver)
console.log(classCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name
    this.age = name
    this.footSize = footSize
}
let arrCinderellas = []
arrCinderellas.push(new Cinderella('Anna', 21, 35))
arrCinderellas.push(new Cinderella('Viktoria', 22, 37))
arrCinderellas.push(new Cinderella('Olha', 23, 36))
arrCinderellas.push(new Cinderella('Nadia', 19, 34))
arrCinderellas.push(new Cinderella('Kim', 23, 39))
arrCinderellas.push(new Cinderella('Daryna', 25, 40))
arrCinderellas.push(new Cinderella('Megan', 24, 38))
console.log(arrCinderellas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {

    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let oktenPrince = new Prince('Sasha',25,37)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const oneCind of arrCinderellas) {
    if (oneCind.footSize === oktenPrince.foundShoe) {
        console.log(oneCind);
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let found = arrCinderellas.find((value) => {
    if (value.footSize === oktenPrince.foundShoe){
        return value
    }
})

console.log(found);