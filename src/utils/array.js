export function makeEmptyArray(length) {
    return [...new Array(length)];
}

export function addItem(arr, title, desc, status) {
    arr.push({
        title: title,
        desc: desc,
        status: status
    });
}

export function getDict() {
    return
}
