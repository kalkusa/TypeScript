"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArraySorter = (function () {
    function ArraySorter() {
    }
    return ArraySorter;
}());
exports.ArraySorter = ArraySorter;
//n:4
var DefaultArraySorter = (function (_super) {
    __extends(DefaultArraySorter, _super);
    function DefaultArraySorter() {
        _super.apply(this, arguments);
    }
    DefaultArraySorter.prototype.sort = function (array, ascending) {
        var result = array.slice(0); //cloning array to keep original untouched
        if (ascending === true) {
            return result.sort(function (a, b) { return a > b ? 1 : -1; });
        }
        else {
            return result.sort(function (a, b) { return a < b ? 1 : -1; });
        }
    };
    return DefaultArraySorter;
}(ArraySorter));
exports.DefaultArraySorter = DefaultArraySorter;
//n:5
var InsertionArraySorter = (function (_super) {
    __extends(InsertionArraySorter, _super);
    function InsertionArraySorter() {
        _super.apply(this, arguments);
    }
    InsertionArraySorter.prototype.sort = function (array, ascending) {
        var result = array.slice(0); //array cloning to keep original untouched
        //sorting
        var len = result.length;
        for (var i = 0; i < len; i++) {
            var tmp = result[i];
            for (var j = i - 1; j >= 0; j--) {
                if (ascending === true) {
                    if (result[j] > tmp) {
                        result[j + 1] = result[j];
                    }
                    else {
                        break;
                    }
                }
                else {
                    if (result[j] < tmp) {
                        result[j + 1] = result[j];
                    }
                    else {
                        break;
                    }
                }
            }
            result[j + 1] = tmp;
        }
        return result;
    };
    return InsertionArraySorter;
}(ArraySorter));
exports.InsertionArraySorter = InsertionArraySorter;
//n:7
//# sourceMappingURL=sorting.js.map