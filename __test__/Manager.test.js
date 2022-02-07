// using Manager constructor
const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
  const manager = new Manager(
    'Ty',
    40,
    'ty@tytesting.com',
    8042454444
  );

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('makes sure getOfficeNumber fn works', () => {
  const manager = new Manager(
    'Ty',
    40,
    'ty@tytesting.com',
    8042454444
  );

  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test('gets role of employee', () => {
  const manager = new Manager(
    'Ty',
    40,
    'ty@tytesting.com',
    8042454444
  );

  expect(manager.getRole()).toEqual('Manager');
});
