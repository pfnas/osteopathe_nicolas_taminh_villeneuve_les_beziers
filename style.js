const items = document.querySelectorAll(".card_competence");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;
function slidesuivant() {
  items[count].classList.remove("active");
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("active");
  console.log(count);
}
suivant.addEventListener("click", slidesuivant);
function slideprecedente() {
  items[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  items[count].classList.add("active");
  console.log(count);
}
precedent.addEventListener("click", slideprecedente);


