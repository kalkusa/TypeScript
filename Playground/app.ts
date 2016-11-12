interface ISpeakable {
    speak(): void;
}

/**
 * Dog
 */
class Dog implements ISpeakable {
    speak(): void {
        console.log("Bark");
    }
}

/**
 * Cat
 */
class Cat {
    speak(): void {
        console.log("Meow");
    }
}

let speakable:ISpeakable;
speakable = new Dog();
speakable.speak();
speakable = new Cat();
speakable.speak();