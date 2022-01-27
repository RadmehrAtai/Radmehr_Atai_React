var arr = [];

export function addItem(id, title, desc, status) {
    arr.push({
        id: id,
        title: title,
        desc: desc,
        status: status
    });
}

export function getDict() {
    return arr;
}
