var arr = new Array(100);

export function makeEmptyArray(length) {
    return [...new Array(length)];
}

export function addItem(title, desc, status) {
    arr.push({
        title: title,
        desc: desc,
        status: status
    });
}

export function getDict() {
    return arr;
}
