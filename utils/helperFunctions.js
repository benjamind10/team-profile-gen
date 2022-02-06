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

module.exports = {
  validate,
  validateNum,
  validateEmail,
  writeFile,
};
