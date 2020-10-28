const element = document.createElement('h2');
element.classList.add('text-2xl', 'font-semibold', 'text-blue-600');
const text = document.createTextNode('Hello from Typescript');

element.appendChild(text);

document.querySelector('h1')?.append(element);
