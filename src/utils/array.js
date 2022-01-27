import React from "react";

var arr;

function createArray() {
    arr = new Array(100);
}

function addToArray(card) {
    arr[0] = card;
    arr++;
}

function getAll() {
    var i, card;
    for (i = 0; i < arr.length; i = i + 1) {
        card = arr[i];
    }
}

export default createArray;
addToArray();
getAll();