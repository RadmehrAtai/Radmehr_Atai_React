import "../styles/Tasks.css";
import {useContext} from "react";
import {CardContext} from "../context/CardContext";
import Card from "../components/Card";

const Tasks = () => {
    const {cardsList, editHandler} = useContext(CardContext);

    return (
        <div className="tasks-container">
            {cardsList.length > 0 ? (
                <div className="cards">
                    {cardsList.map((card) => {
                        return (
                            <Card
                                id={card.id}
                                title={card.title}
                                desc={card.desc}
                                status={card.status}
                                handleEdit={(e) => editHandler(card.id, e)}
                            />
                        )
                    })}
                </div>
            ) : (
                <div className="warning">
                    <h2>Empty!</h2>
                </div>
            )}
        </div>
    )
}

export default Tasks