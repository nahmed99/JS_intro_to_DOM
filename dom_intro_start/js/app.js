// Wait for the DOM to be loaded before running the JS code; using DOMContentLoaded...

// Manipulate the h1 tag - this will only change the first one
document.addEventListener('DOMContentLoaded', () => {

    // Using querySelector to 'grab' elements/objects
    // querySelector('#element-by-id')
    // querySelector('.element-by-class')
    // querySelector('html tag')

    /*
    const theH1 = document.querySelector('h1');
    theH1.textContent = "JavaScript say Kidda?";


    const welcomeParagraph = document.querySelector('#welcome-paragraph');
    console.log(welcomeParagraph);
    console.dir(welcomeParagraph);
    */

    // Grabbing the 'li' tag of the '.red' class
    const redLitsItem = document.querySelector('li.red');

    redLitsItem.textContent = "RED!";
    redLitsItem.classList.add('bold'); //refers to an existing class in the CSS, and applies it to the redListItem we have created.


    // Make new DOM elements

    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple'); //applying an existing element

    // To add new DOM element, we need to 'grab' the element we want to append it to
    const listParent = document.querySelector('ul'); //Grabbing the existing ul
    listParent.appendChild(newListItem); // 'Attach' the newly created DOM element to the ul tag.
    


})

console.log("Kidda?");