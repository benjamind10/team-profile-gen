// Dependency imports
const inquirer = require('inquirer');

// Classes imports
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Global Variables
const team = [];

const newManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of the manager:',
      validate: validate,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter an ID number:',
      validate: input => {
        if (isNaN(input)) {
          console.log('Please enter a valid ID');
          return false;
        } else return true;
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          email
        );
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!');
          return false;
        }
      },
    },
    {
      type: 'confirm',
      name: 'addEmployee',
      message: 'Would you like to add more team members?',
      default: false,
    },
  ]);
};

function validate(arg) {
  if (arg) return true;
  else {
    console.log('Please return a valid input.');
    return false;
  }
}

module.exports = {
  newManager,
};
