import { MultimediaItem } from './MultimediaItem'
import { Person } from './Person'

/**
 * Book 
 */
class Book extends MultimediaItem {
    private author: Person;

    constructor(author: Person, title: string) {
        super();
        this.title = title;
        this.author = author;
        
    }

    toString() {
        return `Author: ${this.author.surname} ${this.author.name} \nTitle: ${this.title}`;
    }
}

export { Book }