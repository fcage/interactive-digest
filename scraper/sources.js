//lists the sources for the scraper app

//twitter sources
var Twitter = require('twitter');

//load twitter keys
var keys = require('../keys/keys.json');

//connect to Twitter get posts from twitter list: twitter.com/fcage/lists/int-news-scraper
var client = new Twitter(keys.twitter);

//params to 
var params = {owner_screen_name: 'fcage', slug: 'int-news-scraper', count: 25};
client.get('lists/list', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});