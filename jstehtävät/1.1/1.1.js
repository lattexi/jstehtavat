let celsius = parseFloat(prompt("Enter temperature in Celsius:"));

let fahrenheit = (celsius * 9 / 5) + 32;

let kelvin = celsius + 273.15;

document.getElementById("output").innerHTML =
    `${celsius}°C<br>
    ${fahrenheit.toFixed(2)}°F<br>
    ${kelvin.toFixed(2)}K`;