const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p')
redPara.style.color = 'red'
redPara.textContent = 'Hey I\'m red'

container.appendChild(redPara)

const blueH3 = document.createElement('h3')
blueH3.style.color = 'blue'
blueH3.textContent = "Hey I'm a blue h3"

container.appendChild(blueH3)

const blackPinkDiv = document.createElement('div')
blackPinkDiv.style.backgroundColor = 'pink'
blackPinkDiv.style.border = 'solid 2px black'


const childH1 = document.createElement('h1')
childH1.textContent = "I'm in a div"

blackPinkDiv.appendChild(childH1)

const childP = document.createElement('p')
childP.textContent = "ME TOO!"

blackPinkDiv.appendChild(childP)


container.appendChild(blackPinkDiv)

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

btn2.addEventListener('click', function (e) {
    console.log(e);
});

btn2.addEventListener('click', function (e) {
    console.log(e.target);
});