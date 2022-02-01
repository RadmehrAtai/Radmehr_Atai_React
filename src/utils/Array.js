var arr = [];
let id = 1;

export function addCard(title, desc, status) {
    arr.push({
        id: id,
        title: title,
        desc: desc,
        status: status
    });
    id++;
    localStorage.setItem("Cards", JSON.stringify(arr));
}

export function getCards() {
    return JSON.parse(localStorage.getItem("Cards"));
}
