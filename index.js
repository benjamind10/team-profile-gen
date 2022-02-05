// Dependency imports
const {
  newManager,
  newEmployee,
  team,
} = require('./src/generateQuestions');

// Function to initialize app
function init() {
  newManager()
    .then(newEmployee)
    .then(() => {
      console.log(team);
    });
}
// Function call to initialize app
init();
