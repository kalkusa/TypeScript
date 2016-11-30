import { ArraySorter, DefaultArraySorter, InsertionArraySorter } from './sorting'

function arrayOfNumbersSorting() {
    console.log('Array of numbers sorting: ');
    let arrayOfNumbers = [34, 13, 15, 2, 94, 24]; //notice type inference, compiler knows it's number[]

    let defaultNumberArraySorter: ArraySorter<number> = new DefaultArraySorter<number>();
    let insertionNumberArraySorter: ArraySorter<number> = new InsertionArraySorter<number>();

    console.log(`Ascending sort using default algorithm: 	 ${defaultNumberArraySorter.sort(arrayOfNumbers, true).toString()}`);
    console.log(`Ascending sort using insertion sort algorithm: 	 ${insertionNumberArraySorter.sort(arrayOfNumbers, true)}`);

    console.log(`Descending sort using default algorithm: 	 ${defaultNumberArraySorter.sort(arrayOfNumbers, false)}`);
    console.log(`Descending sort using insertion sort algorithm: 	 ${insertionNumberArraySorter.sort(arrayOfNumbers, false)}`);

    console.log('')
}

arrayOfNumbersSorting();
//n:8

function arrayOfStringsSorting() {
    console.log('Array of strings sorting:');
    let arrayOfStrings = ['Marta', 'Alicja', 'Agnieszka']; //notice type inference, compiler knows it's string[]

    let defaultNumberArraySorter: ArraySorter<string> = new DefaultArraySorter<string>();
    let insertionNumberArraySorter: ArraySorter<string> = new InsertionArraySorter<string>();

    console.log(`Ascending sort using default algorithm: 	 ${defaultNumberArraySorter.sort(arrayOfStrings, true)}`);
    console.log(`Ascending sort using insertion sort algorithm: 	 ${insertionNumberArraySorter.sort(arrayOfStrings, true)}`);

    console.log(`Descending sort using default algorithm: 	 ${defaultNumberArraySorter.sort(arrayOfStrings, false)}`);
    console.log(`Descending sort using insertion sort algorithm: 	 ${insertionNumberArraySorter.sort(arrayOfStrings, false)}`);
}

arrayOfStringsSorting();
//n:9