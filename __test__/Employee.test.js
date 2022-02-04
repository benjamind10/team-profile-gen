const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
  const employee = new Employee('Ben', 1, 'ben@bytebug.io');

  expect(employee.name).toBe('Ben');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('check getName method', () => {
  const employee = new Employee('Ben', 1, 'ben@bytebug.io');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('check getId method', () => {
  const employee = new Employee('Ben', 1, 'ben@bytebug.io');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('check getEmail method', () => {
  const employee = new Employee('Ben', 1, 'benbytebug.io');

  expect(employee.getEmail()).toContain('@');
});
