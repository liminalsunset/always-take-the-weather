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
newdiv.textContent = 'Test';


container.appendChild(content);
container.appendChild(pcontent);
container.appendChild(h3content);
container.appendChild(newdiv);

