import Card from '../components/Card'
import "../styles/Tasks.css";
import {getDict} from "../utils/array";

const Tasks = () => {
    const cards = getDict();

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
                                title={card.title}
                                desc={card.desc}
                                status={card.status}
                                handleEdit={edit}
                            />
                        )
                    })}
                </div>
            ) : (
                <div className="warning">
                    <h2>Cards Not Found!</h2>
                </div>
            )}
        </div>
    )
}

export default Tasks