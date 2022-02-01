import {createContext, useEffect, useState} from "react";
import {getCards, updateCard} from "../utils/Array";

export const CardContext = createContext();

const ToDoApp = ({children}) => {
    let [cardsList, setCardsList] = useState(getCards());

    const editHandler = (id, e) => {
        e.preventDefault();
        cardsList = updateCard(id);
//        setCardsList(cardsList);
//        localStorage.setItem("Cards", JSON.stringify(cardsList));
    };

    useEffect(() => {
        setCardsList(cardsList);
        localStorage.setItem("Cards", JSON.stringify(cardsList));
    }, [cardsList]);

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