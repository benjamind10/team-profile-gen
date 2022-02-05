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
    console.log('Please enter an office number.');
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

module.exports = {
  validate,
  validateNum,
  validateEmail,
};
