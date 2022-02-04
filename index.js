// Dependency imports
const { newManager } = require('./src/generateQuestions');

// Function to initialize app
function init() {
  newManager().then(response => {
    console.log(response);
  });
}
// Function call to initialize app
init();
