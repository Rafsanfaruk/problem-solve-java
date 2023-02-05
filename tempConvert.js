/*
Learn how to create a temperature converter. Your task is to provide a value in Fahrenheit and then convert it into Celsius . Then round it up to two decimal places if you get fraction. And return the rounded value as output. 

Alert: The output must be in a number format. 

The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:

℃=(℉-32)/1.8
*/ 


function temperatureConvert(valNum){
    let degree=(valNum-32)/1.8
    return parseFloat(degree.toFixed(2));
}

console.log(temperatureConvert(103));