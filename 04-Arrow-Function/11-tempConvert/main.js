const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const Fahrenheit = prompt("Input Number Fahrenheit"); //98.6
const Celsius = fahrenheitToCelsius(Fahrenheit);

console.log(`${Fahrenheit}°F to ${Celsius.toFixed(2)}°C`);
