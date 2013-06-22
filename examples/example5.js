var drupal = require('drupalgo');
var async = require('async');
var browser = drupal.load('example5.json', {maxWait: 20000});

async.series([
  drupal.go('login'),
  drupal.go('visit', '/project/issues/mediafront'),
  function(done) {
    drupal.eachViewItem('div.view-id-project_issue_project', 'td.views-field-title', function(node, done) {
      var version = browser.text('td.views-field-version', browser.xpath('./..', node).value[0]);
      console.log(browser.text('a', node) + ' : ' + version);
      done();
    }, done)
  }
], function() {
  console.log('Done');
});
