var arr = [];
let id = 1;

export function addItem(title, desc, status) {
    arr.push({
        id: id,
        title: title,
        desc: desc,
        status: status
    });
    id++;
}

export function getDict() {
    return arr;
}
