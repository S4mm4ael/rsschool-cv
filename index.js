const body = document.querySelector('body');
const section = document.querySelectorAll('section');
const links = document.querySelectorAll('a');

console.log('My mark is 120, all done');

// Theme changer
const light = document.getElementById('light');
const dark = document.getElementById('dark');

light.addEventListener ('click', () => {
  body.style.color = 'var(--color-black)';
  section.forEach(el => {
    el.style.backgroundColor = 'var(--color-white)'});
  for (let i = 6; i < links.length; i++){
    links[i].style.color = 'var(--color-black)';
  };  
  dark.classList.remove('active');
  light.classList.add('active');
});
dark.addEventListener ('click', () => {
  body.style.color = 'var(--color-white)';
  section.forEach(el => {
    el.style.backgroundColor = 'var(--color-black)'});
  for (let i = 6; i < links.length; i++){
    links[i].style.color = 'var(--color-white)';
  };
  light.classList.remove('active');
  dark.classList.add('active');
});

// Language changer 
import i18Obj from './assets/js/translate.js';
const eng = document.getElementById('eng');
const rus= document.getElementById('rus');
const bel = document.getElementById('bel');

function translate(lng) {
  const i18nList = document.querySelectorAll('[data-i18]');
  i18nList.forEach(el => el.textContent = i18Obj[lng][el.dataset.i18]);
};
eng.addEventListener('click', () => translate('eng'));
rus.addEventListener('click', () => translate('rus'));
bel.addEventListener('click', () => translate('bel'));

function changeClass (event) {
  eng.classList.remove('active');
  rus.classList.remove('active');
  bel.classList.remove('active');
  this.classList.add('active');
}

eng.addEventListener('click', changeClass);
rus.addEventListener('click', changeClass);
bel.addEventListener('click', changeClass);

