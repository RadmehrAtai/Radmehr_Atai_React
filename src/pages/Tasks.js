import Card from '../components/Card'
import "../styles/Tasks.css";

const Tasks = () => {
    const cards = [
        {
            key: 2,
            title: "name",
            desc: "S",
            status: "ToDo"
        },
        {
            key: 3,
            title: "name",
            desc: "S",
            status: "ToDo"
        }
    ];

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
                                key={card.key}
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