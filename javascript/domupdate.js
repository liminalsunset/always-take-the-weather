const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const pcontent = document.createElement('p');
content.classList.add('pcontent');
pcontent.textContent = 'This is paragraph content.';
pcontent.style.color = 'red';

const h3content = document.createElement('h3');
content.classList.add('h3content');
h3content.textContent = 'I\'m a blue h3!';
h3content.style.color = 'blue';

const newdiv = document.createElement('div');
content.classList.add('newdiv');
newdiv.style.backgroundColor = 'pink';
newdiv.style.border = ' solid black';

const divh3 = document.createElement('h3');
content.classList.add('divh3');
divh3.textContent = 'I\'m in a div';
divh3.style.color = 'purple';

const divp = document.createElement('p');
content.classList.add('divp');
divp.textContent = 'ME TOO!';
divp.style.color = 'green';

newdiv.appendChild(divh3);
newdiv.appendChild(divp);


container.appendChild(content);
container.appendChild(pcontent);
container.appendChild(h3content);
container.appendChild(newdiv);


