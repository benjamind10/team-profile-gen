// Dependency imports
const {
  newManager,
  newEmployee,
} = require('./src/generateQuestions');

// Function to initialize app
function init() {
  newManager().then(newEmployee);
}
// Function call to initialize app
init();
