// Import Employee class
const Employee = require('./Employee');

// Builds Engineer class extending the Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  // Engineer methods
  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
