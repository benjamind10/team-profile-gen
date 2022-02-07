const {
  renderEmployeeInfo,
  renderIcon,
} = require('../utils/helperFunctions');

function generateHTML(employees) {
  const cardsArr = employees
    .map(employee => {
      const role = employee.getRole();

      switch (role) {
        case 'Manager':
          return createCard(employee);
        case 'Engineer':
          return createCard(employee);
        default:
          return createCard(employee);
      }
    })
    .join('');

  const finalPage = generatePage(cardsArr);
  return finalPage;
}

function createCard(employee) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-dark text-white">
                <h3 class="text-center">${employee.getName()}</h3>
                <h4 class="text-center">${employee.getRole()} <span><i id="icon" ${renderIcon(
    employee.getRole()
  )}></i></span></h4>
            </div>
            <div class="card-body bg-secondary">
                <ul class="list-group list-group-flush rounded">
                    <li class="text-center list-group-item" id="id">ID: ${employee.getId()}</p>
                    <li class="text-center list-group-item" id="email">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    ${renderEmployeeInfo(employee)}
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
