import "../styles/Card.css"

const Card = ({title, desc, status, handleEdit}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a className="btn btn-primary">{status}</a>
                <button type="button" className="btn btn-dark" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}

export default Card