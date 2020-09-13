'use strict';

const startbtn = document.querySelector('.lotto_start');
const resetbtn = document.querySelector('.lotto_reset');
const lottolist = document.querySelector('.lotto');

startbtn.addEventListener('click', () => {
  resetbtn.classList.remove('invisible');
  startbtn.classList.add('invisible');
  paintlotto();
});

function getrandom() {
  const number = Math.floor(Math.random() * 50 + 1);
  return number;
}

function paintlotto() {
  for (let i = 1; i < 8; i++) {
    let li = document.createElement('li');
    li.classList.add(`lotto__number_${i}`);
    li.classList.add('lotto__list');
    let num = getrandom();
    li.innerText = num;
    lottolist.appendChild(li);
  }
}

resetbtn.addEventListener('click', () => {
  for (let i = 1; i < 8; i++) {
    let numberli = document.querySelector(`.lotto__number_${i}`);
    numberli.innerText = getrandom();
  }
});
