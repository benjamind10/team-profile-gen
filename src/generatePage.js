// Creates the manager card
function createCard(arr) {
  const { name, id, ...data } = team;
  if (data.role === undefined) data.role = 'Manager';

  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-dark text-white">
                <h3 class="text-center">${name}</h3>
                <h4 class="text-center">${
                  data.role
                } <span><i id="icon" class=${renderIcon(
    data.role
  )}></i></span></h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${id}</p>
                <p class="email">Email: <a href="mailto:${
                  data.email
                }">${data.email}</a></p>
                <p class="office">Office Number: ${
                  data.officeNumber
                }</p>
            </div>

        </div>
    </div>
    `;
}

function renderIcon(role) {
  switch (role) {
    case 'Engineer':
      return 'fas fa-glasses';
    case 'Intern':
      return 'fas fa-user-graduate';
    default:
      return 'fas fa-mug-hot';
  }
}

module.exports = createCard;
