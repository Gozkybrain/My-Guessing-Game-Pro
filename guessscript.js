const playerscore = document.querySelector('.player-score');
const computerscore = document.querySelector('.comp-score');
const playerguess = document.querySelector('.player-number');
const computerguess = document.querySelector('.comp-number');
const gobtn = document.querySelector('.guess-btn');
const input = document.querySelector('.text-input');
const final = document.querySelector('.final-say, #final-say');
const refreshbtn = document.querySelector('#refresh');
const rulesbtn = document.querySelector('.info-btn');
const count = document.querySelector('.count');


//game function
const guessing = () => {
  const randomnum = Math.floor(Math.random() * 10);
  let inputvalue = input.value;

  //player side
  if (randomnum == inputvalue) {
    playerguess.textContent = inputvalue;
    computerguess.textContent = randomnum;
    playerscore.textContent++;
    input.value = '';
    count.textContent++;
    final.textContent = `Cheers! ` + playerguess.textContent + ' is correct.';
    final.classList.remove('error-final-say');

    //computer side
  } else {
    playerguess.textContent = inputvalue;
    computerguess.textContent = randomnum;
    computerscore.textContent++;
    input.value = '';
    count.textContent++;
    final.textContent = `Opps! ` + playerguess.textContent + ' is wrong, the correct answer is ' + computerguess.textContent;
    final.classList.add('error-final-say');
  }
}

//end gane function
function endgame() {
  if (count.textContent == 20) {
    final.textContent = `player scored ${playerscore.textContent} point`;
    input.value = '';
    playerguess.textContent = 00;
    computerguess.textContent = 00;
    playerscore.textContent = 00;
    computerscore.textContent = 00;
    count.textContent = 00;
    if (final.classList.contains('error-final-say')) {
      final.classList.remove('error-final-say')
      alert(`20 counts completed
            Restart`)
    }
  }
}


// eventlisteners
rulesbtn.addEventListener('click', (e) => {

  alert(`If your guess is the same as the computer's guess then, you win... but if your guess is different from the computer's then, you lose... Use the restart button to re-start the game again. Player has 20 guesses per session. Enjoy ! `);
}
)

input.addEventListener('keydown', (e) => {
  e.preventDefault
  if (e.key === 'Enter' && input.value == '') {
    alert('input cannot be empty')
  }
  if (e.key === 'Enter' && input.value.length <= 1) {
    guessing(), endgame()
  }
  if (e.key === 'Enter' && input.value.length >= 1) {
    alert(`input can not be more than one,input a single number between 0-9`)
    input.value = '';
  }
})

gobtn.addEventListener('click', (e) => {
  e.preventDefault
  // using an id instead of alert
  if (input.value == null || input.value == '') {
    document.getElementById("text-input").innerHTML = "Please Enter a Valid Number!";

  }

  else if (input.value.length > 1) {
    alert(`input can not be more than one,input a single number betwwen 0-9`)
    input.value = '';
  }

  else {
    return guessing(), endgame();
  }
})

refreshbtn.addEventListener('click', (e) => {
  e.preventDefault
  input.value = '';
  playerguess.textContent = 00;
  computerguess.textContent = 00;
  playerscore.textContent = 00;
  computerscore.textContent = 00;
  final.textContent = `Ready ?`;
  count.textContent = 00;
  if (final.classList.contains('error-final-say')) {
    final.classList.remove('error-final-say')
  }
})




// MY OWN JS CODE TO ENABLE MY LOADER COMPLETE

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}




// SCRIPTS FOR MY MODAL TO BE COMPLETE
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


