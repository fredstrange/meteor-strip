Package.describe({
  name: 'fredstrange:strip',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('fredstrange:strip.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fredstrange:strip');
  api.addFiles('fredstrange:strip-tests.js');
});
