//--------------------------------------------------------------------
// Polymorphism
//--------------------------------------------------------------------
/**
 * Dog
 */
class Dog {
    speak() {
        console.log("Bark");
    }
}
/**
 * Cat
 */
class Cat {
    speak() {
        console.log("Meow");
    }
}
let speakable;
speakable = new Dog();
speakable.speak();
speakable = new Cat();
speakable.speak();
let speakableArray;
speakableArray.push(new Dog());
speakableArray.push(new Cat());
for (var i = 0; i < speakableArray.length; i++) {
    speakableArray[i].speak();
}
//--------------------------------------------------------------------
// Arrays
//--------------------------------------------------------------------
let sampleArray = [8, 29, 1, 39, 92, 10, 32, 26, 12];
let sampleArray2 = sampleArray.filter(function name(x) {
    if (x > 10) {
        return x;
    }
});
console.log(sampleArray);
console.log(sampleArray2);
//Won't compile
//sampleArray2.push("x");
var mrPresident = Object.create(Object.prototype, {
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
