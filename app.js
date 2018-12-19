let express1 = require('express');
let app1 = express1();
let request = require('request');

app1.get('/distance/:lat1/:lang1/:lat2/:lang2', function(req, res) {
    options = {
        protocol: "https:",
        host: "maps.googleapis.com",
        pathname: '/maps/api/distancematrix/json',
        query: {
          units: "imperial",
          origins:"",
          destinations:"",
          key:""
        }
      };
    this.options.query['origins']=req.params.lat1+","+req.params.lang1;
    this.options.query['destinations']=req.params.lat2+","+req.params.lang1;

    let url = require('url');

    let searchURL = url.format(options);

    request(searchURL, function(err, response, body) {
        console.log(body);
      });
    //console.log(options);
    res.end("ok");
});
 
var ser = app1.listen(10011);
