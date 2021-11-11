const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const axios = require('axios');
const url = 'https://xkcd.com';

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.get('/', (req, res) => {
  axios({
    url: `${url}/${req.body.cartoon}/info.0.json`,
    method: 'get',
  }).then((response) => {
    res.json(response.data);
  }).catch((err) => {
    console.error(`The comic could not be consulted error => ${err}`);
  });
 
});

app.listen(port, () => {
  console.log(`start server http://localhost:${port}`)
})
