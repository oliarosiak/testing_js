/** Задача 1-1 */
{
    const productName = 'Droid';
    const pricePerItem = 2000;
    console.log('Задача 1:', 'Строка:', productName, 'Число:',pricePerItem); // 'Droid' // 2000
}
/** Задача 1-2 */
{
    let productName = "Droid";
    let pricePerItem = 2000;

    productName = 'Repair droid';
    pricePerItem = 1500; 

    console.log('Задача 2:', 'name:', productName, 'price:', pricePerItem);
}
/** Задача 1-3 */
{
    const topSpeed = 160;
    const distance = 617.54;
    const login = 'mango935';
    const isOnline = true;
    const isAdmin = false;

    console.log('Задача 3:', 'topSpeed', topSpeed, 'distance', distance, 'login', login, 'isOnline', isOnline, 'isAdmin', isAdmin);
}
/** Задача 1-4 */
{
    const pricePerItem = 3500;
    const orderedQuantity = 4;

    const totalPrice = pricePerItem * orderedQuantity;
    console.log('Задача 4:', 'totalPrice:', totalPrice);
}
/** Задача 1-5 */
{
    const productName = "Droid";
    const pricePerItem = 3500;

    const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

    console.log('Задача 5:', 'message:', message);
}
/** Задача 1-6 */
{
    const pricePerDroid = 800;
    const orderedQuantity = 6;
    const deliveryFee = 50;
    const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

    console.log('Задача 6:', 'message:', message);
}
/** Задача 1-7 */
{
    function sayHi() {
        console.log('Задача 7:', 'Hello, this is my first function!');
    }
    
    sayHi();
}
/** Задача 1-8 */
{    
    function add(a, b, c) {
        const result = a + b + c;
        console.log('Задача 8:', `Addition result equals (Результат додавання 3х чисел:) ${result}`);
    }

    add(15, 27, 10);
    //add(10, 20, 30);
    //add(5, 10, 15);
}
/** Задача 1-9 */
{
    function add(a, b, c) {
        const foo = a + b + c;
        return foo;
    }
    console.log('Задача 9:', '15 -', add(2, 5, 8), '52 -', add(15, 27, 10), '60 -', add(10, 20, 30), '30 -', add(5, 10, 15));
}
/** Задача 1-10 */
{
    function makeMessage (name, price) {    
    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
    };
    console.log('Задача 10:', '1 -', makeMessage('Radar', 6150), '2 -', makeMessage('Scanner', 3500));
    console.log('Задача 10:', '3 -', makeMessage('Reactor', 8000), '4 -', makeMessage('Engine', 4070));
}
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
{
    function isNumberInRange(start, end, number) {
        const isInRange = number >= start && number <= end;
        return isInRange;
    }
    console.log('Задача 21:', 'true:', isNumberInRange(10, 30, 17), 'false:', isNumberInRange(20, 50, 76));
}
/** Задача 1-22 */
{
    function checkIfCanAccessContent(subType) {
        const canAccessContent = subType === "pro" || subType === "vip";
        return canAccessContent;    
    }
    console.log('Задача 22:', 'TRUE:', checkIfCanAccessContent("pro"), 'FALSE:', checkIfCanAccessContent("starter"), 'TRUE:', checkIfCanAccessContent("vip"));
}
/** Задача 1-23 */
{
    function isNumberNotInRange(start, end, number) {
        const isInRange = number >= start && number <= end;
        const isNotInRange = !isInRange;
        return isNotInRange;
    }
    console.log('Задача 23:', 'true:', isNumberNotInRange(10, 30, 5), 'false:', isNumberNotInRange(10, 30, 17));
}
/** Задача 1-24*/
{
    function getDiscount(totalSpent) {
        const BASE_DISCOUNT = 0;
        const BRONZE_DISCOUNT = 0.02;
        const SILVER_DISCOUNT = 0.05;
        const GOLD_DISCOUNT = 0.1;
        let discount;
        if (totalSpent >= 50000) {
            discount = GOLD_DISCOUNT;            
        } else if (totalSpent >= 20000 && totalSpent < 50000) {
            discount = SILVER_DISCOUNT;
        } else if (totalSpent >= 5000 && totalSpent < 20000) {
            discount = BRONZE_DISCOUNT;
        } else if (totalSpent < 5000) {
            discount = BASE_DISCOUNT;
        }  
        return discount;
    }
    console.log('Задача 24:', '/ 0.1:', getDiscount(137000), '/ 0.05:', getDiscount(46900), '/ 0.02:',getDiscount(8250), '/ 0:', getDiscount(1300));
}
/** Задача 1-25 */
{
    function checkStorage(available, ordered) {
        let message;
        // Тернарний вираз
        ordered > available ? message = "Not enough goods in stock!" : message = "The order is accepted, our manager will contact you";
        return message;
    }
    console.log('Задача 25:', '/ ok:', checkStorage(100, 50), '/ not ok:', checkStorage(100, 130));
}
/** Задача 1-26 */
{
    function checkPassword(password) {
        const ADMIN_PASSWORD = "jqueryismyjam";
        let message;       
        password === ADMIN_PASSWORD ? message = 'Access is allowed' : message = 'Access denied, wrong password!';
        return message;
    }
    console.log('Задача 26:', '/ OK:', checkPassword("jqueryismyjam"), '/ NOT OK:', checkPassword("angul4r1sl1f3"));
}
/** Задача 1-27 */
{
    function getSubscriptionPrice(type) {
        let price;
        switch (type) { 
            case "starter": 
            price = 0; 
            break;

            case "professional": 
            price = 20; 
            break;

            case "organization": 
            price = 50; 
            break;
        }
        return price;
    }
    console.log('Задача 27:', '/ 0:', getSubscriptionPrice("starter"), '/ 20:', getSubscriptionPrice("professional"), '/ 50:', getSubscriptionPrice("organization"));
}
/** Задача 1-28 */
{
    function checkPassword(password) {
        const ADMIN_PASSWORD = "jqueryismyjam";
        let message;  
        switch (password) {
            case null:
                message = "Canceled by user!";
                break;
            case ADMIN_PASSWORD:
                message = "Welcome!";
                break;
            default:
                message = "Access denied, wrong password!";
        }   
        return message;
    }
    console.log('Задача 28:', '/ wrong:', checkPassword("mangohackzor"), '/ welcome:', checkPassword("jqueryismyjam"), '/ cancel:', checkPassword(null));
}
/** Задача 1-29 */
{   
    function getShippingCost(country) {
        let message;
        const china = 'China';
        const chinaPrice = 100;
        const chile = 'Chile';
        const chilePrice = 250;
        const australia = 'Australia';
        const australiaPrice = 170;
        const jamaica = 'Jamaica';
        const jamaicaPrice = 120;
        switch (country) {
            case china:
                message = `Shipping to ${china} will cost ${chinaPrice} credits`;
                break;
            case chile:
                message = `Shipping to ${chile} will cost ${chilePrice} credits`;
                break;
            case australia:
                message = `Shipping to ${australia} will cost ${australiaPrice} credits`;
                break;
            case jamaica:
                message = `Shipping to ${jamaica} will cost ${jamaicaPrice} credits`;
                break;
            default:
                message = 'Sorry, there is no delivery to your country';
        }
        return message;
    }
    console.log('Задача 29:', '/ 1:', getShippingCost("Australia"), '/ 2 NOT:', getShippingCost("Germany"), '/ 3:', getShippingCost("Jamaica"));
    console.log('Задача 29:', '/ 4:', getShippingCost("China"), '/ 5:', getShippingCost("Chile"), '/ 6 NOT:', getShippingCost("Sweden"));
}
/** Задача 1-30 */
{
    function getNameLength(name) {
        const message = `Name ${name} is ${name.length} characters long`; // Change this line

        return message;
    }
    console.log('Задача 30:', '/ 4:', getNameLength("Poly"), '/ 7:', getNameLength("Harambe"), '/ 11:', getNameLength("Abrakadabra"));
}
/** Задача 1-31 */
{
    const courseTopic = "JavaScript essentials";

    const courseTopicLength = courseTopic.length;
    const firstElement = courseTopic[0];
    const lastElement = courseTopic[courseTopic.length - 1];

    console.log('Задача 31:', '/ 21:', courseTopicLength, '/ J:', firstElement, '/ s:', lastElement);
}
/** Задача 1-32 */
{   
    function getSubstring(string, length) {
        const substring = string.slice(0, length);
        return substring;
    }
    console.log('Задача 32:', '/ "Hello world" :', getSubstring("Hello world", 11), '/ "Hel" :', getSubstring("Hello world", 3), '/ "" :', getSubstring("Hello world", 0));
}
/** Задача 1-33 */
{    
    function formatMessage(message, maxLength) {
        let result;    
        if (message.length <= maxLength) {
            result = message;
        } else if (message.length > maxLength) {
            // let foo = message.slice(0, maxLength);
            // result = `${foo}...`;
            result = `${message.slice(0, maxLength)}...`;
        }
        return result;
    }
    console.log('Задача 33:', '/ all:', formatMessage("Curabitur ligula sapien", 23), '/ ... :', formatMessage("Curabitur ligula sapien", 16));
}
/** Задача 1-34 */
{
    function normalizeInput(input) {
        const normalizedInput = input.toLowerCase(); 
        return normalizedInput;
    }
    console.log('Задача 34:', '/ 1:', normalizeInput("HELLO WORLD"), '/ 2:', normalizeInput("ABabaGALAmaga"));
}
/** Задача 1-35 */
{    
    function checkForName(fullName, name) {
        const result = fullName.includes(name);
        return result;
    }
    console.log('Задача 35:', '/ TRUE:', checkForName("Egor Kolbasov", "Egor"), '/ FALSE:', checkForName("Egor Kolbasov", "egor"));
}
/** Задача 1-36 */
{
    function checkForSpam(message) {
        let result;
        result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
        return result;
    }
    console.log('Задача 36:', '/ FALSE:', checkForSpam("JavaScript weekly newsletter"), '/ TRUE:', checkForSpam("Amazing SalE, only tonight!"));
}