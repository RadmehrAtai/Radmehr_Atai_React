import "../styles/Tasks.css";
import {useContext} from "react";
import Cards from "../components/Cards";
import CardContext from "../context/CardContext";

const Tasks = () => {
    const {cardsList, editHandler} = useContext(CardContext);

    return (
        <div className="tasks-container">
            {cardsList.length > 0 ? (
                <Cards list={cardsList} edit={editHandler()}/>
            ) : (
                <div className="warning">
                    <h2>Empty!</h2>
                </div>
            )}
        </div>
    )
}

export default Tasks