// Dependency imports
const {
  newManager,
  newEmployee,
  team,
} = require('./src/generateQuestions');
const { writeFile } = require('./utils/helperFunctions');
const generateHTML = require('./src/generatePage');

// Function to initialize app
function init() {
  newManager()
    .then(newEmployee)
    .then(() => {
      generateHTML(team);
    });
}
// Function call to initialize app
init();
