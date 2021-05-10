module.exports = {
  'front/src/**/*.ts': (filenames) => `lerna run lint --scope front -- --files=[${filenames.join()}`,
  '*.ts': ['prettier --write ', 'git add'],
};
