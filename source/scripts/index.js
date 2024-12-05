const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.button-toggle');
const body = document.querySelector('.page__body');

body.classList.remove('nojs');
navigation.classList.remove('navigation--opened');
navigation.classList.add('navigation--closed');

burger.addEventListener('click', ()=> {
  if (navigation.classList.contains('navigation--opened')) {
    burger.classList.remove('button-toggle--opened');
    burger.classList.add('button-toggle--closed');
    navigation.classList.remove('navigation--opened');
    navigation.classList.add('navigation--closed');
  } else {
    burger.classList.add('button-toggle--opened');
    burger.classList.remove('button-toggle--closed');
    navigation.classList.add('navigation--opened');
    navigation.classList.remove('navigation--closed');
  }
});

const demonstration = document.querySelector('.demonstration');
const curtain = demonstration.querySelector('.demonstration__curtain');
const demonstrationStyles = getComputedStyle(demonstration);
let curtainPlaceStart;
let clientX;

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting (event) {
  curtainPlaceStart = Number(demonstrationStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / demonstration.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  demonstration.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}
