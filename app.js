// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init the UI
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  // Get and display weather
  getWeather();

  // Close modal
  $('.locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(result => {
      ui.paint(result);
    })
    .catch(err => console.log(err));
}