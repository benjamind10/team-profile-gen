const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
  const employee = new Employee('Ben');

  expect(employee.name).toBe('Ben');
  expect(employee.id).toEqual(expect.any(Number));
});
