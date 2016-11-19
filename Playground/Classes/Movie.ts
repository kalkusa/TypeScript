import { MultimediaItem } from './Multimediaitem'
import { Person } from './Person'

/**
 * Movie
 */
class Movie extends MultimediaItem {
    constructor(protected director: Person, protected starring: Array<Person>, protected title: string) {
        super();
    }

    toString() {
        let result = `Director: ${this.director.surname} ${this.director.name} \nTitle: ${this.title} \nStarring:\n`;
        this.starring.forEach(element => {
            result =result.concat(`\t${element.surname} ${element.name}\n`)
        });
        return result;
    }
}

export { Movie }