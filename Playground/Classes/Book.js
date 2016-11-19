"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultimediaItem_1 = require('./MultimediaItem');
/**
 * Book
 */
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(author, title) {
        _super.call(this);
        this.title = title;
        this.author = author;
    }
    Book.prototype.toString = function () {
        return "Author: " + this.author.surname + " " + this.author.name + " \nTitle: " + this.title;
    };
    return Book;
}(MultimediaItem_1.MultimediaItem));
exports.Book = Book;
//# sourceMappingURL=Book.js.map