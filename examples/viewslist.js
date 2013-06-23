var Browser = require('zombie');
var browser = new Browser();
var _ = require('underscore');
var async = require('async');

browser.visit('http://drupal.org/forum', function() {
  var nodes = browser.queryAll('tbody tr');
  _.each(nodes, function(node) {
    var link = browser.query('div.name a', node);
    browser.fire("click", link, function() {
      console.log(browser.text('h1'));
    });
  });
});

/** GOOD!
var go = function() {
  var args = _.values(arguments);
  var method = args.shift();
  return function(done) {
    args.push(done);
    browser[method].apply(browser, args);
  };
};

async.series([
  go('visit', 'http://drupal.org/forum'),
  function(done) {
    var nodes = browser.queryAll('tbody tr');
    async.eachSeries(nodes, function(node, nodeDone) {
      var link = browser.query('div.name a', node);
      browser.fire("click", link, function() {
        console.log(browser.text('h1'));
        nodeDone();
      });
    }, done);
  }
]);
**/
