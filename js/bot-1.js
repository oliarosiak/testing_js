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
    add(10, 20, 30);
    add(5, 10, 15);
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

