
{
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // Change code below this line

  const eachElementInFirstIsEven = firstArray.every(number => {
    if (number % 2 === 0) {
      return 1;
    }
    return 0;
  });
  
  console.log(eachElementInFirstIsEven);

  const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 === 1);
  
  console.log(eachElementInFirstIsOdd);

  //const eachElementInSecondIsEven = secondArray.even((value) => value % 2 === 0);
  //const eachElementInSecondIsOdd = secondArray.even((value) => value % 2 === 1);

  //const eachElementInThirdIsEven = thirdArray.even((item) => item % 2 === 0);
  //const eachElementInThirdIsOdd = thirdArray.even((item) => item % 2 === 1);
}


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     for (const pizza of pizzas) {
//       if (pizzaName !== pizza) {
//         onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         return;
//       }
//       makePizza(pizzaName);
//     }    
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);





// Задача 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],  
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }       
//     };
//     this.potions.push(newPotion);
//    },  
//   removePotion(potionName) { 
//     for (let i = 0; i < this.potions.length; i += 1) {
//       let item = this.potions[i];      
//       if (item.name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },  
//   updatePotionName(oldName, newName) {
//     for (const element of this.potions) {
//       if (element.name === oldName) {
//         return element.name = newName;
//       }      
//     }
//     return `Potion ${oldName} is not in inventory!`;   
//   }, 
// };




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
  


//   updatePotionName(oldName, newName) {
//     for (const element of this.potions) {
//       if (element.name === oldName) {
//         console.log(element.name = newName);
//       }
      
//     }
//     console.log("Potion ${oldName} is not in inventory!");   
//   },  
// };
// //console.log(atTheOldToad.getPotions());
// //atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// //console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Abrakadabra", "BlaBlaBla"); // potionName
// //atTheOldToad.updatePotionName("Stone skin", "Abrakadabra"); // potionName
// console.log(atTheOldToad.getPotions());


// Задача 41
  // addPotion(newPotion) {
  //   for (const potion of this.potions) {
  //     if (potion.name === newPotion.name) {
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //     }       
  //   };
  //   this.potions.push(newPotion);
  // },

  // removePotion(potionName) { 
  //   for (let i = 0; i < this.potions.length; i += 1) {
  //     let item = this.potions[i];      
  //       if (item.name === potionName) {
  //         this.potions.splice(i, 1);
  //       }      
  //     console.log(item);
  //     console.log(this.potions.length); 
  //   }
  //   return `Potion ${potionName} is not in inventory!`;
  // },








// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// // Change code below this line
// function findMatches(firstArray, ...otherNumbers) {
//   const matches = []; // Don't change this line
  
//   for (const number of otherNumbers) {
//     if (firstArray.includes(number)) {
//       matches.push(number);
//     }
//   }

//   // Change code above this line
//   console.log(matches);
//   //return matches;
// }

// makeTask({ });
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
  
//   console.log({category, priority, ...data, completed,});

//   // Change code above this line
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
// // Change code below this line
// function calculateMeanTemperature({ 
//     today: { low: todayLow, high: todayHigh }, 
//     tomorrow: {low: tomorrowLow, high: tomorrowHigh}, 
//   }) {
  

//   // Change code above this line
//   //return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   //console.log(firstNumber); // Значение первого аргумента
//   //console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//const temps = [14, -4, 25, 8, 11];

// В консоли будет массив
//console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
//console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
//console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
//console.log(Math.max(...temps)); // 25

//const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
//const copyOfTemps = [...temps];
//console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(3);
// console.log(averageRating); // 8.2

//console.log(books.length);

//for (const book of books) {
  // Объект книги
  //console.log(book);
  // Название
  //console.log(book.title);
  // Автор
  //console.log(book.author);
  // Рейтинг
  //console.log(book.rating);
//}

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
//   console.log(bookNames);
// }



//console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// Задача 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// getAllPropValues("price");
// function getAllPropValues(propName) {
//   // Change code below this line
//     const newMassif = [];

//     for (const product of products) {
//         if (Object.keys(product).includes(propName)) {
//            newMassif.push(product[propName]);
//         };
//     };
//     console.log(newMassif); 
//   // Change code above this line
// }


// Задача 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// getProductPrice("Grip");
// function getProductPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             console.log(product.price);            
//         }
//     };
//     console.log(null);
// }
//

//Задача 14
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// function countProps(object) {
//   // Change code below this line
   
//     const keys = Object.keys(object);
//      let propCount = keys.length;
   
//     console.log(propCount);
// console.log(keys);
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

  //return propCount;
    //console.log(propCount);
  // Change code above this line
//}

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// function countProps(object) {
//     console.log(object);
//   let propCount = 0;
//   // Change code below this line 
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//       }
//   }  
 
//   // Change code above this line
//     console.log(propCount);
//   //return propCount;
// }

