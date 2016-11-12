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
