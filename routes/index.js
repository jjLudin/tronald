var express = require('express');
var request = require('request');
var router = express.Router();

const options = {
  url: 'https://api.tronalddump.io/random/quote',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  request(options, function(err, output, body) {
    var json = JSON.parse(body);
    res.render('index.html', {
      quote : json['value'],
      createdDate : new Date(json['created_at']).toLocaleString(),
      source : json['_embedded']['source'][0]['url']
    });
  });
});

module.exports = router;
