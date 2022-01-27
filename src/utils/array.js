var arr = new Array(100);

export function makeEmptyArray() {
    return arr;
}

export function addItem(item) {
    var i = 0;
    arr[i] = item;
    i++;
}

export function getArray() {
    return arr;
}