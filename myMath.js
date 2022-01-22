// VARIABLES


const pi = 3.141592653589793238462643383279502383197169399375105820974944592307816406286208998628034825342117067;
const lightSpeed = 299792458; // meters/second
const waterBoils = 212;  // degrees F
const waterFreezes = 32;  // degrees F
const earthRadius = 6378.1; // km 
const moonRadius = 6786 // mi
const sunRadius = 2.720984 // million mi
const temperatureSun = 5778 // K

// FORMULAS

// mean
function average(numbers) {
    let total = 0;
    for(let number of numbers) {
        console.log(total += number)
    }
    return `average = ${total / numbers.length}`
}

// console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.598

// median
function median(numbers) {

    let index = Math.floor([(numbers.length-1) / 2]);
    return numbers[index];
}

// console.log(median([1, 2, 3, 4, 5, 6, 7])); // 4
// console.log(median([2, 3, 4, 5])); // 3


// mode
function mode(numbers) {
 //reduce to return most frequently occoring value in numbers?

}


//  basic counter
let total = 0, count = 1;
while (count <= 10) {
total += count;
count += 1;
}
// console.log(total);

function findProbability (targetOutcomes, totalOutcomes) {
    return targetOutcomes / totalOutcomes
}
// console.log(findProbability(10, 100)); // 0.1

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
// console.log(power(4)); // 16
// console.log(power(2, 6)); // 64


// quadratic (parabolic) equasion
function quadratic(a, b, c) {
    let num = Math.sqrt(power(b, 2) - (4 * a * c))
    return  (-b + num) / 2
}
// console.log(quadratic(1, 4, 4)); // -2

// distance between 2 coordinates in a plane
function getDistance(x1, y1, x2, y2) {
    let num = ((x1 - x2)**2)  + ((y1 - y2)**2);
    return Math.sqrt(num);
}

// console.log(getDistance(6, 6, 2, 3)); // 5  from points (x, y) || (6,6) and (2,3) 


// slope of coordinates in plane

function slope(x1, y1, x2, y2) {
    let m = (y2 - y1) / (x2 - x1);
    return m
}
// console.log(slope(-2, -1, 4, 3)); // 2/3 || 0.6666


// midpoint

function findMidpoint(x1, y1, x2, y2) {
let x = (x1 + x2);
let y = (y1 + y2);
return `Midpoint: ( ${x/2}, ${y/2} )`
}
// console.log(findMidpoint(-1, 2, 3, -6)); // (1, -2)


// area of triangle

const areaTriangle = (base, height) => `${(1/2) * base * height}: square units`;
// console.log(areaTriangle(2, 4)); // 4
 
// Pythagoreon Theorem: 

function pythagoreonC(a, b) {
    let c = (a**2) + (b**2);
    return `c = ${Math.sqrt(c)}`;
}
// console.log(pythagoreonC(3, 4)); //5

function pythagoreonB(a, c) {
    let b = (c**2) - (a**2);
    return `b = ${Math.sqrt(b)}`;
}
// console.log(pythagoreonB(3, 4)); 

function pythagoreonA(b, c) {
    let a = (c**2) - (b**2);
    return `a = ${Math.sqrt(a)}`;
}
// console.log(pythagoreonA(3, 4));

// area of rectangle

function areaRectangle(length, width) {
    return `${length * width} square units`
}
// console.log(areaRectangle(5, 3)); // 15

// area of circle
function areaCircle(radius) {
    return `${Math.PI * (radius**2)} square units`
}
// console.log(areaCircle(4)); // 50.2654

// circumference of a circle
function circumference(radius) {
    return `${Math.PI * 2 * radius}`
}

//console.log(circumference())
// console.log(circumference(7)); // 43.9822
// console.log(circumference(1079.6)); // 6783 mi

// aprox volume of a sphere

function volumeSphere(radius) {
    return v = (4/3) * Math.PI * radius ** 3;
}

// console.log(volumeSphere(3)); // aprox 113.1
// console.log(volumeSphere(6378.1)); // aprox 108.1 * 10**12

// leap year

function calcLeapYear(year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true
    } else {
        return false
    }
}
// console.log(calcLeapYear(1994)); //false
// console.log(calcLeapYear(2020)); //true
// console.log(calcLeapYear(2024)); //true

//TEMP CONVERSIONS

// celcius to fahrenheit:
function celcToFahr(celcius) {
    let fahrenheit = (celcius * (9 / 5)) + 32;
    return `${fahrenheit} degrees F`
}

// console.log(celcToFahr(-6)); // 21.2


//fahrenheit to celcius:
function fahrToCelc(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9)
    return `${celcius} degrees C`
}

// console.log(fahrToCelc(waterFreezes)) // 0
// console.log(fahrToCelc(86));  // 30
// console.log(fahrToCelc(350)); // 176.6667


// Kelvin to celcius:
function kelvToCelc(kelvin) {
    let celcius = kelvin - 273.15;
    return `${celcius} degrees C`;
}

// console.log(kelvToCelc(500)); // 226.85


// Kelvin to Fahrenheit:
function kelvToFahr(kelvin) {
    let fahrenheit = ((kelvin - 273.15) * (9 / 5)) + 32;
    return `${fahrenheit} degrees F`
}
// console.log(kelvToFahr(temperatureSun)); // 9740.73 degrees F
// console.log(kelvToFahr(500)); // 440.33
// console.log(kelvToFahr(5778)); // 9940 F  

//  Fahrenehit to Kelvin
function fahrToKelv(fahrenheit) {
    let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
    return `${kelvin} K`
}

// console.log(fahrToKelv(430)); // 494.26


// ARRAYS

// reverse an array:
function reverseArray(nums) {
    let backwardsArray = [];
    for (let num of nums) {
        console.log(backwardsArray.unshift(num));
    }
    return backwardsArray
}

// console.log(reverseArray([5, 6, 7, 8])); // [8, 7, 6, 5]


// sum of array of nums:
function sum([...numbers]) {
    let total = 0;
    for (number of numbers) {
        total += number
    }
    return total
}
// console.log('sum of numbers is: ');
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55




// METRIC CONVERSIONS !

// Can the States please get on the metric system?  
// Things would just be easier for everyone.
// Until then, here are the conversion equations:

// Distance:

// find centimeters
const inchesToCentimeters = (inches) => `${inches * 2.5400}: 'centimeters'`;
// console.log(inchesToCentimeters(12)); // 30.48

// find meters
const feetToMeters = (feet) => `${feet * 0.3048}: 'meters'`;
// console.log(feetToMeters(2)); // 0.6096

const yardsToMeters = (yards) => `${yards * 0.9144}: 'meters'`;
// console.log(yardsToMeters(5)); //4.572

// find kilometers
const milesToKilometers = (miles) => `${miles * 1.6093}: 'kilometers'`;
// console.log(milesToKilometers(17)); // 27.3581

// find inches
const millimetersToInches = (millimeters) => `${millimeters * 0.0394}: 'inches'`;
// console.log(millimetersToInches(150)); // 5.9099

const centimetersToInches = (centimeters) => `${centimeters * 0.3937}: 'inches'`;
// console.log(centimetersToInches(15)); // 5.9055

// find feet
const metersToFeet = (meters) => `${meters * 3.2808}: 'feet'`;
// console.log(metersToFeet(3)); // 9.8424

// find miles
const kilometersToMiles = (kilometers) => kilometers * 0.6214;
// console.log(kilometersToMiles(100)); // 62.1399
// console.log(circumference(kilometersToMiles(earthRadius))); // aprox 24901 mi

// Surface or area:

// find acres
const hectacresToAcres = (hectacres) => `${hectacres * 2.4710}: 'acres'`;
// console.log(hectacresToAcres(17)); // 42.0070


// Volume and Capacity:

// find liters
const pintsToLiters = (pints) => `${pints * 0.4732}: 'liters'`;
// console.log(pintsToLiters(50)); // 23.66

const quartsToLiters = (quarts) => `${quarts * 0.9463}: 'liters'`;
// console.log(quartsToLiters(50)); // 47.3150

const gallonsToLiters = (gallons) => `${gallons * 3.7853}: 'liters'`;
// console.log(gallonsToLiters(50)); // 189.265

// find pints
const litersToPints = (liters) => `${liters * 2.1134}: 'pints'`;
// console.log(litersToPints(50)); // 105.67

// find quarts
const litersToQuarts = (liters) => `${liters * 1.0567}: 'quarts'`;
// console.log(litersToQuarts(50)); // 52.835

// find gallons
const litersToGallons = (liters) => `${liters * 0.2642}: 'gallons'`;
// console.log(litersToGallons(50)); // 13.9999


// Weight and Mass:

// find grams
const ouncesToGrams = (ounces) => `${ounces * 28.3495}:'grams'`;
// console.log(ouncesToGrams(50)); // 1417.475

// find kilograms
const poundsToKilograms = (pounds) => `${pounds * 0.4536}: 'kilograms'`;
// console.log(poundsToKilograms(50)); // 22.68

// find metric tons
const shortTonsToMetricTons = (shortTons) => `${shortTons * 0.9072}: 'metric tons'`;
// console.log(shortTonsToMetricTons(50)); // 45.36

// find pounds
const kilogramsToPounds = (kilograms) => `${kilograms * 2.2046}: 'pounds'`;
 console.log(kilogramsToPounds(50)); // 110.23

// find short tons
const metricTonsToShortTons = (metricTons) => `${metricTons * 1.1023}: 'short tons'`;
// console.log(metricTonsToShortTons(50)); // 55.115




/*
//COORELATION

// add events as journal:
function journalEvents(journal) { 
    let events = []; 
    for (let entry of journal) { 
        for (let event of entry.events) { 
            if (!events.includes(event)) { 
                events.push(event); }
            }
      }
 return events; 
} 

// console.log(journalEvents(JOURNAL)); 



//Phi Coefficient equation:
function phi(table) {
     return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
 }
 // console.log(phi([76, 9, 4, 1])); // 0.068599434


 // see all the correlations:
for (let event of journalEvents(JOURNAL)) { 
    console.log(event + ":", phi(tableFor(event, JOURNAL))); 
} 

// coorelation for single event:
for (let event of journalEvents(JOURNAL)) { 
    let correlation = phi(tableFor(event, JOURNAL)); 
    if (correlation > 0.1 || correlation < -0.1) { 
        console.log(event + ":", correlation); 
    } 
}
*/


