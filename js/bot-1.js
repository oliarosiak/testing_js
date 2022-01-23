// /** Задача 1-1 */
// {
//     const productName = 'Droid';
//     const pricePerItem = 2000;
//     console.log('Задача 1:', 'Строка:', productName, 'Число:',pricePerItem); // 'Droid' // 2000
// }
// /** Задача 1-2 */
// {
//     let productName = "Droid";
//     let pricePerItem = 2000;

//     productName = 'Repair droid';
//     pricePerItem = 1500; 

//     console.log('Задача 2:', 'name:', productName, 'price:', pricePerItem);
// }
// /** Задача 1-3 */
// {
//     const topSpeed = 160;
//     const distance = 617.54;
//     const login = 'mango935';
//     const isOnline = true;
//     const isAdmin = false;

//     console.log('Задача 3:', 'topSpeed', topSpeed, 'distance', distance, 'login', login, 'isOnline', isOnline, 'isAdmin', isAdmin);
// }
// /** Задача 1-4 */
// {
//     const pricePerItem = 3500;
//     const orderedQuantity = 4;

//     const totalPrice = pricePerItem * orderedQuantity;
//     console.log('Задача 4:', 'totalPrice:', totalPrice);
// }
// /** Задача 1-5 */
// {
//     const productName = "Droid";
//     const pricePerItem = 3500;

//     const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//     console.log('Задача 5:', 'message:', message);
// }
// /** Задача 1-6 */
// {
//     const pricePerDroid = 800;
//     const orderedQuantity = 6;
//     const deliveryFee = 50;
//     const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//     console.log('Задача 6:', 'message:', message);
// }
// /** Задача 1-7 */
// {
//     function sayHi() {
//         console.log('Задача 7:', 'Hello, this is my first function!');
//     }
    
//     sayHi();
// }
// /** Задача 1-8 */
// {    
//     function add(a, b, c) {
//         const result = a + b + c;
//         console.log('Задача 8:', `Addition result equals (Результат додавання 3х чисел:) ${result}`);
//     }

//     add(15, 27, 10);
//     add(10, 20, 30);
//     add(5, 10, 15);
// }
// /** Задача 1-9 */
// {
//     function add(a, b, c) {
//         const foo = a + b + c;
//         return foo;
//     }
//     console.log('Задача 9:', '15 -', add(2, 5, 8), '52 -', add(15, 27, 10), '60 -', add(10, 20, 30), '30 -', add(5, 10, 15));
// }
// /** Задача 1-10 */
// {
//     function makeMessage (name, price) {    
//     const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
//     };
//     console.log('Задача 10:', '1 -', makeMessage('Radar', 6150), '2 -', makeMessage('Scanner', 3500));
//     console.log('Задача 10:', '3 -', makeMessage('Reactor', 8000), '4 -', makeMessage('Engine', 4070));
// }
/** Задача 1-11 */
{
    function calculateTotalPrice (orderedQuantity, pricePerItem) {
        const totalPrice = orderedQuantity * pricePerItem;
        return totalPrice;
    };
    console.log('Задача 11:', '100 i 5:', calculateTotalPrice(5, 100), '3 i 400:', calculateTotalPrice(3, 400));
}
/** Задача 1-12 */
{
    function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
        const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

        const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
        return message;
    }
    console.log('Задача 12:', '4 x 300 i 100:', makeOrderMessage(4, 300, 100));
}
/** Задача 1-13 */
{
    function isAdult(age) { 
        const passed = age >= 18;
        return passed;
    }
    console.log('Задача 13:', 'age 20:', isAdult(20), 'age 14:', isAdult(14));
}
/** Задача 1-14 */
{
    function isValidPassword(password) {
        const SAVED_PASSWORD = 'jqueryismyjam';       
        const isMatch = password === SAVED_PASSWORD;       
        return isMatch;
    }
    console.log('Задача 14:', 'valid password:', isValidPassword("jqueryismyjam"), 'invalid password:', isValidPassword("mangodab3st"));
}
/** Задача 1-15 */
{
    function checkAge(age) {
        let message;
        if (age >= 18) { 
            message = `Your age is ${age} - you are an adult =)`;
        } else {
            message = `Your age is ${age} - you are a minor =(`;
        }
        return message;
    }
    console.log('Задача 15:', 'age 20:', checkAge(20), 'age 14:', checkAge(14));
}
/** Задача 1-16 */
{
    function checkStorage(available, ordered) {
        let message;
        if (ordered > available) {
            message = `You ordered ${ordered}. Sorry, it's not enough goods in stock!`
        } else {
            message = `Okey! Your order ${ordered} is processed, our manager will contact you.`
        }
        return message;
    }
    console.log('Задача 16:', '200 i 150, ok:', checkStorage(200, 150), '150 i 180, not ok:', checkStorage(150, 180));
}
/** Задача 1-17 */
{
    let a = 5;
    let b = 10;
    let c = 15;
    let d = 20;
    // Комбинированный оператор присвоения
    a += 2;
    b -= 4;
    c *= 3;
    d /= 10;
    console.log('Задача 17:', 'a', a, 'b', b, 'c', c, 'd', d);
}
/** Задача 1-18 */
{
    function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {        
        let message;
        const totalPrice = pricePerDroid * orderedQuantity;
        if (totalPrice > customerCredits) {
            message = `Total price - ${totalPrice}, you have ${customerCredits}. Sorry, but insufficient funds!`
        } else {
            message = `You ordered ${orderedQuantity} droids for total price ${totalPrice}, you have ${customerCredits - totalPrice} credits left`
        }       
        return message;
    }
    console.log('Задача 18:', '3000 i 5, $23000:', makeTransaction(3000, 5, 23000));
    console.log('Задача 18:', '2000 i 8, $10000:', makeTransaction(2000, 8, 10000));
}
/** Задача 1-19 */
{
    function checkPassword(password) {
        const ADMIN_PASSWORD = 'jqueryismyjam';
        let message;
        if (password === null) {
            message =  'Canceled by user!';
        } else if (password === ADMIN_PASSWORD) {
            message = 'Welcome!';
        } else {
            message = 'Access denied, wrong password!';
        }
        return message;
    }
    console.log('Задача 19:', 'null:', checkPassword(null), 'invalid password:', checkPassword("polyhax"), 'admin password:', checkPassword("jqueryismyjam"));
}
/** Задача 1-20 */
{
    function checkStorage(available, ordered) {
        let message;
        if (ordered === 0) {
            message = `Your order - ${ordered}. There are no products in the order!`;
        } else if (ordered > available) {
            message = `Your order - ${ordered}, is too large, there are not enough items in stock!`;
        } else {
            message = `The order ${ordered} is accepted, our manager will contact you!`;
        }
        return message;
    }
    console.log('Задача 20:', 'ok:', checkStorage(100, 50), 'null:', checkStorage(70, 0), 'to large:', checkStorage(100, 130));
}
/** Задача 1-21 */
/** Задача 1-22 */
