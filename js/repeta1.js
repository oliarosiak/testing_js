{
  /** Модуль 6 - 1 */
  const titleEl = document.createElement('h2');
  titleEl.classList.add('page-title');
  titleEl.textContent = "Hello world";

  //console.log(titleEl);

  /** Спосіб, який придумала я )) */

  // const bodyEl = document.querySelector('body');
  // console.log(bodyEl);
  // bodyEl.prepend(titleEl);

  /** Кращий спосіб - показував Репета */
  document.body.prepend(titleEl);

  const imageEl = document.createElement("img");
  imageEl.classList.add('page-image');
  imageEl.src = 'https://picsum.photos/200/300';
  imageEl.alt = 'рандомна картинка';

  console.log('imageEl:', imageEl);

  const pageTitle = document.querySelector('.page-title');

  pageTitle.appendChild(imageEl)

  //document.body.prepend(imageEl);

  
}

{
  /* Метод window.prompt */
  // let quantity = prompt('Введіть число');
  // quantity = Number(quantity);
  // console.log(quantity);
  // console.log(typeof quantity);

  // /* Метод window.confirm */
  // const massage = 'Продовжити підписку?';
  // const should = confirm(massage);
  // console.log(should);

  // const a = 'Змінна а';
  // console.log(a);

  // const b = 'Змінна б';
  // console.log(b);

  // console.log(a, b);
}

{
  const colors = ['tomato', 'teal', 'orange', 'deeppink'];
  const max = colors.length - 1;
  const min = 0;

  const index = Math.round(Math.random() * (max - min) + min);

  const color = colors[index];

  console.log(color);
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

{
  const button = document.querySelector(".btn");

  button.style.backgroundColor = "tomato";
  button.style.fontSize = "24px";
  button.style.textAlign = "center";
  button.style.borderRadius = '4px';

  console.log(button.style); // inline styles object
}

{
  // Приклад з telegram - Відповідь: 012each
  let disitsArray = [1, 2, 3];
  Array.prototype.each = function () { };
  let result = '';

  for (let disit in disitsArray) {
      result += disit;
  }

  console.log(result);
}

