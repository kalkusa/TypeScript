"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Multimediaitem_1 = require('./Multimediaitem');
/**
 * Movie
 */
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie(director, starring, title) {
        _super.call(this);
        this.director = director;
        this.starring = starring;
        this.title = title;
    }
    Movie.prototype.toString = function () {
        var result = "Director: " + this.director.surname + " " + this.director.name + " \nTitle: " + this.title + " \nStarring:\n";
        this.starring.forEach(function (element) {
            result = result.concat("\t" + element.surname + " " + element.name + "\n");
        });
        return result;
    };
    return Movie;
}(Multimediaitem_1.MultimediaItem));
exports.Movie = Movie;
//# sourceMappingURL=Movie.js.map