//--------------------------------------------------------------------
// Polymorphism
//--------------------------------------------------------------------
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// interface ISpeakable {
// }
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () { };
    return Animal;
}());
/**
 * Dog
 */
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.speak = function () {
        console.log("Bark");
    };
    return Dog;
}(Animal));
/**
 * Cat
 */
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    Cat.prototype.speak = function () {
        console.log("Meow");
    };
    return Cat;
}(Animal));
var animal;
animal = new Dog();
animal.speak();
animal = new Cat();
animal.speak();
//let speakableArray:ISpeakable[];
var animalArray = new Array();
animalArray.push(new Dog());
animalArray.push(new Cat());
for (var i = 0; i < animalArray.length; i++) {
    animalArray[i].speak();
}
//--------------------------------------------------------------------
// Arrays
//--------------------------------------------------------------------
var sampleArray = [8, 29, 1, 39, 92, 10, 32, 26, 12];
var sampleArray2 = sampleArray.filter(function name(x) {
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
var person = {
    name: "Max",
    surname: "Mad"
};
//Note - TS marks this error (however compile)
console.log(person.age);
//Example of ugly generated 
var Animal2 = (function () {
    function Animal2(placeOfbirth) {
        this.placeOfbirth = placeOfbirth;
    }
    return Animal2;
}());
var Dog2 = (function (_super) {
    __extends(Dog2, _super);
    function Dog2(placeOfBirth, color) {
        _super.call(this, placeOfBirth);
        this.color = color;
    }
    return Dog2;
}(Animal2));
//# sourceMappingURL=app.js.map