import { MultimediaItem } from './Classes/MultimediaItem'
import { Book } from './Classes/Book'
import { StudioAlbum } from './Classes/StudioAlbum'
import { Movie } from './Classes/Movie'
import { Person } from './Classes/Person'
import { MultimediaLibrary } from './Classes/MultimediaLibrary'
import { TextPrinter } from './Interfaces/TextPrinter'
import { ConsoleTextPrinter } from './Classes/ConsoleTextPrinter'

let textPrinter = new ConsoleTextPrinter();
let library = new MultimediaLibrary(textPrinter);

library.addItem(new Book(new Person("Mann", "Thomas"), "Der Zauberberg"));
let starring = new Array<Person>();
starring.push(new Person("Weaver", "Sigourney"));
starring.push(new Person("Cartwright", "Veronica"));
library.addItem(new Movie(new Person("Scott", "Ridley"), starring, "Alien"));
library.addItem(new StudioAlbum("Iron Maiden", "Brave New World"));
library.printList();