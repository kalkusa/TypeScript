"use strict";
var Book_1 = require('./Classes/Book');
var StudioAlbum_1 = require('./Classes/StudioAlbum');
var Movie_1 = require('./Classes/Movie');
var Person_1 = require('./Classes/Person');
var MultimediaLibrary_1 = require('./Classes/MultimediaLibrary');
var ConsoleTextPrinter_1 = require('./Classes/ConsoleTextPrinter');
var textPrinter = new ConsoleTextPrinter_1.ConsoleTextPrinter();
var library = new MultimediaLibrary_1.MultimediaLibrary(textPrinter);
library.addItem(new Book_1.Book(new Person_1.Person("Mann", "Thomas"), "Der Zauberberg"));
var starring = new Array();
starring.push(new Person_1.Person("Weaver", "Sigourney"));
starring.push(new Person_1.Person("Cartwright", "Veronica"));
library.addItem(new Movie_1.Movie(new Person_1.Person("Scott", "Ridley"), starring, "Alien"));
library.addItem(new StudioAlbum_1.StudioAlbum("Iron Maiden", "Brave New World"));
library.printList();
//# sourceMappingURL=app.js.map