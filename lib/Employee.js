// Employee Class
class Employee {
  constructor(name = '', id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //Employee methods
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
  setRole(role) {
    this.role = role;
  }
}

module.exports = Employee;
