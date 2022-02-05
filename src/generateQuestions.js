// Dependency imports
const inquirer = require('inquirer');
const {
  validate,
  validateNum,
  validateEmail,
} = require('../utils/helperFunctions');

// Classes imports
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Global Variables
const team = [];
const prompt = inquirer.prompt;

const newManager = () => {
  return prompt([
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
      validate: validateNum,
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the employee's email:",
      validate: validateEmail,
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the manager's office number",
      validate: validateNum,
    },
  ]).then(manager_data => {
    const { name, id, email, officeNumber } = manager_data;
    const manager = new Manager(name, id, email, officeNumber);

    team.push(manager);
    console.log(team);
  });
};

module.exports = {
  newManager,
};
