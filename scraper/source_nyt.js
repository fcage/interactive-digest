var Client = require('node-rest-client').Client;

//load nyt api keys
var keys = require('../keys/keys.json');

//init client
var client = new Client();

//make request
client.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=interactive&api-key='+ keys.nyt.article_search, function(data, response){
    // parsed response body as js object 
    console.log(JSON.parse(data).response.docs);
    // raw response 
    //console.log(response);
});