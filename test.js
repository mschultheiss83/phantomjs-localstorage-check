// Adapted from http://phantomjs.org/page-automation.html

var page = require('webpage').create();

page.open('http://www.httpuseragent.org', function(status) {

  if (status !== 'success') {

    console.log('Unable to access network');

  } else {

    var localStorageObj = page.evaluate(function() {
      localStorage.setItem('foo', '{"storage": "works"}');
      return JSON.parse(localStorage.getItem('foo'));
    });

    console.log(localStorageObj.storage);

  }

  phantom.exit();

});
