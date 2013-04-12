var drupal = require('drupalgo');
var async = require('async');
drupal.load('example1.json');

async.series([
  drupal.go('login'),
  drupal.go('get', 'title'),
  drupal.go('createContent', function() {
    return {
      type: 'article',
      title: drupal.config.get('title')
    };
  })
]);
