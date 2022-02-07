const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a employee object', () => {
  const employee = new Employee('Ben', 10, 'ben@bytebug.io');

  expect(employee.name).toBe('Ben');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('check getName method', () => {
  const employee = new Employee('Ben', 10, 'ben@bytebug.io');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('check getId method', () => {
  const employee = new Employee('Ben', 10, 'ben@bytebug.io');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('check getEmail method', () => {
  const employee = new Employee('Ben', 10, 'ben@bytebug.io');

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test('check to see if getRole returns employee', () => {
  const employee = new Employee('Ben', 10, 'ben@bytebug.io');

  expect(employee.getRole()).toBe('Employee');
});
