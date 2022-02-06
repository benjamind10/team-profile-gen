// Dependency imports
const {
  newManager,
  newEmployee,
  team,
} = require('./src/generateQuestions');
const { writeFile } = require('./utils/helperFunctions');
const createCard = require('./src/generatePage');

// Function to initialize app
function init() {
  newManager()
    .then(response => {
      console.log(team);
      return createCard(team);
    })
    .then(data => {
      writeFile(data);
    });
}
// Function call to initialize app
init();
