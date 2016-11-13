//--------------------------------------------------------------------
// Polymorphism
//--------------------------------------------------------------------

// interface ISpeakable {

// }

abstract class Animal {
    speak(): void { }
}

/**
 * Dog
 */
class Dog extends Animal {
    speak(): void {
        console.log("Bark");
    }
}

/**
 * Cat
 */
class Cat extends Animal {
    speak(): void {
        console.log("Meow");
    }
}

let animal: Animal;
animal = new Dog();
animal.speak();
animal = new Cat();
animal.speak();

//let speakableArray:ISpeakable[];
let animalArray = new Array<Animal>();
animalArray.push(new Dog());
animalArray.push(new Cat());
for (var i = 0; i < animalArray.length; i++) {
    animalArray[i].speak();
}

//--------------------------------------------------------------------
// Arrays
//--------------------------------------------------------------------

let sampleArray: number[] = [8, 29, 1, 39, 92, 10, 32, 26, 12];
let sampleArray2 = sampleArray.filter(function name(x: any) {
    if (x > 10) {
        return x;
    }
})

console.log(sampleArray);
console.log(sampleArray2);

//Won't compile
//sampleArray2.push("x");

var mrPresident = Object.create(Object.prototype,
    {
        name: {
            value: "Donald",
            writable: true,
            enumerable: true,
            configurable: true
        },
        surname: {
            value: "Trump",
            writable: true,
            enumerable: true,
            configurable: true
        },
        "speak": {
            value: function () {
                console.log("I'm a winner");
            },
            writable: true,
            enumerable: true,
            configurable: true
        }
    });

console.log(mrPresident);
mrPresident.speak();

var person = {
    name: "Max",
    surname: "Mad"
}

//Note - TS marks this error (however compile)
console.log(person.age);