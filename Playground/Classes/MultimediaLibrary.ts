import { MultimediaItem } from './MultimediaItem'
import { Book } from './Book'
import { StudioAlbum } from './StudioAlbum'
import { Movie } from './Movie'
import { TextPrinter } from '../Interfaces/TextPrinter'

/**
 * MultimediaLibrary
 */
class MultimediaLibrary {
    //Dependency injection example
    private textPrinter: TextPrinter;
    constructor(textPrinter: TextPrinter) {
        this.textPrinter = textPrinter;
        this.storedMultimedia = new Array<MultimediaItem>();
    }

    private storedMultimedia: Array<MultimediaItem>;

    addItem(item: MultimediaItem) {
        this.storedMultimedia.push(item);
    }

    printList() {
        let id = 1;
        this.storedMultimedia.forEach(element => {
            let itemType;
            if (element instanceof Book) {
                itemType = "Book";
            } else if (element instanceof Movie) {
                itemType = "Movie";
            } else if (element instanceof StudioAlbum) {
                itemType = "Studio album";
            }
            this.textPrinter.print(`${id} [${itemType}]\n${element.toString()}`);
            id++;
        });
    }
}

export { MultimediaLibrary }