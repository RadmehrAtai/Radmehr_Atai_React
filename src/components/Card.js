const Card = ({title, desc, status, handleEdit}) => {

    return (
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href="#" className="btn btn-primary">{status}</a>
                <button type="button" className="btn btn-dark" onClick={handleEdit}>Dark</button>
            </div>
        </div>
    )
}

export default Card