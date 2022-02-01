import {createContext, useEffect, useState} from "react";
import {getCards, updateCard} from "../utils/Array";
import Status from "../utils/Status";

export const CardContext = createContext();

const ToDoApp = ({children}) => {
    const [cardsList, setCardsList] = useState(getCards);

    const editHandler = (id, e) => {
        e.preventDefault();
        let updatedItem = null;
        const newCardsList = cardsList.map((card) => {
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
        setCardsList(newCardsList)
    };

    useEffect(() => {
        localStorage.setItem("Cards", JSON.stringify(cardsList));
    }, [editHandler]);

    return (
        <CardContext.Provider
            value={{
                cardsList,
                editHandler
            }}
        >
            {children}
        </CardContext.Provider>
    );
};

export default ToDoApp;