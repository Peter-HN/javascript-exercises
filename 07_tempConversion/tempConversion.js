const convertToCelsius = function(far) {
  // (F - 32) * (5/9)
  let cel = (far - 32) * (5/9);
  return + cel.toFixed(1);
};

const convertToFahrenheit = function(cel) {
  // C * (9/5) + 32
  let far = cel * (9/5) + 32;
  return + far.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
