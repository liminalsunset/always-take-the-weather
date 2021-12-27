// set the tempature in Kelvin
const kelvin = prompt('What is the temperature in Kelvin?');

// celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// this equation calculates Fahrenheit
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);