import {createContext, useEffect, useState} from "react";
import {getCards, updateCard} from "../utils/Array";

export const CardContext = createContext();

const ToDoApp = ({children}) => {
    const [cardsList, setCardsList] = useState([]);

    const fetchCards = async () => {
        setCardsList(getCards());
    }

    const editHandler = (id) => {
        setCardsList(updateCard(id));
        localStorage.setItem("Cards", JSON.stringify(cardsList));
    };

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