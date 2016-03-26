var http = require("http");
var fetch = require('node-fetch');

http.createServer(function (request, response) {

	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// api call

	// token will be included later
	var token = 'access_token=30797369.1fb234f.815eecddc2e24ca089a70b95d07a791f';
	var component = 'tags';
	var method = 'search';
	var query = 'q=tattoo';

	function apiEndpointBuilder(component, method, query) {
		// console.log('https://api.instagram.com/v1/'+component+'/'+method+'?'+token+'&'+query);
		fetch('https://api.instagram.com/v1/'+component+'/'+method+'?'+token+'&'+query).then(function(res) {
			return res.text();
		}).then(function(body) {
			console.log(body);
		});
	}

	apiEndpointBuilder(component, method, query);


}).listen(8081);


// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');



