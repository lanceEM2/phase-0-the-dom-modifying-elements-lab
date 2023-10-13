// Write your code here!

// Remove the 'main' element
const main = document.querySelector('main');
main.remove();

// Create a new 'h1' element and set its id and text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Lance is the champion';

// Append the new 'h1' element to the document's body
document.body.appendChild(newHeader);
