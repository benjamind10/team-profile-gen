// Dependency imports
const inquirer = require('inquirer');

// Classes imports
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Global Variables
const team = [];

const newManager = () => {
  return inquirer
    .prompt([
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
        message: "Enter the employee's email.",
        validate: email => {
          valid =
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
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
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number",
        validate: number_input => {
          if (isNaN(number_input)) {
            console.log('Please enter an office number.');
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then(manager_data => {
      const { name, id, email, officeNumber } = manager_data;
      const manager = new Manager(name, id, email, officeNumber);

      team.push(manager);
      console.log(team);
    });
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
