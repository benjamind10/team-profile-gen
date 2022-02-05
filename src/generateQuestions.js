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
  ]).then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email, officeNumber);

    team.push(manager);

    console.log(`
    **************************
      Added Manager:
        Name: ${name}
        Email: ${email}
        ID: ${id}
        Office Number: ${officeNumber}
    **************************  
    `);
  });
};

const newEmployee = () => {
  console.log(`
  ***********************
    Adding new employee:
  ***********************
  `);

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "Choose your employee's role",
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name of the employee?',
        validate: validate,
      },
      {
        type: 'input',
        name: 'id',
        message: 'Employee ID.',
        validate: validateNum,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Employee email.',
        validate: validateEmail,
      },
      {
        type: 'input',
        name: 'github',
        message: "Employee's github username.",
        when: input => input.role === 'Engineer',
        validate: validate,
      },
      {
        type: 'input',
        name: 'school',
        message: "Intern's school",
        when: input => input.role === 'Intern',
        validate: validate,
      },
      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Add additional employee?',
        default: false,
      },
    ])
    .then(response => {
      const { name } = response;

      console.log(`
    ****************************
      Employee: ${name} added.
    ****************************
    `);

      console.log(response);
    });
};

module.exports = {
  newManager,
  newEmployee,
};
