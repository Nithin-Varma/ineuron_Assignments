// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.

function celsius(c)
{
    console.log(c + " C is " +(((9*c)/5) + 32) + " F")
}

function Fahrenheit(f)
{
    console.log(f+" F is "+ ((5*(f-32))/9) + " C")
}
celsius(60)
Fahrenheit(45)