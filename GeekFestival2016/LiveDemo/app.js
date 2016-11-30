"use strict";
var sorting_1 = require('./sorting');
function arrayOfNumbersSorting() {
    console.log('Array of numbers sorting: ');
    var arrayOfNumbers = [34, 13, 15, 2, 94, 24]; //notice type inference, compiler knows it's number[]
    var defaultNumberArraySorter = new sorting_1.DefaultArraySorter();
    var insertionNumberArraySorter = new sorting_1.InsertionArraySorter();
    console.log("Ascending sort using default algorithm: \t " + defaultNumberArraySorter.sort(arrayOfNumbers, true).toString());
    console.log("Ascending sort using insertion sort algorithm: \t " + insertionNumberArraySorter.sort(arrayOfNumbers, true));
    console.log("Descending sort using default algorithm: \t " + defaultNumberArraySorter.sort(arrayOfNumbers, false));
    console.log("Descending sort using insertion sort algorithm: \t " + insertionNumberArraySorter.sort(arrayOfNumbers, false));
    console.log('');
}
arrayOfNumbersSorting();
//n:8
function arrayOfStringsSorting() {
    console.log('Array of strings sorting:');
    var arrayOfStrings = ['Marta', 'Alicja', 'Agnieszka']; //notice type inference, compiler knows it's string[]
    var defaultNumberArraySorter = new sorting_1.DefaultArraySorter();
    var insertionNumberArraySorter = new sorting_1.InsertionArraySorter();
    console.log("Ascending sort using default algorithm: \t " + defaultNumberArraySorter.sort(arrayOfStrings, true));
    console.log("Ascending sort using insertion sort algorithm: \t " + insertionNumberArraySorter.sort(arrayOfStrings, true));
    console.log("Descending sort using default algorithm: \t " + defaultNumberArraySorter.sort(arrayOfStrings, false));
    console.log("Descending sort using insertion sort algorithm: \t " + insertionNumberArraySorter.sort(arrayOfStrings, false));
}
arrayOfStringsSorting();
//n:9 
//# sourceMappingURL=app.js.map