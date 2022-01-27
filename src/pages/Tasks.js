import Card from '../components/Card'
import {useState} from "react";
import {getArray} from "../utils/array";
import "../styles/Tasks.css";

const Tasks = () => {
    const cards = useState(getArray);

    const edit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='tasks-container'>
            {cards?.length > 0 ? (
                <div className='cards'>
                    {cards?.map((card) => {
                        return (
                            <Card
                                title={card._title}
                                desc={card._desc}
                                status={card._status}
                                handleEdit={edit}
                            />
                        )
                    })}
                </div>
            ) : (
                <div className="warning">
                    <h2>Cards Not Found!</h2>
                </div>
            )}}
        </div>
    )
}


export default Tasks