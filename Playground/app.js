//--------------------------------------------------------------------
// Polymorphism
//--------------------------------------------------------------------
/**
 * Dog
 */
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.speak = function () {
        console.log("Bark");
    };
    return Dog;
}());
/**
 * Cat
 */
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.speak = function () {
        console.log("Meow");
    };
    return Cat;
}());
var speakable;
speakable = new Dog();
speakable.speak();
speakable = new Cat();
speakable.speak();
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
//# sourceMappingURL=app.js.map