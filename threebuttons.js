const container = document.querySelector('#container');

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World!');
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.background = 'purple';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
de
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is contained!';

container.appendChild(content);

