const headerThree = document.querySelector('h3');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.getElementById('gradient');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  headerThree.textContent = body.style.background + ';';
}

// colorOne.addEventListener('input', setGradient); A lot more extensible ( to add more onto it)

// colorTwo.addEventListener('input', setGradient);

/* No need to call a function since the function gets ran with the event */

/* We only want our function to be called once a change has occurred to the input */
