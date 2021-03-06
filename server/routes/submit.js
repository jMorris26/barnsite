'use strict';

var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var https = require('https');

router.post('/', function(req, res){
  console.log('entered post function*******************');
  function sendElasticEmail() {
  	// Make sure to add your username and api_key below.

  	var post_data = querystring.stringify({

  		'username' : 'morris.jess26@gmail.com',
  		'api_key': process.env.ELASTICEMAIL_KEY,
  		'from': process.env.EMAIL,
  		'from_name' : 'Sunrise Equine',
  		'to' : process.env.EMAIL,
  		'subject' : 'New Message for Sunrise Equine!',
      'reply_to' : req.body.email,
      'reply_to_name' : req.body.clientname,
      'merge_firstname' : req.body.clientname,
      'merge_industry' : req.body.message,
      'merge_email' : req.body.email,
      'merge_phone' : req.body.pnum,
      'template' : 'barn'

  	});

    console.log('POST DATA: ', post_data);


  	// Object of options.
  	var post_options = {
  		host: 'api.elasticemail.com',
  		path: '/mailer/send',
  		port: '443',
  		method: 'POST',
  		headers: {
  			'Content-Type': 'application/x-www-form-urlencoded',
  			'Content-Length': post_data.length
  		}
  	};
  	var result = '';
  	// Create the request object.
  	var post_req = https.request(post_options, function(response) {
  		response.setEncoding('utf8');
  		response.on('data', function (chunk) {
        console.log('chunk', chunk);
        console.log('response: ', response);
  			result = chunk;
  		});
  		response.on('error', function (e) {
  			result = 'Error: ' + e.message;
        console.log('Error: ', e.message);
  		});
  	});

  	// Post to Elastic Email
  	post_req.write(post_data);
  	post_req.end();
    console.log('result: ', result);
    res.json({result: result});
    // return result;
  }

  console.log(sendElasticEmail());

});

module.exports = router;
