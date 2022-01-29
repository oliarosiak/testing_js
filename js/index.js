const titleEl = document.createElement('h2');
titleEl.classList.add('page-title');
titleEl.textContent = "My homework page! =)";  
document.body.prepend(titleEl);

const imageEl = document.createElement("img");
imageEl.classList.add('page-image');
imageEl.src = 'https://picsum.photos/600/200'; 
imageEl.alt = 'рандомна картинка';

const pageTitle = document.querySelector('.page-title');
pageTitle.appendChild(imageEl);  