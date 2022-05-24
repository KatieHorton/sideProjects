// VARIABLES


const pi = 3.141592653589793238462643383279502383197169399375105820974944592307816406286208998628034825342117067;
const lightSpeed = 299792458; // meters/second
const waterBoils = 212;  // degrees F
const waterFreezes = 32;  // degrees F
const earthRadius = 6378.1; // km 
const moonRadius = 6786 // mi
const sunRadius = 2.720984 // million mi
const temperatureSun = 5778 // K


//TEMP CONVERSIONS

let TempConversions = {};

// celcius to fahrenheit:

TempConversions.celcToFahr = function (num1) {
    let fahrenheit = (num1 * (9 / 5)) + 32;
    return fahrenheit
}

// console.log(TempConversions.celcToFahr(-6)); // 21.2


//fahrenheit to celcius:
TempConversions.fahrToCelc = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9)
    return celcius
}

// console.log(TempConversions.fahrToCelc(86));  // 30


// Kelvin to celcius:
TempConversions.kelvToCelc = function (kelvin) {
    let celcius = kelvin - 273.15;
    return celcius
}

// console.log(TempConversions.kelvToCelc(500)); // 226.85


// Kelvin to Fahrenheit:
TempConversions.kelvToFahr = function (kelvin) {
    let fahrenheit = ((kelvin - 273.15) * (9 / 5)) + 32;
    return fahrenheit
}

// console.log(TempConversions.kelvToFahr(500)); // 440.33


//  Fahrenehit to Kelvin

TempConversions.fahrToKelv = function (fahrenheit) {
    let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
    return kelvin
}

// console.log(TempConversions.fahrToKelv(430)); // 494.26



// METRIC CONVERSIONS !

// Can the States please get on the metric system?  
// Things would just be easier for everyone.
// Until then, here are the conversion equations:
let Conversions = {};
// Distance:

// find centimeters
Conversions.inchesToCentimeters = (inches) => inches * 2.5400;

// console.log(Conversions.inchesToCentimeters(12)); // 30.48

// find meters
Conversions.feetToMeters = (feet) => feet * 0.3048;

// console.log(Conversions.feetToMeters(2)); // 0.6096

Conversions.yardsToMeters = (yards) => yards * 0.9144;

// console.log(Conversions.yardsToMeters(5)); //4.572

// find kilometers
Conversions.milesToKilometers = (miles) => miles * 1.6093;

// console.log(Conversions.milesToKilometers(17)); // 27.3581

// find inches
Conversions.millimetersToInches = (millimeters) => millimeters * 0.0394;

// console.log(Conversions.millimetersToInches(150)); // 5.9099

Conversions.centimetersToInches = (centimeters) => centimeters * 0.3937;

// console.log(Conversions.centimetersToInches(15)); // 5.9055

// find feet
Conversions.metersToFeet = (meters) => meters * 3.2808;

// console.log(Conversions.metersToFeet(3)); // 9.8424

// find miles
Conversions.kilometersToMiles = (kilometers) => kilometers * 0.6214;

// console.log(Conversions.kilometersToMiles(100)); // 62.1399


// Surface or area:

// find acres
Conversions.hectacresToAcres = (hectacres) => hectacres * 2.4710;

// console.log(Conversions.hectacresToAcres(17)); // 42.0070


// Volume and Capacity:
let VolumeConversions = {};
// find liters
VolumeConversions.pintsToLiters = (pints) => pints * 0.4732;

// console.log(VolumeConversions.pintsToLiters(50)); // 23.66

VolumeConversions.quartsToLiters = (quarts) => quarts * 0.9463;

// console.log(VolumeConversions.quartsToLiters(50)); // 47.3150

VolumeConversions.gallonsToLiters = (gallons) => gallons * 3.7853;

// console.log(VolumeConversions.gallonsToLiters(50)); // 189.265

// find pints

VolumeConversions.litersToPints = (liters) => liters * 2.1134;

// console.log(VolumeConversions.litersToPints(50)); // 105.67

// find quarts

VolumeConversions.litersToQuarts = (liters) => liters * 1.0567;

// console.log(VolumeConversions.litersToQuarts(50)); // 52.835

// find gallons

VolumeConversions.litersToGallons = (liters) => liters * 0.2642;

// console.log(VolumeConversions.litersToGallons(50)); // 13.9999



// Weight and Mass:
let WeightConversions = {};
// find grams
WeightConversions.ouncesToGrams = (ounces) => ounces * 28.3495;

// console.log(WeightConversions.ouncesToGrams(50)); // 1417.475

// find kilograms

WeightConversions.poundsToKilograms = (pounds) => pounds * 0.4536;

// console.log(WeightConversions.poundsToKilograms(50)); // 22.68

// find metric tons

WeightConversions.shortTonsToMetricTons = (shortTons) => shortTons * 0.9072;

// console.log(WeightConversions.shortTonsToMetricTons(50)); // 45.36

// find pounds

WeightConversions.kilogramsToPounds = (kilograms) => kilograms * 2.2046;

// console.log(WeightConversions.kilogramsToPounds(50)); // 110.23

// find short tons

Conversions.metricTonsToShortTons = (metricTons) => metricTons * 1.1023;

// console.log(WeightConversions.metricTonsToShortTons(50)); // 55.115







// FORMULAS
let Formulas = {};
Formulas.average = function (numbers) {
    let total = 0;
    for (let number of numbers) {
        console.log(total += number)
    }
    return total / numbers.length
}

// console.log(Formulas.average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5

Formulas.findProbability = function (targetOutcomes, totalOutcomes) {
    return targetOutcomes / totalOutcomes
}
// console.log(Formulas.findProbability(10, 100)); // 0.1



Formulas.power = function (base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
// console.log(Formulas.power(4)); // 16
// console.log(Formulas.power(2, 6)); // 64
//

// quadratic (parabolic) equation  NEEDS MORE WORK!!  
// Formulas.quadratic = function (a, b, c) {
//     let x = Math.sqrt(power(b, 2) - (4 * a * c))
//     return (-b + x) / 2
// }
// console.log(Formulas.quadratic(1, 4, 4)); // -2

// distance between 2 coordinates in a plane
Formulas.getDistance = function (x1, y1, x2, y2) {
    let num = ((x1 - x2) ** 2) + ((y1 - y2) ** 2);
    return Math.sqrt(num);
}

// console.log(Formulas.getDistance(6, 6, 2, 3)); // 5  from points (x, y) || (6,6) and (2,3) 


// slope of coordinates in plane

Formulas.slope = function (x1, y1, x2, y2) {
    let m = (y2 - y1) / (x2 - x1);
    return m
}
// console.log(Formulas.slope(-2, -1, 4, 3)); // 2/3 || 0.6666

// slope intercept  NOT READY!

// function slopeIntercept(slope, x, y) {
//     result = (slope * x) + y;
//     return result
// }

// midpoint

Formulas.findMidpoint = function (x1, y1, x2, y2) {
    let x = (x1 + x2);
    let y = (y1 + y2);
    return `Midpoint: ( ${x / 2}, ${y / 2} )`
}
// console.log(Formulas.findMidpoint(-1, 2, 3, -6)); // (1, -2)

// Pythagoreon Theorem: 

Formulas.pythagoreon = function (a, b) {
    let c = (a ** 2) + (b ** 2);
    return `c = ${Math.sqrt(c)}`;
}
// console.log(Formulas.pythagoreon(3, 4)); //5

// area of triangle
let Area = {};

Area.areaTriangle = (base, height) => ((1 / 2) * base * height);
// console.log(Area.areaTriangle(2, 4)); // 4
// area of rectangle

Area.areaRectangleareaRectangle = function (length, width) {
    return `${length * width} square units`
}
// console.log(Area.areaRectangle(5, 3)); // 15

// area of circle
Area.areaCircle = function (radius) {
    return `${Math.PI * (radius ** 2)} square units`
}
// console.log(Area.areaCircle(4)); // 50.2654

// circumference of a circle
Formulas.circumference = function (radius) {
    return `${Math.PI * 2 * radius}`
}
// console.log(Formulas.circumference(7)); // 43.9822


// leap year

let Calculations = {};
Calculations.calcLeapYear = function (year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true
    } else {
        return false
    }
}
// console.log(Calculations.calcLeapYear(1994)); //false
// console.log(Calculations.calcLeapYear(2020)); //true
// console.log(Calculations.calcLeapYear(2024)); //true

// ARRAYS
let Arrays = {};
// reverse an array:
Arrays.reverseArray = function (nums) {
    let backwardsArray = [];
    for (let num of nums) {
        console.log(backwardsArray.unshift(num));
    }
    return backwardsArray
}

// console.log(Arrays.reverseArray([5, 6, 7, 8])); // [8, 7, 6, 5]


// sum of array of nums:
Arrays.sumOfAll = function ([...numbers]) {
    let total = 0;
    for (number of numbers) {
        total += number
    }
    return total
}

// GUESSING GAME

let primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;
    let guess;

    while(max >= min){
        guess = Math.floor((min + max)/2);
        if(array[guess] === target){ 
            console.log(`aquired target number ${array[guess]}`);
            break;
        }
        else if(array[guess] < target){
            console.log(`${array[guess]} is too low`);
            min = guess + 1
        }
        else if (array[guess] > target){
            console.log(`${array[guess]} is too high`);
            max = guess -1
        }
        else{ 
            return guess

         }
    }
    return 'boom'

};

console.log(binarySearch(primeNums, 73));
console.log(binarySearch(primeNums, 40));
// console.log('sum of numbers is: ');
// console.log(Arrays.sumOfAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55

/*  NOT READY!!
Calculations.imaginaryPower = function(expo) {
// night hearing, dogs understand where i point.

    if(expo % 4 == 0) {
        return '1'
    }
    else if(expo % 4 == 1) {
        return 'i'
    }
    else if(expo % 4 == 2) {
        return '-1'
    }
    else {
        return '-i'
    }
}
console.log(Calculations.imaginaryPower(4));  // '1'
*/

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
//     return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
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

