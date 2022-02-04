const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
  const employee = new Employee('Ben', 1, 'ben@bytebug.io');

  expect(employee.name).toBe('Ben');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
