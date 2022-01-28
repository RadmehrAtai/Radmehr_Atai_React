import "../styles/Tasks.css";
import {getDict} from "../utils/Array";
import {useState} from "react";
import Status from "../utils/Status";
import Cards from "../components/Cards";

const Tasks = () => {
    const [cardsList, setCardsList] = useState(getDict());

    const edit = (id) => {
        // let updatedItem = null;
        // const newCardsList = cardsList.map((card) => {
        //     if (card.id === id) {
        //         if (card.status === Status.TODO) {
        //             updatedItem = {
        //                 ...card,
        //                 status: Status.IN_PROGRESS,
        //             };
        //         } else if (card.status === Status.IN_PROGRESS) {
        //             // ToDO
        //         } else if (card.status === Status.BLOCKED) {
        //             updatedItem = {
        //                 ...card,
        //                 status: Status.TODO,
        //             };
        //         } else if (card.status === Status.IN_QA) {
        //             updatedItem = {
        //                 ...card,
        //                 status: Status.DONE,
        //             };
        //         } else if (card.status === Status.DONE) {
        //             updatedItem = {
        //                 ...card,
        //                 status: Status.DEPLOYED,
        //             };
        //         }
        //         return updatedItem;
        //     }
        //     return card;
        // });
        // setCardsList(newCardsList);
    }

    return (
        <div className="tasks-container">
            {cardsList.length > 0 ? (
                <Cards list={cardsList} edit={edit}/>
            ) : (
                <div className="warning">
                    <h2>Empty!</h2>
                </div>
            )}
        </div>
    )
}

export default Tasks