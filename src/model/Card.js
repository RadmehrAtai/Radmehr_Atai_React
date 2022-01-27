export class Card {
    constructor(title, desc, status) {
        this._title = title;
        this._desc = desc;
        this._status = status;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
}