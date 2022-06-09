const body = document.querySelector('body');
const section = document.querySelectorAll('section');
const links = document.querySelectorAll('a');
const light = document.getElementById('light');
const dark = document.getElementById('dark');


console.log('My mark is 120, all done');


light.addEventListener ('click', () => {
  body.style.color = 'var(--color-black)';
  section.forEach(el => {
    el.style.backgroundColor = 'var(--color-white)'});
  dark.classList.remove('active');
  light.classList.add('active');
});
dark.addEventListener ('click', () => {
  body.style.color = 'var(--color-white)';
  section.forEach(el => {
    el.style.backgroundColor = 'var(--color-black)'});
  for (let i = 6; i < links.length; i++){
    links[i].style.color = 'var(--color-white)';
  }
  light.classList.remove('active');
  dark.classList.add('active');
})