console.log('welcome to client side js');
let activeCases;
let country;
let lastUpdate;
let deceased;
let recovered;
let infected;

getCovidData();

async function getCovidData(){
  // const worldData = await fetch('https://api.apify.com/v2/datasets/sFSef5gfYg3soj8mb/items?format=json&clean=1');
  const rawData = await fetch('/api/covid-update-now');
  const latestData = await rawData.json();
  console.log('Latest Data', latestData);

  activeCases = latestData.activeCases;
  country = latestData.country;
  lastUpdate = latestData.lastUpdatedAtApify;
  infected = latestData.infected;
  deceased = latestData.deceased;
  recovered = latestData.recovered;

  document.getElementById('cases').textContent = activeCases;
  document.getElementById('country').textContent = country;
  document.getElementById('lastUpdate').textContent = lastUpdate;
  document.getElementById('infected').textContent = infected;
  document.getElementById('deceased').textContent = deceased;
  document.getElementById('recovered').textContent = recovered;
};

const saveData = document.getElementById('saveme');
saveData.addEventListener('click', function(event) {
  console.log('Clicked');
});

async function postCovidData(data) {
  const options = {
    method: 'POST',
    headers: {'Content-Type' : 'Application/json'},
    body: JSON.stringify(data)
  }

  const postRes = await fetch('/api/covid-update-now', options);
  const postResData = await postRes.json();
  console.log('Response from server', postResData);
};