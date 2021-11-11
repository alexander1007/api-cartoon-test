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
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.post('/', (req, res) => {
  axios({
    url: `${url}/${req.body.cartoon}/info.0.json`,
    method: 'get',
  }).then((response) => {
    res.json(response.data);
  }).catch((err) => {
    console.error(`The comic could not be consulted error => ${err}`);
  });
 
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`start server`);
})
