var drupal = require('drupalgo');
var async = require('async');
drupal.load('example3.json');

async.series([
  drupal.go('login'),
  drupal.go('createMultipleContent', drupal.config.get('nodes'))
]);
