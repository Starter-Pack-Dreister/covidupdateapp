const express = require('express');
const Database = require('nedb');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

app.get('/api/covid-update-now', async(req, res, next) => {
  try {
    console.log('GET method');
    const covidApiUrl = 'https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true';
    const covidUpdate = await fetch(covidApiUrl);
    const covidResponse = await covidUpdate.json();
    res.json(covidResponse);
  } catch(err) {
    console.error(err)
  }
});