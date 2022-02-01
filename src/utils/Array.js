import Status from "./Status";

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

export function updateCard(id) {
    let updatedItem = null;
    const newCardsList = arr.map((card) => {
        if (card.id === id) {
            if (card.status === Status.TODO) {
                updatedItem = {
                    ...card,
                    status: Status.IN_PROGRESS,
                };
            } else if (card.status === Status.IN_PROGRESS) {
                // ToDO
            } else if (card.status === Status.BLOCKED) {
                updatedItem = {
                    ...card,
                    status: Status.TODO,
                };
            } else if (card.status === Status.IN_QA) {
                updatedItem = {
                    ...card,
                    status: Status.DONE,
                };
            } else if (card.status === Status.DONE) {
                updatedItem = {
                    ...card,
                    status: Status.DEPLOYED,
                };
            }
            return updatedItem;
        }
        return card;
    });
    return newCardsList;
}
