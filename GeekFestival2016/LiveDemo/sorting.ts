abstract class ArraySorter<T>{
    abstract sort(array: Array<T>, ascending: boolean): Array<T>;
}
//n:4

class DefaultArraySorter<T> extends ArraySorter<T>{
    sort(array: Array<T>, ascending: Boolean): Array<T> {
        let result = array.slice(0); //cloning array to keep original untouched
        if (ascending === true) {
            return result.sort((a, b) => { return a > b ? 1 : -1; });
        } else {
            return result.sort((a, b) => { return a < b ? 1 : -1; });
        }
    }
}
//n:5

class InsertionArraySorter<T> extends ArraySorter<T>{
    sort(array: Array<T>, ascending: Boolean): Array<T> {
        let result = array.slice(0); //array cloning to keep original untouched
        //sorting
        var len = result.length;
        for (var i = 0; i < len; i++) {
            var tmp = result[i];
            for (var j = i - 1; j >= 0; j--) {
                if (ascending === true) {
                    if (result[j] > tmp) {
                        result[j + 1] = result[j];
                    } else {
                        break;
                    }
                } else {
                    if (result[j] < tmp) {
                        result[j + 1] = result[j];
                    } else {
                        break;
                    }
                }
            }
            result[j + 1] = tmp;
        }

        return result;
    }
}
//n:7

export { ArraySorter, DefaultArraySorter, InsertionArraySorter }