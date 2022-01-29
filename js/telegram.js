{
  // Відповідь: 012each
  let disitsArray = [1, 2, 3];
  Array.prototype.each = function () { };
  let result = '';
  for (let disit in disitsArray) {
      result += disit;
  }
  console.log(result);
}

{
  /**
   *  Приклад з telegram. Результат 4 і 7, 10
  */

  let count = 1;
  function counter() {
    count = count + 3;
    return count;
  }

  console.log(counter()); //4
  console.log(counter()); //7
  console.log(counter()); //10
}