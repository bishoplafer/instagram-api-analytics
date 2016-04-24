// required
var fetch = require('node-fetch');

//api call
	function apiEndpointBuilder(tag) {
    var searchtag = tag;
    var accesstoken = '30797369.1fb234f.815eecddc2e24ca089a70b95d07a791f';

// build api call endpoint string
		fetch('https://api.instagram.com/v1/tags/' + searchtag + '/media/recent?access_token=' + accesstoken).then(function(res) {
			return res.text();
		}).then(function(body) {

      //pase retruned json
      var parsedbody = JSON.parse(body);

      //loop through return looking for tattoo tag
      for (i = 0; i< 100; i++) {
          var user = parsedbody['data'][i]['user']['id'];
          var returnedtags = parsedbody['data'][i]['tags'];
          var tagsToString = returnedtags.toString();
          var findEug = tagsToString.match( /tattoo/g );
          if (findEug){
            //replace log with add to database once a database is created for this project
            console.log(user);
          }

      }
		});

	}

// api call searching tag eugeneoregon
	apiEndpointBuilder('eugeneoregon');
