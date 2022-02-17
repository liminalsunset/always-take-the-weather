const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const pcontent = document.createElement('p');
content.classList.add('pcontent');
pcontent.textContent = 'This is paragraph content.';
pcontent.style.color = 'red';
container.appendChild(content);
container.appendChild(pcontent);


