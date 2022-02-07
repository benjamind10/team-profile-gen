// Import intern constructor
const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern(
    'Scott',
    30,
    'scott@scotttest.com',
    'VCU'
  );

  expect(intern.school).toEqual(expect.any(String));
});

test('makes sure getSchool fn works', () => {
  const intern = new Intern(
    'Scott',
    30,
    'scott@scotttest.com',
    'VCU'
  );

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test('check to see if getRole returns intern', () => {
  const intern = new Intern(
    'Scott',
    30,
    'scott@scotttest.com',
    'VCU'
  );

  expect(intern.getRole()).toEqual('Intern');
});
