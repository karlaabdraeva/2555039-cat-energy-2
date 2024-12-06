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
    navigation.classList.add('main-nav--opened');
    navigation.classList.remove('navigation--closed');
  }
});
