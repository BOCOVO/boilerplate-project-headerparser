const getAgent = require('./src/utils/getAgent');
const whoami = require('./src/controllers/whoami');
require('dotenv').config();
var express = require('express');
var app = express();

// set template engine
app.set("view engine","ejs");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  console.log(getAgent(req))
  res.render("index",getAgent(req));
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami",whoami);

// listen for requests :)
var listener = app.listen(process.env.production ? process.env.PORT : 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
