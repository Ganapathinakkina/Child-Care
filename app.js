// get the div element
const myDiv = document.querySelector('#myDiv');

// add a click event listener to the div
myDiv.addEventListener('click', function() {
    const menu = document.querySelector(".nav-links");
  // specify the action to take when the div is clicked
  menu.classList.toggle("nav-active");
  console.log('Div was clicked!');
});