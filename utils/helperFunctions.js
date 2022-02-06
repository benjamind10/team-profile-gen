// Import dependencies
const fs = require('fs');

// Helper function
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
  if (valid) {
    return true;
  } else {
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

function renderIcon(role) {
  if (role === 'Manager') return `class="fas fa-mug-hot"`;
  else if (role === 'Engineer') return `class="fas fa-glasses"`;
  else return `class="fas fa-user-graduate"`;
}

function renderEmployeeInfo(employee, role) {
  const { officeNumber, github, school } = employee;
  if (role === 'Manager')
    return `<p class="office">Office Number: ${officeNumber}</p>`;
  else if (role === 'Engineer')
    return `<p class="office">GitHub Username: ${github}</p>`;
  else return `<p class="office">GitHub School: ${school}</p>`;
}

module.exports = {
  validate,
  validateNum,
  validateEmail,
  writeFile,
  renderIcon,
  renderEmployeeInfo,
};
