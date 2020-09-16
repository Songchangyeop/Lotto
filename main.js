'use strict';

const startbtn = document.querySelector('.lotto_start');
const resetbtn = document.querySelector('.lotto_reset');
const lottolist = document.querySelector('.lotto');

// Start 버튼 클릭 시
startbtn.addEventListener('click', () => {
  startbtn.classList.add('invisible');
  resetbtn.classList.remove('invisible');
  lottolist.classList.remove('invisible');
  paintlotto();
});

// 랜덤한 값 리턴함수
function getrandom() {
  const number = Math.floor(Math.random() * 49 + 1);
  return number;
}

// 로또 번호 생성
function paintlotto() {
  for (let i = 1; i < 8; i++) {
    let num_list = document.querySelector(`.lotto__number_${i}`);
    num_list.innerText = getrandom();
  }
}

// Reset 버튼 클릭 시
resetbtn.addEventListener('click', () => {
  lottolist.classList.add('invisible');

  setTimeout(() => {
    lottolist.classList.remove('invisible');
    for (let i = 1; i < 8; i++) {
      let numberli = document.querySelector(`.lotto__number_${i}`);
      numberli.innerText = getrandom();
    }
  }, 500);
});
