const express = require('express');
const morgan = require('morgan');
const dotEnv = require('dotenv').config();
const Axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:city', (req, res) => {
  Axios.get((`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`))
  .then((response) => {
      console.log(response);
      res.send(response.data);
  })
  .catch(err => console.log(err));

});
module.exports = app;
