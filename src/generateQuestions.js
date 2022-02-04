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
      validate: input => {
        if (input) return true;
        else {
          console.log('Please enter a name.');
          return false;
        }
      },
    },
  ]);
};

module.exports = {
  newManager,
};
