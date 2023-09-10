'use strict';

let seatSelected = 0;
let total = 0;
let price = 0;

const moviePriceEl = document.getElementById('movie-price');
const seatEl = document.querySelectorAll(
  '.seats-container .seats:not(.occupied)'
);

//innerTEXT elements
const seatCount = document.getElementById('seat-count');
const priceTotalEl = document.getElementById('total-price');

//functions
function init() {
  price = moviePriceEl.value;
  seatCount = 0;
  total = price * seatCount;

  seatCount.innerText = seatCount;
  priceTotalEl.innerText = `$ ${total}`;
}

moviePriceEl.addEventListener('change', function () {
  price = this.value;
  total = price * seatSelected;
  priceTotalEl.innerText = `$ ${total}`;
});

for (let i = 0; i < seatEl.length; i++) {
  seatEl[i].addEventListener('click', (event) => {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }

    seatSelected = document.querySelectorAll(
      '.seats-container .seats.selected '
    ).length;

    seatCount.innerText = seatSelected;
    total = price * seatSelected;
    priceTotalEl.innerText = `$ ${total}`;
  });
}

init();
