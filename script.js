'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll X/Y', window.pageXOffset, window.pageYOffset);
  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + pageYOffset,
  //   behavior: 'smooth',
  // });

  // Mordern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// LECTURE
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/*
//////////////////////////////////////////////
// SELECTING, CREATING, AND DELETING ELEMENTS

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // new way
    // message.parentElement.removeChild(message); // old way
  });

//////////////////////////////////////////////
// STYLES, ATTRIBUTES AND CLASSES

message.style.backgroundColor = '#37383d';
message.style.width = '105%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 20 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributues
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.className);

logo.alt = 'Minimilist Logo';

// Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data-attribute
console.log(logo.dataset.numberVersion);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// Don't do this
// logo.className = 'ahmad';
*/

//////////////////////////////////////////////
// TYPES OF EVENTS AND EVENT HANDLER

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Good! You reading the heading');

  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Good! You reading the heading');
// };
