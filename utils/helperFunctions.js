// Import dependencies
const fs = require('fs');

// Helper functions to validate the inquirer
function validate(arg) {
  if (arg) return true;
  else {
    console.log('Please return a valid input.');
    return false;
  }
}

function validateNum(arg) {
  if (isNaN(arg)) {
    console.log('Please enter a number.');
    return false;
  } else return true;
}

function validateEmail(email) {
  valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (valid) return true;
  else {
    console.log('Please enter an email.');
    return false;
  }
}

function writeFile(data) {
  fs.writeFile('./dist/index.html', data, error => {
    error
      ? console.log(error)
      : console.log('Your HTML file has been succesfully generated.');
  });
}

// Functions to help the cards render
function renderIcon(role) {
  if (role === 'Manager') return `class="fas fa-mug-hot"`;
  else if (role === 'Engineer') return `class="fas fa-glasses"`;
  else return `class="fas fa-user-graduate"`;
}

function renderEmployeeInfo(employee) {
  if (employee.getRole() === 'Manager')
    return `<li class="text-center list-group-item" id="office">Office Number: ${employee.getOfficeNumber()}</p>`;
  else if (employee.getRole() === 'Engineer')
    return `<li class="text-center list-group-item" id="office">GitHub Username: <a href="http://github.com/${employee.getGithub()}">${employee.getGithub()}</p></a>`;
  else
    return `<li class="text-center list-group-item" id="office">School Name: ${employee.getSchool()}</p>`;
}

module.exports = {
  validate,
  validateNum,
  validateEmail,
  writeFile,
  renderIcon,
  renderEmployeeInfo,
};
