/*
let моёИмя = "Дмитрий";
let мойВозраст = 25;
let люблюПрограммирование = true;

console.log(моёИмя);
console.log(мойВозраст);
console.log(люблюПрограммирование);

let энергия = 100;
console.log(энергия);

энергия = 50;
console.log(энергия);

let меняЗовут = "Дмитрий";
let мойВозраст = 25;
let яЛюблюПисатьНа = "JavaScript";

console.log(меняЗовут);
console.log(мойВозраст);
console.log(яЛюблюПисатьНа);


let яблоки = 5;
let груши = 3;
let всегоФруктов = яблоки + груши;
console.log(всегоФруктов);

let деньги = 1000;
let потратил = 250;
let осталось = деньги - потратил;
console.log(осталось);

let цена = 150;
let количество = 4;
let общаяСтоимость = цена * количество;
console.log(общаяСтоимость);

let a = 10;
let b = 20;
let результат = (a + b) * 2;
console.log(результат);

let a = 50;
let b = 30;
let сумму = a + b;
console.log(сумму);

let товар = 299;
let нужноПродать = 5;
let myCash = товар * нужноПродать;
console.log(myCash);

let meMoney = 5000;
let ibolna = 1500;
let meMoneyEnd = meMoney - ibolna;
console.log(meMoneyEnd);

let temperature = -10;

if (temperature < 0) {
    console.log("На улице холодно! Надень пальто");
} 

let years = 18;
if (years >= 18) {
   console.log("Ты можешь купить алкоголь");
}

let money = 200;
let price = 150;

if (money >= price) {
   console.log("Ты можешь купить товар");
} else {
   console.log("У тебя не хватает денег");
}

let grade = 85;

if (grade >= 90) {
    console.log("Ты отличник");
} else if (grade >= 70) {
   console.log("Ты хорошист");
} else {
   console.log("Ты не сдал экзамен");
}

let age = 20;

if (age < 13) {
   console.log("Ты ребенок");
} else if (age >=13){
   console.log("Ты подросток");
}

grade = 5;

if (grade >= 4) {
   console.log("Good job!");
} else {
   console.log("Try again!");
}

let num = 50;
let num2 = 100;

if (num > num2) {
   console.log("num is greater than num2");
} else if (num < num2) {
   console.log("num is less than num2");
} else {
   console.log("num is equal to num2");
}
*/

//for (let i = 1; i <=100; i++) {
  //  console.log(i);
//}

//let число = 5;

//for (let b = 1; b <= 10; b++) {
//    let результат = число * b;
//    console.log(`${число} * ${b} = ${результат}`);
//}

//let sum = 0;

//for (let n = 1; n <= 5; n++) {
//    sum = sum + n;
//}
//console.log(sum);

//let sum = 0;

//while (sum < 5) {
  //  console.log(sum);
  //  sum++;
//}

//for (let i = 1; i <=10; i++) {
   //console.log(i);
//}
//let free = 3;
//for (let b = 1; b <=10; b++){
//   let result = free * b;
//   console.log(`3 * ${b} = ${result}`);
//}

//let nll = 0;

//for (let i = 1; i <= 10; i++) {
   //nll = nll + i;
//}
//console.log(nll);

//function multiply(x, y) {
   //console.log(x * y);  // выведет 28 в консоль
//}

//let число = multiply(7, 4);
//console.log(число);

/*function name(meName) {
   console.log(`${meName} это твое имя`);
}

name("крутой программист");
name("программист");
name("плохой программист");*/

/*function getAge(Age) {
   return (2026 - Age);
}

getAge(2000);*/

//function price(money, clock) {
  // return money * clock;
//}

//let vasya =price(100, 10);
//let petya = price(200, 20);
//console.log(vasya, petya);

//price(100,2);
//console.log(price(100,2));



/*const laptop = {
   brand: "Lenovo",
   model: "ThinkPad",
   price: 1000,
   color: "black",
   weight: 1.5,
   size: 13.3,
   battery: 5000,
   info: function() {
    return `This is ${this.brand} ${this.model} laptop`;
   }
};
console.log(laptop.info());


const music = {
   name: "trinadcat carat",
   artist: "trinadcat",
   dateOpen: "2026-04-13",
   time: "3:00",
   album: "trinadcat carat",
   infoMusick: function() {
    return `This is ${this.name} by ${this.artist} on ${this.dateOpen} at ${this.time} in the album ${this.album}`;
   }
};
console.log(music.infoMusick());

const user = {
   name: "john",
   age: 20,
   email: "josh@example.com",
   city: "New York",
   password: "123456",
   isActive: true,
   getStatus: function() {
      return this.isActive ? "Active" : "Inactive";
   }
};
console.log(user.getStatus());*/

/*const cinema = [
  { name: "astral", years: 2025, rating: 8.5 },
  { name: "halk", years: 2000, rating: 7.5 },
  { name: "spider-man", years: 2026, rating: 8.0 }
];

cinema.push({ name: "iron man", years: 2008, rating: 8.0 });
console.log("===Все фильмы===");
cinema.forEach(function(movie) {
   console.log(`${movie.name} was released in ${this.years} and has a rating of ${this.rating}`);
});

const deleted = cinema.pop();
console.log(`\nУдален фильм: ${deleted.name}`);

console.log("===Оставшиеся фильмы===");
cinema.forEach(function(movie) {
   console.log(`${movie.name} was released in ${movie.years} and has a rating of ${movie.rating}`);
});


const shopping = ["apple", "banana", "cherry"];

shopping.push("orange");
shopping.push("pineapple");
console.log("===все продукты===");
shopping.forEach(function(fruit) {
console.log(fruit);
});
const delet = shopping.shift();
console.log(`\nУдален продукт: ${delet}`);

console.log("===Оставшиеся продукты===");
shopping.forEach(function(fruit) {
console.log(fruit);
});


const user = [
   { name: "John", age: 20, email: "john@example.com", isActive: true},
   { name: "Jane", age: 21, email: "jane@example.com", isActive: true},
   { name: "Jim", age: 22, email: "jim@example.com", isActive: false},
];

user.push({ name: "Jill", age: 23, email: "jill@example.com", isActive: true});
console.log("===все пользователи===");
user.forEach(function(user) {
   console.log(`${user.name} is ${user.age} years old ${user.isActive ? "active" : "inactive"}`);
});
console.log("\n===только активные пользователи===");
user.forEach(function(activeUser) {
   if (activeUser.isActive === true) {
      console.log(`${activeUser.name} is ${activeUser.age} years old ${activeUser.isActive ? "active" : "inactive"}`);
   }
});
console.log ("\n===только неактивные пользователи===");
user.forEach(function(inactiveUser) {
if (inactiveUser.isActive === false) {
   console.log(`${inactiveUser.name} ${inactiveUser.isActive? "активен" : "неактивен"}`);
}
}); */


/*function outer() {

   let count = 0;
 
   function inner() {
     count = count + 1;
     console.log(count);
   }
 
   return inner;
 }
 
 const counter = outer();
 
 counter(); // ???
 counter(); // ???
 counter(); 

 function похвали(имя) {
   console.log(`красавчик, ${имя}`)
   }
   похвали("Дима");

   function сложи(a, b) {
      return a+b;
      }
      console.log(1,4);*/

      /*function count(price, procent, name) {
         let скидка = price * procent / 100;
         let итого = price - скидка;        // ← добавь это
         return `${name}, твоя цена: ${итого}`;  // ← вместо ??? подставь итого
       }
       console.log(count(100, 10, "Дима"));*/

     /*  function age(возраст) {
         if ( возраст >= 18)  {
            return "Ты можешь купить алкоголь";
           }  else 
            return "ты еще пиздюк";
}
console.log(age(17));

function sayHello() {
   return "Привет!";
 }
 
 sayHello();*/

 /*function createUser(name) {
   let balance = 0;
   return {
      deposit(amount) {
      balance = balance + amount;
      },
      getBalance() {
         return balance;
   },
      withdraw(amount) {
         if(balance < amount) {
            console.log("Недостаточно средств");
         } else {
         balance = balance - amount;
   }
}
 };
   }
 const user = createUser ("Дмитрий");
 user.deposit(1000);
 user.deposit(500);
 user.withdraw(2200);
 const money = (user.getBalance());
 console.log(`ваш баланс: ${money}`);*/



 /*function CreateUser(name) {
   let balance = 0;
   return {
      deposit(amount) {
         balance = balance + amount;
      },
      getbalance() {
         return balance;
      },
      withdraw(amount) {
         if(balance < amount) {
            console.log("недостаточно средств");
         } else {
            balance = balance - amount;
         }
      }
   }
 };
const user = CreateUser("дмитрий");
user.deposit(5000);
user.withdraw(2000);
const money = user.getbalance();
console.log(money);*/
