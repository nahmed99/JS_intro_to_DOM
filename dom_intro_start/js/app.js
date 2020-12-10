// Wait for the DOM to be loaded before running the JS code.

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



})

console.log("Kidda?");