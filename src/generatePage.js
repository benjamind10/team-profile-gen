const {
  renderEmployeeInfo,
  renderIcon,
} = require('../utils/helperFunctions');

function generateHTML(data) {
  const cardsArr = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = createCard(employee, 'Manager');
      cardsArr.push(managerCard);
    } else if (role === 'Engineer') {
      const engineerCard = createCard(employee, 'Engineer');
      cardsArr.push(engineerCard);
    } else {
      const internCard = createCard(employee, 'Intern');
      cardsArr.push(internCard);
    }
  }
  const finalCards = cardsArr.join('');
  const finalPage = generatePage(finalCards);
  return finalPage;
}

function createCard(employee, role) {
  const { name, id, ...data } = employee;

  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-dark text-white">
                <h3 class="text-center">${name}</h3>
                <h4 class="text-center">${role} <span><i id="icon" ${renderIcon(
    role
  )}></i></span></h4>
            </div>
            <div class="card-body">
                <p class="text-center" id="id">ID: ${id}</p>
                <p class="text-center" id="email">Email: <a href="mailto:${
                  data.email
                }">${data.email}</a></p>
                ${renderEmployeeInfo(employee, role)}
            </div>

        </div>
    </div>
    `;
}

function generatePage(cards) {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Info</title>
    </head>

    <body>
        <!-- Navbar -->
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid text-center">
                    <span class="navbar-brand mx-auto mb-0 h1">Team Info</span>
                </div>
            </nav>
        </header>
        <section>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Render Cards-->
                    ${cards}
                </div>
        </section>
    </body>

    </html>

    `;
}

module.exports = generateHTML;
