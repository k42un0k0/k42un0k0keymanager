module.exports = {
  'front/src/**/*.ts': (filenames) => `lerna run lint --scope front -- --files=[${filenames.join()}`,
  'app/src/**/*.ts': 'lerna run lint --scope app --',
  '*.ts': ['prettier --write ', 'git add'],
};
