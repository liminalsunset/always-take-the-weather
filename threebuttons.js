const container = document.querySelector('#container');

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World!');
});

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is contained!';

container.appendChild(content);

