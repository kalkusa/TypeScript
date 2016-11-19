"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MultimediaItem_1 = require('./MultimediaItem');
/**
 * StudioAlbum
 */
var StudioAlbum = (function (_super) {
    __extends(StudioAlbum, _super);
    function StudioAlbum(band, title) {
        _super.call(this);
        this.band = band;
        this.title = title;
    }
    StudioAlbum.prototype.toString = function () {
        return "Band: " + this.band + " \nTitle: " + this.title;
    };
    return StudioAlbum;
}(MultimediaItem_1.MultimediaItem));
exports.StudioAlbum = StudioAlbum;
//# sourceMappingURL=StudioAlbum.js.map