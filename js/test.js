//Задача 32
// includes([1, 2, 3, 4, 5], 17);
// includes([1, 2, 3, 4, 5], 3);
// function includes(array, value) {

//     for (const element of array) {
//         if (element === value) {
//             console.log(true);            
//         }        
//     }
//     console.log(false);
// }


//Задача 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;      
//     break;    
//   }    
// }
// console.log(number);



//Задача 29
// getEvenNumbers(6, 12);
// getEvenNumbers(3, 11);
// function getEvenNumbers(start, end) {
//     const massif = [];
//     let numbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i <= end) {
//             massif.push(i);
//         }
//     }
//     console.log(massif);
//     for (const element of massif) {
//         if (element % 2 === 0) {
//             numbers.push(element);
//         }
//     }    
//     console.log(numbers);  
// }

// function getEvenNumbers(start, end) {
//     let numbers = [];    
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }
//     console.log(numbers);  
// }

//Задача 27
// filterArray([12, 24, 8, 41, 76], 20);
// function filterArray(numbers, value) {  
//     const filteredNumbers = [];
    
//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     const number = numbers[i];
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   }
//    console.log(filteredNumbers);
// }

//Задача 26
//calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// function calculateTotalPrice(order) {
//     let total = 0;    
//     for (const element of order) {
//         total += element;
//     }
//   console.log(total);
// }

//Задача 25
//getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// function getCommonElements(array1, array2) {
//     let massif = [];
//     //console.log(number);
//     for (const array of array1) {
//         if (array2.includes(array)) {
//             massif.push(array);
//         }
//         //console.log(array);
//     }
//     console.log(massif);
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// function getCommonElements(array1, array2) {  
//   let newArray = [];
  
//   for (let i = 0; i <= array1.length; i += 1) {
//     if(array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//     console.log(newArray);
// }

//Задача 24
//checkFruit("plum");
// checkFruit("mandarin");
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit)); // Change this line
// }

//Задача 23
// filterArray([12, 24, 8, 41, 76], 38);
// function filterArray(numbers, value) {   
//     let massif = [];
//     for (const number of numbers) {       
//         if (number > value) {
//             massif.push(number);
//         }
//     }
//     console.log(massif);
// }

//Задача 22
// createArrayOfNumbers(29, 34)
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
    
//   // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }

//   // Change code above this line
//     console.log(numbers);
// }

//Задача 21
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//     let words = string.split(" ");

//     let biggestWord = words[0];

//     for (const word of words) {

//         if (word.length > biggestWord.length) {
//             biggestWord = word;
//         }
//     }
//     console.log(biggestWord);
  
// }

// function findLongestWord(string) {
//     let words = string.split(" ");
//     // console.log(`Масив ${words}`);

//     let longestWord = words[0];
//     // console.log(`Що це ${longestWord}`);
    
//     // console.log(b);

//     for (const word of words) {
//         let a = word.length;
//         let b = longestWord.length;

//         if (a > b) {
//             longestWord = word;            
//         }              
//     }    
//     console.log(longestWord);   
// }

//Задача 20
// calculateTotalPrice([12, 85, 37, 4]);
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     console.log(total);
// }


// const order = [4, 5, 6, 7, 8];
// console.log(`Масив ${order}`);
// function calculateTotalPrice(order) {
//     const a = order[0];
//     console.log(`Змінна ${a}`);
//     const b = order[order.length - 1];
//     console.log(`Змінна ${b}`);
//   let total = 0;
//     for (let i = 0; i <= order.length; i += 1) {
//         total += i;
//     }

//   console.log(total);
// }

//Задача 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruitAll = fruits[i]; // Change this line
//   console.log(fruitAll);
// }

//Задача 18
// calculateTotal(18);
// function calculateTotal(number) { 
//     let sum = 0;
//     for (let i = 1; i <= number; i += 1) {
//         sum += i;        
//     }
//     console.log(sum);
//     // видає сумарний результат, якщо вписати в тіло функції
//     //буде видавати результат 1, 3, 6 (значення для кожного і з розрахунком sum)
// }


//Задача 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// Задача 16
// makeArray(["earth", "mars", "venus"], ["black", "blue", "white"], 8);
// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     console.log(newArray);
//     let result;

//     if (newArray.length > maxLength) {
//         result = newArray.slice(0, maxLength);
//     } else {
//         result = newArray;
//     }
//     console.log(result);

//     // const message = newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
//     // console.log(message);
// }

// Задача 15
// const oldClients = ['Mango', 'Ajax'];
// const newClients = ['Peach', 'Houston'];
// const newestClients = ['Dada', 'Esmi', 'Ozhynka'];
// const allClients = newClients.concat(oldClients, newestClients); // Change this line
// console.log(allClients);

// Побні розв"язки
// function getExtremeElements(array) {
//     const firstNumber = array[0];
//     const lastNumber = array[array.length - 1];
//     const firstLastNumber = [firstNumber, lastNumber];
//     const massege = firstLastNumber.join(" ");
    
//     // console.log(firstNumber);
//     // console.log(lastNumber);

//     console.log(massege);
//     // const deletedArray = array.splice(1, array.length - 2);    
//     // console.log(array);
//     // console.log(deletedArray); 
// }

// getExtremeElements(["earth", "mars", "venus", "pluton", "jupiter", "mercuriy"]);


// function slugify(title) {
//     const titleLower = title.toLowerCase();        
//     console.log(titleLower);

//     const newTitle = titleLower.split(" ");
//     console.log(newTitle);

//     const slugFirst = newTitle.join("-");
//     console.log(slugFirst);
// // варіант 2
//     const slug = title.toLowerCase().split(" ").join("-");
//     console.log(slug);
// }
// slugify("Ten SECRETS of JavaSCRIPT");


// const title = "Ten secrets of JavaScript";
// // let slug = "";
// // const slug = title.toLowerCase();
// function slugify(title) {
//    const slug = title.toLowerCase();
//     console.log(slug);
//     // slugify();
// }

// // console.log(slug);