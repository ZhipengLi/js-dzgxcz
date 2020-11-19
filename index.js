// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var person = {
  firstname:'unknown',
  lastname:'unknown',
  getFullName:function(){
    return this.firstname+ this.lastname;
  }
};
var jane = {
  firstname:'jane'
};
jane.__proto__ = person;
console.log(jane.getFullName());