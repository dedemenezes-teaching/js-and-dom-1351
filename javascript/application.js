// NAMING CONVENTION
// file name => lower_snake_case
// variables, functions => lowerCamelCase
// Ex:
// new_function.js
// let name = 'Arrascaeta' (one word variable)
// const firstName = 'Joana' (two word variable)
// (function example variable)
// const addition = (param1, param2) => {
  // return param1 + param2
// }


// ======== DOM MANIPULATION =========

// MANTRA FOR THE DAY! ⤵️
// SELECTING ONE
// document.querySelector('CSS_SELECTOR')
const list = document.querySelector('#players')
console.log(list)

// SELECTING MULTIPLE
// document.querySelectorAll('CSS_SELECTOR')
const winners = document.querySelectorAll('#fifa-wins li')
console.log(winners)

// DOM MANIPUILATIONS
// In order to manipulate something, we must first have it accessible for us and then we can manipulate, right?
// That's why we will always do two steps to manipulate an element
// 1. SELECT THE RIGHT ELEMENT;
// 2. MANIPULATE THE WAY YOU WANT;


// APPEND CONTENT
list.insertAdjacentHTML('beforeend', '<li>Messi</li>')
list.insertAdjacentHTML('beforeend', '<li>Arrascaeta</li>')

// 1. SELECT THE RIGHT ELEMENT;
const winnerList = document.querySelector('#fifa-wins')
// 2. MANIPULATE THE WAY YOU WANT
winnerList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>')


// APPLY STYLING
// We can apply any CSS style through JAvascript
// The property name MUST follow JS naming convention
const element = document.querySelector('li')
element.style.color = 'red'


// ADD/REMOVE CSS CLASS
element.classList.add('red')
element.classList.remove('red')
element.classList.toggle('red')


// READ WRITE INPUT
const input = document.querySelector('#email')
console.log(input.value)
input.value = 'caio@gmail.com'


// EXTRACT TEXT/HTML
const link = document.querySelector('#home');
console.log(link.innerText)
console.log(link.innerHTML)
// link.innerText = 'Le Wagon Rio'
link.innerHTML = 'Le Wagon <em>Rio</em>'
console.log(link.attributes.href.value)
