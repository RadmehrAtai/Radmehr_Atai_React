import Card from "./Card";
import "../styles/Cards.css";

const Cards = ({list, edit}) => {
    return (
        <div className="cards">
            {list.map((card) => {
                return (
                    <Card
                        id={card.id}
                        title={card.title}
                        desc={card.desc}
                        status={card.status}
                        handleEdit={edit}
                    />
                )
            })}
        </div>
    )
}

export default Cards