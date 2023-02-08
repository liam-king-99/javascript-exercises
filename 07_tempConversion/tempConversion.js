const convertToCelsius = function(temperatureInFahrenheit) {
  let celsiusTemperature = (temperatureInFahrenheit - 32) * (5 / 9)
  return Number(celsiusTemperature.toFixed(1))
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let fahrenheitTemperature = temperatureInCelsius * (9 / 5) + 32
  return Number(fahrenheitTemperature.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
