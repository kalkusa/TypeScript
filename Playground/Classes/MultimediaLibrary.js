"use strict";
var Book_1 = require('./Book');
var StudioAlbum_1 = require('./StudioAlbum');
var Movie_1 = require('./Movie');
/**
 * MultimediaLibrary
 */
var MultimediaLibrary = (function () {
    function MultimediaLibrary(textPrinter) {
        this.textPrinter = textPrinter;
        this.storedMultimedia = new Array();
    }
    MultimediaLibrary.prototype.addItem = function (item) {
        this.storedMultimedia.push(item);
    };
    MultimediaLibrary.prototype.printList = function () {
        var _this = this;
        var id = 1;
        this.storedMultimedia.forEach(function (element) {
            var itemType;
            if (element instanceof Book_1.Book) {
                itemType = "Book";
            }
            else if (element instanceof Movie_1.Movie) {
                itemType = "Movie";
            }
            else if (element instanceof StudioAlbum_1.StudioAlbum) {
                itemType = "Studio album";
            }
            _this.textPrinter.print(id + " [" + itemType + "]\n" + element.toString());
            id++;
        });
    };
    return MultimediaLibrary;
}());
exports.MultimediaLibrary = MultimediaLibrary;
//# sourceMappingURL=MultimediaLibrary.js.map