var drupal = require('drupalgo');
var async = require('async');
drupal.load('example2.json');

async.series([
  drupal.go('login'),
  function(done) {
    async.whilst(
      function() { return drupal.config.get('title') !== ''; },
      function(done) {
        async.series([
          drupal.go('set', 'title', ''),
          drupal.go('get', 'title'),
          drupal.go('createContent', function() {
            return {
              type: 'article',
              title: drupal.config.get('title')
            };
          })
        ], done);
      },
      done
    );
  }
]);
