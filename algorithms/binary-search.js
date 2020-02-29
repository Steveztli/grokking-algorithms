//Array need to be sorted
export const binarySearch = function(array, val) {
    let middle = Math.ceil(array.length / 2);
    let midvalue = array[middle];
    if(array.length === 1) {
        return false;
    }
    switch(val.toString().localeCompare(midvalue.toString())) {
        case 0: return true;
        case -1: return binarySearch(array.slice(0, middle), val);
        case 1: return binarySearch(array.slice(middle, array.length), val);
    }
}