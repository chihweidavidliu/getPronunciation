const papaparse = require("papaparse");
const fs = require("fs");
const rp = require('request').defaults({jar: true});
const hbs = require('hbs');
const express = require('express');
const bodyParser = require('body-parser');

const port = 4000;

var app = express();

app.use(bodyParser.json()); // use bodyParser to parse request as JSON
var urlencodedParser = bodyParser.urlencoded({ extended: false }) // parse req body middleware for form submission

app.use(express.static(`public`)); // middleware that sets up static directory in a folder of your choice - for your pages which don't need to be loaded dynamically

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

//homepage
app.get("/", (req, res) => {
  res.redirect("/getPronunciation.html");
})

app.post("/addURL", urlencodedParser, (req, res) => {


  let url = req.body.url;
  let text = req.body.text;
  let folderName = req.body.folderName;
  let index = req.body.index;

  // let urlArray = [];
  // urlArray.push(url);
  // console.log(urlArray);

  // check directory exists for the subject, if not, make one
  if (!fs.existsSync(`./${folderName}`)){
    fs.mkdirSync(`./${folderName}`);
  }

  rp
  .get(url)
  .on('response', function(response)
  {
      console.log(`Saving word: ${text} in folder: ${folderName}`);
  })
  .pipe(fs.createWriteStream(`./${folderName}/${index}-${text}.mp3`));

  res.send()

})
