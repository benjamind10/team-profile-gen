const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('create new engineer object', () => {
  const engineer = new Engineer(
    'Jim',
    20,
    'jim@jimtest.com',
    'jimdivstrong'
  );

  expect(engineer.github).toEqual(expect.any(String));
});

test('checks if getGithub fn works', () => {
  const engineer = new Engineer(
    'Jim',
    20,
    'jim@jimtest.com',
    'jimdivstrong'
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test('checks if getRole fn works', () => {
  const engineer = new Engineer(
    'Jim',
    20,
    'jim@jimtest.com',
    'jimdivstrong'
  );

  expect(engineer.getRole()).toEqual('Engineer');
});
