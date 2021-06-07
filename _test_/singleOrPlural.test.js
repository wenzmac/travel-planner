const singleOrPlural = require('./src/client/js/app');

test('changes days to day', () => {
  expect(singleOrPlural(1)).toBeDefined();
});
