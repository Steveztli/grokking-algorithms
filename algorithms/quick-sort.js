export const quickSort = (array) => {
    if(array.length <= 1) {
        return array;
    }
    
    let pivot = array[0];

    let big = quickSort(array.filter(val => val > pivot));
    let small = quickSort(array.filter(val => val < pivot));
    
    return small.concat(pivot,big);
}